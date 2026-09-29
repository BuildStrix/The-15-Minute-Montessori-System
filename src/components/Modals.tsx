import React, { useState } from 'react';
import { TrayLogo, CheckIcon } from './BrandIcons';
import { saveLeadEmail } from '../data/emailStorage';

export const WHOP_PRODUCT_URL = 'https://whop.com/checkout/plan_76QunGgwZkbpD';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (!isOpen) return null;

  const handleProceedToWhop = () => {
    setIsRedirecting(true);
    // Brief reassuring micro-delay so they see confirmation before browser navigates
    setTimeout(() => {
      window.location.href = WHOP_PRODUCT_URL;
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FBF8F1] border-2 border-[#8B6A4A] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[95vh] overflow-y-auto shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6B5D4C] hover:text-[#4A3624] text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#E9EEE3] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* Security / Whop Trust Banner */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-[#E9EEE3] flex items-center justify-center text-xs">
            🛡️
          </div>
          <span className="text-xs uppercase tracking-wider font-semibold text-[#455C3C]">
            Official Secure Checkout via Whop
          </span>
        </div>

        {/* Product Heading */}
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#4A3624] leading-tight">
          Ready to begin The 15-Minute Montessori System?
        </h3>

        {/* Reassuring Summary Card */}
        <div className="my-5 p-4 rounded-xl bg-[#F3EDE1] border border-[#D9CBB4] space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-[#D9CBB4]/60 pb-3">
            <div>
              <span className="text-sm font-semibold text-[#4A3624] block">
                The 6-Week Montessori Playbook for Toddlers
              </span>
              <span className="text-xs text-[#6B5D4C]">
                Ages 18m – 4y · 30 Activities · Verbatim Scripts · PDF Edition
              </span>
            </div>
            <div className="text-right shrink-0">
              <span className="font-serif text-2xl font-bold text-[#4A3624]">$47</span>
              <span className="block text-[10px] text-[#8B6A4A] font-medium">One-time payment</span>
            </div>
          </div>

          {/* Safety Bullet Points */}
          <div className="space-y-2 text-xs text-[#3A2E22]">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 shrink-0" color="#7C9473" />
              <span><strong>Official Whop Payment Gateway:</strong> 256-bit encrypted checkout with Apple Pay, Google Pay, and all major credit cards.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 shrink-0" color="#7C9473" />
              <span><strong>Instant Digital Access:</strong> Whop unlocks your playbook, printable specs, and bonuses immediately after checkout.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 shrink-0" color="#7C9473" />
              <span><strong>100% Risk-Free Guarantee:</strong> Covered by our 30-day calm & confident money-back policy.</span>
            </div>
          </div>
        </div>

        {/* Reassurance Message Notice */}
        <div className="p-3.5 bg-[#E9EEE3] rounded-xl border border-[#7C9473]/50 text-xs text-[#455C3C] leading-relaxed mb-5">
          <div className="font-semibold flex items-center gap-1.5 mb-1">
            <span>🔒</span>
            <span>You're being safely connected to Whop</span>
          </div>
          You will be redirected to our verified product checkout page on <strong>whop.com</strong> to finalize your order securely. We never store or see your payment details.
        </div>

        {/* Proceed Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleProceedToWhop}
            disabled={isRedirecting}
            className="w-full py-4 text-base font-bold text-white bg-[#C1785A] hover:bg-[#8A4A2E] disabled:opacity-75 rounded-xl transition-all shadow-none flex items-center justify-center gap-2 cursor-pointer"
          >
            {isRedirecting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Connecting to Secure Checkout...</span>
              </>
            ) : (
              <>
                <span>Continue to Whop Checkout — $47</span>
                <span>→</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full text-center text-xs font-medium text-[#6B5D4C] hover:text-[#4A3624] py-1 cursor-pointer"
          >
            Cancel and return to page
          </button>
        </div>

        {/* Bottom Trust Row */}
        <div className="mt-4 pt-3 border-t border-[#D9CBB4]/70 flex items-center justify-center gap-4 text-[11px] text-[#6B5D4C]">
          <span>Verified Merchant: The Montessori Method</span>
          <span>·</span>
          <span>SSL Secured</span>
          <span>·</span>
          <span>Instant Download</span>
        </div>

      </div>
    </div>
  );
}

interface FreePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FreePlanModal({ isOpen, onClose }: FreePlanModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSaving(true);
    
    // Save to persistent database
    saveLeadEmail(email.trim(), '5-Day No-Prep Play Plan Modal');

    setTimeout(() => {
      setIsSaving(false);
      setSubmitted(true);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-[#FBF8F1] border-2 border-[#7C9473] rounded-2xl max-w-md w-full p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6B5D4C] hover:text-[#4A3624] text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#E9EEE3] cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <div className="space-y-4">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E9EEE3] text-[#455C3C] border border-[#7C9473]/30">
              Free 5-Day Starter Kit
            </span>

            <h3 className="font-serif text-2xl font-medium text-[#4A3624]">
              Get the 5-Day No-Prep Play Plan
            </h3>

            <p className="text-xs sm:text-sm text-[#6B5D4C]">
              Five days of zero-cost, screen-free toddler activities using items already in your kitchen. Where should we send your free PDF?
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBB4] bg-white text-sm text-[#3A2E22] focus:outline-hidden focus:border-[#7C9473]"
              />

              <button
                type="submit"
                disabled={isSaving}
                className="w-full py-3 text-sm font-semibold text-white bg-[#7C9473] hover:bg-[#455C3C] disabled:opacity-75 rounded-xl transition-colors cursor-pointer"
              >
                {isSaving ? 'Saving & Preparing...' : 'Send Me the Free 5-Day Plan'}
              </button>
            </form>

            <p className="text-[11px] text-center text-[#6B5D4C]">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        ) : (
          <div className="text-center py-4 space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E9EEE3] flex items-center justify-center text-xl">
              📬
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#4A3624]">
              Thank You!
            </h3>
            <p className="text-sm text-[#6B5D4C]">
              We will send you the email shortly with your free 5-Day No-Prep Play Plan.
            </p>

            <div className="pt-2">
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-2.5 text-xs font-semibold text-[#455C3C] bg-[#E9EEE3] rounded-lg hover:bg-[#D9CBB4] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
