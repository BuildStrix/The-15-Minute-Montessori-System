import React from 'react';
import { CheckIcon } from './BrandIcons';

interface FreePreviewProps {
  onOpenFreePlan: () => void;
}

export function FreePreviewSection({ onOpenFreePlan }: FreePreviewProps) {
  return (
    <section id="free-preview" className="py-16 md:py-20 bg-[#E9EEE3] border-b border-[#D9CBB4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-[#FBF8F1] border-2 border-[#7C9473]/50 rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8">
          
          {/* Left Visual Card: Mini booklet cover */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="bg-[#7C9473] text-white rounded-xl p-6 border-2 border-[#455C3C] text-center flex flex-col justify-between aspect-[3/4] relative">
              <div className="text-[10px] uppercase tracking-widest text-[#E9EEE3] font-bold border-b border-white/20 pb-2">
                Free Starter Guide
              </div>

              <div className="my-auto py-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center text-xl mb-3">
                  🌱
                </div>
                <div className="text-xs uppercase tracking-wider text-[#E9EEE3] font-medium">
                  The Official 5-Day
                </div>
                <h3 className="font-serif text-2xl font-medium leading-tight text-white mt-1">
                  No-Prep<br />Play Plan
                </h3>
                <p className="text-[11px] text-[#E9EEE3] mt-2">
                  5 Days of Screen-Free Calm
                </p>
              </div>

              <div className="text-[10px] text-white/90 pt-2 border-t border-white/20">
                100% Free · Instant PDF
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EEE3] text-[#455C3C] border border-[#7C9473]/40 text-xs font-semibold uppercase tracking-wider">
              <span>Zero Cost · Zero Prep</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#4A3624]">
              Want to test the waters first? Get the 5-Day No-Prep Play Plan for free.
            </h3>

            <p className="text-sm sm:text-base text-[#6B5D4C] leading-relaxed">
              Experience the peace of a structured 15-minute rhythm before investing in the full 6-week curriculum. Five instant activities using only a bowl, a kitchen sponge, and common household items.
            </p>

            {/* What's in the 5-day plan */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3A2E22]">
                <CheckIcon className="w-4 h-4 shrink-0" color="#7C9473" />
                <span><strong>Day 1:</strong> The Kitchen Sponge Squeeze (Hand strength & spill recovery)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3A2E22]">
                <CheckIcon className="w-4 h-4 shrink-0" color="#7C9473" />
                <span><strong>Day 2:</strong> Color Mystery Tray (Visual categorization)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3A2E22]">
                <CheckIcon className="w-4 h-4 shrink-0" color="#7C9473" />
                <span><strong>Day 3:</strong> Rhyme & Reach Basket (Early phonological awareness)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3A2E22]">
                <CheckIcon className="w-4 h-4 shrink-0" color="#7C9473" />
                <span><strong>Day 4:</strong> Masking Tape Tightrope (Equilibrium & body control)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3A2E22]">
                <CheckIcon className="w-4 h-4 shrink-0" color="#7C9473" />
                <span><strong>Day 5:</strong> Independent Snack Preparation (Sequential agency)</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <button
                onClick={onOpenFreePlan}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#7C9473] hover:bg-[#455C3C] rounded-xl transition-colors shadow-none flex items-center gap-2"
              >
                <span>Start Free — Get the 5-Day Plan</span>
                <span>→</span>
              </button>
              <p className="text-[11px] text-[#6B5D4C] mt-1.5">
                Sent straight to your email. No credit card required.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
