import React from 'react';
import { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/companyData';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions (Draft) — ArvinSoftware',
  description:
    'Draft Terms of Service for ArvinSoftware website. Subject to qualified legal review prior to production publication.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <Badge variant="amber" dot>
          Legal Documentation
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Terms &amp; Conditions
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
            These Terms &amp; Conditions represent a design and content draft created exclusively for the Phase 1 frontend development of ArvinSoftware. No legal guarantees or statutory compliance representations are made until formal execution by authorized legal counsel.
          </p>
        </div>
      </div>

      {/* Structured Terms Content */}
      <GlassCard className="p-8 sm:p-12 space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or browsing the ArvinSoftware website, you acknowledge that you have read, understood, and agreed to be bound by these draft Terms &amp; Conditions and our Privacy Policy. If you do not agree to these terms, please refrain from using the site.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. Scope of Phase 1 Frontend
          </h2>
          <p>
            This website represents Phase 1 (frontend only) of ArvinSoftware&apos;s digital platform. All interactive features, including contact forms and career talent submissions, operate in demonstration mode and do not establish binding contractual services until formalized via direct written agreements.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            3. Intellectual Property Rights
          </h2>
          <p>
            The ArvinSoftware brand mark, tagline (&ldquo;Turning Ideas Into Digital Reality&rdquo;), custom graphics, visual styles, and source code are the intellectual property of ArvinSoftware. References to ongoing client projects (e.g., WOWBUS, Madams Chocklets) are held under respective stakeholder rights and nondisclosure covenants.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            4. Proposed Services &amp; Project Engagements
          </h2>
          <p>
            Descriptions of services, methodologies, and proposed technology stacks presented on this website are for conceptual and informational purposes. Formal software development agreements, statements of work (SOW), deliverables, pricing, and warranties are governed strictly by separate executed bilateral contracts.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            5. Limitation of Liability
          </h2>
          <p>
            In no event shall ArvinSoftware, its founders, or representatives be held liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or inability to access this informational website.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            6. Governing Contact Channels
          </h2>
          <p>
            For any legal inquiries, contracts, or notices, please reach out directly:
          </p>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 space-y-2 text-xs">
            <div>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 underline">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div>
              <strong>Designated Contacts:</strong> {COMPANY_INFO.contacts[0].name} ({COMPANY_INFO.contacts[0].phoneDisplay}) &amp; {COMPANY_INFO.contacts[1].name} ({COMPANY_INFO.contacts[1].phoneDisplay})
            </div>
          </div>
        </section>
      </GlassCard>
    </div>
  );
}
