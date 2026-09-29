import React from 'react';
import { ROADMAP_WEEKS } from '../data/montessoriData';

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-16 md:py-20 border-b border-[#D9CBB4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6A4A]">
            6-Week Developmental Sequence
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#4A3624] mt-2">
            The 6-Week Guided Roadmap
          </h2>
          <p className="text-sm sm:text-base text-[#6B5D4C] mt-2">
            Carefully structured so each week layers new neurological connections without overwhelming your child or your schedule.
          </p>
        </div>

        {/* 6 Weeks Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROADMAP_WEEKS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FBF8F1] border border-[#D9CBB4] rounded-2xl p-6 flex flex-col justify-between hover:border-[#8B6A4A] transition-all"
            >
              <div>
                {/* Week Number & Focus */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-sm font-semibold px-2.5 py-1 rounded bg-[#E9EEE3] text-[#455C3C] border border-[#7C9473]/30">
                    {item.week}
                  </span>
                  <span className="text-[11px] font-medium text-[#8B6A4A] uppercase tracking-wide">
                    {item.focus}
                  </span>
                </div>

                {/* Week Title */}
                <h3 className="font-serif text-lg font-medium text-[#4A3624] mb-1.5">
                  {item.title}
                </h3>

                {/* One-Line Theme from PDF */}
                <p className="text-xs font-semibold text-[#8A4A2E] mb-3">
                  {item.theme}
                </p>

                {/* Description */}
                <p className="text-xs text-[#6B5D4C] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Sample 5-Day Sequence */}
              <div className="pt-3 border-t border-[#D9CBB4]/60">
                <span className="text-[10px] uppercase tracking-wider text-[#8B6A4A] font-semibold block mb-1.5">
                  Sample 5-Day Sequence:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.sampleDaily.map((dayAct, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[11px] bg-[#F3EDE1] text-[#3A2E22] px-2 py-0.5 rounded border border-[#D9CBB4]/70"
                    >
                      {dayAct}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Rhythm Explanation Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F6E7DE] border border-[#C1785A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-base font-medium text-[#4A3624]">
              How the Weekly Rhythm Works:
            </h4>
            <p className="text-xs text-[#8A4A2E] mt-0.5">
              Monday: Practical Life · Tuesday: Sensorial · Wednesday: Language · Thursday: Movement · Friday: Child's Favorite Repetition.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 bg-white text-[#C1785A] rounded-lg border border-[#C1785A]/30 whitespace-nowrap shrink-0">
            5 Days / Week · 15 Min / Day
          </span>
        </div>

      </div>
    </section>
  );
}
