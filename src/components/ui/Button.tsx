import React from 'react';
import Link from 'next/link';

type BaseProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 shadow-sm',
    md: 'text-sm px-5 py-2.5 gap-2 shadow-md',
    lg: 'text-base px-7 py-3.5 gap-2.5 shadow-lg',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 text-white shadow-blue-500/25 hover:shadow-cyan-500/35 border border-white/20',
    secondary:
      'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-slate-900/10',
    outline:
      'border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-200 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 backdrop-blur-sm',
    glass:
      'bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-800/70 hover:border-blue-400/50 dark:hover:border-cyan-400/40 shadow-sm',
  };

  const content = (
    <>
      {children}
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <Link
        href={href}
        className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...anchorProps}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
