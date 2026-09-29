import React, { useState } from 'react';
import { ACTIVITIES, ActivityData } from '../data/montessoriData';
import { HandIcon, EyeIcon, SpeechBubbleIcon, CheckIcon } from './BrandIcons';

export function ActivityMockupSection() {
  const [selectedActivityId, setSelectedActivityId] = useState<string>('pouring-water');
  const activity: ActivityData = ACTIVITIES.find((a) => a.id === selectedActivityId) || ACTIVITIES[0];

  const getPillarBadge = (pillar: ActivityData['pillar']) => {
    switch (pillar) {
      case 'practical-life':
        return {
          icon: <HandIcon className="w-4 h-4" stroke="#8A4A2E" />,
          bg: 'bg-[#F6E7DE]',
          text: 'text-[#8A4A2E]',
          border: 'border-[#C1785A]/40'
        };
      case 'sensorial':
        return {
          icon: <EyeIcon className="w-4 h-4" stroke="#3E5468" />,
          bg: 'bg-[#EAEFF4]',
          text: 'text-[#3E5468]',
          border: 'border-[#7C93A8]/40'
        };
      case 'language':
        return {
          icon: <SpeechBubbleIcon className="w-4 h-4" stroke="#455C3C" />,
          bg: 'bg-[#E9EEE3]',
          text: 'text-[#455C3C]',
          border: 'border-[#7C9473]/40'
        };
      default:
        return {
          icon: null,
          bg: 'bg-[#FBF8F1]',
          text: 'text-[#4A3624]',
          border: 'border-[#D9CBB4]'
        };
    }
  };

  const badge = getPillarBadge(activity.pillar);

  return (
    <section id="inside-page" className="py-16 md:py-20 bg-[#F3EDE1] border-b border-[#D9CBB4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6A4A]">
            Verbatim Proof of Content
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#4A3624] mt-2">
            What's Actually on an Activity Page
          </h2>
          <p className="text-sm sm:text-base text-[#6B5D4C] mt-2">
            No vague fluff. Every single page follows this exact 6-part pedagogical blueprint so you know precisely what to set out, what to say, and how to adapt on the fly.
          </p>
        </div>

        {/* Activity Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {ACTIVITIES.map((act) => {
            const isSelected = act.id === activity.id;
            return (
              <button
                key={act.id}
                onClick={() => setSelectedActivityId(act.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-[#4A3624] text-[#F3EDE1] border-[#4A3624]'
                    : 'bg-[#FBF8F1] text-[#6B5D4C] border-[#D9CBB4] hover:bg-white hover:text-[#4A3624]'
                }`}
              >
                <span className="opacity-75">{act.number}:</span> {act.title}
              </button>
            );
          })}
        </div>

        {/* Faithful Activity Page Mockup Sheet (matching thumb_2_activity_page reference) */}
        <div className="bg-[#FBF8F1] border-2 border-[#D9CBB4] rounded-2xl p-6 sm:p-10 shadow-none relative max-w-4xl mx-auto">
          
          {/* Mockup Page Header Bar */}
          <div className="border-b-2 border-[#4A3624]/20 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${badge.bg} ${badge.text} border ${badge.border}`}>
                  {badge.icon}
                  <span>{activity.pillarName}</span>
                </span>
                <span className="text-xs text-[#8B6A4A] font-medium">· {activity.number}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#4A3624]">
                {activity.title}
              </h3>
            </div>

            {/* Quick Metadata Box */}
            <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-xs text-[#6B5D4C]">
              <span className="bg-[#E9EEE3] px-2.5 py-1 rounded text-[#455C3C] font-medium border border-[#7C9473]/30">
                Ages: {activity.age}
              </span>
              <span className="font-medium text-[#8B6A4A]">Duration: {activity.time}</span>
            </div>
          </div>

          {/* Developmental Objective */}
          <div className="mb-6 p-3.5 bg-[#F3EDE1] rounded-xl border border-[#D9CBB4] text-xs sm:text-sm text-[#4A3624]">
            <span className="font-semibold text-[#8B6A4A] uppercase tracking-wider text-[11px] block sm:inline mr-2">
              Developmental Aim:
            </span>
            {activity.objective}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Materials & Adaptations */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Materials Box */}
              <div className="bg-white border border-[#D9CBB4] rounded-xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A4A2E] mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C1785A]" />
                  Household Materials
                </h4>
                <ul className="space-y-2 text-xs text-[#3A2E22]">
                  {activity.materials.map((mat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#8B6A4A] mt-0.5">•</span>
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Adaptations: Easier vs Harder */}
              <div className="bg-[#F3EDE1] border border-[#D9CBB4] rounded-xl p-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3624]">
                  Developmental Adaptations
                </h4>
                
                <div className="p-2.5 rounded-lg bg-white border border-[#D9CBB4]/70">
                  <span className="text-[11px] font-semibold text-[#7C9473] uppercase block mb-0.5">
                    Make It Easier:
                  </span>
                  <p className="text-xs text-[#3A2E22]">{activity.makeEasier}</p>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-[#D9CBB4]/70">
                  <span className="text-[11px] font-semibold text-[#C1785A] uppercase block mb-0.5">
                    Make It Harder:
                  </span>
                  <p className="text-xs text-[#3A2E22]">{activity.makeHarder}</p>
                </div>
              </div>

            </div>

            {/* Right Column: Steps, Verbatim Script & Observation */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Numbered Presentation Steps */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3624] mb-3">
                  Step-by-Step Parent Presentation
                </h4>
                <ol className="space-y-3">
                  {activity.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3A2E22]">
                      <span className="w-5 h-5 rounded-full bg-[#4A3624] text-[#F3EDE1] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Verbatim Parent Script Callout */}
              <div className="bg-[#E9EEE3] border-l-4 border-[#7C9473] rounded-r-xl p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-1">
                  <SpeechBubbleIcon className="w-4 h-4" stroke="#455C3C" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#455C3C]">
                    Verbatim Parent Script
                  </span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-[#3A2E22] my-1.5">
                  "{activity.parentScript}"
                </p>
                <p className="text-xs text-[#455C3C] pt-1">
                  <span className="font-semibold">Pedagogical Cue:</span> {activity.scriptDeliveryTip}
                </p>
              </div>

              {/* Observation Checklist */}
              <div className="bg-white border border-[#D9CBB4] rounded-xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#3E5468] mb-2.5">
                  Observation Checklist (Look, Don't Intervene)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3A2E22]">
                  {activity.observationChecklist.map((obs, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckIcon className="w-3.5 h-3.5 shrink-0 mt-0.5" color="#7C9473" />
                      <span>{obs}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cleanup Restoration Tip */}
              <div className="p-3.5 rounded-xl bg-[#F6E7DE] border border-[#C1785A]/40 flex items-start gap-2.5 text-xs text-[#8A4A2E]">
                <span className="font-bold uppercase tracking-wide shrink-0">Cleanup Ritual:</span>
                <span>{activity.cleanupTip}</span>
              </div>

            </div>

          </div>

          {/* Bottom Page Indicator */}
          <div className="mt-8 pt-4 border-t border-[#D9CBB4] flex items-center justify-between text-[11px] text-[#6B5D4C]">
            <span>The 15-Minute Montessori System © Parent Playbook</span>
            <span>Section II · {activity.pillarName}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
