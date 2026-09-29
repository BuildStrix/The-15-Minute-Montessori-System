import React from 'react';

export function ProblemSection() {
  return (
    <section className="py-16 md:py-20 bg-[#FBF8F1] border-b border-[#D9CBB4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6A4A]">
            The Honest Reality of Toddler Days
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#4A3624] mt-2">
            You don't need a picture-perfect wooden playroom to give your child an authentic Montessori foundation.
          </h2>
        </div>

        {/* 4 Honest Pain Points Grounded in PDF Welcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-[#F3EDE1] border border-[#D9CBB4] rounded-xl p-6">
            <div className="text-xs font-semibold text-[#8A4A2E] uppercase tracking-wide mb-1">
              01. The 4:30 PM Decision Fatigue
            </div>
            <h3 className="font-serif text-lg font-medium text-[#4A3624] mb-2">
              Staring at a chaotic toy bin with zero mental energy left.
            </h3>
            <p className="text-sm text-[#6B5D4C] leading-relaxed">
              When the afternoon slump hits, the hardest part isn't doing an activity—it's inventing one from scratch while your toddler is pulling at your pant leg. You shouldn't have to spend 20 minutes planning for a 10-minute moment of connection.
            </p>
          </div>

          <div className="bg-[#F3EDE1] border border-[#D9CBB4] rounded-xl p-6">
            <div className="text-xs font-semibold text-[#8A4A2E] uppercase tracking-wide mb-1">
              02. The Pinterest Setup Trap
            </div>
            <h3 className="font-serif text-lg font-medium text-[#4A3624] mb-2">
              45 minutes of preparation for 90 seconds of engagement.
            </h3>
            <p className="text-sm text-[#6B5D4C] leading-relaxed">
              Saving elaborate sensory bins that require buying liquid watercolours, special chia seeds, and acrylic trays. By the time it’s set up, your child dumps it on the rug and walks away. Real Montessori was never meant to be a high-maintenance craft show.
            </p>
          </div>

          <div className="bg-[#F3EDE1] border border-[#D9CBB4] rounded-xl p-6">
            <div className="text-xs font-semibold text-[#8A4A2E] uppercase tracking-wide mb-1">
              03. The Screen-Free Ambiguity
            </div>
            <h3 className="font-serif text-lg font-medium text-[#4A3624] mb-2">
              Not knowing if independent play is actually building focus.
            </h3>
            <p className="text-sm text-[#6B5D4C] leading-relaxed">
              You want to keep screens off, but you wonder: are they actually developing fine-motor stamina? Hand-eye coordination? Bilateral control? Without pedagogical structure, screen-free time often collapses into restless wandering and meltdowns.
            </p>
          </div>

          <div className="bg-[#F3EDE1] border border-[#D9CBB4] rounded-xl p-6">
            <div className="text-xs font-semibold text-[#8A4A2E] uppercase tracking-wide mb-1">
              04. Montessori Without the Dogma
            </div>
            <h3 className="font-serif text-lg font-medium text-[#4A3624] mb-2">
              Feeling like you're 'failing' because you don't own $800 birch shelves.
            </h3>
            <p className="text-sm text-[#6B5D4C] leading-relaxed">
              Dr. Maria Montessori started her first Casa dei Bambini with humble household items: beans, cloths, and small pitchers. The essence of Montessori is child independence, purposeful repetition, and quiet order—not expensive commercial aesthetic consumerism.
            </p>
          </div>

        </div>

        {/* Quiet Grounding Quote */}
        <div className="mt-10 p-5 rounded-xl bg-[#E9EEE3] border border-[#7C9473]/40 text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-base text-[#455C3C]">
            "The child who concentrates is immensely happy. What they need is not entertainment, but real, purposeful work scaled to their small hands."
          </p>
          <span className="text-xs text-[#7C9473] block mt-2 font-medium">
            — From the Playbook Introduction: The 15-Minute Daily Rhythm
          </span>
        </div>

      </div>
    </section>
  );
}
