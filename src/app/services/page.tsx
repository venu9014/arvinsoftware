'use client';

import React, { useState } from 'react';
import { PROPOSED_SERVICES } from '@/data/companyData';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Globe,
  Layout,
  Smartphone,
  Code2,
  Palette,
  ShoppingBag,
  Server,
  Database,
  Sparkles,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';

function getServiceIcon(iconName: string) {
  const iconProps = { className: 'w-6 h-6 text-cyan-400' };
  switch (iconName) {
    case 'Globe':
      return <Globe {...iconProps} />;
    case 'Layout':
      return <Layout {...iconProps} />;
    case 'Smartphone':
      return <Smartphone {...iconProps} />;
    case 'Code2':
      return <Code2 {...iconProps} />;
    case 'Palette':
      return <Palette {...iconProps} />;
    case 'ShoppingBag':
      return <ShoppingBag {...iconProps} />;
    case 'Server':
      return <Server {...iconProps} />;
    case 'Database':
      return <Database {...iconProps} />;
    case 'Sparkles':
      return <Sparkles {...iconProps} />;
    case 'Wrench':
      return <Wrench {...iconProps} />;
    default:
      return <Code2 {...iconProps} />;
  }
}

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Web',
    'Mobile',
    'Enterprise',
    'Design',
    'Infrastructure',
    'Emerging Tech',
  ];

  const filteredServices =
    selectedCategory === 'All'
      ? PROPOSED_SERVICES
      : PROPOSED_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="blue" dot>
          Engineering Services
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Proposed <span className="text-gradient">Service Offerings</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Explore our proposed software development capabilities, covering high-performance web platforms, mobile architectures, custom software logic, and cloud infrastructures.
        </p>

        {/* Clear Scope Disclaimer Banner */}
        <div className="inline-flex items-start gap-2.5 p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-slate-700 dark:text-slate-300 text-left max-w-2xl mx-auto backdrop-blur-md">
          <Info className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-cyan-500 dark:text-cyan-400">Notice:</strong> The service categories below reflect proposed modular capabilities and project specializations. Specific deliverables and technical architectures are customized to each client engagement.
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                : 'bg-white/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-white/10 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <GlassCard
            key={service.id}
            className="p-7 flex flex-col justify-between group"
            hoverEffect
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3.5 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                  {getServiceIcon(service.iconName)}
                </div>
                <Badge variant="cyan">
                  {service.category}
                </Badge>
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h2>

              <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="mt-5 pt-5 border-t border-slate-200/60 dark:border-white/10 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Key Capabilities
                </span>
                {service.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 italic">Draft Category</span>
              <Button
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                variant="glass"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Inquire
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Bottom Service Consultation Banner */}
      <GlassCard className="p-8 md:p-12 text-center" glow>
        <div className="max-w-2xl mx-auto space-y-4">
          <Badge variant="purple" dot>
            Custom Engineering
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Need a Specialized Architecture Not Listed Above?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            We adapt to your technological ecosystem and project requirements. Let us know what you need to build and we will structure an appropriate architectural proposal.
          </p>
          <div className="pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Custom Requirements
            </Button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
