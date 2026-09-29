import React, { useState, useEffect } from 'react';
import {
  getStoredLeads,
  getStoredMessages,
  exportLeadsToCSV,
  exportMessagesToCSV,
  LeadCapture,
  ContactMessage
} from '../data/emailStorage';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminDashboardModal({ isOpen, onClose }: AdminDashboardModalProps) {
  const [tab, setTab] = useState<'leads' | 'messages'>('leads');
  const [leads, setLeads] = useState<LeadCapture[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    if (isOpen) {
      setLeads(getStoredLeads());
      setMessages(getStoredMessages());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-[#FBF8F1] border-2 border-[#4A3624] rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#D9CBB4] pb-4 mb-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A4A2E] bg-[#F6E7DE] px-2 py-0.5 rounded border border-[#C1785A]/30">
              Admin & Creator View
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#4A3624] mt-1">
              Captured Leads & Inquiries Database
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#6B5D4C] hover:text-[#4A3624] hover:bg-[#E9EEE3] font-bold text-lg cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Buttons & Export Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setTab('leads')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                tab === 'leads'
                  ? 'bg-[#4A3624] text-[#F3EDE1]'
                  : 'bg-[#F3EDE1] text-[#6B5D4C] hover:bg-[#E9EEE3]'
              }`}
            >
              Email Leads ({leads.length})
            </button>
            <button
              onClick={() => setTab('messages')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                tab === 'messages'
                  ? 'bg-[#4A3624] text-[#F3EDE1]'
                  : 'bg-[#F3EDE1] text-[#6B5D4C] hover:bg-[#E9EEE3]'
              }`}
            >
              Contact Messages ({messages.length})
            </button>
          </div>

          <div>
            {tab === 'leads' ? (
              <button
                onClick={exportLeadsToCSV}
                className="px-3 py-1.5 bg-[#7C9473] hover:bg-[#455C3C] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <span>📥 Export Leads CSV</span>
              </button>
            ) : (
              <button
                onClick={exportMessagesToCSV}
                className="px-3 py-1.5 bg-[#7C9473] hover:bg-[#455C3C] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <span>📥 Export Messages CSV</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Table */}
        <div className="flex-1 overflow-y-auto border border-[#D9CBB4] rounded-xl bg-white p-2">
          {tab === 'leads' ? (
            leads.length === 0 ? (
              <div className="text-center py-12 text-xs text-[#6B5D4C]">
                No email leads captured yet. When visitors fill in the 5-day plan form, they will appear here instantly.
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#D9CBB4] bg-[#F3EDE1] text-[#4A3624]">
                    <th className="p-2.5 font-semibold">Email</th>
                    <th className="p-2.5 font-semibold">Source</th>
                    <th className="p-2.5 font-semibold">Date Captured</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9CBB4]/50">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#FBF8F1]">
                      <td className="p-2.5 font-medium text-[#3A2E22]">{lead.email}</td>
                      <td className="p-2.5 text-[#6B5D4C]">{lead.source}</td>
                      <td className="p-2.5 text-[#8B6A4A]">
                        {new Date(lead.createdAt).toLocaleDateString()} {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          ) : (
            messages.length === 0 ? (
              <div className="text-center py-12 text-xs text-[#6B5D4C]">
                No contact inquiries received yet. When visitors submit the Contact Us form, they will appear here.
              </div>
            ) : (
              <div className="space-y-3 p-2">
                {messages.map((m) => (
                  <div key={m.id} className="p-3.5 rounded-lg border border-[#D9CBB4] bg-[#FBF8F1] space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#4A3624]">{m.name} ({m.email})</span>
                      <span className="text-[#8B6A4A]">
                        {new Date(m.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#8A4A2E]">
                      Topic: <strong>{m.subject}</strong> {m.childAge && `· Child Age: ${m.childAge}`}
                    </div>
                    <p className="text-xs text-[#3A2E22] pt-1 whitespace-pre-wrap leading-relaxed">
                      {m.message}
                    </p>
                    <div className="pt-1">
                      <a
                        href={`mailto:${m.email}?subject=${encodeURIComponent(`Re: ${m.subject} - The 15-Minute Montessori System`)}`}
                        className="text-[11px] font-semibold text-[#7C9473] hover:underline"
                      >
                        Reply to {m.email} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* Footer info */}
        <div className="pt-3 text-[11px] text-[#6B5D4C] flex items-center justify-between">
          <span>Target Notification Inbox: marwan.gohry@gmail.com</span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#4A3624] hover:underline cursor-pointer"
          >
            Close Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}
