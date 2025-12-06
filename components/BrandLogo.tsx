import React from 'react';

export const BrandLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Top arc for "GLOBAL SUCCESS" - Counter Clockwise from left to right (Dome) */}
        <path id="curveTop" d="M 25,100 A 75,75 0 0,1 175,100" />
      </defs>
      
      {/* Main Blue Circle */}
      <circle cx="100" cy="100" r="98" fill="#003366" stroke="#FFD700" strokeWidth="5" />
      {/* Inner Gold Ring */}
      <circle cx="100" cy="100" r="88" fill="none" stroke="#FFD700" strokeWidth="1.5" />
      
      {/* Star / Compass Graphic Background */}
      {/* Large 8-point star */}
      <path d="M100 15 L120 80 L185 100 L120 120 L100 185 L80 120 L15 100 L80 80 Z" fill="#FFD700" />

      {/* Top Curved Text */}
      <text fill="#FFFFFF" fontSize="11" fontWeight="bold" letterSpacing="1.2">
        <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
          YOUR PATHWAY TO GLOBAL SUCCESS
        </textPath>
      </text>

      {/* Main Text Block */}
      {/* White text with thick blue stroke for readability over the gold star */}
      <g transform="translate(0, 5)">
        <text 
          x="100" 
          y="105" 
          textAnchor="middle" 
          fill="#FFFFFF" 
          stroke="#003366" 
          strokeWidth="4" 
          strokeLinejoin="round"
          paintOrder="stroke"
          fontSize="28" 
          fontWeight="900" 
          fontFamily="serif"
        >
          TIME WISE
        </text>
        
        <text 
          x="100" 
          y="135" 
          textAnchor="middle" 
          fill="#FFFFFF" 
          stroke="#003366" 
          strokeWidth="3" 
          strokeLinejoin="round"
          paintOrder="stroke"
          fontSize="16" 
          fontWeight="bold" 
          letterSpacing="0.5" 
          fontFamily="sans-serif"
        >
          CONSULTANT
        </text>
      </g>
    </svg>
  );
};
