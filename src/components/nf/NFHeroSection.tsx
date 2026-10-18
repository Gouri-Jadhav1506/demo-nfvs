import React from 'react';
import { ArrowRight, ShieldCheck, Rocket } from 'lucide-react';
import heroImage from '../../assets/hero_image.png';

export { NFVentureEnginesSection } from './NFVentureEnginesSection';
export { NFIncubationFrameworkSection } from './NFIncubationFrameworkSection';

interface NFHeroSectionProps {
  onOpenApplication: (track?: string) => void;
  isDark?: boolean;
}

export const NFHeroSection: React.FC<NFHeroSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  return (
    <section
      className={`relative pt-6 pb-12 sm:pt-12 sm:pb-20 border-b overflow-hidden transition-colors duration-200 ${
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Institutional Messaging & Actions (~54% on desktop) */}
          <div className="min-w-0">
            
            {/* Understated Eyebrow Badge with pulsing gold dot */}
            <div className="flex items-center mb-4 sm:mb-5">
              <div
                className={`inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 w-fit max-w-full ${
                  isDark
                    ? 'bg-[#102a4e] text-slate-100 border-[#DCE3EC] shadow-xs'
                    : 'bg-white text-[#0B1F3A] border-[#DCE3EC] shadow-xs'
                }`}
              >
                <span
                  className="hero-pill-dot inline-block w-2 h-2 min-w-2 rounded-full bg-[#D9A72E] shrink-0"
                  aria-hidden="true"
                  style={{
                    backgroundColor: '#D9A72E',
                    width: '8px',
                    height: '8px',
                    minWidth: '8px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <span className="leading-snug break-words">NF Venture Studio · Naree Foundation Initiative</span>
              </div>
            </div>

            {/* Main Headline with Navy & Gold Accent and entrance motion */}
            <h1
              className={`animate-heroFadeUp font-extrabold tracking-tight leading-[1.2] sm:leading-[1.16] text-balance mb-4 sm:mb-5 break-words ${
                isDark ? 'text-white' : 'text-[#0B1F3A]'
              }`}
              style={{ fontSize: 'clamp(1.75rem, 3.5vw + 0.5rem, 3rem)' }}
            >
              Building Scalable Pipelines for <span className="text-[#D9A72E]">Academia &amp; Beyond</span>
            </h1>

            {/* Supporting Statement with selective restrained emphasis */}
            <p
              className={`text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl text-pretty mb-7 sm:mb-9 ${
                isDark ? 'text-slate-300' : 'text-[#475569]'
              }`}
            >
              Partnering with institutions to transform <span className="font-semibold text-slate-800 dark:text-slate-100">academic research, student innovation, and faculty IP</span> into{' '}
              <strong className={isDark ? 'text-white font-semibold' : 'text-[#123B73] font-semibold'}>
                scalable, investable ventures
              </strong>.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5">
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

          </div>

          {/* Right Column: Framed Hero Image with theme-specific border (Light: #DCE3EC, Dark: #345779) */}
          <div className="flex justify-center items-center w-full min-w-0">
            <div
              className={`hero-image-frame relative w-full max-w-[480px] lg:max-w-[520px] aspect-square rounded-[20px] overflow-hidden border-[3px] shadow-sm hover:shadow-md transition-all ${
                isDark ? 'border-[#45688F]' : 'border-[#DCE3EC]'
              }`}
              style={{
                borderColor: isDark ? '#45688F' : '#DCE3EC',
                borderWidth: '3px',
                borderStyle: 'solid',
                borderRadius: '20px',
              }}
            >
              <img
                src={heroImage}
                alt="NF Venture Studio - Incubating Ideas into Real-World Solutions"
                className="w-full h-full object-cover block select-none"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
