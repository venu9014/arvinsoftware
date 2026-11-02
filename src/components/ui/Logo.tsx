import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1 ${className}`}
      aria-label="ArvinSoftware Homepage"
    >
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle inner grid effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:6px_6px] opacity-25" />
          
          {/* Sleek SVG monogram mark: An architectural 'A' + code chevron */}
          <svg
            className="w-5 h-5 text-cyan-400 group-hover:scale-105 transition-transform duration-300 relative z-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3L3.5 19H7.5L12 10.5L16.5 19H20.5L12 3Z"
              fill="url(#logo-grad-1)"
            />
            <path
              d="M8.5 14.5L12 8L15.5 14.5H8.5Z"
              fill="#070b14"
            />
            <path
              d="M10 13H14"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="5" r="1.5" fill="#38bdf8" />
            <defs>
              <linearGradient id="logo-grad-1" x1="3.5" y1="3" x2="20.5" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="0.5" stopColor="#6366f1" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
            <span>Arvin</span>
            <span className="text-cyan-500 dark:text-cyan-400 ml-0.5">Software</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 animate-pulse" />
          </div>
          <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
            Digital Engineering
          </span>
        </div>
      )}
    </Link>
  );
}
