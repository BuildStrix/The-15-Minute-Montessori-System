import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/montessoriData';
import { TrayLogo } from './BrandIcons';

export function FaqSection({ onGetPlaybook }: { onGetPlaybook: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-20 bg-[#FBF8F1] border-b border-[#D9CBB4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6A4A]">
            Clear Answers for Parents
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#4A3624] mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#F3EDE1] border border-[#D9CBB4] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#4A3624]"
                >
                  <span>{item.q}</span>
                  <span className="text-xl font-mono text-[#8B6A4A] shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#6B5D4C] leading-relaxed border-t border-[#D9CBB4]/50 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Conversion Banner */}
        <div className="mt-12 text-center p-8 bg-[#E9EEE3] rounded-2xl border border-[#7C9473]/40 space-y-4">
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-2xl bg-[#422e1e] flex items-center justify-center relative p-2 shadow-none border border-[#8B6A4A]/50">
              <div className="absolute inset-1.5 rounded-full border-[1.5px] border-[#7C9473] pointer-events-none" />
              <TrayLogo className="w-8 h-6 relative z-10" strokeColor="#F3EDE1" />
            </div>
          </div>
          <h3 className="font-serif text-2xl font-medium text-[#4A3624]">
            Ready to bring calm, 15-minute rhythm to your home?
          </h3>
          <p className="text-sm text-[#455C3C] max-w-lg mx-auto">
            Join thousands of parents trading chaotic toy clutter for purposeful, joyful Montessori independence.
          </p>
          <div className="pt-2">
            <button
              onClick={onGetPlaybook}
              className="px-8 py-3.5 text-base font-semibold text-white bg-[#C1785A] hover:bg-[#8A4A2E] rounded-xl transition-all shadow-none"
            >
              Get Instant Access to the Playbook — $47
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
