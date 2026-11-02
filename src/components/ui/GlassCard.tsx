import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  variant?: 'default' | 'elevated' | 'subtle';
}

export function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  variant = 'default',
  ...props
}: GlassCardProps) {
  const variantStyles = {
    default:
      'bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-black/30',
    elevated:
      'bg-white/85 dark:bg-slate-900/75 backdrop-blur-2xl border border-slate-200 dark:border-white/15 shadow-2xl shadow-blue-500/5 dark:shadow-cyan-500/5',
    subtle:
      'bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border border-slate-200/60 dark:border-white/5 shadow-md shadow-black/5',
  };

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 dark:hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10'
    : '';

  const glowStyles = glow
    ? 'relative before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-blue-500/20 before:via-cyan-400/20 before:to-purple-500/20 before:-z-10 before:blur-sm'
    : '';

  return (
    <div
      className={`rounded-2xl p-6 relative overflow-hidden ${variantStyles[variant]} ${hoverStyles} ${glowStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
