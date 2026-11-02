'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS, COMPANY_INFO } from '@/data/companyData';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickContactOpen, setQuickContactOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu or quick contact is open
  useEffect(() => {
    if (mobileMenuOpen || quickContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, quickContactOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-lg shadow-black/5 py-3'
            : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-white/10 shadow-sm"
              aria-label="Main Navigation"
            >
              {NAVIGATION_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 dark:text-cyan-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setQuickContactOpen(true)}
                className="group inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-[0.98] cursor-pointer text-xs px-4 py-2 gap-2 shadow-md bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 text-white shadow-blue-500/25 hover:shadow-cyan-500/35 border border-white/20 select-none"
                aria-haspopup="dialog"
                aria-expanded={quickContactOpen}
                aria-label="Open Let's Talk contact options"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-900 dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-900 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[60px] z-40 lg:hidden flex flex-col bg-slate-950/90 backdrop-blur-2xl border-t border-slate-800/80 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 px-3">
                Menu Navigation
              </div>
              {NAVIGATION_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600/15 text-cyan-400 font-semibold border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </Link>
                );
              })}

              <div className="pt-6 mt-4 border-t border-slate-800 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuickContactOpen(true);
                  }}
                  className="w-full py-3 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-900 border border-white/10 flex items-center justify-center gap-1.5"
                >
                  <span>Go to Full Contact Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          INTERACTIVE "LET'S TALK" QUICK CONNECT MODAL
          ========================================================================= */}
      {quickContactOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-contact-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setQuickContactOpen(false)}
        >
          <div
            className="w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <GlassCard
              className="p-6 sm:p-8 bg-slate-900/95 dark:bg-slate-950/95 border-cyan-500/30 text-white shadow-2xl shadow-cyan-500/10 space-y-6"
              glow
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="cyan" dot>
                    Direct Connect
                  </Badge>
                  <h3
                    id="quick-contact-title"
                    className="text-2xl font-bold tracking-tight text-white mt-1.5"
                  >
                    Let&apos;s Talk
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Connect directly with the ArvinSoftware engineering team.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setQuickContactOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Options List */}
              <div className="space-y-3">
                {/* Official Email */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-between group hover:border-cyan-400/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/20 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Official Email
                      </div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    title="Copy email"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Contact Person 1: Venugopal Reddy */}
                <a
                  href={`tel:${COMPANY_INFO.contacts[0].phoneRaw}`}
                  className="p-4 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-between group hover:border-cyan-400/40 hover:bg-slate-800/90 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {COMPANY_INFO.contacts[0].name}
                      </div>
                      <div className="text-xs font-mono text-cyan-400">
                        {COMPANY_INFO.contacts[0].phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-400 group-hover:text-cyan-300 flex items-center gap-1">
                    <span>Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                {/* Contact Person 2: Venkatesh Shetty */}
                <a
                  href={`tel:${COMPANY_INFO.contacts[1].phoneRaw}`}
                  className="p-4 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-between group hover:border-purple-400/40 hover:bg-slate-800/90 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        {COMPANY_INFO.contacts[1].name}
                      </div>
                      <div className="text-xs font-mono text-purple-400">
                        {COMPANY_INFO.contacts[1].phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-400 group-hover:text-purple-300 flex items-center gap-1">
                    <span>Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                {/* WhatsApp status note */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2 text-xs text-amber-300">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>WhatsApp direct channels pending international country prefix confirmation.</span>
                </div>
              </div>

              {/* Modal Footer Link to Full Form */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Prefer sending detailed project requirements?
                </span>
                <Link
                  href="/contact"
                  onClick={() => setQuickContactOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  <span>Open Full Inquiry Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      )}
    </>
  );
}
