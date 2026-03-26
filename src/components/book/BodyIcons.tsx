import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

const svgProps = (size: number, className: string) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24' as const,
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
});

/**
 * Flexed arm / bicep — iconic 💪 silhouette.
 * Bent arm viewed from the side showing bicep bulge, fist at top.
 */
export function ArmIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Shoulder to elbow (upper arm) */}
      <path d="M6 16c0-1.5.8-3 2-4" />
      {/* Bicep bulge */}
      <path d="M8 12c.5-2 2-4 4-5" />
      {/* Forearm rising to fist */}
      <path d="M12 7c1.5-.3 2.5.2 3 1s.5 2 0 3" />
      {/* Fist */}
      <path d="M15 11c-.5.8-1.5 1.2-2.5 1" />
      {/* Inner arm line (tricep side) */}
      <path d="M6 16c1-.5 2.5-1.5 3.5-3c1-1.5 1.5-2.5 3-2" />
      {/* Fist closing line */}
      <path d="M12.5 12c0-.8.5-1.5 1.2-1.8" />
    </svg>
  );
}

/**
 * Back — upper body seen from behind.
 * Simple shoulders tapering to waist, spine line down center.
 */
export function BackIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Left shoulder to waist */}
      <path d="M5 5c1-.5 2.5-.8 4-1" />
      <path d="M5 5c-.5 1.5-.5 3.5 0 6c.5 2 1.5 4 2.5 5.5L9 19" />
      {/* Right shoulder to waist */}
      <path d="M19 5c-1-.5-2.5-.8-4-1" />
      <path d="M19 5c.5 1.5.5 3.5 0 6c-.5 2-1.5 4-2.5 5.5L15 19" />
      {/* Neck */}
      <path d="M9 4c1-.3 2-.4 3-.4s2 .1 3 .4" />
      {/* Spine */}
      <path d="M12 5v14" />
      {/* Shoulder blade hints */}
      <path d="M9 8c.8.4 1.2 1 1.5 2" />
      <path d="M15 8c-.8.4-1.2 1-1.5 2" />
    </svg>
  );
}

/**
 * Chest — front upper body, neck to mid-chest.
 * Shoulders, collarbone, pec outline.
 */
export function ChestIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Neck */}
      <path d="M10 4h4" />
      {/* Left shoulder */}
      <path d="M10 4c-1 .5-2.5 1-4 1.5C4.5 6 4 7 4 8" />
      {/* Right shoulder */}
      <path d="M14 4c1 .5 2.5 1 4 1.5c1.5.5 2 1.5 2 2.5" />
      {/* Left pec */}
      <path d="M4 8c.5 2.5 2 4.5 4 5.5c1.5.8 3 1 4 1" />
      {/* Right pec */}
      <path d="M20 8c-.5 2.5-2 4.5-4 5.5c-1.5.8-3 1-4 1" />
      {/* Sternum */}
      <path d="M12 6v8" />
      {/* Lower torso sides */}
      <path d="M7 14c-.5 1.5-1 3.5-1 5" />
      <path d="M17 14c.5 1.5 1 3.5 1 5" />
    </svg>
  );
}

/**
 * Torso — full front body, shoulders to hips.
 * Clean outline silhouette with subtle waist taper.
 */
export function TorsoIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Shoulders */}
      <path d="M7 3h10" />
      {/* Left side — shoulder to hip with waist taper */}
      <path d="M7 3c-1.5 1-2.5 3-2.5 5c0 2 .5 3.5 1 4.5c-.5 1-1 2.5-1 4c0 1.5.5 2.5.5 3.5" />
      {/* Right side */}
      <path d="M17 3c1.5 1 2.5 3 2.5 5c0 2-.5 3.5-1 4.5c.5 1 1 2.5 1 4c0 1.5-.5 2.5-.5 3.5" />
      {/* Hips */}
      <path d="M5 20h14" />
      {/* Center line */}
      <path d="M12 3v17" />
    </svg>
  );
}

/**
 * Leg — single leg from hip to foot, side profile.
 * Thigh, knee, calf, ankle, foot.
 */
export function LegIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Front of leg — thigh to shin to foot */}
      <path d="M9 2c-.5 2.5-1 5-1 7.5c0 1.5.5 2.5 1 3.5c-.5 2-1 4-1 5.5c0 1 0 2.5 1 3.5h4" />
      {/* Back of leg — thigh, calf curve */}
      <path d="M15 2c.5 2.5 1 5 1 7c0 1.5-.5 3-1.5 4c.5 1.5 1 3 1 4.5c0 1-.5 2.5-1.5 3l-.5.5" />
      {/* Knee cap hint */}
      <path d="M9.5 12.5c1-.5 2-.7 3-.5" />
      {/* Foot bottom */}
      <path d="M13 22h-4" />
    </svg>
  );
}

/**
 * Ribs — side of torso with curved rib lines.
 * Side profile of ribcage, clean and readable.
 */
export function RibsIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Torso side outline — left */}
      <path d="M7 3c-1 1.5-1.5 3.5-1.5 6c0 3 .5 5.5 1.5 8v3" />
      {/* Torso side outline — right */}
      <path d="M17 3c1 1.5 1.5 3.5 1.5 6c0 3-.5 5.5-1.5 8v3" />
      {/* Rib lines — 4 curved lines */}
      <path d="M7.5 6.5c3 1 6 1 9 0" />
      <path d="M7 9c3 1.2 6.5 1.2 10 0" />
      <path d="M7 11.5c3 1.2 6.5 1.2 10 0" />
      <path d="M7.5 14c3 1 6 1 9 0" />
    </svg>
  );
}

/**
 * Hand — open palm, fingers spread.
 * Clean five-finger hand, palm forward. Inspired by Lucide hand icon approach.
 */
export function HandIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Thumb */}
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      {/* Index finger */}
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      {/* Middle finger */}
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      {/* Ring + pinky + palm */}
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

/**
 * Neck — area between jaw and shoulders.
 * Head bottom, neck cylinder, collarbone/shoulders.
 */
export function NeckIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Jawline / chin */}
      <path d="M8 5c0-1.5 1.8-3 4-3s4 1.5 4 3" />
      {/* Left side of neck */}
      <path d="M8 5v7" />
      {/* Right side of neck */}
      <path d="M16 5v7" />
      {/* Left shoulder */}
      <path d="M8 12c-2 .5-3.5 1.5-4.5 3c-.5.8-.5 1.5-.5 2" />
      {/* Right shoulder */}
      <path d="M16 12c2 .5 3.5 1.5 4.5 3c.5.8.5 1.5.5 2" />
      {/* Collarbone */}
      <path d="M3 17h7" />
      <path d="M14 17h7" />
      {/* Throat center hint */}
      <path d="M12 5v8" />
    </svg>
  );
}

/**
 * Abdomen — lower belly/midsection, front view.
 * Torso section from ribs to hips with navel.
 */
export function AbdomenIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Left side */}
      <path d="M6 3c-1 2-1.5 4.5-1.5 7c0 3 .5 5.5 1 7.5L7 21" />
      {/* Right side */}
      <path d="M18 3c1 2 1.5 4.5 1.5 7c0 3-.5 5.5-1 7.5L17 21" />
      {/* Top waist line */}
      <path d="M6 3h12" />
      {/* Hip line */}
      <path d="M7 21h10" />
      {/* Center line */}
      <path d="M12 3v7" />
      <path d="M12 14v7" />
      {/* Navel */}
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

/**
 * Foot — side profile of a foot.
 * Ankle, heel, arch, ball, toes — clean shoe-like silhouette.
 */
export function FootIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Ankle to heel to toes — top line */}
      <path d="M4 8c0-2 1-3 2.5-3c1 0 1.5.5 2 1.5c.5 1.5.5 3 1 4.5c.5 1 1.5 2 3 2.5c2 .5 4 1 5.5 1.5c1 .5 2 1.5 2 3" />
      {/* Sole — heel along bottom to toes */}
      <path d="M4 8c0 2-.5 4-.5 6c0 1.5.5 2.5 1.5 3c1.5.8 3.5 1 6 1h5c2 0 3-.5 4-1" />
      {/* Ankle bone */}
      <circle cx="6" cy="7" r="1" />
    </svg>
  );
}

/**
 * Glutes — tasteful rear view from waist to upper thigh.
 * Simple rounded silhouette, clean and professional.
 */
export function GlutesIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Waistband */}
      <path d="M5 5h14" />
      {/* Left side — waist to thigh */}
      <path d="M5 5c-1 2-1.5 4.5-1 7c.5 2 1.5 3.5 3 5l1 2" />
      {/* Right side — waist to thigh */}
      <path d="M19 5c1 2 1.5 4.5 1 7c-.5 2-1.5 3.5-3 5l-1 2" />
      {/* Center divide — natural crease */}
      <path d="M12 6c-1 3-2 6-2 8c0 1 0 2.5.5 4" />
      <path d="M12 6c1 3 2 6 2 8c0 1 0 2.5-.5 4" />
      {/* Upper thigh lines */}
      <path d="M8 19h2.5" />
      <path d="M13.5 19h2.5" />
    </svg>
  );
}

/**
 * Face — front-facing head oval with minimal features.
 * Clean oval face shape, just enough detail to read as a face.
 */
export function FaceIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      {/* Head / face oval */}
      <path d="M12 2C8.5 2 6 5 6 9c0 2.5.8 4.5 2 6c1 1.2 2.2 2.5 4 3c1.8-.5 3-1.8 4-3c1.2-1.5 2-3.5 2-6c0-4-2.5-7-6-7z" />
      {/* Left ear */}
      <path d="M6 8.5c-.6 0-1 .7-1 1.5s.4 1.5 1 1.5" />
      {/* Right ear */}
      <path d="M18 8.5c.6 0 1 .7 1 1.5s-.4 1.5-1 1.5" />
      {/* Eyes */}
      <circle cx="9.5" cy="9" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="9" r="0.75" fill="currentColor" stroke="none" />
      {/* Nose hint */}
      <path d="M12 10v2.5" />
      {/* Mouth */}
      <path d="M10 15c.8.5 1.3.7 2 .7s1.2-.2 2-.7" />
    </svg>
  );
}
