import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

const defaultProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function ArmIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Flexed bicep arm */}
      <path d="M6 18c0-1 .5-2 1.5-2.5S9 15 9 13.5c0-1-.5-2-1-3S7 8 7 6.5C7 5 8 4 9.5 4S12 5 12.5 6.5c.3 1 .2 2-.2 3" />
      <path d="M12.3 9.5c1-.5 2.5-.8 3.7-.3s2 1.8 2 3.3c0 1.2-.5 2-1.2 2.8S15 17 15 18" />
      <path d="M9 18h6" />
      <path d="M12.3 9.5c.5.8.7 1.8.7 2.5 0 1-.5 2-1.5 2.5" />
    </svg>
  );
}

export function BackIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Torso from behind - shoulders, spine, waist */}
      <path d="M7 4.5C7 4.5 8.5 4 12 4s5 .5 5 .5" />
      <path d="M7 4.5C5.5 5.5 5 7 5 8.5V13c0 1 .3 2 1 3l1.5 2c.5.7.5 1.5.5 2" />
      <path d="M17 4.5c1.5 1 2 2.5 2 4V13c0 1-.3 2-1 3l-1.5 2c-.5.7-.5 1.5-.5 2" />
      {/* Spine */}
      <path d="M12 5v15" />
      {/* Shoulder blades */}
      <path d="M8.5 7.5c1 .5 1.5 1.5 1.5 2.5" />
      <path d="M15.5 7.5c-1 .5-1.5 1.5-1.5 2.5" />
    </svg>
  );
}

export function ChestIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Front chest / pecs view */}
      <path d="M5 7c0-1 1-2.5 3-3 1.5-.4 3-.5 4-.5s2.5.1 4 .5c2 .5 3 2 3 3" />
      {/* Left pec */}
      <path d="M5 7c0 2 1 4 3 5s3 1.5 4 1.5" />
      {/* Right pec */}
      <path d="M19 7c0 2-1 4-3 5s-3 1.5-4 1.5" />
      {/* Sternum line */}
      <path d="M12 5v9" />
      {/* Lower torso taper */}
      <path d="M7 13c-.5 1-1 3-1 4.5 0 1 .5 2.5.5 2.5" />
      <path d="M17 13c.5 1 1 3 1 4.5 0 1-.5 2.5-.5 2.5" />
    </svg>
  );
}

export function TorsoIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Front torso / abdomen */}
      <path d="M7 3c-1.5.5-2.5 1.5-3 3v5c0 2 .5 4 1.5 5.5L7.5 19c.5.8.5 1.2.5 2" />
      <path d="M17 3c1.5.5 2.5 1.5 3 3v5c0 2-.5 4-1.5 5.5L16.5 19c-.5.8-.5 1.2-.5 2" />
      {/* Center line */}
      <path d="M12 3v18" />
      {/* Horizontal ab lines */}
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9.5 16h5" />
    </svg>
  );
}

export function LegIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Leg from thigh to foot, side view */}
      <path d="M8 2c-.5 2-1 5-1 8s.5 5 1 7c.3 1.3.5 2.5.5 3.5 0 .5 0 1-.3 1.5" />
      <path d="M16 2c.5 2 1 5 1 8s-.5 5-1 7c-.3 1.3-.5 2.5-.5 3.5 0 .5 0 1 .3 1.5" />
      {/* Knee cap indication */}
      <path d="M9 12c1-.5 2-.7 3-.7s2 .2 3 .7" />
      {/* Foot */}
      <path d="M7.7 22h9" />
    </svg>
  );
}

export function RibsIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Side torso showing rib cage area */}
      <path d="M8 3c-1 1-2 3-2 5v4c0 2.5.5 5 1.5 7 .5 1 1 2 1 3" />
      <path d="M16 3c1 1 2 3 2 5v4c0 2.5-.5 5-1.5 7-.5 1-1 2-1 3" />
      {/* Rib lines curving from spine to front */}
      <path d="M9 6c2 .8 4 .8 6 0" />
      <path d="M8.5 8.5c2.5 1 5 1 7 0" />
      <path d="M8.5 11c2.5 1 5 1 7 0" />
      <path d="M9 13.5c2 .8 4 .8 6 0" />
    </svg>
  );
}

export function HandIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Open hand with fingers spread */}
      <path d="M12 22c-2 0-4-.5-5-2l-1.5-3c-.5-1-.5-2-.5-3v-3" />
      <path d="M5 11V8.5C5 7.7 5.7 7 6.5 7S8 7.7 8 8.5V13" />
      {/* Index finger */}
      <path d="M8 13V5.5C8 4.7 8.7 4 9.5 4s1.5.7 1.5 1.5V13" />
      {/* Middle finger */}
      <path d="M11 13V4c0-.8.7-1.5 1.5-1.5S14 3.2 14 4v9" />
      {/* Ring finger */}
      <path d="M14 13V5.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V13" />
      {/* Pinky */}
      <path d="M17 13V8c0-.8.7-1.5 1.5-1.5S20 7.2 20 8v6c0 2-.5 3-1.5 4.5-1 1.5-3 3.5-6.5 3.5" />
    </svg>
  );
}

export function NeckIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Neck and throat area with jaw and shoulders */}
      {/* Jaw line */}
      <path d="M7 5c0-1 1.5-2.5 5-2.5S17 4 17 5" />
      {/* Neck sides */}
      <path d="M7 5v7c-1.5.5-3.5 1.5-4.5 2.5" />
      <path d="M17 5v7c1.5.5 3.5 1.5 4.5 2.5" />
      {/* Shoulders */}
      <path d="M2.5 14.5C2 15.5 2 16.5 2 17" />
      <path d="M21.5 14.5c.5 1 .5 2 .5 2.5" />
      {/* Throat line */}
      <path d="M12 4v9" />
      {/* Adam's apple hint */}
      <path d="M11 7.5l1 1 1-1" />
      {/* Collarbone */}
      <path d="M7 13c-1.5.5-3 1-4 2" />
      <path d="M17 13c1.5.5 3 1 4 2" />
    </svg>
  );
}

export function AbdomenIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Lower belly / stomach area */}
      <path d="M6 4c-1 1-1.5 2.5-1.5 4v6c0 2 .5 3.5 1.5 5l1.5 2" />
      <path d="M18 4c1 1 1.5 2.5 1.5 4v6c0 2-.5 3.5-1.5 5l-1.5 2" />
      {/* Navel / belly button */}
      <circle cx="12" cy="13" r="1" />
      {/* Center line */}
      <path d="M12 4v7" />
      <path d="M12 15v6" />
      {/* Waist curve hints */}
      <path d="M7 10h10" />
      <path d="M7.5 16h9" />
    </svg>
  );
}

export function FootIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Foot from the side */}
      <path d="M4 19h14c1.5 0 3-.5 3.5-2 .3-.8.3-1.5 0-2.5-.5-1.5-2-3-4-4-1.5-.8-2.5-2-3-3.5C14 5.5 13.5 4 13 3c-.3-.5-.7-1-1.2-1-.6 0-1 .5-1.3 1.5-.5 2-.5 4-.5 5.5 0 2-.3 3.5-1 5-1 2-3 2.5-4.5 3.5-.8.5-1.5 1-1.5 1.5" />
      {/* Ankle bone */}
      <circle cx="10" cy="11" r="1" />
      {/* Sole line */}
      <path d="M4 19c0 1 .5 2 2 2h12c1.5 0 3-.5 3-2" />
    </svg>
  );
}

export function GlutesIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Stylized/tasteful rear view - waist to upper thighs */}
      {/* Waist line */}
      <path d="M6 5c1.5-.5 3.5-1 6-1s4.5.5 6 1" />
      {/* Left side */}
      <path d="M6 5c-1.5 1.5-2 4-2 6.5 0 2 .5 3.5 1.5 5L7 19" />
      {/* Right side */}
      <path d="M18 5c1.5 1.5 2 4 2 6.5 0 2-.5 3.5-1.5 5L17 19" />
      {/* Center divide - natural curve */}
      <path d="M12 6v4c0 2-1 4-1.5 5.5C10 17 10 18 10 19" />
      <path d="M12 6v4c0 2 1 4 1.5 5.5.5 1.5.5 2.5.5 3.5" />
      {/* Lower curve */}
      <path d="M7 19h3" />
      <path d="M14 19h3" />
    </svg>
  );
}

export function FaceIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...defaultProps}
    >
      {/* Face outline */}
      <path d="M12 2C8.5 2 5.5 4.5 5 8c-.3 2-.2 3.5.3 5 .5 1.5 1.2 3 2.2 4 1.5 1.5 3 2.5 4.5 3 1.5-.5 3-1.5 4.5-3 1-1 1.7-2.5 2.2-4 .5-1.5.6-3 .3-5-.5-3.5-3.5-6-7-6z" />
      {/* Ears */}
      <path d="M5 9c-.5 0-1 .5-1 1.5S4.5 12 5 12.5" />
      <path d="M19 9c.5 0 1 .5 1 1.5s-.5 1.5-1 2" />
      {/* Eyes */}
      <path d="M8.5 10h2" />
      <path d="M13.5 10h2" />
      {/* Nose */}
      <path d="M11 11.5v2.5c-.5.3 0 .8.5.8h1c.5 0 1-.5.5-.8V11.5" />
      {/* Mouth */}
      <path d="M9.5 16.5c1 .7 2 1 2.5 1s1.5-.3 2.5-1" />
    </svg>
  );
}
