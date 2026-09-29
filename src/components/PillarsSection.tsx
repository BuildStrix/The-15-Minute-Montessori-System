import React from 'react';
import { HandIcon, EyeIcon, SpeechBubbleIcon, RunningFigureIcon } from './BrandIcons';

export function PillarsSection() {
  const pillars = [
    {
      id: 'practical-life',
      title: 'Practical Life',
      oneLiner: 'Everyday real-world tasks that build fine-motor mastery, bilateral coordination, and genuine independence.',
      icon: <HandIcon className="w-6 h-6" stroke="#C1785A" />,
      colorClass: 'text-[#8A4A2E]',
      borderClass: 'border-[#C1785A]/40',
      badgeBg: 'bg-[#F6E7DE]',
      cardBg: 'bg-[#FBF8F1]',
      day: 'Monday Pillar',
      examples: ['Pitcher water pouring', 'Slicing soft bananas', 'Wringing a wet sponge', 'Opening & closing small jars']
    },
    {
      id: 'sensorial',
      title: 'Sensorial',
      oneLiner: 'Isolating single sensory dimensions to refine tactile, visual, and auditory discrimination and cognitive classification.',
      icon: <EyeIcon className="w-6 h-6" stroke="#7C93A8" />,
      colorClass: 'text-[#3E5468]',
      borderClass: 'border-[#7C93A8]/40',
      badgeBg: 'bg-[#EAEFF4]',
      cardBg: 'bg-[#FBF8F1]',
      day: 'Tuesday Pillar',
      examples: ['Texture mystery basket', 'Sound shaker matching', 'Heavy vs. light grading', 'The auditory silence game']
    },
    {
      id: 'language',
      title: 'Language',
      oneLiner: 'Enriching precise real-world vocabulary, phonemic awareness, and the three-period lesson without flashcards.',
      icon: <SpeechBubbleIcon className="w-6 h-6" stroke="#7C9473" />,
      colorClass: 'text-[#455C3C]',
      borderClass: 'border-[#7C9473]/40',
      badgeBg: 'bg-[#E9EEE3]',
      cardBg: 'bg-[#FBF8F1]',
      day: 'Wednesday Pillar',
      examples: ['Object-to-picture sound match', 'Classified household cards', 'Initial sound isolation', 'Real naming conversations']
    },
    {
      id: 'movement',
      title: 'Movement',
      oneLiner: 'Gross-motor coordination, bodily grace, equilibrium, and purposeful physical restraint in the home space.',
      icon: <RunningFigureIcon className="w-6 h-6" stroke="#8B6A4A" />,
      colorClass: 'text-[#4A3624]',
      borderClass: 'border-[#8B6A4A]/40',
      badgeBg: 'bg-[#F5EFE6]',
      cardBg: 'bg-[#FBF8F1]',
      day: 'Thursday Pillar',
      examples: ['Walking the masking tape line', 'Two-handed fragile carrying', 'Bean bag balance walk', 'Quiet chair placement']
    }
  ];

  return (
    <section id="pillars" className="py-16 md:py-20 border-b border-[#D9CBB4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6A4A]">
            The Core Architecture
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#4A3624] mt-2">
            The 4 Pillars of the 15-Minute Montessori System
          </h2>
          <p className="text-sm sm:text-base text-[#6B5D4C] mt-2">
            One pillar per day, Monday through Thursday, with Friday dedicated to child-chosen repetition and review.
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`rounded-2xl border ${pillar.borderClass} ${pillar.cardBg} p-6 flex flex-col justify-between transition-all hover:border-[#8B6A4A]`}
            >
              <div>
                {/* Badge and Day */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${pillar.badgeBg} flex items-center justify-center border border-[#D9CBB4]/60`}>
                    {pillar.icon}
                  </div>
                  <span className={`text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full ${pillar.badgeBg} ${pillar.colorClass}`}>
                    {pillar.day}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-[#4A3624] mb-2">
                  {pillar.title}
                </h3>

                {/* Real one-line description from PDF */}
                <p className="text-sm text-[#6B5D4C] leading-relaxed mb-4">
                  {pillar.oneLiner}
                </p>
              </div>

              {/* Sample Activities Inside */}
              <div className="pt-4 border-t border-[#D9CBB4]/50">
                <span className="text-[11px] font-semibold text-[#8B6A4A] uppercase tracking-wider block mb-2">
                  Key Activities Inside:
                </span>
                <ul className="space-y-1.5">
                  {pillar.examples.map((item, idx) => (
                    <li key={idx} className="text-xs text-[#3A2E22] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B6A4A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
