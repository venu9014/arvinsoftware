import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'blue' | 'purple' | 'cyan' | 'amber' | 'emerald';
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = 'cyan',
  title,
  subtitle,
  center = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${center ? 'mx-auto text-center' : ''} ${className}`}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant} dot>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
