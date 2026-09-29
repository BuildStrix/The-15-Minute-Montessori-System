import React from 'react';

/**
 * Official Brand Logo Icon
 * Matches the uploaded brand mark:
 * - Rounded rectangular tray with distinct rim lip
 * - Inner tray basin
 * - Three cylindrical sorting cylinders / knobs / items standing inside the tray
 * - Optional circular sage boundary ring and wood-deep rounded app container
 */
export function TrayLogo({
  className = 'w-9 h-7',
  strokeColor = '#8B6A4A',
  sageRing = false
}: {
  className?: string;
  strokeColor?: string;
  sageRing?: boolean;
}) {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Official Montessori Tray Mark">
      {/* Optional sage circular ring matching the badge variant */}
      {sageRing && (
        <circle cx="50" cy="40" r="38" stroke="#7C9473" strokeWidth="2.5" />
      )}

      {/* 3 Montessori cylinders / knobs inside the tray */}
      {/* Left small cylinder knob */}
      <circle cx="38" cy="27" r="5" stroke={strokeColor} strokeWidth="3" fill="none" />
      
      {/* Center cylinder knob */}
      <circle cx="51" cy="23" r="5.5" stroke={strokeColor} strokeWidth="3" fill="none" />
      
      {/* Right taller cylinder knob / rod */}
      <rect x="61" y="18" width="4" height="15" rx="2" fill={strokeColor} />

      {/* Top rim / lip of the wooden tray with pill-rounded ends */}
      <rect x="18" y="32" width="64" height="15" rx="7" stroke={strokeColor} strokeWidth="3.5" fill="none" />

      {/* Lower basin / base of the tray */}
      <path
        d="M26 47V56C26 60.4183 29.5817 64 34 64H66C70.4183 64 74 60.4183 74 56V47"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Full Brand Logo Badge
 * Exactly reproduces the uploaded logo:
 * - Rounded-square wood-deep (#4A3624 / #3c2a1c) card background
 * - Sage green (#7C9473) delicate concentric ring
 * - Cream white / warm cream (#F3EDE1) tray mark with 3 items inside
 */
export function OfficialBrandBadge({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-[28%] bg-[#422e1e] p-2.5 shadow-none shrink-0 ${className}`}>
      {/* Concentric sage circular frame */}
      <div className="absolute inset-2.5 rounded-full border-[1.5px] border-[#7C9473]/90 pointer-events-none" />
      
      {/* Center White/Cream Montessori Tray & Objects */}
      <TrayLogo className="w-3/5 h-3/5 relative z-10" strokeColor="#F3EDE1" />
    </div>
  );
}

// Hand line-icon (Practical Life, terracotta #C1785A)
export function HandIcon({ className = 'w-6 h-6', stroke = '#C1785A' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 11V6a2 2 0 0 0-4 0v4" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M6 14v-1a2 2 0 0 0-4 0v5a7 7 0 0 0 7 7h3a8 8 0 0 0 8-8v-3a2 2 0 0 0-4 0" />
    </svg>
  );
}

// Eye line-icon (Sensorial, blue #7C93A8)
export function EyeIcon({ className = 'w-6 h-6', stroke = '#7C93A8' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3.25" />
      <circle cx="12" cy="12" r="1" fill={stroke} />
    </svg>
  );
}

// Speech bubble line-icon (Language, sage #7C9473)
export function SpeechBubbleIcon({ className = 'w-6 h-6', stroke = '#7C9473' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="8.5" cy="12" r="0.75" fill={stroke} />
      <circle cx="12" cy="12" r="0.75" fill={stroke} />
      <circle cx="15.5" cy="12" r="0.75" fill={stroke} />
    </svg>
  );
}

// Running figure line-icon (Movement, mustard/wood #8B6A4A)
export function RunningFigureIcon({ className = 'w-6 h-6', stroke = '#8B6A4A' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Head */}
      <circle cx="14" cy="4" r="2.2" />
      {/* Body torso */}
      <path d="m7 21 3.5-6.5L8 10l5-3 3 3-3 3" />
      {/* Arms and stride */}
      <path d="M5 8.5 8 10l4.5-1.5L16 11l3-1.5" />
      <path d="m14 13.5 3 4 3-1.5" />
    </svg>
  );
}

// Checkmark icon with circle
export function CheckIcon({ className = 'w-4 h-4', color = '#7C9473' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.5" fill="#E9EEE3" />
      <path d="M6.5 10L8.8 12.3L13.5 7.5" stroke="#455C3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
