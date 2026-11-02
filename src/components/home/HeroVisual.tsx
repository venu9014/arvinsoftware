'use client';

import React, { useState } from 'react';
import { Terminal, Shield, Zap, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'code'>('architecture');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background ambient lighting for the visual */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-3xl blur-2xl -z-10 opacity-70" />

      {/* Main Glassmorphic Terminal / Architecture Card */}
      <div className="rounded-2xl bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-slate-200/20 dark:border-white/15 shadow-2xl shadow-blue-500/10 overflow-hidden text-slate-200">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800/50 dark:bg-slate-900/50 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
              arvin-system-core.tsx
            </span>
          </div>

          {/* Toggle view tabs */}
          <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'architecture'
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Architecture
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'code'
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              System Logic
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 font-mono text-xs md:text-sm">
          {activeTab === 'architecture' ? (
            <div className="space-y-4">
              {/* Architecture Blueprint Nodes */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-1">
                    <Zap className="w-4 h-4" />
                    <span>Reactive UI Layer</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    Sub-millisecond state propagation &amp; fluid glassmorphism component tree.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-purple-400 font-semibold mb-1">
                    <Shield className="w-4 h-4" />
                    <span>Edge Infrastructure</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    Distributed CDN caching, zero cold-start execution &amp; global resiliency.
                  </p>
                </div>
              </div>

              {/* Status pipeline */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin duration-3000" />
                    Pipeline Orchestration
                  </span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ready
                  </span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 h-full w-[94%]" />
                </div>

                <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                  <span>Design Systems</span>
                  <span>Modular Code</span>
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Live Metric Badges */}
              <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                  Frontend Engine Active
                </span>
                <span className="text-slate-500">v1.0 (Phase 1)</span>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 text-slate-300 overflow-x-auto text-xs leading-relaxed">
              <div className="text-slate-500">{'// ArvinSoftware Digital Delivery Engine'}</div>
              <div>
                <span className="text-purple-400">export const</span>{' '}
                <span className="text-cyan-300">arvinEngine</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-blue-300">company</span>:{' '}
                <span className="text-emerald-300">&quot;ArvinSoftware&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-blue-300">mission</span>:{' '}
                <span className="text-emerald-300">
                  &quot;Turning Ideas Into Digital Reality&quot;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-blue-300">architecture</span>: [
                <span className="text-amber-300">&quot;Modern React&quot;</span>,{' '}
                <span className="text-amber-300">&quot;Glassmorphism&quot;</span>,{' '}
                <span className="text-amber-300">&quot;Scalable Modules&quot;</span>],
              </div>
              <div className="pl-4">
                <span className="text-purple-400">async</span>{' '}
                <span className="text-blue-400">transformIdea</span>(concept) &#123;
              </div>
              <div className="pl-8 text-slate-400">
                const digitalProduct = await compile(concept, bestPractices);
              </div>
              <div className="pl-8 text-cyan-400">
                return digitalProduct.launch();
              </div>
              <div className="pl-4">&#125;</div>
              <div>&#125;;</div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Accent Card 1: Left */}
      <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 shadow-xl shadow-cyan-500/10 text-white">
        <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-100">Modern Architecture</div>
          <div className="text-[10px] text-cyan-400 font-mono">React • Next.js • Tailwind</div>
        </div>
      </div>

      {/* Floating Accent Card 2: Right */}
      <div className="absolute -top-6 -right-4 hidden sm:flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 shadow-xl shadow-purple-500/10 text-white">
        <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
          <Terminal className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-100">Active Pipelines</div>
          <div className="text-[10px] text-purple-300 font-mono">WOWBUS • Madams Chocklets</div>
        </div>
      </div>
    </div>
  );
}
