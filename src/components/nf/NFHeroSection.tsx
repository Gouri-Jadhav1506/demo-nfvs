import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Rocket,
  Building2,
  GraduationCap,
  Users,
  Compass,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';
import ventureStudioHub from '../../assets/venture_studio_hub.jpg';
import { NFHero3DVisual } from './NFHero3DVisual';

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
  const heroMetrics = [
    { label: 'Campus Innovation Hubs', value: '500–2,000+', unit: 'sq. ft.', icon: Building2 },
    { label: 'Turnkey Lab Domains', value: '4', unit: 'AI · IoT · Bio · Robotics', icon: Cpu },
    { label: 'Operator & CXO Network', value: '50+', unit: 'Industry Mentors', icon: Users },
    { label: 'Institutional Compliance', value: '100%', unit: 'AICTE-NISP Aligned', icon: ShieldCheck },
  ];

  const stakeholders = [
    { name: 'Colleges & Universities', icon: GraduationCap },
    { name: 'Student Innovators', icon: Rocket },
    { name: 'Faculty Researchers', icon: Cpu },
    { name: 'Industry & Angel Syndicates', icon: Building2 },
  ];

  return (
    <section
      className={`relative pt-4 pb-10 sm:pt-8 sm:pb-14 border-b overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0B1F3A] border-slate-800 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-[#172334]'
      }`}
    >
      {/* Subtle Background Architectural Ambient Watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(56,189,248,0.09),transparent_70%)]'
              : 'bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(18,59,115,0.06),transparent_70%)]'
          }`}
        />
        <svg
          className="absolute -top-10 -right-10 w-[460px] h-[460px] opacity-[0.035] dark:opacity-[0.06] text-[#123B73] dark:text-sky-300"
          fill="none"
          viewBox="0 0 400 400"
        >
          <defs>
            <pattern id="hero-architectural-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="32" cy="32" r="1.2" fill="currentColor" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#hero-architectural-grid)" />
        </svg>
      </div>

      <div className="section-shell relative z-10 space-y-8 sm:space-y-10">
        
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D9A72E] animate-pulse shrink-0" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Naree Foundation Venture Studio · Institutional Incubation
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className={`font-black tracking-tight leading-[1.12] text-balance ${
                isDark ? 'text-white' : 'text-[#0B1F3A]'
              }`}
              style={{ fontSize: 'clamp(2rem, 3.6vw + 0.5rem, 3.4rem)' }}
            >
              Building Ideas. <br className="hidden sm:inline" />
              Incubating Startups. <br />
              <span className="text-[#D9A72E]">Enabling Sustainable Growth.</span>
            </h1>

            {/* Narrative Paragraph */}
            <p
              className={`text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-2xl text-justify ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}
            >
              An institutional venture studio bridging higher education, technology, and venture capital. 
              We partner with universities and engineering colleges to establish turnkey campus incubation centers, 
              protecting intellectual property and guiding student and faculty founders from proof-of-concept to seed funding.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => onOpenApplication('student')}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#123B73] hover:bg-[#0B1F3A] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <Rocket className="w-4 h-4 text-[#D9A72E] transition-transform duration-200 group-hover:scale-110" />
                <span>Apply for Incubation</span>
                <ArrowRight className="w-4 h-4 text-white/80 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onOpenApplication('institutional')}
                className={`group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border shadow-2xs hover:shadow-xs ${
                  isDark
                    ? 'bg-slate-800 text-slate-100 border-slate-700 hover:bg-slate-700'
                    : 'bg-white text-[#123B73] border-[#DCE3EC] hover:bg-slate-50'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-[#D9A72E]" />
                <span>Schedule Campus Assessment</span>
              </button>

              <a
                href="#about-nfvs"
                className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold tracking-wide transition-colors ${
                  isDark ? 'text-sky-300 hover:text-sky-200' : 'text-[#123B73] hover:text-[#0B1F3A]'
                }`}
              >
                <span>Studio Model</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-800 dark:text-slate-200 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A72E]" />
                AICTE-NISP Policy Aligned
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A72E]" />
                MoE-IIC Star Ratings
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A72E]" />
                Turnkey Lab &amp; ERP Infrastructure
              </span>
            </div>

          </div>

          {/* Right Column: Interactive 3D Hero Structure & Innovation Engine */}
          <div className="lg:col-span-5 relative">
            <NFHero3DVisual isDark={isDark} />
          </div>

        </div>

        {/* Graphical Bento Metrics Bar (High visual density, zero empty space) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {heroMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className={`p-3.5 sm:p-4 rounded-xl border flex items-center gap-3.5 transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-slate-900 border-slate-700 text-slate-100 hover:border-slate-600'
                    : 'bg-white border-[#DCE3EC] text-slate-900 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-300 shrink-0">
                  <Icon className="w-4 h-4 text-[#D9A72E]" />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">
                    {metric.label}
                  </div>
                  <div className="text-[10px] font-mono text-[#D9A72E] font-bold truncate">
                    {metric.unit}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
