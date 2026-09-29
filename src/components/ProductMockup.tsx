import React from 'react';
import { TrayLogo, HandIcon, EyeIcon, SpeechBubbleIcon, RunningFigureIcon } from './BrandIcons';

export function ProductMockup({ onOpenSample }: { onOpenSample?: () => void }) {
  return (
    <div className="relative w-full max-w-xl mx-auto py-4 select-none">
      {/* Background card accent */}
      <div className="absolute inset-0 bg-[#E9EEE3] rounded-2xl transform rotate-1 scale-[0.98] border border-[#D9CBB4]" />
      
      {/* Main Container */}
      <div className="relative bg-[#FBF8F1] border border-[#D9CBB4] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
        
        {/* Book Cover Mockup */}
        <div className="w-56 sm:w-64 shrink-0 bg-[#4A3624] text-[#F3EDE1] rounded-xl p-6 border-2 border-[#8B6A4A] relative flex flex-col justify-between aspect-[3/4]">
          {/* Subtle spine line */}
          <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-[#8B6A4A]" />
          
          {/* Top Brand Tag */}
          <div className="pl-4 flex items-center justify-between border-b border-[#8B6A4A]/40 pb-3">
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#D9CBB4]">Parent Playbook</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#8B6A4A]/30 text-[#F3EDE1] border border-[#8B6A4A]">6 Weeks</span>
          </div>

          {/* Book Title & Logo */}
          <div className="pl-4 my-auto text-center py-4">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 rounded-2xl bg-[#422e1e] flex items-center justify-center relative p-2 border border-[#8B6A4A]">
                <div className="absolute inset-1.5 rounded-full border-[1.5px] border-[#7C9473] pointer-events-none" />
                <TrayLogo className="w-9 h-7 relative z-10" strokeColor="#F3EDE1" />
              </div>
            </div>
            <div className="text-[11px] tracking-wider text-[#C1785A] font-semibold uppercase mb-1">
              The 15-Minute
            </div>
            <h3 className="font-serif text-2xl font-medium leading-tight text-[#F3EDE1]">
              Montessori<br />System
            </h3>
            <p className="text-[11px] text-[#D9CBB4] mt-2 font-normal">
              30 Daily Activities for Ages 18m – 4y
            </p>
          </div>

          {/* Bottom 4 Pillar Badges Row on Book */}
          <div className="pl-4 pt-3 border-t border-[#8B6A4A]/40 flex items-center justify-between">
            <div className="w-6 h-6 rounded bg-[#F6E7DE] flex items-center justify-center border border-[#C1785A]">
              <HandIcon className="w-3.5 h-3.5" stroke="#8A4A2E" />
            </div>
            <div className="w-6 h-6 rounded bg-[#EAEFF4] flex items-center justify-center border border-[#7C93A8]">
              <EyeIcon className="w-3.5 h-3.5" stroke="#3E5468" />
            </div>
            <div className="w-6 h-6 rounded bg-[#E9EEE3] flex items-center justify-center border border-[#7C9473]">
              <SpeechBubbleIcon className="w-3.5 h-3.5" stroke="#455C3C" />
            </div>
            <div className="w-6 h-6 rounded bg-[#FBF8F1] flex items-center justify-center border border-[#8B6A4A]">
              <RunningFigureIcon className="w-3.5 h-3.5" stroke="#4A3624" />
            </div>
          </div>
        </div>

        {/* Floating Accompanying Booklets & Specifications */}
        <div className="flex-1 w-full space-y-3.5">
          {/* Free Bonus Play Plan mini card */}
          <div className="bg-[#E9EEE3] border border-[#7C9473]/50 rounded-xl p-3.5 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#7C9473] text-white flex items-center justify-center shrink-0 text-xs font-semibold">
              5D
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#455C3C]">FREE BONUS INCLUDED</span>
                <span className="text-[10px] text-[#7C9473] font-medium">($19 Value)</span>
              </div>
              <p className="text-sm font-serif font-medium text-[#4A3624]">5-Day No-Prep Play Plan</p>
              <p className="text-xs text-[#455C3C] mt-0.5">Zero prep time, zero-shopping emergency screen-free starter guide.</p>
            </div>
          </div>

          {/* Parent Script Pocket Cards */}
          <div className="bg-[#F6E7DE] border border-[#C1785A]/40 rounded-xl p-3.5 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C1785A] text-white flex items-center justify-center shrink-0 text-xs font-semibold">
              💬
            </div>
            <div>
              <p className="text-xs font-semibold text-[#8A4A2E]">VERBATIM SCRIPT POCKET GUIDE</p>
              <p className="text-sm font-serif font-medium text-[#4A3624]">Exact Words for Calm Focus</p>
              <p className="text-xs text-[#8A4A2E] mt-0.5">What to whisper when they wander, resist cleanup, or feel frustrated.</p>
            </div>
          </div>

          {/* Quick interactive peek button */}
          {onOpenSample && (
            <button
              onClick={onOpenSample}
              className="w-full text-center text-xs font-medium text-[#4A3624] py-2 px-3 rounded-lg border border-[#D9CBB4] bg-white hover:bg-[#F3EDE1] transition-colors"
            >
              Click to preview sample activity page →
            </button>
          )}

          <div className="text-[11px] text-[#6B5D4C] flex items-center justify-between pt-1 px-1">
            <span>Instant PDF Download</span>
            <span>·</span>
            <span>Tablet & Smartphone Ready</span>
            <span>·</span>
            <span>Home Printable</span>
          </div>
        </div>

      </div>
    </div>
  );
}
