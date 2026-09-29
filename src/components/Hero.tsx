import React from 'react';
import { ProductMockup } from './ProductMockup';

interface HeroProps {
  onGetPlaybook: () => void;
  onOpenFreePlan: () => void;
  onOpenSample: () => void;
}

export function Hero({ onGetPlaybook, onOpenFreePlan, onOpenSample }: HeroProps) {
  return (
    <section id="hero" className="pt-8 pb-16 md:py-20 border-b border-[#D9CBB4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Stat Row as pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E9EEE3] text-[#455C3C] border border-[#7C9473]/40">
            30 Step-by-Step Activities
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F6E7DE] text-[#8A4A2E] border border-[#C1785A]/40">
            6 Purposeful Weeks
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FBF8F1] text-[#4A3624] border border-[#D9CBB4]">
            15 Minutes a Day
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EAEFF4] text-[#3E5468] border border-[#7C93A8]/40">
            Ages 18 Months – 4 Years
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FBF8F1] text-[#8B6A4A] border border-[#D9CBB4]">
            100% Screen-Free & Household Materials
          </span>
        </div>

        {/* Hero Title & Subhead */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#4A3624] leading-[1.15] text-balance">
            Know exactly what to do each day, in 15 minutes or less, with no expensive materials and no screens.
          </h1>
          <p className="text-base sm:text-lg text-[#6B5D4C] max-w-2xl mx-auto leading-relaxed">
            A calm, 6-week daily parent playbook for children ages 18 months to 4 years. Thirty authentic Montessori activities structured into daily 15-minute rhythms—using only simple items already in your kitchen, pantry, and linen drawer.
          </p>

          {/* Primary CTA and Secondary Link */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGetPlaybook}
              className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-[#C1785A] hover:bg-[#8A4A2E] rounded-xl transition-all shadow-none flex items-center justify-center gap-2 group"
            >
              <span>Get the Playbook — $47</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={onOpenFreePlan}
              className="text-sm font-medium text-[#4A3624] hover:text-[#C1785A] underline underline-offset-4 decoration-[#D9CBB4] transition-colors"
            >
              Or start with the free 5-day preview plan
            </button>
          </div>

          <p className="text-xs text-[#6B5D4C] pt-1">
            Instant Digital Download (PDF) · Printable & Tablet-Ready · 30-Day Money-Back Guarantee
          </p>
        </div>

        {/* Product Visual Mockup */}
        <div className="mt-10 sm:mt-12">
          <ProductMockup onOpenSample={onOpenSample} />
        </div>

      </div>
    </section>
  );
}
