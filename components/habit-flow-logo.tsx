import React from "react";

interface HabitFlowLogoProps {
  className?: string;
}

export const HabitFlowLogo: React.FC<HabitFlowLogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" fill="url(#gradient)" />
      <path
        d="M30 50L45 65L70 35"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3F72AF" />
          <stop offset="1" stopColor="#112D4E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
