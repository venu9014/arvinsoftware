'use client';

import React, { useState } from 'react';
import { PROPOSED_TECHNOLOGIES } from '@/data/companyData';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Code,
  Palette,
  FileCode,
  Layers,
  Zap,
  Server,
  Terminal,
  Cpu,
  Globe2,
  Smartphone,
  Database,
  HardDrive,
  Boxes,
  Cloud,
  Flame,
  Box,
  GitBranch,
  Info,
  ArrowRight,
} from 'lucide-react';

function getTechIcon(iconName: string) {
  const iconProps = { className: 'w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300' };
  switch (iconName) {
    case 'Code':
      return <Code {...iconProps} />;
    case 'Palette':
      return <Palette {...iconProps} />;
    case 'FileCode':
      return <FileCode {...iconProps} />;
    case 'Layers':
      return <Layers {...iconProps} />;
    case 'Zap':
      return <Zap {...iconProps} />;
    case 'Server':
      return <Server {...iconProps} />;
    case 'Terminal':
      return <Terminal {...iconProps} />;
    case 'Cpu':
      return <Cpu {...iconProps} />;
    case 'Globe2':
      return <Globe2 {...iconProps} />;
    case 'Smartphone':
      return <Smartphone {...iconProps} />;
    case 'Database':
      return <Database {...iconProps} />;
    case 'HardDrive':
      return <HardDrive {...iconProps} />;
    case 'Boxes':
      return <Boxes {...iconProps} />;
    case 'Cloud':
      return <Cloud {...iconProps} />;
    case 'Flame':
      return <Flame {...iconProps} />;
    case 'Box':
      return <Box {...iconProps} />;
    case 'GitBranch':
      return <GitBranch {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
}

export default function TechnologiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Mobile',
    'Databases',
    'Cloud & DevOps',
    'Tools',
  ];

  const filteredTech =
    selectedCategory === 'All'
      ? PROPOSED_TECHNOLOGIES
      : PROPOSED_TECHNOLOGIES.filter((t) => t.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="cyan" dot>
          Tech Radar
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Proposed <span className="text-gradient">Technology Stack</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          An overview of the modern programming languages, libraries, frameworks, and cloud infrastructure tools we evaluate and employ for client engineering projects.
        </p>

        {/* Informational Disclaimer */}
        <div className="inline-flex items-start gap-2.5 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300 text-left max-w-2xl mx-auto backdrop-blur-md">
          <Info className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-cyan-500 dark:text-cyan-400">Notice:</strong> The technologies displayed are illustrative industry tools and proposed frameworks used across contemporary software development. Tech stacks are customized based on individual project specifications and performance requirements.
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                : 'bg-white/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-white/10 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTech.map((tech) => (
          <GlassCard
            key={tech.name}
            className="p-6 flex flex-col justify-between group"
            hoverEffect
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/20">
                  {getTechIcon(tech.icon)}
                </div>
                <Badge variant="slate">
                  {tech.category}
                </Badge>
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                {tech.name}
              </h2>

              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {tech.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500">
              <span>Proposed Tooling</span>
              <span className="font-mono text-cyan-400">Ready</span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Architectural Consultation Section */}
      <GlassCard className="p-8 md:p-12 text-center" glow>
        <div className="max-w-2xl mx-auto space-y-4">
          <Badge variant="purple" dot>
            Architecture Assessment
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Have Specific Tech Stack Requirements?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether your project requires integrating into legacy enterprise databases or architecting a brand-new cloud-native service, we can evaluate and advise on the ideal stack.
          </p>
          <div className="pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Consult On Stack Architecture
            </Button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
