'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  MessageSquareQuote,
  Star,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function TestimonialsPage() {
  const [showWireframe, setShowWireframe] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="cyan" dot>
          Client Stories &amp; Reviews
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Client <span className="text-gradient">Testimonials</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Honest feedback and verified project reviews from the partners and businesses who collaborate with ArvinSoftware.
        </p>
      </div>

      {/* Primary Required Empty State */}
      <GlassCard className="p-12 md:p-16 text-center max-w-3xl mx-auto" glow>
        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
          <MessageSquareQuote className="w-8 h-8 text-cyan-400" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Customer stories will be featured here soon.
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          In strict accordance with our Phase 1 standards, we do not publish synthetic reviews or fabricated client ratings. As active initiatives (such as <span className="text-cyan-400 font-semibold">WOWBUS</span> and <span className="text-purple-400 font-semibold">Madams Chocklets</span>) reach production release, verified client reviews will be documented here.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setShowWireframe(!showWireframe)}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/40 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-cyan-400 transition-all cursor-pointer"
          >
            {showWireframe ? 'Hide Layout Wireframe' : 'Preview Testimonial Card Wireframe'}
          </button>
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Start Your Project With Us
          </Button>
        </div>
      </GlassCard>

      {/* Testimonial Card Layout Wireframe Blueprint (When Toggled) */}
      {showWireframe && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Component Blueprint Frame (Phase 1 UI Template)
            </span>
            <Badge variant="amber">Design Blueprint Only</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-6 md:p-8 space-y-4" hoverEffect={false}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Badge variant="emerald" dot>
                  Verified Feedback Format
                </Badge>
              </div>

              <blockquote className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                &ldquo;[Placeholder Quote Template]: When verified reviews are published, authentic client testimonials detailing engineering quality, responsiveness, and architecture delivery will be showcased in this glass card format.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-cyan-400/30 flex items-center justify-center font-bold text-xs text-cyan-400">
                  CL
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    Client Representative Name
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Enterprise Partner / Project Lead
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-8 space-y-4" hoverEffect={false}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Badge variant="emerald" dot>
                  Verified Feedback Format
                </Badge>
              </div>

              <blockquote className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                &ldquo;[Placeholder Quote Template]: Clean layout, responsive cards, touch-optimized typography, and high-contrast accessibility are prepared to display customer satisfaction metrics.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center font-bold text-xs text-purple-400">
                  PL
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    Client Representative Name
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Product Lead / Technology Director
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      )}

      {/* Our Quality Commitment */}
      <div>
        <SectionHeading
          badge="Engineering Principles"
          badgeVariant="blue"
          title="Our Commitment to Every Partner"
          subtitle="What every client can expect when engaging ArvinSoftware."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6" hoverEffect>
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 w-fit mb-4 border border-blue-500/20">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Code Integrity
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every deliverable is written with type safety, clean separation of concerns, and comprehensive error handling.
            </p>
          </GlassCard>

          <GlassCard className="p-6" hoverEffect>
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 w-fit mb-4 border border-purple-500/20">
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Milestone Transparency
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Clear timelines, demo iterations, and constant communication prevent surprises throughout development.
            </p>
          </GlassCard>

          <GlassCard className="p-6" hoverEffect>
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 w-fit mb-4 border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Future-Ready Handover
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Structured codebases that your in-house teams or future contractors can extend seamlessly.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
