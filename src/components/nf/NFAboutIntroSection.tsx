import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Building2,
  Quote,
  Cpu,
  Layers,
  TrendingUp,
  FileCheck2,
} from 'lucide-react';
import founderMentorshipImg from '../../assets/founder_mentorship.jpg';

interface NFAboutIntroSectionProps {
  isDark?: boolean;
}

export const NFAboutIntroSection: React.FC<NFAboutIntroSectionProps> = ({ isDark = false }) => {
  const flywheelSteps = [
    {
      step: '01',
      title: 'Problem Discovery & IP',
      desc: 'Screening lab discoveries, academic inquiry & patentability audits.',
      icon: FileCheck2,
    },
    {
      step: '02',
      title: 'Rapid Prototyping',
      desc: 'Turnkey campus test benches for AI, IoT, robotics & electronics.',
      icon: Cpu,
    },
    {
      step: '03',
      title: 'Statutory Incorporation',
      desc: 'Pvt Ltd company registration, founder equity & AICTE-NISP charters.',
      icon: ShieldCheck,
    },
    {
      step: '04',
      title: 'Capital & Pilot Syndication',
      desc: 'Non-dilutive grants (NIDHI/BIRAC), corporate pilots & angel seed rounds.',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="about-nfvs"
      className={`py-10 sm:py-14 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#08182D] border-slate-800 text-white' : 'bg-white border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
              <span>Institutional Venture Creation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Bridging Higher Education &amp; <span className="text-[#D9A72E]">Startup Venture Creation</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
              NF Venture Studio partners with university leadership to deploy turnkey campus incubation centers, 
              translating academic research into viable, market-tested enterprises with zero administrative friction.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#123B73] dark:text-sky-300 hover:underline shrink-0"
          >
            <span>Read Institutional Background</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Visual Composition: Photo + Co-Building Flywheel Infographic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Mentorship Photo with Compact Framing */}
          <div className="lg:col-span-5 relative">
            <div
              className={`relative rounded-2xl overflow-hidden border-2 shadow-lg ${
                isDark ? 'border-slate-700 shadow-slate-950/60' : 'border-[#DCE3EC] shadow-slate-200/90'
              }`}
            >
              <img
                src={founderMentorshipImg}
                alt="NF Venture Studio - Startup mentorship and advisory session"
                className="w-full h-[280px] sm:h-[320px] lg:h-[350px] object-cover object-center block"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D9A72E] font-bold">
                  Mentorship &amp; Advisory
                </span>
                <div className="text-sm font-bold leading-tight">
                  Hands-on Founder Co-Building
                </div>
                <p className="text-[11px] text-slate-200 line-clamp-1 mt-0.5">
                  Guidance on unit economics, go-to-market, and grant readiness.
                </p>
              </div>
            </div>

            {/* Overlaid Accreditation Pill */}
            <div
              className={`hidden sm:flex absolute -bottom-3 -right-3 items-center gap-2.5 px-3 py-2 rounded-xl border shadow-md backdrop-blur-md z-20 ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-white'
                  : 'bg-white border-[#DCE3EC] text-[#0B1F3A]'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-[#123B73] text-white flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-[#D9A72E]" />
              </div>
              <div>
                <div className="text-[11px] font-bold leading-tight">Accreditation Impact</div>
                <div className="text-[10px] text-slate-700 dark:text-slate-300 font-semibold">NAAC, NBA &amp; NIRF</div>
              </div>
            </div>
          </div>

          {/* Right Column: Graphical Venture Co-Building Engine Infographic */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9A72E]">
                Studio Co-Building Blueprint
              </span>
              <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 font-mono">
                IDEA $\to$ PROTOTYPE $\to$ ENTERPRISE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {flywheelSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className={`p-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 hover:border-slate-600 text-slate-100'
                        : 'bg-[#F7F9FC] border-[#DCE3EC] hover:border-slate-300 text-slate-900 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-6 h-6 rounded-md bg-[#123B73] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed text-justify pl-8">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Tightened Executive Philosophy Strip */}
            <div
              className={`p-4 rounded-xl border flex items-center gap-3.5 transition-colors ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-slate-100'
                  : 'bg-[#EAF1F9] border-[#DCE3EC] text-slate-900'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#123B73] text-[#D9A72E] flex items-center justify-center shrink-0">
                <Quote className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs italic leading-snug text-slate-800 dark:text-slate-200 text-justify">
                  "Empowering ideas today for a stronger, more inclusive tomorrow. Together, let us build an ecosystem where innovation creates opportunities."
                </p>
                <div className="text-[10px] font-bold text-[#D9A72E] mt-0.5 font-mono">
                  Ashok K. Patil · CEO, NF Venture Studio, Pune
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
