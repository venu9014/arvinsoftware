'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { COMPANY_INFO, PROPOSED_SERVICES } from '@/data/companyData';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Mail,
  Phone,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Copy,
  Check,
  Send,
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
  privacyConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
  privacyConsent?: string;
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedDemo, setSubmittedDemo] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: preselectedService || '',
    budget: '',
    timeline: '',
    description: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim() || phoneClean.length < 8) {
      errs.phone = 'Please enter a valid phone number with digits.';
    }

    if (!formData.service) {
      errs.service = 'Please select a service of interest.';
    }

    if (!formData.description.trim() || formData.description.trim().length < 15) {
      errs.description = 'Please describe your project or inquiry (minimum 15 characters).';
    }

    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must acknowledge the Phase 1 frontend demo disclosure.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedDemo(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      service: '',
      budget: '',
      timeline: '',
      description: '',
      privacyConsent: false,
    });
    setErrors({});
    setSubmittedDemo(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="cyan" dot>
          Direct Communication
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Contact <span className="text-gradient">ArvinSoftware</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Connect directly with our engineering and project representatives via email or phone, or submit project specifications through our frontend demonstration inquiry form.
        </p>
      </div>

      {/* Direct Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card */}
        <GlassCard className="p-6 flex flex-col justify-between" glow>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <Badge variant="blue">Official Email</Badge>
            </div>
            <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              General &amp; Technical Inquiries
            </h2>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="mt-2 block text-base md:text-lg font-bold text-slate-900 dark:text-white hover:text-cyan-400 transition-colors break-all"
            >
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
            >
              Compose Email
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Copy email address"
              title="Copy to clipboard"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </GlassCard>

        {/* Contact Person 1 Card */}
        <GlassCard className="p-6 flex flex-col justify-between" hoverEffect>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Phone className="w-5 h-5" />
              </div>
              <Badge variant="cyan">Representative 1</Badge>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {COMPANY_INFO.contacts[0].name}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Direct Phone Line
            </p>
            <a
              href={`tel:${COMPANY_INFO.contacts[0].phoneRaw}`}
              className="mt-3 block text-xl font-mono font-bold text-blue-600 dark:text-cyan-400 hover:underline tracking-tight"
            >
              {COMPANY_INFO.contacts[0].phoneDisplay}
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-2">
            <div className="flex items-center justify-between">
              <a
                href={`tel:${COMPANY_INFO.contacts[0].phoneRaw}`}
                className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
              >
                Call {COMPANY_INFO.contacts[0].phoneDisplay}
              </a>
              <span className="text-[10px] text-emerald-500 font-medium">Telephone Link Ready</span>
            </div>

            {/* Configurable WhatsApp Button (Inactive per requirements) */}
            <div className="relative group/wa">
              <button
                type="button"
                disabled
                className="w-full mt-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-200/50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 border border-slate-300/40 dark:border-white/5 flex items-center justify-center gap-1.5 cursor-not-allowed opacity-80"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {COMPANY_INFO.contacts[0].name} (Pending Prefix)</span>
              </button>
              <div className="text-[10px] text-amber-600 dark:text-amber-400/90 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>International dialing code pending confirmation.</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Contact Person 2 Card */}
        <GlassCard className="p-6 flex flex-col justify-between" hoverEffect>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Phone className="w-5 h-5" />
              </div>
              <Badge variant="purple">Representative 2</Badge>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {COMPANY_INFO.contacts[1].name}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Direct Phone Line
            </p>
            <a
              href={`tel:${COMPANY_INFO.contacts[1].phoneRaw}`}
              className="mt-3 block text-xl font-mono font-bold text-purple-600 dark:text-purple-400 hover:underline tracking-tight"
            >
              {COMPANY_INFO.contacts[1].phoneDisplay}
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-2">
            <div className="flex items-center justify-between">
              <a
                href={`tel:${COMPANY_INFO.contacts[1].phoneRaw}`}
                className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline"
              >
                Call {COMPANY_INFO.contacts[1].phoneDisplay}
              </a>
              <span className="text-[10px] text-emerald-500 font-medium">Telephone Link Ready</span>
            </div>

            {/* Configurable WhatsApp Button (Inactive per requirements) */}
            <div className="relative group/wa">
              <button
                type="button"
                disabled
                className="w-full mt-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-200/50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 border border-slate-300/40 dark:border-white/5 flex items-center justify-center gap-1.5 cursor-not-allowed opacity-80"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {COMPANY_INFO.contacts[1].name} (Pending Prefix)</span>
              </button>
              <div className="text-[10px] text-amber-600 dark:text-amber-400/90 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>International dialing code pending confirmation.</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Frontend Inquiry Form */}
      <GlassCard className="p-8 md:p-12 relative overflow-hidden" glow>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="blue" dot>
                Project Inquiries
              </Badge>
              <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                Phase 1 Frontend Demonstration
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Send a Detailed Project Scope
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Complete the client questionnaire below. Client-side input validation and error states are fully simulated.
            </p>
          </div>

          {submittedDemo ? (
            /* Polished Success Modal / State */
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-xl space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Form Validation Completed Successfully
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Demonstration Submission Captured (Client-Side Only)
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                <p>
                  <strong>Phase 1 Scope Disclosure:</strong> This contact form operates in frontend demonstration mode. In accordance with Phase 1 parameters, no database records have been created, and no external emails have been dispatched.
                </p>
                <p className="text-slate-400">
                  To contact the ArvinSoftware team immediately regarding active business engagements, please email{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-cyan-400 underline font-semibold"
                  >
                    {COMPANY_INFO.email}
                  </a>{' '}
                  or call{' '}
                  <span className="text-white font-mono">
                    {COMPANY_INFO.contacts[0].phoneDisplay}
                  </span>{' '}
                  / <span className="text-white font-mono">{COMPANY_INFO.contacts[1].phoneDisplay}</span>.
                </p>
              </div>

              <div className="pt-2 flex gap-3">
                <Button variant="glass" size="sm" onClick={handleReset}>
                  Test Another Submission
                </Button>
                <Button
                  href={`mailto:${COMPANY_INFO.email}`}
                  variant="primary"
                  size="sm"
                  icon={<Mail className="w-3.5 h-3.5" />}
                >
                  Email Us Directly
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/60 border ${
                        errors.fullName
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-white/10 focus:border-cyan-400 focus:ring-cyan-400'
                      } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/60 border ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-white/10 focus:border-cyan-400 focus:ring-cyan-400'
                    } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="e.g. +1 555-0199 or 9014194696"
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/60 border ${
                      errors.phone
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-white/10 focus:border-cyan-400 focus:ring-cyan-400'
                    } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company Name (optional) */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Company Name <span className="text-slate-400 lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    placeholder="e.g. Acme Corporation"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                {/* Service Interested In */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Service Interested In <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950 border ${
                      errors.service
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-white/10 focus:border-cyan-400 focus:ring-cyan-400'
                    } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-1 transition-all`}
                  >
                    <option value="">Select a proposed service</option>
                    {PROPOSED_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Custom Architecture & Consulting">
                      Custom Architecture &amp; Consulting
                    </option>
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Budget (optional) */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Estimated Budget <span className="text-slate-400 lowercase">(optional)</span>
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="">Select budget range (optional)</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                    <option value="$15,000 - $35,000">$15,000 - $35,000</option>
                    <option value="$35,000+">$35,000+</option>
                    <option value="Flexible / Discussion Needed">
                      Flexible / Discussion Needed
                    </option>
                  </select>
                </div>
              </div>

              {/* Expected Timeline (optional) */}
              <div>
                <label
                  htmlFor="timeline"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                >
                  Expected Timeline <span className="text-slate-400 lowercase">(optional)</span>
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                >
                  <option value="">Select target timeline (optional)</option>
                  <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                  <option value="1 - 3 months">1 - 3 months</option>
                  <option value="3 - 6 months">3 - 6 months</option>
                  <option value="Flexible roadmap">Flexible roadmap</option>
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                >
                  Project Description <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Outline your project objectives, target platforms, key features, or any specific challenges..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/60 border ${
                    errors.description
                      ? 'border-rose-500 focus:ring-rose-500'
                      : 'border-slate-200 dark:border-white/10 focus:border-cyan-400 focus:ring-cyan-400'
                  } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all resize-y`}
                />
                {errors.description && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Privacy Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        privacyConsent: e.target.checked,
                      })
                    }
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-cyan-400 cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    I acknowledge that this form is a Phase 1 frontend demonstration with client-side verification. For actual business communication, direct contact details are available above.
                  </span>
                </label>
                {errors.privacyConsent && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.privacyConsent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                  icon={
                    isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                >
                  {isSubmitting ? 'Validating Input...' : 'Submit Demo Inquiry'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </GlassCard>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-400">
          Loading contact module...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
