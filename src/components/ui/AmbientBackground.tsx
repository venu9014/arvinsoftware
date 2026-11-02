'use client';

import React from 'react';

export function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary ambient blue-cyan orb at top center */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px] rounded-full opacity-60 dark:opacity-40 animate-pulse duration-[10000ms]" />

      {/* Secondary violet glow on top right */}
      <div className="absolute top-[20%] right-[-15%] md:right-[-5%] w-[450px] md:w-[650px] h-[450px] bg-gradient-to-tr from-purple-600/15 via-indigo-500/10 to-transparent blur-[130px] rounded-full opacity-50 dark:opacity-35" />

      {/* Tertiary cyan-blue accent on bottom left */}
      <div className="absolute bottom-[10%] left-[-15%] md:left-[-5%] w-[400px] md:w-[600px] h-[400px] bg-gradient-to-br from-blue-500/15 via-cyan-600/10 to-transparent blur-[120px] rounded-full opacity-45 dark:opacity-30" />

      {/* Subtle modern digital grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
