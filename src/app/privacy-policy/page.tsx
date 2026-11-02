import React from 'react';
import { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/companyData';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy (Draft) — ArvinSoftware',
  description:
    'Draft Privacy Policy outline for ArvinSoftware. Subject to formal legal counsel review prior to publication.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      {/* Page Title */}
      <div className="space-y-3">
        <Badge variant="amber" dot>
          Legal Documentation
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Last Updated: November 2026 • Status: Draft (Pending Qualified Legal Review)
        </p>
      </div>

      {/* Mandatory Draft Notice Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-md flex items-start gap-3 text-amber-800 dark:text-amber-300">
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
        <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
          <strong className="font-bold block">
            DRAFT DOCUMENT — REQUIRES FORMAL LEGAL REVIEW
          </strong>
          <p>
            This document is a structural draft prepared exclusively for frontend architecture, layout demonstration, and design review. It does not constitute binding legal counsel, nor does ArvinSoftware claim regulatory compliance approval until formalized by certified legal advisors.
          </p>
        </div>
      </div>

      {/* Policy Content Sections */}
      <GlassCard className="p-8 sm:p-12 space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            1. Overview &amp; Scope
          </h2>
          <p>
            ArvinSoftware (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects visitor and client privacy. This draft policy describes how information is handled when visiting our website. In Phase 1, our website operates primarily as an informative, static frontend showcase.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. Information Handled in Phase 1
          </h2>
          <p>
            During Phase 1 frontend operation:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
            <li>
              <strong>Contact Forms:</strong> Inquiries submitted through our website contact form operate as client-side demonstrations. Submissions are processed locally in the browser and are not persisted to a backend database or dispatched via production mail servers.
            </li>
            <li>
              <strong>Direct Communications:</strong> Any inquiries initiated by you via telephone or our direct email address (<code className="text-cyan-500">{COMPANY_INFO.email}</code>) are handled directly by company representatives.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            3. Local Storage &amp; Preferences
          </h2>
          <p>
            We utilize standard browser local storage (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">localStorage</code>) strictly to preserve user interface preferences—specifically your chosen theme mode (dark mode or light mode). This information remains stored exclusively on your device and is not shared with external trackers.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            4. Third-Party Links &amp; Placeholders
          </h2>
          <p>
            Our website may reference ongoing project titles (e.g., WOWBUS, Madams Chocklets). These references are descriptive portfolio records. Any links to external services or future production deployments will be governed by their respective privacy policies upon publication.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            5. Data Protection Standards
          </h2>
          <p>
            We implement modern transport layer security (HTTPS) and follow standard software design security practices to protect any future data exchanges.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            6. Inquiries and Contact Information
          </h2>
          <p>
            If you have questions regarding this draft policy or technical privacy practices, please contact our team:
          </p>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 space-y-2 text-xs">
            <div>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 underline">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div>
              <strong>Representatives:</strong> {COMPANY_INFO.contacts[0].name} ({COMPANY_INFO.contacts[0].phoneDisplay}) &amp; {COMPANY_INFO.contacts[1].name} ({COMPANY_INFO.contacts[1].phoneDisplay})
            </div>
          </div>
        </section>
      </GlassCard>
    </div>
  );
}
