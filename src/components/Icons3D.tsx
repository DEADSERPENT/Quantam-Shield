'use client';

export const LockIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3"/>
      </filter>
    </defs>
    <rect x="16" y="28" width="32" height="24" rx="3" fill="url(#lockGrad)" filter="url(#shadow)" opacity="0.9"/>
    <rect x="18" y="30" width="28" height="20" rx="2" fill="#0a0a0f" opacity="0.5"/>
    <path d="M24 28 V20 C24 14.5 28 12 32 12 C36 12 40 14.5 40 20 V28" stroke="url(#lockGrad)" strokeWidth="3" fill="none" filter="url(#shadow)"/>
    <circle cx="32" cy="40" r="3" fill="#00ffff"/>
    <rect x="31" y="40" width="2" height="6" fill="#00ffff"/>
  </svg>
);

export const QuantumIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="quantumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle cx="32" cy="32" r="20" stroke="url(#quantumGrad)" strokeWidth="2" fill="none" filter="url(#glow)"/>
    <circle cx="32" cy="32" r="14" stroke="#00ffff" strokeWidth="1" fill="none" opacity="0.5"/>
    <circle cx="32" cy="32" r="4" fill="url(#quantumGrad)" filter="url(#glow)"/>
    <circle cx="32" cy="16" r="3" fill="#00ffff"/>
    <circle cx="48" cy="32" r="3" fill="#8b5cf6"/>
    <circle cx="32" cy="48" r="3" fill="#00ffff"/>
    <circle cx="16" cy="32" r="3" fill="#8b5cf6"/>
  </svg>
);

export const ShieldIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M32 8 L12 16 L12 28 C12 42 20 52 32 56 C44 52 52 42 52 28 L52 16 Z" fill="url(#shieldGrad)" opacity="0.2"/>
    <path d="M32 12 L16 18 L16 28 C16 40 22 48 32 52 C42 48 48 40 48 28 L48 18 Z" stroke="url(#shieldGrad)" strokeWidth="2" fill="none"/>
    <path d="M26 30 L30 34 L38 26" stroke="#00ffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const KeyIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="keyGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="32" r="12" stroke="url(#keyGrad)" strokeWidth="2" fill="none"/>
    <circle cx="20" cy="32" r="6" fill="url(#keyGrad)" opacity="0.3"/>
    <line x1="28" y1="32" x2="48" y2="32" stroke="url(#keyGrad)" strokeWidth="3"/>
    <rect x="40" y="28" width="4" height="8" fill="#00ffff"/>
    <rect x="36" y="30" width="4" height="4" fill="#8b5cf6"/>
  </svg>
);

export const NetworkIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="netGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="16" r="6" fill="url(#netGrad)"/>
    <circle cx="12" cy="48" r="6" fill="url(#netGrad)"/>
    <circle cx="52" cy="48" r="6" fill="url(#netGrad)"/>
    <circle cx="32" cy="48" r="6" fill="url(#netGrad)"/>
    <line x1="32" y1="22" x2="12" y2="42" stroke="url(#netGrad)" strokeWidth="2"/>
    <line x1="32" y1="22" x2="52" y2="42" stroke="url(#netGrad)" strokeWidth="2"/>
    <line x1="32" y1="22" x2="32" y2="42" stroke="url(#netGrad)" strokeWidth="2"/>
  </svg>
);

export const ChipIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="chipGrad">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
    </defs>
    <rect x="16" y="16" width="32" height="32" rx="2" fill="url(#chipGrad)" opacity="0.2"/>
    <rect x="20" y="20" width="24" height="24" rx="1" stroke="url(#chipGrad)" strokeWidth="2" fill="none"/>
    <rect x="26" y="26" width="12" height="12" fill="#00ffff" opacity="0.5"/>
    {[12, 20, 28, 36, 44, 52].map((y) => (
      <g key={y}>
        <rect x="12" y={y-1} width="4" height="2" fill="#8b5cf6"/>
        <rect x="48" y={y-1} width="4" height="2" fill="#8b5cf6"/>
      </g>
    ))}
    {[12, 20, 28, 36, 44, 52].map((x) => (
      <g key={x}>
        <rect x={x-1} y="12" width="2" height="4" fill="#00ffff"/>
        <rect x={x-1} y="48" width="2" height="4" fill="#00ffff"/>
      </g>
    ))}
  </svg>
);

export const CloudIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="cloudGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M16 36 C16 30 20 26 26 26 C26 20 30 16 36 16 C42 16 46 20 46 26 C52 26 56 30 56 36 C56 42 52 46 46 46 L22 46 C18 46 16 42 16 36 Z" fill="url(#cloudGrad)" opacity="0.2"/>
    <path d="M18 36 C18 31 21 28 26 28 C26 22 30 18 36 18 C42 18 46 22 46 28 C51 28 54 31 54 36 C54 41 51 44 46 44 L22 44 C19 44 18 41 18 36 Z" stroke="url(#cloudGrad)" strokeWidth="2" fill="none"/>
  </svg>
);

export const MobileIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="mobileGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect x="20" y="8" width="24" height="48" rx="3" stroke="url(#mobileGrad)" strokeWidth="2" fill="none"/>
    <rect x="24" y="14" width="16" height="32" fill="url(#mobileGrad)" opacity="0.1"/>
    <circle cx="32" cy="50" r="2" fill="#00ffff"/>
    <line x1="28" y1="11" x2="36" y2="11" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const EnterpriseIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="entGrad">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
    </defs>
    <rect x="12" y="20" width="40" height="32" stroke="url(#entGrad)" strokeWidth="2" fill="none"/>
    <rect x="16" y="24" width="32" height="24" fill="url(#entGrad)" opacity="0.1"/>
    {[26, 32, 38].map((y) => (
      <g key={y}>
        <rect x="20" y={y} width="6" height="4" fill="#00ffff" opacity="0.5"/>
        <rect x="29" y={y} width="6" height="4" fill="#8b5cf6" opacity="0.5"/>
        <rect x="38" y={y} width="6" height="4" fill="#00ffff" opacity="0.5"/>
      </g>
    ))}
    <polygon points="32,8 20,16 44,16" fill="url(#entGrad)" opacity="0.3"/>
  </svg>
);

export const DocumentIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="docGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M20 8 L44 8 L52 16 L52 56 L20 56 Z" stroke="url(#docGrad)" strokeWidth="2" fill="none"/>
    <path d="M44 8 L44 16 L52 16" stroke="url(#docGrad)" strokeWidth="2" fill="none"/>
    <line x1="26" y1="24" x2="46" y2="24" stroke="#00ffff" strokeWidth="2"/>
    <line x1="26" y1="32" x2="46" y2="32" stroke="#8b5cf6" strokeWidth="2"/>
    <line x1="26" y1="40" x2="38" y2="40" stroke="#00ffff" strokeWidth="2"/>
  </svg>
);

export const CodeIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="codeGrad">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
    </defs>
    <path d="M20 24 L12 32 L20 40" stroke="url(#codeGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 24 L52 32 L44 40" stroke="url(#codeGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="36" y1="20" x2="28" y2="44" stroke="#00ffff" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const DownloadIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="dlGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M32 16 L32 40" stroke="url(#dlGrad)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 32 L32 40 L40 32" stroke="url(#dlGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 44 L16 50 C16 52 18 54 20 54 L44 54 C46 54 48 52 48 50 L48 44" stroke="url(#dlGrad)" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const BlogIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="blogGrad">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
    </defs>
    <rect x="12" y="12" width="40" height="40" rx="2" stroke="url(#blogGrad)" strokeWidth="2" fill="none"/>
    <line x1="18" y1="22" x2="46" y2="22" stroke="#00ffff" strokeWidth="2"/>
    <line x1="18" y1="30" x2="46" y2="30" stroke="#8b5cf6" strokeWidth="1.5"/>
    <line x1="18" y1="36" x2="42" y2="36" stroke="#8b5cf6" strokeWidth="1.5"/>
    <line x1="18" y1="42" x2="38" y2="42" stroke="#8b5cf6" strokeWidth="1.5"/>
  </svg>
);

export const TeamIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="teamGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="22" r="8" stroke="url(#teamGrad)" strokeWidth="2" fill="none"/>
    <path d="M20 42 C20 36 25 32 32 32 C39 32 44 36 44 42 L44 48 L20 48 Z" stroke="url(#teamGrad)" strokeWidth="2" fill="none"/>
    <circle cx="16" cy="26" r="6" fill="#8b5cf6" opacity="0.3"/>
    <circle cx="48" cy="26" r="6" fill="#00ffff" opacity="0.3"/>
  </svg>
);

// Box/Package Icon for Getting Started
export const BoxIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="boxGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M32 12 L52 20 L32 28 L12 20 Z" fill="url(#boxGrad)" opacity="0.3"/>
    <path d="M12 20 L12 40 L32 48 L32 28 Z" fill="url(#boxGrad)" opacity="0.2"/>
    <path d="M32 28 L32 48 L52 40 L52 20 Z" fill="url(#boxGrad)" opacity="0.25"/>
    <path d="M32 12 L52 20 L32 28 L12 20 Z" stroke="url(#boxGrad)" strokeWidth="2" fill="none"/>
    <path d="M12 20 L12 40 L32 48 L52 40 L52 20" stroke="url(#boxGrad)" strokeWidth="2" fill="none"/>
    <line x1="32" y1="12" x2="32" y2="48" stroke="url(#boxGrad)" strokeWidth="2"/>
  </svg>
);

// Plug/USB Icon
export const PlugIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="plugGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect x="24" y="20" width="16" height="16" rx="2" fill="url(#plugGrad)" opacity="0.2"/>
    <rect x="26" y="22" width="12" height="12" rx="1" stroke="url(#plugGrad)" strokeWidth="2" fill="none"/>
    <rect x="28" y="36" width="8" height="12" rx="2" fill="url(#plugGrad)" opacity="0.3"/>
    <rect x="28" y="36" width="8" height="12" rx="2" stroke="url(#plugGrad)" strokeWidth="2" fill="none"/>
    <line x1="30" y1="40" x2="30" y2="44" stroke="#00ffff" strokeWidth="2"/>
    <line x1="34" y1="40" x2="34" y2="44" stroke="#00ffff" strokeWidth="2"/>
  </svg>
);

// Disk/Storage Icon
export const DiskIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="diskGrad">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
    </defs>
    <rect x="12" y="12" width="40" height="40" rx="3" fill="url(#diskGrad)" opacity="0.2"/>
    <rect x="14" y="14" width="36" height="36" rx="2" stroke="url(#diskGrad)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="10" stroke="url(#diskGrad)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="4" fill="#00ffff"/>
    <rect x="16" y="18" width="32" height="6" rx="1" fill="#8b5cf6" opacity="0.4"/>
  </svg>
);

// Upload/Arrow Up Icon
export const UploadIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="uploadGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M32 16 L32 44" stroke="url(#uploadGrad)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 24 L32 16 L40 24" stroke="url(#uploadGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 44 L16 50 C16 52 18 54 20 54 L44 54 C46 54 48 52 48 50 L48 44" stroke="url(#uploadGrad)" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Windows Icon
export const WindowsIcon3D = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="winGrad">
        <stop offset="0%" stopColor="#00a4ef" />
        <stop offset="100%" stopColor="#0078d4" />
      </linearGradient>
    </defs>
    <rect x="12" y="12" width="18" height="18" fill="url(#winGrad)"/>
    <rect x="34" y="12" width="18" height="18" fill="url(#winGrad)"/>
    <rect x="12" y="34" width="18" height="18" fill="url(#winGrad)"/>
    <rect x="34" y="34" width="18" height="18" fill="url(#winGrad)"/>
  </svg>
);

// macOS/Apple Icon
export const AppleIcon3D = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="appleGrad">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
    </defs>
    <path d="M38 16 C38 12 40 8 44 8" stroke="url(#appleGrad)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 24 C20 18 24 12 30 12 C34 12 38 14 38 20 C38 32 20 28 20 40 C20 48 24 54 32 54 C40 54 44 48 44 40 C44 30 36 28 36 24" stroke="url(#appleGrad)" strokeWidth="3" strokeLinecap="round" fill="none"/>
  </svg>
);

// Linux/Penguin Icon
export const LinuxIcon3D = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="linuxGrad">
        <stop offset="0%" stopColor="#FCC624" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="28" rx="14" ry="16" fill="url(#linuxGrad)" opacity="0.3"/>
    <ellipse cx="32" cy="28" rx="12" ry="14" stroke="url(#linuxGrad)" strokeWidth="2" fill="none"/>
    <circle cx="28" cy="26" r="2" fill="#000"/>
    <circle cx="36" cy="26" r="2" fill="#000"/>
    <path d="M26 40 L26 50 M38 40 L38 50" stroke="url(#linuxGrad)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M26 50 L22 54 M38 50 L42 54" stroke="url(#linuxGrad)" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// Chrome/Browser Icon
export const BrowserIcon3D = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="chromeGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="20" stroke="url(#chromeGrad)" strokeWidth="3" fill="none"/>
    <circle cx="32" cy="32" r="12" fill="url(#chromeGrad)" opacity="0.2"/>
    <circle cx="32" cy="32" r="8" stroke="url(#chromeGrad)" strokeWidth="2" fill="none"/>
    <line x1="14" y1="24" x2="26" y2="36" stroke="url(#chromeGrad)" strokeWidth="2.5"/>
    <line x1="38" y1="36" x2="50" y2="24" stroke="url(#chromeGrad)" strokeWidth="2.5"/>
  </svg>
);

// Rocket Icon for Getting Started
export const RocketIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="rocketGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M32 8 L40 28 L36 48 L28 48 L24 28 Z" fill="url(#rocketGrad)" opacity="0.3"/>
    <path d="M32 12 L38 28 L36 44 L28 44 L26 28 Z" stroke="url(#rocketGrad)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="22" r="4" fill="#00ffff" opacity="0.5"/>
    <path d="M24 28 L16 40 L24 36 Z" fill="url(#rocketGrad)" opacity="0.4"/>
    <path d="M40 28 L48 40 L40 36 Z" fill="url(#rocketGrad)" opacity="0.4"/>
    <path d="M28 48 L26 56 L28 52 L30 56 Z" fill="#ff6b6b" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1s" repeatCount="indefinite"/>
    </path>
    <path d="M32 48 L30 58 L32 54 L34 58 Z" fill="#ffd93d" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" begin="0.2s" repeatCount="indefinite"/>
    </path>
    <path d="M36 48 L34 56 L36 52 L38 56 Z" fill="#ff6b6b" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1s" begin="0.4s" repeatCount="indefinite"/>
    </path>
  </svg>
);

// Question Mark Icon for FAQ
export const QuestionIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="qGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="20" fill="url(#qGrad)" opacity="0.2"/>
    <circle cx="32" cy="32" r="18" stroke="url(#qGrad)" strokeWidth="3" fill="none"/>
    <path d="M26 24 C26 20 28 16 32 16 C36 16 38 20 38 24 C38 28 34 30 32 32 L32 38" stroke="url(#qGrad)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="32" cy="44" r="2.5" fill="url(#qGrad)"/>
  </svg>
);

// Settings/Gear Icon for FAQ
export const SettingsIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="settingsGrad">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="10" fill="url(#settingsGrad)" opacity="0.2"/>
    <circle cx="32" cy="32" r="8" stroke="url(#settingsGrad)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="4" fill="url(#settingsGrad)"/>
    {[0, 60, 120, 180, 240, 300].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 32 + 12 * Math.cos(rad);
      const y1 = 32 + 12 * Math.sin(rad);
      const x2 = 32 + 18 * Math.cos(rad);
      const y2 = 32 + 18 * Math.sin(rad);
      return (
        <g key={angle}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#settingsGrad)" strokeWidth="3" strokeLinecap="round"/>
          <circle cx={x2} cy={y2} r="3" fill="url(#settingsGrad)"/>
        </g>
      );
    })}
  </svg>
);

// Credit Card Icon for FAQ
export const CreditCardIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="cardGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect x="8" y="20" width="48" height="24" rx="3" fill="url(#cardGrad)" opacity="0.2"/>
    <rect x="10" y="22" width="44" height="20" rx="2" stroke="url(#cardGrad)" strokeWidth="2" fill="none"/>
    <rect x="10" y="26" width="44" height="4" fill="#8b5cf6" opacity="0.5"/>
    <rect x="14" y="34" width="8" height="6" rx="1" fill="#ffd700" opacity="0.8"/>
    <line x1="26" y1="36" x2="48" y2="36" stroke="url(#cardGrad)" strokeWidth="2"/>
  </svg>
);

// Community/People Icon
export const CommunityIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="commGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="20" r="6" fill="url(#commGrad)" opacity="0.4"/>
    <path d="M22 36 C22 30 26 26 32 26 C38 26 42 30 42 36 L42 42 L22 42 Z" fill="url(#commGrad)" opacity="0.3"/>
    <circle cx="18" cy="24" r="5" fill="#8b5cf6" opacity="0.3"/>
    <path d="M12 40 C12 36 14 32 18 32 C20 32 22 33 22 36" stroke="#8b5cf6" strokeWidth="2" opacity="0.4"/>
    <circle cx="46" cy="24" r="5" fill="#00ffff" opacity="0.3"/>
    <path d="M52 40 C52 36 50 32 46 32 C44 32 42 33 42 36" stroke="#00ffff" strokeWidth="2" opacity="0.4"/>
  </svg>
);

// Star Icon
export const StarIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="starGrad">
        <stop offset="0%" stopColor="#ffd93d" />
        <stop offset="100%" stopColor="#ff6b6b" />
      </linearGradient>
    </defs>
    <path d="M32 12 L36 24 L48 26 L40 34 L42 46 L32 40 L22 46 L24 34 L16 26 L28 24 Z" fill="url(#starGrad)" opacity="0.3"/>
    <path d="M32 14 L36 24 L46 26 L39 33 L41 43 L32 38 L23 43 L25 33 L18 26 L28 24 Z" stroke="url(#starGrad)" strokeWidth="2" fill="none"/>
  </svg>
);

// Bug Icon
export const BugIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="bugGrad">
        <stop offset="0%" stopColor="#ff6b6b" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="34" rx="12" ry="14" fill="url(#bugGrad)" opacity="0.3"/>
    <ellipse cx="32" cy="34" rx="10" ry="12" stroke="url(#bugGrad)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="20" r="6" fill="url(#bugGrad)" opacity="0.4"/>
    <line x1="20" y1="26" x2="14" y2="22" stroke="url(#bugGrad)" strokeWidth="2"/>
    <line x1="20" y1="34" x2="12" y2="34" stroke="url(#bugGrad)" strokeWidth="2"/>
    <line x1="20" y1="42" x2="14" y2="46" stroke="url(#bugGrad)" strokeWidth="2"/>
    <line x1="44" y1="26" x2="50" y2="22" stroke="url(#bugGrad)" strokeWidth="2"/>
    <line x1="44" y1="34" x2="52" y2="34" stroke="url(#bugGrad)" strokeWidth="2"/>
    <line x1="44" y1="42" x2="50" y2="46" stroke="url(#bugGrad)" strokeWidth="2"/>
    <path d="M26 16 L26 12 M32 16 L32 10 M38 16 L38 12" stroke="url(#bugGrad)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Graduation Cap Icon
export const GraduationIcon3D = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="gradGrad">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M32 16 L52 24 L32 32 L12 24 Z" fill="url(#gradGrad)" opacity="0.3"/>
    <path d="M32 18 L50 24 L32 30 L14 24 Z" stroke="url(#gradGrad)" strokeWidth="2" fill="none"/>
    <path d="M16 26 L16 36 C16 38 22 42 32 42 C42 42 48 38 48 36 L48 26" stroke="url(#gradGrad)" strokeWidth="2" fill="none"/>
    <path d="M50 24 L50 34 L54 36 L50 38" stroke="url(#gradGrad)" strokeWidth="2" fill="none"/>
  </svg>
);
