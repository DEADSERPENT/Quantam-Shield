import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced quantum theme colors
        quantum: {
          black: '#030712',
          charcoal: '#111827',
          dark: '#0f172a',
          cyan: '#00ffff',
          'cyan-bright': '#00ffea',
          'cyan-glow': '#22d3ee',
          violet: '#8b5cf6',
          'violet-bright': '#a78bfa',
          'violet-deep': '#6d28d9',
          magenta: '#f0abfc',
          pink: '#ec4899',
          blue: '#3b82f6',
        },
        // Glassmorphism colors
        glass: {
          primary: 'rgba(255, 255, 255, 0.03)',
          secondary: 'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'quantum-gradient': 'linear-gradient(135deg, #030712 0%, #111827 50%, #0f172a 100%)',
        'hero-gradient': 'radial-gradient(ellipse at center, #111827 0%, #030712 70%)',
        'violet-glow': 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
        'cyan-glow': 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(139, 92, 246, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0, 255, 255, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.15) 0px, transparent 50%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3), 0 0 90px rgba(0, 255, 255, 0.1)',
        'neon-violet': '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3), 0 0 90px rgba(139, 92, 246, 0.1)',
        'neon-magenta': '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'device': '0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 0 80px rgba(0, 255, 255, 0.2)',
        'glow-sm': '0 0 15px rgba(0, 255, 255, 0.3)',
        'glow-md': '0 0 30px rgba(0, 255, 255, 0.4)',
        'glow-lg': '0 0 60px rgba(0, 255, 255, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'rotate-reverse': 'rotate-reverse 25s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'particle': 'particle 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotateY(0deg)' },
          '50%': { transform: 'translateY(-20px) rotateY(3deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.85', filter: 'brightness(1.4)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleX(1) scaleY(1)' },
          '50%': { transform: 'scaleX(1.05) scaleY(1.02)' },
        },
        particle: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '25%': { transform: 'translate(10px, -10px) scale(1.1)', opacity: '0.8' },
          '50%': { transform: 'translate(-5px, 5px) scale(0.9)', opacity: '0.6' },
          '75%': { transform: 'translate(-10px, -5px) scale(1.05)', opacity: '0.7' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 255, 255, 0.3)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
