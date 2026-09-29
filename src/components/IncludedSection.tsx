import React from 'react';
import { INCLUDED_FEATURES } from '../data/montessoriData';
import { CheckIcon, TrayLogo } from './BrandIcons';

interface IncludedSectionProps {
  onCheckout: () => void;
}

export function IncludedSection({ onCheckout }: IncludedSectionProps) {
  return (
    <section id="included" className="py-16 md:py-24 border-b border-[#D9CBB4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6A4A]">
            Complete System Breakdown
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4A3624] mt-2">
            Everything Included in the Playbook
          </h2>
          <p className="text-sm sm:text-base text-[#6B5D4C] mt-2">
            A comprehensive, zero-fluff parent guide designed for calm implementation from day one.
          </p>
        </div>

        {/* Two-Column Grid: Checklist on Left, Pricing Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Checklist on Left */}
          <div className="lg:col-span-7 bg-[#FBF8F1] border border-[#D9CBB4] rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#4A3624] pb-2 border-b border-[#D9CBB4]">
              Inside Your Digital Package:
            </h3>

            <div className="space-y-4 pt-1">
              {INCLUDED_FEATURES.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <CheckIcon className="w-5 h-5" color="#7C9473" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#4A3624]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6B5D4C] mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Card on Right */}
          <div className="lg:col-span-5 bg-[#4A3624] text-[#F3EDE1] rounded-2xl p-6 sm:p-8 border-2 border-[#8B6A4A] space-y-6 sticky top-24">
            
            {/* Header Lockup */}
            <div className="flex items-center justify-between border-b border-[#8B6A4A]/50 pb-4">
              <div className="flex items-center gap-2">
                <TrayLogo className="w-7 h-5" strokeColor="#F3EDE1" />
                <span className="text-xs uppercase tracking-wider text-[#D9CBB4] font-medium">Digital Edition</span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#C1785A] text-white font-medium">
                Complete System
              </span>
            </div>

            {/* Price Display */}
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl font-medium text-[#F3EDE1]">$47</span>
                <span className="text-xs text-[#D9CBB4]">USD · One-Time Payment</span>
              </div>
              <p className="text-xs text-[#D9CBB4] mt-1.5">
                No monthly subscriptions. Lifetime household digital license.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="space-y-2 text-xs text-[#F3EDE1]/90 pt-1">
              <div className="flex items-center gap-2">
                <span className="text-[#C1785A]">✓</span>
                <span>Immediate PDF Download to Phone & Tablet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C1785A]">✓</span>
                <span>Includes Free 5-Day No-Prep Bonus ($19 Value)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C1785A]">✓</span>
                <span>30-Day 100% Calm & Confident Guarantee</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onCheckout}
              className="w-full py-4 text-base font-bold text-white bg-[#C1785A] hover:bg-[#8A4A2E] rounded-xl transition-all shadow-none flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get the Playbook — $47</span>
              <span>→</span>
            </button>

            {/* 30-Day Guarantee Box */}
            <div className="p-3.5 rounded-xl bg-[#3A2E22] border border-[#8B6A4A]/50 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C1785A] mb-1">
                <span>🛡️</span>
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <p className="text-[11px] text-[#D9CBB4] leading-relaxed">
                If following the 15-minute daily rhythms doesn't bring greater calm, independent focus, and joy to your mornings, send an email for a full 100% courteous refund. No questions asked.
              </p>
            </div>

            <div className="text-[11px] text-center text-[#D9CBB4]/90 flex items-center justify-center gap-2">
              <span>🛡️ Encrypted 256-Bit SSL Checkout via Whop</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
