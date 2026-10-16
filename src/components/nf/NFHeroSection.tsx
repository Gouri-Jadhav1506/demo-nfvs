import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Rocket, Zap, Building2, Layers, CheckCircle2, Phone, MapPin } from 'lucide-react';

interface NFHeroSectionProps {
  onOpenApplication: (track?: string) => void;
  isDark?: boolean;
}

export const NFHeroSection: React.FC<NFHeroSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPaused, setIsAutoPaused] = useState<boolean>(false);

  // Gentle, unobtrusive auto-cycle through the 3 incubation stages
  useEffect(() => {
    if (isAutoPaused) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4200);

    return () => clearInterval(timer);
  }, [isAutoPaused]);

  return (
    <section
      className={`relative pt-6 pb-10 sm:pt-12 sm:pb-20 border-b overflow-hidden transition-colors duration-200 ${
        isDark ? 'bg-[#0B1F3A] border-slate-800 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-[#172334]'
      }`}
    >
      {/* ================= SUBTLE BACKGROUND GRAPHICS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Soft radial tint */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.06),transparent_70%)]'
              : 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(18,59,115,0.04),transparent_70%)]'
          }`}
        />

        {/* Thin architectural grid in the top-right corner */}
        <svg
          className="absolute -top-10 -right-10 w-[420px] h-[420px] opacity-[0.03] dark:opacity-[0.05] text-[#123B73] dark:text-sky-300"
          fill="none"
          viewBox="0 0 400 400"
        >
          <defs>
            <pattern id="arch-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="32" cy="32" r="1" fill="currentColor" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#arch-grid)" />
        </svg>

        {/* Slowly drifting outlined circles (low opacity, ambient) */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full border border-[#123B73]/5 dark:border-sky-400/10 pointer-events-none animate-slowDrift" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full border border-[#D9A72E]/10 dark:border-[#D9A72E]/15 pointer-events-none animate-slowDriftAlt" />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Institutional Messaging & Actions (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* Understated Eyebrow Badge without decorative dash and with pulsing gold dot */}
            <div className="flex items-center mb-4">
              <div
                className={`inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-2xl sm:rounded-full text-xs font-semibold border transition-all duration-200 max-w-full flex-wrap ${
                  isDark
                    ? 'bg-slate-900 text-slate-200 border-slate-700'
                    : 'bg-white text-[#0B1F3A] border-[#DCE3EC] shadow-xs'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#D9A72E] shrink-0 animate-indicator-pulse" aria-hidden="true" />
                <span className="leading-snug">NF Venture Studio · Naree Care Foundation Initiative</span>
              </div>
            </div>

            {/* Main Headline with Navy & Gold Accent and subtle entrance motion */}
            <h1
              className={`animate-heroFadeUp font-extrabold tracking-tight leading-[1.2] sm:leading-[1.16] text-balance mb-4 sm:mb-5 break-words ${
                isDark ? 'text-white' : 'text-[#0B1F3A]'
              }`}
              style={{ fontSize: 'clamp(1.5rem, 4vw + 0.5rem, 2.8rem)' }}
            >
              Building Scalable Pipelines for <span className="text-[#D9A72E]">Academia &amp; Beyond</span>
            </h1>

            {/* Supporting Statement with selective restrained emphasis */}
            <p
              className={`text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl text-pretty mb-6 sm:mb-8 ${
                isDark ? 'text-slate-300' : 'text-[#475569]'
              }`}
            >
              Partnering with institutions to transform <span className="font-semibold text-slate-800 dark:text-slate-100">academic research, student innovation, and faculty IP</span> into{' '}
              <strong className={isDark ? 'text-white font-semibold' : 'text-[#123B73] font-semibold'}>
                scalable, investable ventures
              </strong>.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 mb-7 sm:mb-9">
              <button
                onClick={() => onOpenApplication('student')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#123B73] hover:bg-[#0B1F3A] active:bg-[#0B1F3A] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123B73] focus-visible:ring-offset-2"
              >
                <Rocket className="w-4 h-4 text-[#D9A72E] flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span>Apply for Incubation Center</span>
                <ArrowRight className="w-4 h-4 text-white/80 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onOpenApplication('institutional')}
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123B73] focus-visible:ring-offset-2 ${
                  isDark
                    ? 'bg-slate-800 text-slate-100 border-slate-700 hover:bg-slate-700 hover:text-white'
                    : 'bg-white text-[#123B73] border-[#DCE3EC] hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-[#D9A72E] transition-transform duration-200 group-hover:scale-110" />
                <span>Schedule Campus Assessment</span>
              </button>

              <a
                href="#tracks"
                className={`group inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors duration-200 self-center sm:self-auto ${
                  isDark ? 'text-sky-300 hover:text-sky-200' : 'text-[#123B73] hover:text-[#0B1F3A]'
                }`}
              >
                <span>Explore Tracks</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Venture Engines: Three Simple, Well-Aligned Cards with Subtle Hover & Pale Blue Icon Container */}
            <div className="pt-6 sm:pt-7 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3.5 text-slate-500 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
                <span>Three Venture Engines</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {[
                  {
                    icon: Rocket,
                    label: 'Incubate',
                    sub: 'Pre-incubation & Prototypes',
                    desc: 'Cohorts, hackathons, and PoC micro-grants for emerging innovators.',
                  },
                  {
                    icon: Zap,
                    label: 'Build',
                    sub: 'MVP & Venture Creation',
                    desc: 'Venture studio engineering, validation, and investor readiness.',
                  },
                  {
                    icon: Building2,
                    label: 'Embed',
                    sub: 'Incubator-in-a-Box',
                    desc: 'End-to-end campus center setup, NIRF & IIC policy alignment.',
                  },
                ].map((engine, idx) => {
                  const Icon = engine.icon;
                  return (
                    <div
                      key={idx}
                      className={`group p-3.5 sm:p-4 rounded-xl border min-w-0 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-l-2 hover:border-l-[#D9A72E] ${
                        isDark
                          ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                          : 'bg-white border-[#DCE3EC] hover:border-slate-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 shrink-0 ${
                            isDark
                              ? 'bg-slate-800 text-sky-400 group-hover:bg-[#123B73] group-hover:text-white'
                              : 'bg-[#EAF1F9] text-[#123B73] group-hover:bg-[#123B73] group-hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-sm text-slate-900 dark:text-white truncate">{engine.label}</span>
                      </div>
                      <div className="text-xs font-semibold text-[#D9A72E] mb-1 break-words">
                        {engine.sub}
                      </div>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 break-words">
                        {engine.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Institutional Overview Card (5 cols) with subtle stage connector */}
          <div className="lg:col-span-5 flex justify-center w-full min-w-0">
            <div
              onMouseEnter={() => setIsAutoPaused(true)}
              onMouseLeave={() => setIsAutoPaused(false)}
              className={`w-full max-w-lg rounded-2xl border p-4 sm:p-6 md:p-7 shadow-sm transition-all duration-200 hover:shadow-md min-w-0 ${
                isDark
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-white'
                  : 'bg-white border-[#DCE3EC] hover:border-slate-300 text-[#172334]'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-400 shadow-xs shrink-0">
                    <Layers className="w-4 h-4 text-[#D9A72E]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-tight text-slate-900 dark:text-white truncate">Incubation Framework</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">From Research to Market Readiness</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#D9A72E]/40 text-[#D9A72E] bg-[#D9A72E]/10 shrink-0">
                  Institutional
                </span>
              </div>

              {/* Step Sequence with clear vertical connector line & active stage indicator */}
              <div className="relative py-4 sm:py-5 space-y-3">
                {/* Thin visual connector line linking the 3 stage badges */}
                <div
                  className="absolute left-[25px] sm:left-[27px] top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-700 pointer-events-none"
                  aria-hidden="true"
                />

                {[
                  {
                    step: '01',
                    phase: 'Phase 01',
                    title: 'Ideate & Filter',
                    detail: 'Screen academic research, student projects, and faculty patents for commercial viability.',
                  },
                  {
                    step: '02',
                    phase: 'Phase 02',
                    title: 'Incubate & Prototype',
                    detail: 'Access deep-tech prototyping labs, technical mentorship, and regulatory guidance.',
                  },
                  {
                    step: '03',
                    phase: 'Phase 03',
                    title: 'Scale & Commercialize',
                    detail: 'Establish corporate tie-ups, venture capital access, and spin-off licensing models.',
                  },
                ].map((item, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      className={`relative z-10 group flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? isDark
                            ? 'bg-slate-800 border-sky-400/50 shadow-sm border-l-4 border-l-[#D9A72E]'
                            : 'bg-white border-[#123B73]/40 shadow-sm border-l-4 border-l-[#D9A72E]'
                          : isDark
                            ? 'bg-slate-800/40 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800/70'
                            : 'bg-slate-50/80 border-[#E2E8F0] hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-200 ${
                          isActive
                            ? 'bg-[#123B73] text-white ring-2 ring-[#D9A72E] shadow-xs'
                            : 'bg-[#123B73] text-white'
                        }`}
                      >
                        {item.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div
                            className={`text-xs font-bold transition-colors duration-200 ${
                              isActive
                                ? 'text-[#123B73] dark:text-sky-300'
                                : 'text-slate-900 dark:text-white'
                            }`}
                          >
                            {item.title}
                          </div>
                          <span
                            className={`text-[10px] font-semibold px-1.5 py-0.5 rounded transition-colors duration-200 shrink-0 ${
                              isActive
                                ? 'bg-[#D9A72E] text-slate-950 font-bold'
                                : 'text-[#D9A72E]'
                            }`}
                          >
                            {item.phase}
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed break-words">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Institutional Assurance Strip */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>NIRF &amp; IIC Compliant</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Hardware &amp; IoT Labs</span>
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row sm:flex-row items-start xs:items-center justify-between gap-2 pt-3 text-xs text-slate-500 dark:text-slate-400 border-t border-dashed border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#123B73] dark:text-sky-400 shrink-0" />
                    <span className="truncate">Nigdi, Pune · Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D9A72E] shrink-0" />
                    <a href="tel:8379879846" className="hover:underline font-semibold text-slate-700 dark:text-slate-300 transition-colors">
                      8379879846
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
