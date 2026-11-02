import React from 'react';
import { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/companyData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Compass,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  Lightbulb,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — ArvinSoftware',
  description:
    'Learn about ArvinSoftware, our engineering philosophy, mission, vision, and client-centric approach to modern software development.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      title: 'Precision Engineering',
      description:
        'We believe in clean code, modular architectures, and rigorous testing standards that prevent technical debt before it starts.',
    },
    {
      icon: <Users className="w-5 h-5 text-blue-400" />,
      title: 'Transparent Partnership',
      description:
        'Open communication and continuous stakeholder collaboration ensure projects remain aligned with core business milestones.',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-purple-400" />,
      title: 'Thoughtful Design',
      description:
        'Every user flow, button state, and glassmorphism interface is tailored for clarity, accessibility, and high conversion.',
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: 'Scalable Reliability',
      description:
        'Architectures designed to handle growing traffic, data volumes, and evolving feature sets seamlessly over time.',
    },
  ];

  const approachSteps = [
    {
      step: '01',
      title: 'Discovery & Scope',
      desc: 'Clarifying business goals, mapping user journeys, and structuring technical architecture before writing the first line of code.',
    },
    {
      step: '02',
      title: 'Iterative Prototyping',
      desc: 'Developing responsive UI wireframes, glass design tokens, and validating interactive states with stakeholders.',
    },
    {
      step: '03',
      title: 'Agile Engineering',
      desc: 'Building with modern type-safe frameworks, modular components, and continuous quality checks.',
    },
    {
      step: '04',
      title: 'Quality & Delivery',
      desc: 'Rigorous cross-browser verification, mobile responsiveness profiling, and production readiness handoff.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-20 md:space-y-28">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="cyan" dot>
          About ArvinSoftware
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Architecting High-Impact <span className="text-gradient">Digital Solutions</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {COMPANY_INFO.aboutPreview}
        </p>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="p-8 md:p-10 relative overflow-hidden" glow>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <Compass className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Vision
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            To be a trusted software engineering partner recognized for transforming visionary ideas into intuitive, robust, and scalable digital products that empower businesses to thrive in an increasingly connected world.
          </p>
          <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-white/10 flex items-center gap-2 text-xs font-semibold text-cyan-500">
            <CheckCircle className="w-4 h-4" />
            <span>Future-Ready Digital Architecture</span>
          </div>
        </GlassCard>

        <GlassCard className="p-8 md:p-10 relative overflow-hidden" glow>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
              <Target className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Mission
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            To deliver exceptional software development and design services by pairing cutting-edge web and mobile technologies with structured engineering methodologies, delivering measurable business value and superior user satisfaction.
          </p>
          <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-white/10 flex items-center gap-2 text-xs font-semibold text-purple-400">
            <CheckCircle className="w-4 h-4" />
            <span>End-to-End Product Excellence</span>
          </div>
        </GlassCard>
      </div>

      {/* Core Values Section */}
      <div>
        <SectionHeading
          badge="Guiding Principles"
          badgeVariant="blue"
          title="Our Core Engineering Values"
          subtitle="How we approach software architecture, client collaboration, and digital craftsmanship."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => (
            <GlassCard key={val.title} className="p-6 flex flex-col justify-between" hoverEffect>
              <div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-fit mb-4 border border-slate-200/60 dark:border-white/10">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Working Approach / Methodology */}
      <div>
        <SectionHeading
          badge="Development Lifecycle"
          badgeVariant="purple"
          title="Our Structured Approach"
          subtitle="A predictable, transparent development rhythm from initial idea mapping through deployment readiness."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachSteps.map((step) => (
            <GlassCard key={step.step} className="p-6 relative group" hoverEffect>
              <div className="text-3xl font-black text-cyan-500/30 dark:text-cyan-400/20 font-mono mb-3">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Technology & Innovation Philosophy */}
      <GlassCard className="p-8 md:p-12" glow>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <Badge variant="cyan" dot>
              Innovation Mindset
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Built on Modern Frameworks &amp; Future-Proof Principles
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We continuously research and adopt modern development paradigms—from React Server Components and edge computing to high-performance database indexing and AI automation. Our architectural choices prioritize stability, maintainability, and longevity.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Button
              href="/technologies"
              variant="outline"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Our Tech Radar
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* Contact CTA */}
      <div className="text-center pt-8">
        <SectionHeading
          badge="Ready to Collaborate?"
          badgeVariant="blue"
          title="Let's Discuss Your Next Initiative"
          subtitle="Connect directly with our engineering leadership to plan your digital roadmap."
        />
        <div className="mt-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Get In Touch With Us
          </Button>
        </div>
      </div>
    </div>
  );
}
