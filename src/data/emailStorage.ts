import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface LeadCapture {
  id?: string;
  email: string;
  source: string;
  createdAt: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  childAge?: string;
  subject: string;
  message: string;
  createdAt: string;
}

const LEADS_STORAGE_KEY = 'montessori_system_leads_v1';
const MESSAGES_STORAGE_KEY = 'montessori_system_messages_v1';

/**
 * Saves lead email to external cloud Firestore database,
 * with local browser caching as an offline resilient fallback.
 */
export async function saveLeadEmail(
  email: string,
  source: string = '5-day-no-prep-plan'
): Promise<{ success: boolean; isNew: boolean }> {
  const normalized = email.trim().toLowerCase();
  const createdAt = new Date().toISOString();

  // 1. Sync to Cloud Firestore
  try {
    const leadsRef = collection(db, 'leads');
    await addDoc(leadsRef, {
      email: normalized,
      source,
      createdAt
    });
  } catch (cloudErr) {
    console.warn('Firestore cloud write fallback:', cloudErr);
  }

  // 2. Local resilient cache
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    const leads: LeadCapture[] = raw ? JSON.parse(raw) : [];
    const existing = leads.find((l) => l.email.toLowerCase() === normalized);

    if (existing) {
      return { success: true, isNew: false };
    }

    leads.unshift({
      id: 'lead_' + Date.now(),
      email: normalized,
      source,
      createdAt
    });
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    return { success: true, isNew: true };
  } catch {
    return { success: true, isNew: true };
  }
}

/**
 * Saves contact inquiry to external cloud Firestore database,
 * with local browser caching as an offline resilient fallback.
 */
export async function saveContactMessage(msg: {
  name: string;
  email: string;
  childAge?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean }> {
  const payload = {
    name: msg.name.trim(),
    email: msg.email.trim().toLowerCase(),
    childAge: msg.childAge?.trim() || '',
    subject: msg.subject.trim() || 'General Question',
    message: msg.message.trim(),
    createdAt: new Date().toISOString()
  };

  // 1. Sync to Cloud Firestore
  try {
    const messagesRef = collection(db, 'contact_messages');
    await addDoc(messagesRef, payload);
  } catch (cloudErr) {
    console.warn('Firestore cloud write fallback:', cloudErr);
  }

  // 2. Local resilient cache
  try {
    const raw = localStorage.getItem(MESSAGES_STORAGE_KEY);
    const messages: ContactMessage[] = raw ? JSON.parse(raw) : [];
    messages.unshift({ id: 'msg_' + Date.now(), ...payload });
    localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(messages));
    return { success: true };
  } catch {
    return { success: true };
  }
}

export function getStoredLeads(): LeadCapture[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getStoredMessages(): ContactMessage[] {
  try {
    const raw = localStorage.getItem(MESSAGES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function exportLeadsToCSV() {
  const leads = getStoredLeads();
  if (leads.length === 0) return;

  const csvRows = [
    ['Email', 'Source', 'Date Captured (UTC)'].join(','),
    ...leads.map((l) => `"${l.email}","${l.source}","${l.createdAt}"`)
  ];

  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `montessori-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportMessagesToCSV() {
  const messages = getStoredMessages();
  if (messages.length === 0) return;

  const csvRows = [
    ['Name', 'Email', 'Child Age', 'Subject', 'Message', 'Date (UTC)'].join(','),
    ...messages.map((m) =>
      `"${m.name}","${m.email}","${m.childAge || ''}","${m.subject.replace(/"/g, '""')}","${m.message.replace(/"/g, '""')}","${m.createdAt}"`
    )
  ];

  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `montessori-messages-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
