import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, FOOTER_SECTIONS } from '@/data/companyData';
import { Logo } from '@/components/ui/Logo';
import { Mail, Phone, AlertCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-200/80 dark:border-white/10 bg-slate-100/60 dark:bg-slate-950/70 backdrop-blur-xl">
      {/* Top ambient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Engineering modern digital experiences through clean architecture, responsive glassmorphism interfaces, and future-ready technology stacks.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-cyan-300 border border-blue-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                Phase 1 Frontend Architecture
              </span>
            </div>
          </div>

          {/* Quick Link Navigation Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Direct Supplied Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Direct Inquiries
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="group flex items-start gap-2.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <span className="break-all">{COMPANY_INFO.email}</span>
                </a>
              </li>

              {COMPANY_INFO.contacts.map((contact) => (
                <li key={contact.name} className="pt-1">
                  <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                    {contact.name}
                  </div>
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{contact.phoneDisplay}</span>
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400/90 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] leading-tight">
                    WhatsApp direct channels pending international country prefix confirmation.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>{COMPANY_INFO.copyright}</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              Privacy Policy (Draft)
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              Terms of Service (Draft)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
