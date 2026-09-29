import React from 'react';
import { TrayLogo } from './BrandIcons';

interface FooterProps {
  onGetPlaybook: () => void;
  onOpenFreePlan: () => void;
  onOpenContact: () => void;
}

export function Footer({ onGetPlaybook, onOpenFreePlan, onOpenContact }: FooterProps) {
  return (
    <footer className="bg-[#4A3624] text-[#F3EDE1] py-12 border-t-2 border-[#8B6A4A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#8B6A4A]/50">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#372416] flex items-center justify-center relative p-1.5 shrink-0 border border-[#8B6A4A]/60">
              <div className="absolute inset-1 rounded-full border border-[#7C9473]/90 pointer-events-none" />
              <TrayLogo className="w-6 h-5 relative z-10" strokeColor="#F3EDE1" />
            </div>
            <div>
              <span className="font-serif text-lg font-medium text-[#F3EDE1] block">
                The 15-Minute Montessori System
              </span>
              <span className="text-xs text-[#D9CBB4]">
                Natural Montessori Classroom Parent Playbook · Ages 18m – 4y
              </span>
            </div>
          </div>

          {/* Clean customer-facing links: No database, admin, or export buttons visible */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#D9CBB4]">
            <button onClick={onOpenFreePlan} className="hover:text-white transition-colors cursor-pointer">
              Free 5-Day Plan
            </button>
            <span>·</span>
            <button onClick={onGetPlaybook} className="hover:text-white transition-colors cursor-pointer">
              Get Playbook ($47)
            </button>
            <span>·</span>
            <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9CBB4]/80">
          <p>
            © {new Date().getFullYear()} The 15-Minute Montessori System. All rights reserved.
          </p>
          <p className="text-[11px] text-center sm:text-right">
            Rooted in authentic pedagogical observation principles. Screen-free learning for ages 18 months to 4 years.
          </p>
        </div>

      </div>
    </footer>
  );
}
