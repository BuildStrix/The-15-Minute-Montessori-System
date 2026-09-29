import React from 'react';
import { TESTIMONIALS } from '../data/montessoriData';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FBF8F1] border-b border-[#D9CBB4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EEE3] text-[#455C3C] border border-[#7C9473]/40 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Recent Verified Parent Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4A3624]">
            What Parents Are Saying (Last 3 Weeks – 3 Months)
          </h2>
          <p className="text-sm sm:text-base text-[#6B5D4C] mt-2">
            Recent experiences from parents navigating toddlerhood with the 6-Week Playbook.
          </p>
        </div>

        {/* Testimonials Grid (6 recent cards with verified buyer tags and date badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F3EDE1] border border-[#D9CBB4] rounded-2xl p-6 flex flex-col justify-between hover:border-[#8B6A4A] transition-all"
            >
              <div>
                {/* Meta Row: Pillar Badge, Stars & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md bg-[#E9EEE3] text-[#455C3C] border border-[#7C9473]/30">
                    {t.pillarImpact}
                  </span>
                  <span className="text-[11px] font-medium text-[#8B6A4A]">
                    {t.dateBadge}
                  </span>
                </div>

                {/* Stars and Verified Buyer tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-[#C1785A] text-sm tracking-wider" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  {t.verifiedBuyer && (
                    <span className="text-[10px] text-[#455C3C] font-semibold flex items-center gap-1">
                      <span className="text-xs">✓</span> Verified Whop Buyer
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="font-serif italic text-sm sm:text-base text-[#3A2E22] leading-relaxed mb-4">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#D9CBB4]/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#4A3624]">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-[#6B5D4C]">
                    {t.childAge} · {t.location}
                  </p>
                </div>
                <span className="text-[10px] font-medium text-[#8A4A2E] bg-[#F6E7DE] px-2 py-0.5 rounded border border-[#C1785A]/30 shrink-0">
                  {t.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stat Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#D9CBB4] flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="font-serif text-2xl font-bold text-[#4A3624]">30 Days</div>
            <div className="text-xs text-[#6B5D4C]">Money-Back Guarantee</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#D9CBB4]" />
          <div>
            <div className="font-serif text-2xl font-bold text-[#455C3C]">100%</div>
            <div className="text-xs text-[#6B5D4C]">Household Materials Used</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#D9CBB4]" />
          <div>
            <div className="font-serif text-2xl font-bold text-[#8A4A2E]">0 Screens</div>
            <div className="text-xs text-[#6B5D4C]">Calm, Bilateral Motor Focus</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#D9CBB4]" />
          <div>
            <div className="font-serif text-2xl font-bold text-[#4A3624]">15 Min</div>
            <div className="text-xs text-[#6B5D4C]">Biological Toddler Sweet Spot</div>
          </div>
        </div>

      </div>
    </section>
  );
}
