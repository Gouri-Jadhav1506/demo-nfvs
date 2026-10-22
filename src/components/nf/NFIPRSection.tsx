import React, { useState } from 'react';
import {
  FileCheck2,
  Copyright,
  ShieldAlert,
  MapPin,
  Lock,
  ArrowRight,
  BookOpen,
  FileText,
  Users2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Check,
  ExternalLink,
} from 'lucide-react';

interface NFIPRSectionProps {
  onOpenApplication?: (track?: string) => void;
  isDark?: boolean;
}

export const NFIPRSection: React.FC<NFIPRSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const [activeType, setActiveType] = useState<number>(0);
  const [hoveredType, setHoveredType] = useState<number | null>(null);

  // Exact 5 existing IPR categories (no new categories invented)
  const iprTypes = [
    {
      id: 'patent',
      name: 'Patent',
      badge: 'Tech & Inventions',
      shortBadge: 'Inventions',
      icon: FileCheck2,
      tagline: 'Novel & Industrially Applicable',
      description:
        'For qualifying inventions that are novel, involve an inventive step, and are industrially applicable across hardware, software, and deep-tech domains.',
      examples: ['Deep-tech algorithms', 'Hardware prototypes', 'Mechanical devices', 'Biotech processes'],
      coverage: '20 Years Statutory Exclusivity',
    },
    {
      id: 'copyright',
      name: 'Copyright',
      badge: 'Code & Content',
      shortBadge: 'Code & Datasets',
      icon: Copyright,
      tagline: 'Original Creative Works',
      description:
        'For original creative works such as written software source code, artistic creations, architectural drawings, and proprietary training datasets.',
      examples: ['Software source code', 'Curated datasets', 'System architectures', 'Research publications'],
      coverage: 'Lifetime of Author + 60 Years',
    },
    {
      id: 'trademark',
      name: 'Trademark (TM)',
      badge: 'Brand Identity',
      shortBadge: 'Brand & Logos',
      icon: ShieldAlert,
      tagline: 'Distinctive Brand Identifiers',
      description:
        'For distinctive brand identifiers, including venture names, product logos, commercial marks, and domain identities that distinguish goods or services.',
      examples: ['Startup venture names', 'Product logos', 'Registered slogans', 'Commercial trade dress'],
      coverage: '10 Years Renewable Indefinitely',
    },
    {
      id: 'gi',
      name: 'Geographical Indication',
      badge: 'Regional Heritage',
      shortBadge: 'Native Origin',
      icon: MapPin,
      tagline: 'Origin & Native Qualities',
      description:
        'For qualifying goods that possess unique characteristics, reputation, or qualities directly attributable to their specific geographical origin.',
      examples: ['Indigenous agro-tech', 'Regional artisan crafts', 'Specialty minerals', 'Heritage processes'],
      coverage: '10 Years Protected Territory',
    },
    {
      id: 'tradesecret',
      name: 'Trade Secret',
      badge: 'Confidentiality',
      shortBadge: 'Proprietary Assets',
      icon: Lock,
      tagline: 'Proprietary IP Assets',
      description:
        'For valuable confidential business information, training weights, customer algorithms, and operational formulas protected through legal secrecy measures.',
      examples: ['Proprietary formulas', 'Model training weights', 'Commercial algorithms', 'Internal playbooks'],
      coverage: 'Protected Indefinitely via NDAs',
    },
  ];

  const supportPillars = [
    {
      icon: BookOpen,
      title: 'IPR Awareness Clinics',
      desc: 'Workshops for students and faculty on prior-art search and patent defense.',
    },
    {
      icon: FileText,
      title: 'Statutory Drafting & Filing',
      desc: 'Assistance in provisional & complete patent drafting with licensed attorneys.',
    },
    {
      icon: Users2,
      title: 'Expert Attorney Network',
      desc: 'Direct connections with certified patent attorneys & tech transfer officers.',
    },
    {
      icon: Sparkles,
      title: 'Commercial Licensing',
      desc: 'Structuring spin-off equity charters and corporate licensing agreements.',
    },
  ];

  // Display hovered item if user is hovering over a circle, otherwise the clicked active item
  const selectedIndex = hoveredType !== null ? hoveredType : activeType;
  const current = iprTypes[selectedIndex];
  const CurrentIcon = current.icon;

  return (
    <section
      id="ipr-protection"
      className={`py-12 sm:py-16 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#08182D] border-slate-800 text-white' : 'bg-white border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
              <span className="uppercase tracking-wider font-bold">Intellectual Property Rights (IPR)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Protect Innovation. <span className="text-[#D9A72E]">Build Venture Value.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              Assisting student and faculty inventors in identifying, protecting, and licensing their patentable discoveries before public disclosure.
            </p>
          </div>

          {onOpenApplication && (
            <button
              type="button"
              onClick={() => onOpenApplication('faculty')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#123B73] hover:bg-[#0B1F3A] transition-all shadow-xs shrink-0 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request IP Assessment</span>
              <ArrowRight className="w-4 h-4 text-[#D9A72E]" />
            </button>
          )}
        </div>

        {/* Interactive Circular IPR Nodes Strip */}
        <div className="relative pt-2 pb-4">
          {/* Subtle horizontal connecting pipeline on desktop */}
          <div
            className="hidden lg:block absolute top-[44px] left-16 right-16 h-0.5 bg-gradient-to-r from-[#123B73]/20 via-[#D9A72E]/40 to-[#123B73]/20 dark:from-sky-500/20 dark:via-amber-400/30 dark:to-sky-500/20 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {iprTypes.map((type, idx) => {
              const Icon = type.icon;
              const isSelected = activeType === idx;
              const isHovered = hoveredType === idx;
              const isFocused = isSelected || isHovered;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setActiveType(idx)}
                  onMouseEnter={() => setHoveredType(idx)}
                  onMouseLeave={() => setHoveredType(null)}
                  onFocus={() => setActiveType(idx)}
                  className="group flex flex-col items-center text-center cursor-pointer focus:outline-hidden"
                  aria-label={`${type.name} - ${type.tagline}`}
                  aria-pressed={isSelected}
                >
                  {/* Circular Visual Element with Animated Pulse and Hover Effects */}
                  <div className="relative mb-3">
                    {/* Pulsing ring indicator for active element */}
                    {isSelected && (
                      <span className="absolute -inset-1.5 rounded-full bg-[#D9A72E]/30 animate-pulse pointer-events-none" />
                    )}

                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                        isFocused
                          ? 'bg-[#123B73] text-white shadow-lg ring-4 ring-[#D9A72E]/60 -translate-y-1.5 scale-105'
                          : isDark
                          ? 'bg-slate-900 border-2 border-slate-700 text-slate-300 group-hover:border-[#D9A72E] group-hover:bg-slate-800 group-hover:text-white group-hover:-translate-y-1'
                          : 'bg-white border-2 border-slate-300 text-slate-700 shadow-xs group-hover:border-[#123B73] group-hover:bg-[#EAF1F9] group-hover:text-[#123B73] group-hover:-translate-y-1'
                      }`}
                    >
                      <Icon className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 ${
                        isFocused ? 'text-[#D9A72E]' : ''
                      }`} />

                      {/* Small badge count chip on top right of circle */}
                      <span
                        className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold border transition-colors ${
                          isFocused
                            ? 'bg-[#D9A72E] text-slate-950 border-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Concise Title & Scope Badge */}
                  <div className="space-y-1 w-full max-w-[140px]">
                    <h3
                      className={`text-xs sm:text-sm font-extrabold transition-colors leading-tight truncate ${
                        isFocused ? 'text-[#123B73] dark:text-[#D9A72E]' : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {type.name}
                    </h3>

                    <span
                      className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-colors ${
                        isFocused
                          ? 'bg-[#123B73] text-white dark:bg-sky-400 dark:text-slate-950'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {type.shortBadge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected / Hovered IPR Interactive Spotlight Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-md ${
            isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-slate-900'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Visual Icon & Main Narrative */}
            <div className="lg:col-span-8 space-y-4">
              {/* Header Badges */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="w-8 h-8 rounded-full bg-[#123B73] text-[#D9A72E] flex items-center justify-center font-bold text-xs shadow-xs">
                  <CurrentIcon className="w-4 h-4" />
                </span>
                <span className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {current.name} Protection
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border border-[#DCE3EC] dark:border-slate-700">
                  {current.badge}
                </span>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold ml-auto hidden sm:inline-block">
                  {current.coverage}
                </span>
              </div>

              {/* Tagline & Description */}
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#123B73] dark:text-sky-300">
                  "{current.tagline}"
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mt-1 font-normal">
                  {current.description}
                </p>
              </div>

              {/* Examples Chip Grid */}
              <div className="pt-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                  Qualifying Campus Discoveries &amp; Assets:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {current.examples.map((item, exIdx) => (
                    <span
                      key={exIdx}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-slate-200'
                          : 'bg-white border-slate-200 text-slate-800'
                      }`}
                    >
                      <Check className="w-3 h-3 text-[#D9A72E]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Statutory Filing Action Card */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3.5 shadow-2xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9A72E] block">
                  AICTE-NISP Statutory Filing
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  Protect Your {current.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  NF Venture Studio handles prior-art search, provisional drafting, and Technology Transfer Office filings with 100% inventor IP retention.
                </p>
              </div>

              <div className="pt-2">
                {onOpenApplication && (
                  <button
                    type="button"
                    onClick={() => onOpenApplication('faculty')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#123B73] hover:bg-[#0B1F3A] transition-all shadow-xs cursor-pointer"
                  >
                    <span>File {current.name} with NF Venture Studio</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A72E]" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Support Pillars with Circular Visual Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
          {supportPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex items-start gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs ${
                  isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-[#DCE3EC] text-slate-900'
                }`}
              >
                {/* Circular Mini Icon */}
                <div className="w-9 h-9 rounded-full bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-300 shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#D9A72E]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
