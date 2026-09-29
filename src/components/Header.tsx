import React, { useState } from 'react';
import { TrayLogo } from './BrandIcons';

interface HeaderProps {
  onGetPlaybook: () => void;
  onOpenFreePlan: () => void;
  onOpenContact: () => void;
}

export function Header({ onGetPlaybook, onOpenFreePlan, onOpenContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F3EDE1]/95 backdrop-blur-sm border-b border-[#D9CBB4] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark + Official Logo Badge */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="flex items-center gap-3 text-left group">
          <div className="w-10 h-10 rounded-xl bg-[#422e1e] flex items-center justify-center relative p-1.5 shrink-0 transition-transform group-hover:scale-105 border border-[#8B6A4A]/50">
            <div className="absolute inset-1 rounded-full border border-[#7C9473]/80 pointer-events-none" />
            <TrayLogo className="w-6 h-5 relative z-10" strokeColor="#F3EDE1" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-medium text-[#4A3624] tracking-tight block leading-tight">
              The 15-Minute Montessori System
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#8B6A4A] font-semibold hidden sm:block">
              Parent Playbook · Ages 18m – 4y
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#6B5D4C]">
          <button onClick={() => scrollTo('pillars')} className="hover:text-[#4A3624] transition-colors whitespace-nowrap cursor-pointer">
            The 4 Pillars
          </button>
          <button onClick={() => scrollTo('inside-page')} className="hover:text-[#4A3624] transition-colors whitespace-nowrap cursor-pointer">
            Inside the Book
          </button>
          <button onClick={() => scrollTo('roadmap')} className="hover:text-[#4A3624] transition-colors whitespace-nowrap cursor-pointer">
            6-Week Roadmap
          </button>
          <button onClick={() => scrollTo('testimonials')} className="hover:text-[#4A3624] transition-colors whitespace-nowrap cursor-pointer">
            Testimonials
          </button>
          <button onClick={() => scrollTo('free-preview')} className="hover:text-[#4A3624] transition-colors whitespace-nowrap cursor-pointer">
            Free 5-Day Plan
          </button>
          <button onClick={() => scrollTo('contact')} className="hover:text-[#4A3624] transition-colors whitespace-nowrap cursor-pointer">
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onGetPlaybook}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#C1785A] hover:bg-[#8A4A2E] rounded-lg transition-colors whitespace-nowrap shadow-none cursor-pointer"
          >
            Get the Playbook — $47
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-[#4A3624] hover:bg-[#E9EEE3] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF8F1] border-b border-[#D9CBB4] px-4 py-4 space-y-3">
          <button onClick={() => scrollTo('pillars')} className="block w-full text-left text-sm font-medium text-[#4A3624] py-1.5">
            The 4 Pillars
          </button>
          <button onClick={() => scrollTo('inside-page')} className="block w-full text-left text-sm font-medium text-[#4A3624] py-1.5">
            What's Actually on a Page
          </button>
          <button onClick={() => scrollTo('roadmap')} className="block w-full text-left text-sm font-medium text-[#4A3624] py-1.5">
            The 6-Week Roadmap
          </button>
          <button onClick={() => scrollTo('testimonials')} className="block w-full text-left text-sm font-medium text-[#4A3624] py-1.5">
            Parent Testimonials
          </button>
          <button onClick={() => scrollTo('free-preview')} className="block w-full text-left text-sm font-medium text-[#4A3624] py-1.5">
            Free 5-Day No-Prep Plan
          </button>
          <button onClick={() => scrollTo('contact')} className="block w-full text-left text-sm font-medium text-[#4A3624] py-1.5">
            Contact Us
          </button>
          <div className="pt-2 border-t border-[#D9CBB4] flex gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenFreePlan(); }}
              className="flex-1 py-2 text-xs font-medium text-[#455C3C] bg-[#E9EEE3] border border-[#7C9473]/50 rounded-lg text-center cursor-pointer"
            >
              Get Free 5-Day Plan
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onGetPlaybook(); }}
              className="flex-1 py-2 text-xs font-medium text-white bg-[#C1785A] rounded-lg text-center cursor-pointer"
            >
              Get Playbook ($47)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
