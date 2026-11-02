'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Send,
  CheckCircle2,
  Tag,
} from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showArticlePreview, setShowArticlePreview] = useState(false);

  const categories = [
    'All',
    'Engineering',
    'Architecture',
    'Frontend',
    'Mobile Tech',
    'Cloud Systems',
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="cyan" dot>
          Engineering Journal
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Insights &amp; <span className="text-gradient">Tech Updates</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Explore our engineering perspectives, technical guides, and architectural notes covering full-stack software development.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <GlassCard className="p-4 md:p-6" hoverEffect={false}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, keywords..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

          {/* Category Badges */}
          <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                  selectedTag === cat
                    ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                    : 'bg-white/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-white/10 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Main Content Area: Required Empty State & Blueprint Preview */}
      {!showArticlePreview ? (
        <div className="space-y-12">
          {/* Primary Required Empty State */}
          <GlassCard className="p-12 md:p-16 text-center" glow>
            <div className="max-w-xl mx-auto space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Insights and updates are coming soon.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Our software engineering and design teams are preparing technical write-ups, architecture breakdowns, and framework evaluations. No fabricated articles are published during Phase 1.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowArticlePreview(true)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-cyan-400 transition-all cursor-pointer"
                >
                  Inspect Article Layout Wireframe
                </button>
                <Button
                  href="/contact"
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Reach Out To Our Engineers
                </Button>
              </div>
            </div>
          </GlassCard>

          {/* Newsletter / Notifications Demo Box */}
          <GlassCard className="p-8 md:p-10 relative overflow-hidden" hoverEffect={false}>
            <div className="max-w-xl mx-auto text-center space-y-4">
              <Badge variant="blue" dot>
                Stay Informed
              </Badge>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Be Notified When We Release Technical Writeups
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Join our technical newsletter for occasional updates on web performance, glassmorphism UI patterns, and software architecture.
              </p>

              {subscribed ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! (Frontend simulation — no emails stored)</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    icon={<Send className="w-3.5 h-3.5" />}
                  >
                    Subscribe Demo
                  </Button>
                </form>
              )}
            </div>
          </GlassCard>
        </div>
      ) : (
        /* Full Article Detail Page Layout Wireframe (for Phase 1 review) */
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowArticlePreview(false)}
              className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              ← Back to Journal Overview
            </button>
            <Badge variant="amber">Layout Wireframe View</Badge>
          </div>

          <article className="max-w-4xl mx-auto space-y-8">
            <GlassCard className="p-8 md:p-12 space-y-6" glow>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="blue">Architecture Blueprint</Badge>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 5 min read
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Scheduled Release
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Architectural Blueprint: Designing Production-Grade Glassmorphism Interfaces
              </h1>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 text-xs text-slate-400 italic">
                Notice: This article view demonstrates the Phase 1 blog reader layout structure. Real articles will be published as engineering milestones are completed.
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans pt-4 border-t border-slate-200/60 dark:border-white/10">
                <p>
                  Modern web applications demand an equilibrium between high visual polish and low runtime overhead. In this preview article structure, our team explores how translucent glass styling combined with hardware-accelerated backdrop blur enhances user focus without sacrificing responsive layout fluidity.
                </p>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">
                  1. Component Modularization &amp; Token Architecture
                </h2>
                <p>
                  By standardizing glass tokens into reusable React cards, buttons, and responsive modal structures, frontends achieve visual consistency across all viewports.
                </p>

                <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-cyan-300 border border-white/10 overflow-x-auto">
                  {'// Example token definition'} <br />
                  const glassPanel = &quot;backdrop-blur-xl bg-slate-900/60 border border-white/10&quot;;
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Tags: Glassmorphism, React, Architecture</span>
                </div>
                <button
                  onClick={() => setShowArticlePreview(false)}
                  className="text-xs font-semibold text-blue-600 dark:text-cyan-400 cursor-pointer"
                >
                  Return to Journal
                </button>
              </div>
            </GlassCard>
          </article>
        </div>
      )}
    </div>
  );
}
