import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { PillarsSection } from './components/PillarsSection';
import { ActivityMockupSection } from './components/ActivityMockupSection';
import { RoadmapSection } from './components/RoadmapSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FreePreviewSection } from './components/FreePreviewSection';
import { IncludedSection } from './components/IncludedSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal, FreePlanModal } from './components/Modals';

export default function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [freePlanOpen, setFreePlanOpen] = useState(false);

  const handleScrollToSample = () => {
    const el = document.getElementById('inside-page');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F3EDE1] text-[#3A2E22] font-sans antialiased selection:bg-[#E9EEE3] selection:text-[#455C3C]">
      
      {/* 1. Sticky Header */}
      <Header
        onGetPlaybook={() => setCheckoutOpen(true)}
        onOpenFreePlan={() => setFreePlanOpen(true)}
        onOpenContact={handleScrollToContact}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onGetPlaybook={() => setCheckoutOpen(true)}
          onOpenFreePlan={() => setFreePlanOpen(true)}
          onOpenSample={handleScrollToSample}
        />

        {/* 3. Problem/Agitation */}
        <ProblemSection />

        {/* 4. The 4 Pillars */}
        <PillarsSection />

        {/* 5. What's Actually on a Page */}
        <ActivityMockupSection />

        {/* 6. The 6-Week Roadmap */}
        <RoadmapSection />

        {/* 7. Verified Parent Testimonials */}
        <TestimonialsSection />

        {/* 8. Free Preview — 5-Day No-Prep Play Plan */}
        <FreePreviewSection
          onOpenFreePlan={() => setFreePlanOpen(true)}
        />

        {/* 9. What's Included & $47 Pricing */}
        <IncludedSection
          onCheckout={() => setCheckoutOpen(true)}
        />

        {/* 10. Contact Us Section */}
        <ContactSection />

        {/* 11. FAQ Accordion */}
        <FaqSection
          onGetPlaybook={() => setCheckoutOpen(true)}
        />
      </main>

      {/* Footer (100% clean public view) */}
      <Footer
        onGetPlaybook={() => setCheckoutOpen(true)}
        onOpenFreePlan={() => setFreePlanOpen(true)}
        onOpenContact={handleScrollToContact}
      />

      {/* Sticky Mobile Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FBF8F1]/95 backdrop-blur-xs border-t border-[#D9CBB4] p-3 flex items-center justify-between gap-3 shadow-none">
        <div>
          <span className="text-xs font-semibold text-[#4A3624] block">The 15-Minute Montessori</span>
          <span className="text-[11px] text-[#8B6A4A]">6 Weeks · $47 Complete</span>
        </div>
        <button
          onClick={() => setCheckoutOpen(true)}
          className="px-4 py-2 text-xs font-bold text-white bg-[#C1785A] rounded-lg whitespace-nowrap cursor-pointer"
        >
          Get Playbook
        </button>
      </div>

      {/* Modals */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />

      <FreePlanModal
        isOpen={freePlanOpen}
        onClose={() => setFreePlanOpen(false)}
      />

    </div>
  );
}
