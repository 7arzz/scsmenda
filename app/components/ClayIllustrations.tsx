import React from "react";

// ============================================================================
// 1. CLAY HERO SCENE (Central 3D Clay Startup & Student Ecosystem)
// ============================================================================
export function ClayHeroScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Decorative Memphis Background Blobs & Dots */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FFE500]/25 rounded-full blur-2xl -z-10 animate-gentle-pulse pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-[#0284C7]/15 rounded-full blur-2xl -z-10 pointer-events-none" />

      <svg
        viewBox="0 0 600 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl"
        aria-label="3D Clay Illustration of Student Company Ecosystem"
      >
        <defs>
          {/* Gradients for Clay Character */}
          <linearGradient id="claySkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE0BD" />
            <stop offset="60%" stopColor="#F7C498" />
            <stop offset="100%" stopColor="#D99B6A" />
          </linearGradient>

          <linearGradient id="clayHair" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A2D34" />
            <stop offset="50%" stopColor="#181A20" />
            <stop offset="100%" stopColor="#0B0C0E" />
          </linearGradient>

          <linearGradient id="clayHoodie" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE933" />
            <stop offset="40%" stopColor="#FFE500" />
            <stop offset="100%" stopColor="#D9A800" />
          </linearGradient>

          {/* Gradients for 3D Clay Rocket */}
          <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F1F4F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="rocketCone" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A5C" />
            <stop offset="50%" stopColor="#FF5A36" />
            <stop offset="100%" stopColor="#C83214" />
          </linearGradient>

          <linearGradient id="rocketFin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          {/* Clay Gold Coin */}
          <radialGradient id="clayCoin" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFF9A6" />
            <stop offset="35%" stopColor="#FFD700" />
            <stop offset="80%" stopColor="#E69500" />
            <stop offset="100%" stopColor="#B36B00" />
          </radialGradient>

          {/* Clay Laptop */}
          <linearGradient id="laptopLid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="70%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>

          {/* Soft Clay Shadow Filter */}
          <filter id="clayShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#0F1115" floodOpacity="0.14" />
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0F1115" floodOpacity="0.08" />
          </filter>

          <filter id="softContactShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
            <feOffset dx="0" dy="16" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.18" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <linearGradient id="coralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A5C" />
            <stop offset="100%" stopColor="#E03A16" />
          </linearGradient>

          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {/* Base Platform Shadow */}
        <ellipse cx="300" cy="470" rx="220" ry="24" fill="#0F1115" opacity="0.08" />
        <ellipse cx="300" cy="466" rx="160" ry="14" fill="#0F1115" opacity="0.06" />

        {/* ----------------- BACKGROUND MEMPHIS DECORATIONS ----------------- */}
        {/* Yellow Clay Cylinder */}
        <g transform="translate(60, 110) rotate(-15)" filter="url(#clayShadow)">
          <path
            d="M20 15 C20 6.7 33.4 0 50 0 C66.6 0 80 6.7 80 15 L80 65 C80 73.3 66.6 80 50 80 C33.4 80 20 73.3 20 65 Z"
            fill="url(#clayHoodie)"
          />
          <ellipse cx="50" cy="15" rx="30" ry="15" fill="#FFF176" />
          <ellipse cx="48" cy="14" rx="22" ry="10" fill="#FFEE58" />
        </g>

        {/* Coral Sphere with Specular */}
        <g transform="translate(500, 240)" filter="url(#clayShadow)">
          <circle cx="35" cy="35" r="35" fill="url(#coralGrad)" />
          <ellipse cx="25" cy="20" rx="12" ry="7" fill="#FFFFFF" opacity="0.5" />
          <circle cx="20" cy="18" r="3" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Cyan Torus / Donut */}
        <g transform="translate(460, 70) rotate(25)" filter="url(#clayShadow)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 0 C77.6 0 100 22.4 100 50 C100 77.6 77.6 100 50 100 C22.4 100 0 77.6 0 50 C0 22.4 22.4 0 50 0 Z M50 26 C63.2 26 74 36.8 74 50 C74 63.2 63.2 74 50 74 C36.8 74 26 63.2 26 50 C26 36.8 36.8 26 50 26 Z"
            fill="url(#donutGrad)"
          />
          <ellipse cx="38" cy="22" rx="14" ry="6" fill="#BAE6FD" opacity="0.6" transform="rotate(-15 38 22)" />
        </g>

        {/* Memphis Geometric Squiggle Wire */}
        <path
          d="M70 280 Q90 260 110 280 T150 280 T190 280"
          stroke="#0F1115"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Black & Yellow Memphis Crosses */}
        <g transform="translate(130, 70)">
          <path d="M-10 0 L10 0 M0 -10 L0 10" stroke="#0F1115" strokeWidth="5" strokeLinecap="round" />
        </g>
        <g transform="translate(440, 390)">
          <path d="M-8 0 L8 0 M0 -8 L0 8" stroke="#FFE500" strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* Polka Dot Matrix */}
        <g opacity="0.4">
          <circle cx="490" cy="160" r="3.5" fill="#0F1115" />
          <circle cx="510" cy="160" r="3.5" fill="#0F1115" />
          <circle cx="530" cy="160" r="3.5" fill="#0F1115" />
          <circle cx="490" cy="180" r="3.5" fill="#0F1115" />
          <circle cx="510" cy="180" r="3.5" fill="#0F1115" />
          <circle cx="530" cy="180" r="3.5" fill="#0F1115" />
        </g>

        {/* ----------------- 3D CLAY ROCKET (TOP RIGHT) ----------------- */}
        <g transform="translate(390, 110) rotate(18)" filter="url(#clayShadow)" className="animate-soft-float">
          {/* Flame Puffs */}
          <path
            d="M45 130 C45 155 35 175 35 185 C45 175 55 185 55 175 C55 165 65 175 65 155 Z"
            fill="#FF5A36"
          />
          <path
            d="M40 130 C40 148 35 160 45 168 C55 160 50 148 50 130 Z"
            fill="#FFE500"
          />
          {/* Back Smoke Puff */}
          <circle cx="50" cy="185" r="14" fill="#E2E8F0" />
          <circle cx="34" cy="195" r="10" fill="#CBD5E1" />
          <circle cx="62" cy="192" r="11" fill="#E2E8F0" />

          {/* Fins */}
          <path
            d="M20 95 C10 100 0 115 5 130 C15 130 25 125 25 110 Z"
            fill="url(#rocketFin)"
          />
          <path
            d="M80 95 C90 100 100 115 95 130 C85 130 75 125 75 110 Z"
            fill="url(#rocketFin)"
          />
          {/* Center Fin */}
          <rect x="46" y="90" width="8" height="35" rx="4" fill="#0369A1" />

          {/* Rocket Fuselage */}
          <path
            d="M20 70 C20 30 50 5 50 5 C50 5 80 30 80 70 L80 120 C80 125 70 130 50 130 C30 130 20 125 20 120 Z"
            fill="url(#rocketBody)"
          />
          {/* Nosecone */}
          <path
            d="M26 50 C32 25 50 5 50 5 C50 5 68 25 74 50 Z"
            fill="url(#rocketCone)"
          />
          {/* Porthole */}
          <circle cx="50" cy="75" r="14" fill="#0284C7" />
          <circle cx="50" cy="75" r="10" fill="#E0F2FE" />
          <ellipse cx="47" cy="72" rx="4" ry="2" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* ----------------- 3D CLAY STUDENT ENTREPRENEUR ----------------- */}
        <g transform="translate(190, 160)" filter="url(#clayShadow)">
          {/* Body / Vibrant Yellow Clay Hoodie */}
          <path
            d="M40 240 C40 180 60 160 110 160 C160 160 180 180 180 240 L195 300 C195 310 180 315 110 315 C40 315 25 310 25 300 Z"
            fill="url(#clayHoodie)"
          />
          {/* Collar / Neckline Accent */}
          <path
            d="M85 165 C95 178 125 178 135 165"
            stroke="#0F1115"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M100 175 L96 215 M120 175 L124 215"
            stroke="#0F1115"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Head / Neck */}
          <rect x="95" y="130" width="30" height="35" rx="10" fill="url(#claySkin)" />
          
          {/* Rounded Clay Head */}
          <circle cx="110" cy="100" r="50" fill="url(#claySkin)" />
          
          {/* Stylized Clay Hair */}
          <path
            d="M60 95 C60 55 80 40 110 40 C145 40 165 58 165 95 C165 105 160 115 155 115 C150 115 148 100 145 95 C135 75 115 70 85 80 C75 83 65 105 60 95 Z"
            fill="url(#clayHair)"
          />
          <path
            d="M60 95 Q85 60 135 68 Q158 72 165 95"
            stroke="#3F424E"
            strokeWidth="4"
            fill="none"
          />

          {/* Modern Bold Black Glasses */}
          <rect x="76" y="86" width="28" height="22" rx="7" fill="none" stroke="#0F1115" strokeWidth="4.5" />
          <rect x="116" y="86" width="28" height="22" rx="7" fill="none" stroke="#0F1115" strokeWidth="4.5" />
          <line x1="104" y1="96" x2="116" y2="96" stroke="#0F1115" strokeWidth="4" />

          {/* Friendly Eyes behind glasses */}
          <circle cx="90" cy="97" r="3.5" fill="#0F1115" />
          <circle cx="130" cy="97" r="3.5" fill="#0F1115" />
          <circle cx="91.5" cy="95.5" r="1.2" fill="#FFFFFF" />
          <circle cx="131.5" cy="95.5" r="1.2" fill="#FFFFFF" />

          {/* Cheerful Smile */}
          <path
            d="M98 120 Q110 130 122 120"
            stroke="#B45309"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Cheeks blush */}
          <ellipse cx="78" cy="115" rx="7" ry="4" fill="#FF7A5C" opacity="0.4" />
          <ellipse cx="142" cy="115" rx="7" ry="4" fill="#FF7A5C" opacity="0.4" />

          {/* Left Arm & Thumbs-Up Clay Hand */}
          <g transform="translate(10, 185) rotate(-20)">
            <rect x="0" y="0" width="32" height="75" rx="16" fill="url(#clayHoodie)" />
            {/* Cute Clay Hand */}
            <circle cx="16" cy="85" r="16" fill="url(#claySkin)" />
            <rect x="12" y="70" width="10" height="18" rx="5" fill="url(#claySkin)" transform="rotate(-30 12 70)" />
          </g>

          {/* Right Arm holding laptop edge */}
          <g transform="translate(170, 185) rotate(15)">
            <rect x="0" y="0" width="32" height="75" rx="16" fill="url(#clayHoodie)" />
            <circle cx="16" cy="85" r="16" fill="url(#claySkin)" />
          </g>
        </g>

        {/* ----------------- 3D CLAY LAPTOP (WORKSTATION) ----------------- */}
        <g transform="translate(180, 360)" filter="url(#clayShadow)">
          {/* Laptop Base */}
          <path
            d="M30 70 L210 70 L230 92 C232 94 228 97 220 97 L20 97 C12 97 8 94 10 92 Z"
            fill="#CBD5E1"
            stroke="#94A3B8"
            strokeWidth="2"
          />
          <ellipse cx="120" cy="84" rx="20" ry="5" fill="#94A3B8" opacity="0.5" />

          {/* Laptop Screen (Angled Up) */}
          <path
            d="M30 70 L50 -25 C51 -30 55 -34 60 -34 L180 -34 C185 -34 189 -30 190 -25 L210 70 Z"
            fill="url(#laptopLid)"
          />
          {/* Screen Display Frame */}
          <path
            d="M37 64 L54 -20 C55 -23 57 -25 60 -25 L180 -25 C183 -25 185 -23 186 -20 L203 64 Z"
            fill="#0F172A"
          />
          {/* Screen Content: Colorful Corporate Infographic Charts */}
          <g transform="translate(68, -12)">
            {/* Chart 1: Yellow Growth Bar */}
            <rect x="0" y="35" width="16" height="30" rx="3" fill="#FFE500" />
            <rect x="22" y="20" width="16" height="45" rx="3" fill="#38BDF8" />
            <rect x="44" y="8" width="16" height="57" rx="3" fill="#34D399" />
            <rect x="66" y="-3" width="16" height="68" rx="3" fill="#FF5A36" />
            {/* Trend line */}
            <path
              d="M8 30 L30 15 L52 4 L74 -8"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="74" cy="-8" r="3.5" fill="#FFE500" />
          </g>
        </g>

        {/* ----------------- 3D CLAY GOLD COIN (DIVIDEN & PROFIT) ----------------- */}
        <g transform="translate(100, 310)" filter="url(#clayShadow)" className="animate-soft-float-delayed">
          <circle cx="36" cy="36" r="36" fill="url(#clayCoin)" />
          {/* Inner ring */}
          <circle cx="36" cy="36" r="28" fill="none" stroke="#FFF7B2" strokeWidth="3" opacity="0.8" />
          {/* Rp / Currency Symbol */}
          <text
            x="36"
            y="43"
            fontSize="22"
            fontWeight="900"
            fontFamily="sans-serif"
            fill="#7C2D12"
            textAnchor="middle"
          >
            Rp
          </text>
          {/* Coin Highlight */}
          <ellipse cx="26" cy="20" rx="14" ry="7" fill="#FFFFFF" opacity="0.6" />
        </g>

        {/* Secondary Coin */}
        <g transform="translate(70, 395) scale(0.75)" filter="url(#clayShadow)">
          <circle cx="36" cy="36" r="36" fill="url(#clayCoin)" />
          <text
            x="36"
            y="43"
            fontSize="22"
            fontWeight="900"
            fontFamily="sans-serif"
            fill="#7C2D12"
            textAnchor="middle"
          >
            %
          </text>
        </g>

        {/* ----------------- 3D CLAY LIGHTBULB (INNOVATION & R&D) ----------------- */}
        <g transform="translate(120, 110) rotate(-10)" filter="url(#clayShadow)" className="animate-soft-float">
          {/* Glow backdrop */}
          <circle cx="30" cy="30" r="36" fill="#FFE500" opacity="0.25" filter="blur(6px)" />
          {/* Glass bulb */}
          <path
            d="M30 6 C16.7 6 6 16.7 6 30 C6 38.5 10.5 45.8 17 50 L17 58 C17 60 19 62 21 62 L39 62 C41 62 43 60 43 58 L43 50 C49.5 45.8 54 38.5 54 30 C54 16.7 43.3 6 30 6 Z"
            fill="#FFE500"
          />
          {/* Screw Base */}
          <rect x="20" y="63" width="20" height="4" rx="2" fill="#94A3B8" />
          <rect x="22" y="68" width="16" height="4" rx="2" fill="#64748B" />
          <path d="M26 72 L34 72 C34 75 30 76 30 76 C30 76 26 75 26 72 Z" fill="#475569" />
          {/* Bulb Filament */}
          <path
            d="M24 35 L26 22 L30 27 L34 22 L36 35"
            stroke="#B45309"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Specular */}
          <ellipse cx="20" cy="18" rx="6" ry="10" fill="#FFFFFF" opacity="0.75" transform="rotate(-30 20 18)" />
        </g>

        {/* ----------------- 3D CLAY BADGE: "100% PRAKTIK RIIL" ----------------- */}
        <g transform="translate(370, 390)" filter="url(#clayShadow)" className="animate-soft-float">
          <rect
            x="0"
            y="0"
            width="170"
            height="56"
            rx="28"
            fill="#0F1115"
            stroke="#FFE500"
            strokeWidth="3"
          />
          <circle cx="28" cy="28" r="16" fill="#FFE500" />
          {/* Star inside badge circle */}
          <path
            d="M28 18 L30.5 24 L37 24.5 L32 29 L33.5 35.5 L28 32 L22.5 35.5 L24 29 L19 24.5 L25.5 24 Z"
            fill="#0F1115"
          />
          <text x="56" y="27" fontSize="11" fontWeight="900" fontFamily="sans-serif" fill="#FFE500" letterSpacing="1">
            LAB BISNIS
          </text>
          <text x="56" y="42" fontSize="10" fontWeight="700" fontFamily="sans-serif" fill="#FFFFFF">
            Praktik Riil 3 Bulan
          </text>
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// 2. 3D CLAY ROCKET (Launch & Go-to-Market)
// ============================================================================
export function ClayRocket({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="crBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="crNose" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE033" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <filter id="crShad" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0F1115" floodOpacity="0.12" />
        </filter>
      </defs>
      <g filter="url(#crShad)">
        {/* Flame */}
        <path d="M80 120 C80 145 68 155 80 160 C92 155 80 145 80 120 Z" fill="#FF5A36" />
        <path d="M80 122 C80 138 73 146 80 150 C87 146 80 138 80 122 Z" fill="#FFE500" />
        {/* Fins */}
        <path d="M52 95 C38 100 32 118 36 128 C50 128 60 120 60 108 Z" fill="#0284C7" />
        <path d="M108 95 C122 100 128 118 124 128 C110 128 100 120 100 108 Z" fill="#0284C7" />
        {/* Body */}
        <path d="M54 75 C54 36 80 14 80 14 C80 14 106 36 106 75 L106 118 C106 124 96 128 80 128 C64 128 54 124 54 118 Z" fill="url(#crBody)" stroke="#E2E8F0" strokeWidth="1.5" />
        {/* Nosecone */}
        <path d="M58 54 C66 30 80 14 80 14 C80 14 94 30 102 54 Z" fill="url(#crNose)" />
        {/* Window */}
        <circle cx="80" cy="74" r="14" fill="#0284C7" />
        <circle cx="80" cy="74" r="10" fill="#E0F2FE" />
        <ellipse cx="77" cy="71" rx="4" ry="2" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// ============================================================================
// 3. 3D CLAY PIGGY BANK (Likuidasi, Dividen & CSR)
// ============================================================================
export function ClayPiggyBank({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pigPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="60%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
        <radialGradient id="goldCoinRad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF9A6" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B45309" />
        </radialGradient>
        <filter id="pigShad" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0F1115" floodOpacity="0.12" />
        </filter>
      </defs>
      <g filter="url(#pigShad)">
        {/* Floating Gold Coin entering slot */}
        <g transform="translate(68, 12)">
          <ellipse cx="12" cy="18" rx="14" ry="9" fill="url(#goldCoinRad)" stroke="#F59E0B" strokeWidth="1.5" />
          <ellipse cx="12" cy="16" rx="8" ry="4" fill="#FEF08A" opacity="0.8" />
        </g>
        {/* Piggy Body */}
        <ellipse cx="80" cy="95" rx="46" ry="36" fill="url(#pigPink)" />
        {/* Back Legs */}
        <rect x="54" y="122" width="12" height="18" rx="6" fill="#E11D48" />
        <rect x="94" y="122" width="12" height="18" rx="6" fill="#E11D48" />
        {/* Ears */}
        <path d="M52 68 C48 55 58 50 64 62 Z" fill="#FB7185" />
        <path d="M102 68 C106 55 96 50 90 62 Z" fill="#FB7185" />
        {/* Snout */}
        <ellipse cx="122" cy="95" rx="14" ry="11" fill="#F43F5E" />
        <circle cx="119" cy="95" r="2.5" fill="#881337" />
        <circle cx="125" cy="95" r="2.5" fill="#881337" />
        {/* Eye */}
        <circle cx="102" cy="84" r="3.5" fill="#0F1115" />
        <circle cx="103" cy="83" r="1.2" fill="#FFFFFF" />
        {/* Coin Slot */}
        <rect x="70" y="62" width="20" height="4" rx="2" fill="#4C0519" />
        {/* Highlight Specular */}
        <ellipse cx="68" cy="80" rx="16" ry="8" fill="#FFFFFF" opacity="0.35" transform="rotate(-15 68 80)" />
      </g>
    </svg>
  );
}

// ============================================================================
// 4. 3D CLAY LIGHTBULB (Ide, R&D & Inovasi Produk)
// ============================================================================
export function ClayLightbulb({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="bulbYel" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFDE7" />
          <stop offset="40%" stopColor="#FFE500" />
          <stop offset="100%" stopColor="#F59E0B" />
        </radialGradient>
        <filter id="bulbShad" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0F1115" floodOpacity="0.12" />
        </filter>
      </defs>
      <g filter="url(#bulbShad)">
        {/* Rays / Sparkles */}
        <circle cx="80" cy="22" r="3" fill="#FFE500" />
        <circle cx="36" cy="46" r="3" fill="#FFE500" />
        <circle cx="124" cy="46" r="3" fill="#FFE500" />
        {/* Bulb Body */}
        <path
          d="M80 32 C60.1 32 44 48.1 44 68 C44 80.8 50.8 91.8 60.5 98 L60.5 110 C60.5 113.3 63.2 116 66.5 116 L93.5 116 C96.8 116 99.5 113.3 99.5 110 L99.5 98 C109.2 91.8 116 80.8 116 68 C116 48.1 99.9 32 80 32 Z"
          fill="url(#bulbYel)"
        />
        {/* Screw Base */}
        <rect x="66" y="118" width="28" height="6" rx="3" fill="#94A3B8" />
        <rect x="69" y="126" width="22" height="6" rx="3" fill="#64748B" />
        <path d="M74 134 L86 134 C86 138 80 140 80 140 C80 140 74 138 74 134 Z" fill="#334155" />
        {/* Inner Filament */}
        <path
          d="M72 75 L75 58 L80 64 L85 58 L88 75"
          stroke="#B45309"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Specular */}
        <ellipse cx="66" cy="52" rx="9" ry="15" fill="#FFFFFF" opacity="0.65" transform="rotate(-30 66 52)" />
      </g>
    </svg>
  );
}

// ============================================================================
// 5. 3D CLAY BRIEFCASE (SOP, Business Plan & Legalitas Korporasi)
// ============================================================================
export function ClayBriefcase({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="caseDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2E39" />
          <stop offset="70%" stopColor="#181A20" />
          <stop offset="100%" stopColor="#0B0C0E" />
        </linearGradient>
        <linearGradient id="caseGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF176" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <filter id="bcShad" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0F1115" floodOpacity="0.14" />
        </filter>
      </defs>
      <g filter="url(#bcShad)">
        {/* Handle */}
        <path
          d="M62 48 C62 38 70 32 80 32 C90 32 98 38 98 48"
          stroke="#0F1115"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Briefcase Body */}
        <rect x="30" y="48" width="100" height="74" rx="14" fill="url(#caseDark)" />
        {/* Accent Straps */}
        <rect x="48" y="48" width="10" height="74" fill="#0F1115" />
        <rect x="102" y="48" width="10" height="74" fill="#0F1115" />
        {/* Center Golden Lock */}
        <rect x="72" y="70" width="16" height="16" rx="4" fill="url(#caseGold)" />
        <circle cx="80" cy="78" r="2.5" fill="#78350F" />
        {/* Corner Guards */}
        <rect x="30" y="108" width="12" height="14" rx="4" fill="url(#caseGold)" />
        <rect x="118" y="108" width="12" height="14" rx="4" fill="url(#caseGold)" />
        {/* Specular line */}
        <line x1="38" y1="56" x2="122" y2="56" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// ============================================================================
// 6. 3D CLAY TROPHY (Capaian Kompetensi & Prestasi Bisnis)
// ============================================================================
export function ClayTrophy({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="trophyGold" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF9A6" />
          <stop offset="45%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B45309" />
        </radialGradient>
        <filter id="trophyShad" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0F1115" floodOpacity="0.14" />
        </filter>
      </defs>
      <g filter="url(#trophyShad)">
        {/* Handles */}
        <path
          d="M50 48 C32 48 26 68 40 82 C50 92 60 92 60 92"
          stroke="url(#trophyGold)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M110 48 C128 48 134 68 120 82 C110 92 100 92 100 92"
          stroke="url(#trophyGold)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* Cup */}
        <path
          d="M50 36 L110 36 C110 68 100 96 80 96 C60 96 50 68 50 36 Z"
          fill="url(#trophyGold)"
        />
        {/* Stem */}
        <rect x="74" y="96" width="12" height="20" rx="3" fill="#D97706" />
        {/* Base */}
        <rect x="56" y="116" width="48" height="16" rx="6" fill="#1E293B" />
        <rect x="52" y="128" width="56" height="8" rx="4" fill="#0F172A" />
        {/* Star Badge on cup */}
        <path
          d="M80 50 L83 58 L91 58.5 L85 64 L87 72 L80 67 L73 72 L75 64 L69 58.5 L77 58 Z"
          fill="#FFFFFF"
        />
        {/* Specular */}
        <ellipse cx="62" cy="50" rx="4" ry="12" fill="#FFFFFF" opacity="0.6" />
      </g>
    </svg>
  );
}

// ============================================================================
// 7. 3D CLAY MEGAPHONE (Pemasaran & Promosi)
// ============================================================================
export function ClayMegaphone({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="megaYel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF176" />
          <stop offset="50%" stopColor="#FFE500" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
        <filter id="megaShad" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0F1115" floodOpacity="0.14" />
        </filter>
      </defs>
      <g filter="url(#megaShad)">
        {/* Sound Waves */}
        <path d="M120 54 Q135 70 120 86" stroke="#FF5A36" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M132 44 Q152 70 132 96" stroke="#0284C7" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        {/* Megaphone Cone */}
        <path d="M52 64 L105 44 C108 43 112 45 112 48 L112 92 C112 95 108 97 105 96 L52 76 Z" fill="url(#megaYel)" />
        {/* Back Housing */}
        <rect x="34" y="60" width="22" height="20" rx="8" fill="#0F1115" />
        {/* Handle */}
        <path d="M48 80 L44 116 C44 120 48 122 52 120 L58 80" stroke="#0F1115" strokeWidth="7" strokeLinecap="round" fill="none" />
        {/* Mouth Rim */}
        <ellipse cx="112" cy="70" rx="7" ry="24" fill="#FF5A36" />
        <ellipse cx="112" cy="70" rx="3.5" ry="16" fill="#FFE500" />
      </g>
    </svg>
  );
}

// ============================================================================
// 8. 3D CLAY TARGET / BULLSEYE (Perencanaan & BP Target)
// ============================================================================
export function ClayTarget({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="targetShad" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0F1115" floodOpacity="0.12" />
        </filter>
      </defs>
      <g filter="url(#targetShad)">
        {/* Outer Ring */}
        <circle cx="80" cy="80" r="50" fill="#FF5A36" />
        {/* White Ring */}
        <circle cx="80" cy="80" r="38" fill="#FFFFFF" />
        {/* Yellow Ring */}
        <circle cx="80" cy="80" r="26" fill="#FFE500" />
        {/* Bullseye Center */}
        <circle cx="80" cy="80" r="14" fill="#0F1115" />
        <circle cx="80" cy="80" r="5" fill="#FFE500" />

        {/* Arrow Hit */}
        <g transform="translate(80, 80) rotate(45)">
          <line x1="0" y1="0" x2="-40" y2="0" stroke="#0F1115" strokeWidth="4.5" strokeLinecap="round" />
          <polygon points="-40,-6 -48,-10 -44,0 -48,10 -40,6" fill="#0284C7" />
        </g>
      </g>
    </svg>
  );
}

// ============================================================================
// 9. MEMPHIS DECORATIVE BADGES & CLAY SHAPES
// ============================================================================
export function MemphisPillBadge({
  text,
  color = "yellow",
  className = "",
}: {
  text: string;
  color?: "yellow" | "coral" | "blue" | "black";
  className?: string;
}) {
  const styles = {
    yellow: "bg-[#FFE500] text-[#0F1115] border-[#0F1115]",
    coral: "bg-[#FF5A36] text-white border-[#0F1115]",
    blue: "bg-[#0284C7] text-white border-[#0F1115]",
    black: "bg-[#0F1115] text-[#FFE500] border-[#0F1115]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border-2 shadow-[2px_2px_0px_#0F1115] ${styles[color]} ${className}`}
    >
      {text}
    </span>
  );
}

