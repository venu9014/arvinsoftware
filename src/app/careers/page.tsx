'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Briefcase,
  Code2,
  CheckCircle2,
  UploadCloud,
  Send,
} from 'lucide-react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: '',
    portfolioUrl: '',
    note: '',
    fileName: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedDemo, setSubmittedDemo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reasons = [
    {
      title: 'Modern Engineering Focus',
      description:
        'Work on clean, typed codebases, component systems, and resilient cloud architectures without legacy baggage.',
    },
    {
      title: 'Autonomy & Craftsmanship',
      description:
        'We value thoughtful engineering decisions, clean code structure, and creative UI/UX ownership.',
    },
    {
      title: 'Continuous Skill Growth',
      description:
        'Opportunities to research cutting-edge web paradigms, performance optimizations, and AI integration pipelines.',
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Valid email is required.';
    if (!formData.roleInterest) errs.roleInterest = 'Please select a specialization.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedDemo(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Careers Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="cyan" dot>
          Engineering Talent
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Build the Future with <span className="text-gradient">ArvinSoftware</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          We are building a culture of passionate developers, designers, and systems architects dedicated to crafting standout digital experiences.
        </p>
      </div>

      {/* Why Work With Us Section */}
      <div>
        <SectionHeading
          badge="Culture & Craft"
          badgeVariant="blue"
          title="Why Engineers Value Our Approach"
          subtitle="A collaborative environment centered around software quality, technical curiosity, and modern toolchains."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <GlassCard key={r.title} className="p-6" hoverEffect>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center mb-4 border border-blue-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {r.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {r.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Verified Openings Section (Strictly Required Empty State) */}
      <div>
        <SectionHeading
          badge="Current Vacancies"
          badgeVariant="purple"
          title="Open Positions"
          subtitle="Real-time status of openings across frontend, backend, and product engineering teams."
        />

        <GlassCard className="p-12 md:p-16 text-center max-w-3xl mx-auto" glow>
          <div className="w-16 h-16 rounded-2xl bg-slate-800/80 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-white/10">
            <Briefcase className="w-8 h-8 text-cyan-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            No current openings. Please check back later.
          </h2>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
            We do not have active unfulfilled requisitions at this moment. However, we continuously welcome inquiries from talented engineers interested in future project cycles.
          </p>

          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              Status: 0 active roles posted
            </span>
          </div>
        </GlassCard>
      </div>

      {/* General Talent Inquiry / Application Form (Frontend Demo) */}
      <GlassCard className="p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden" glow>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="blue">General Talent Submission</Badge>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                Phase 1 Frontend Demonstration
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Submit Your Profile for Future Project Cycles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Feel free to test the application form UI below. No resume files or personal profiles are stored on any backend in Phase 1.
            </p>
          </div>

          {submittedDemo ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-200 space-y-3 animate-in fade-in">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Frontend Demo Application Validated</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you for testing the careers portal interface. As specified in Phase 1 constraints, this application is a local visual demonstration and has not been transmitted to a live database or hiring inbox.
              </p>
              <Button
                variant="glass"
                size="sm"
                onClick={() => setSubmittedDemo(false)}
              >
                Reset Application Form
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Jordan Lee"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-500 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="jordan@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-500 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Primary Specialization *
                  </label>
                  <select
                    value={formData.roleInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, roleInterest: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="">Select an engineering domain</option>
                    <option value="Frontend Architecture (React/Next)">
                      Frontend Architecture (React/Next)
                    </option>
                    <option value="Mobile Development (Flutter/Cross-platform)">
                      Mobile Development (Flutter/Cross-platform)
                    </option>
                    <option value="Backend Systems & APIs">
                      Backend Systems &amp; APIs
                    </option>
                    <option value="UI/UX & Design Systems">
                      UI/UX &amp; Design Systems
                    </option>
                    <option value="DevOps & Cloud Systems">
                      DevOps &amp; Cloud Systems
                    </option>
                  </select>
                  {errors.roleInterest && (
                    <span className="text-[11px] text-rose-500 mt-1 block">
                      {errors.roleInterest}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Portfolio / GitHub URL (optional)
                  </label>
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, portfolioUrl: e.target.value })
                    }
                    placeholder="https://github.com/yourhandle"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* Upload Simulated Area */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Resume / CV Mock Upload (PDF / Doc)
                </label>
                <div className="border border-dashed border-slate-300 dark:border-white/20 rounded-xl p-4 text-center hover:border-cyan-400 transition-colors">
                  <input
                    type="file"
                    id="resumeUpload"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="resumeUpload"
                    className="cursor-pointer flex flex-col items-center justify-center gap-1.5"
                  >
                    <UploadCloud className="w-6 h-6 text-cyan-400" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                      {formData.fileName
                        ? `Selected: ${formData.fileName}`
                        : 'Click to simulate attaching a resume file'}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      (Frontend simulated UI — file is not uploaded)
                    </span>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  {isSubmitting ? 'Validating Demo...' : 'Submit Profile (Demo)'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
