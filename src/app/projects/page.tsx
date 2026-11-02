'use client';

import React, { useState } from 'react';
import { FEATURED_PROJECTS, Project } from '@/data/companyData';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Info,
  Lock,
  ArrowRight,
  Clock,
  FolderGit2,
} from 'lucide-react';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Ongoing'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.status === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="purple" dot>
          Project Portfolio
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Active <span className="text-gradient">Initiatives</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Explore current software initiatives in active development at ArvinSoftware. Detailed project architectures and client demonstrations will be featured as projects reach milestone completion.
        </p>

        {/* Informational Policy Banner */}
        <div className="inline-flex items-start gap-2.5 p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-slate-700 dark:text-slate-300 text-left max-w-2xl mx-auto backdrop-blur-md">
          <Info className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-purple-500 dark:text-purple-300">Phase 1 Portfolio Notice:</strong> Verified project assets, deep-dive case studies, and live demonstrations are under active development and will be populated upon client clearance and release.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setActiveFilter('All')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
            activeFilter === 'All'
              ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25'
              : 'bg-white/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-white/10'
          }`}
        >
          All Projects ({FEATURED_PROJECTS.length})
        </button>
        <button
          onClick={() => setActiveFilter('Ongoing')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
            activeFilter === 'Ongoing'
              ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25'
              : 'bg-white/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-white/10'
          }`}
        >
          Ongoing ({FEATURED_PROJECTS.filter((p) => p.status === 'Ongoing').length})
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <GlassCard
            key={project.id}
            className="p-8 flex flex-col justify-between group"
            hoverEffect
            glow
          >
            <div>
              {/* Neutral Branded Visual Representation */}
              <div
                className={`w-full h-56 rounded-xl bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden shadow-lg mb-6`}
              >
                {/* Tech grid texture overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[2px]" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-slate-950/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-300" />
                    <span className="text-[11px] font-mono font-medium text-white">
                      Active Repository
                    </span>
                  </div>
                  <Badge variant="cyan" dot>
                    Status: {project.status}
                  </Badge>
                </div>

                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-widest text-white/70 font-mono font-semibold">
                    Project Record
                  </span>
                  <h2 className="text-3xl font-black text-white tracking-tight mt-1">
                    {project.name}
                  </h2>
                </div>
              </div>

              {/* Neutral details ready for future content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-b border-slate-200/60 dark:border-white/5 pb-3">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    Development Cycle
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {project.status}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-slate-950/40 border border-slate-200/60 dark:border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Project Placeholder Frame</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
                    {project.placeholderText}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View Placeholder Card</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] font-mono text-slate-400">
                Phase 1 Record
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Project Detail Modal / Drawer Preview */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <GlassCard className="max-w-lg w-full p-6 md:p-8 relative bg-slate-900 border-cyan-500/30">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.name}
                </h3>
                <span className="text-xs text-cyan-400 font-mono">
                  Status: {selectedProject.status}
                </span>
              </div>
              <Badge variant="cyan" dot>
                {selectedProject.status}
              </Badge>
            </div>

            <div className="py-6 space-y-4 text-xs md:text-sm text-slate-300">
              <p className="leading-relaxed">
                This project record is established within the ArvinSoftware Phase 1 frontend. In accordance with client confidentiality and verified release schedules, full case studies, screenshots, and architecture diagrams will be added once approved.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1 text-xs">
                <div className="text-slate-400 font-medium">Record ID:</div>
                <div className="font-mono text-cyan-300">{selectedProject.id}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <Button
                variant="glass"
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                Close View
              </Button>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Portfolio Expansion Note */}
      <GlassCard className="p-8 md:p-10 text-center" glow>
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            We collaborate with innovative enterprises and growing businesses. Get in touch to discuss partnering with ArvinSoftware on your upcoming platform.
          </p>
          <div className="pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start a Project Conversation
            </Button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
