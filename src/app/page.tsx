import React from 'react';
import Link from 'next/link';
import {
  COMPANY_INFO,
  PROPOSED_SERVICES,
  FEATURED_PROJECTS,
  PROPOSED_TECHNOLOGIES,
} from '@/data/companyData';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeroVisual } from '@/components/home/HeroVisual';
import {
  ArrowRight,
  Globe,
  Layout,
  Smartphone,
  Code2,
  Palette,
  Server,
  Database,
  Sparkles,
  ShoppingBag,
  Wrench,
  CheckCircle,
  ExternalLink,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

// Icon resolver helper for services
function getServiceIcon(iconName: string) {
  const iconProps = { className: 'w-6 h-6 text-cyan-500' };
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
      return <Layers {...iconProps} />;
  }
}

export default function HomePage() {
  // Take a preview slice of services & technologies for the home page
  const homeServicesPreview = PROPOSED_SERVICES.slice(0, 6);
  const homeTechPreview = PROPOSED_TECHNOLOGIES.slice(0, 12);

  return (
    <div className="space-y-24 md:space-y-32 pb-12">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Headline & Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-cyan-400 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Next-Generation Software Engineering</span>
              </div>

              <div className="space-y-2">
                <span className="block text-sm uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                  {COMPANY_INFO.name}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  Turning Ideas Into{' '}
                  <span className="text-gradient">Digital Reality.</span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {COMPANY_INFO.heroDescription}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Our Services
                </Button>
                <Button
                  href="/contact"
                  variant="glass"
                  size="lg"
                >
                  Let&apos;s Talk
                </Button>
              </div>

              {/* Trust & Architecture highlights */}
              <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Production-Grade Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>Responsive &amp; Touch Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Glassmorphism Design</span>
                </div>
              </div>
            </div>

            {/* Right Abstract 3D/Tech Composition */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT PREVIEW SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-8 md:p-12 relative overflow-hidden" glow>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="cyan" dot>
                About ArvinSoftware
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Engineered for Scalability, Designed for Humans.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {COMPANY_INFO.aboutPreview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/40 dark:bg-slate-950/40 border border-slate-200/60 dark:border-white/5">
                  <div className="text-cyan-500 font-bold text-lg">Modern Stack</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Component architectures built with TypeScript &amp; Next.js.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/40 dark:bg-slate-950/40 border border-slate-200/60 dark:border-white/5">
                  <div className="text-blue-500 font-bold text-lg">Clean UI/UX</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Pixel-precise glass surfaces, fluid micro-interactions.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/40 dark:bg-slate-950/40 border border-slate-200/60 dark:border-white/5">
                  <div className="text-purple-500 font-bold text-lg">Agile Mindset</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Transparent communication and modular milestone delivery.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* =========================================================================
          SERVICES PREVIEW SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Proposed Capabilities"
          badgeVariant="blue"
          title="Full-Cycle Digital Services"
          subtitle="Explore our proposed service categories designed to power web, mobile, and custom enterprise software solutions. Tailored modularly to project scopes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServicesPreview.map((service) => (
            <GlassCard
              key={service.id}
              className="group flex flex-col justify-between"
              hoverEffect
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/5">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-1.5">
                  {service.features.slice(0, 3).map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 group-hover:gap-2 transition-all"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            href="/services"
            variant="glass"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Browse All 10 Proposed Services
          </Button>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS SECTION (Strictly supplied projects)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio Preview"
          badgeVariant="purple"
          title="Active &amp; Featured Projects"
          subtitle="Explore the software initiatives currently in active engineering cycles at ArvinSoftware."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <GlassCard
              key={project.id}
              className="p-8 flex flex-col justify-between group"
              hoverEffect
              glow
            >
              <div>
                {/* Neutral Branded Visual Graphic Placeholder */}
                <div
                  className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden shadow-inner mb-6`}
                >
                  {/* Subtle glass texture overlay */}
                  <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px]" />
                  <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-mono font-semibold text-white/80 bg-black/30 px-3 py-1 rounded-full backdrop-blur-md">
                      Project Showcase
                    </span>
                    <Badge variant="cyan" dot>
                      {project.status}
                    </Badge>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs text-white/90 font-medium mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-500">Phase 1 Development</span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic bg-slate-100/50 dark:bg-slate-950/40 p-3 rounded-lg border border-slate-200/50 dark:border-white/5">
                    {project.placeholderText}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
                >
                  <span>Project Overview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-400 font-mono">Status: {project.status}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            href="/projects"
            variant="glass"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View Projects Hub
          </Button>
        </div>
      </section>

      {/* =========================================================================
          TECHNOLOGIES PREVIEW SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technology Radar"
          badgeVariant="cyan"
          title="Modern Technologies &amp; Frameworks"
          subtitle="Proposed software engineering stack spanning modern frontends, high-throughput backends, mobile solutions, and cloud environments."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {homeTechPreview.map((tech) => (
            <GlassCard
              key={tech.name}
              className="p-4 text-center group flex flex-col items-center justify-center transition-all"
              hoverEffect
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 flex items-center justify-center text-blue-600 dark:text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {tech.name}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                {tech.category}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            href="/technologies"
            variant="glass"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Complete Technology Stack
          </Button>
        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION (CTA) SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard
          className="p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-b from-blue-600/10 via-slate-900/60 to-purple-600/10 border-blue-500/20"
          glow
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <Badge variant="blue" dot>
              Start A Conversation
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {COMPANY_INFO.ctaHeadline}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you are conceptualizing a new web platform, a mobile application, or modernizing an enterprise system, our team is ready to discuss your vision.
            </p>

            <div className="pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
