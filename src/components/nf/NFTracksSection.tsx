import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Check,
  ChevronRight,
  Users,
} from 'lucide-react';

interface NFTracksSectionProps {
  onOpenApplication: (track: string) => void;
  isDark?: boolean;
}

export const NFTracksSection: React.FC<NFTracksSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('student');

  const tracks = [
    {
      id: 'student',
      number: '01',
      title: 'Student Startup Track',
      shortTitle: 'Student Innovators',
      badge: 'Cohort Intake',
      targetGroup: 'UG/PG students & campus E-Cell teams',
      desc: 'Transforms academic projects and student curiosities into venture-backed startups through pre-incubation and prototype micro-grants.',
      icon: GraduationCap,
      accentBorder: 'border-l-[#123B73] dark:border-l-sky-400',
      activeBorder: 'ring-2 ring-[#123B73] dark:ring-sky-400',
      iconBg: 'bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300',
      highlights: [
        'Structured 3–6 month pre-incubation cohorts',
        'Campus hackathons & ideation bootcamps',
        'PoC micro-grant linkage & prototyping access',
        'Direct 1-on-1 coaching by venture mentors',
      ],
      keyOutcome: 'Validated MVP & PoC Micro-Grants',
    },
    {
      id: 'faculty',
      number: '02',
      title: 'Faculty & Researcher Track',
      shortTitle: 'Faculty Researchers',
      badge: 'Lab to Market',
      targetGroup: 'Faculty members, PhD scholars & lab leads',
      desc: 'Commercializing university research and patented inventions while adhering strictly to AICTE-NISP institutional governance.',
      icon: Award,
      accentBorder: 'border-l-[#D9A72E]',
      activeBorder: 'ring-2 ring-[#D9A72E]',
      iconBg: 'bg-amber-50 dark:bg-amber-950/40 text-[#D9A72E]',
      highlights: [
        'Academic laboratory-to-market commercialization',
        'AICTE-NISP institutional IP and equity frameworks',
        'Grant applications for NIDHI, BIRAC & MSME',
        'Patent drafting & Technology Transfer Office support',
      ],
      keyOutcome: 'Patent Filings & Non-Dilutive Grants',
    },
    {
      id: 'external',
      number: '03',
      title: 'Individual & Open Track',
      shortTitle: 'Independent Founders',
      badge: 'Studio Co-Build',
      targetGroup: 'Alumni founders & independent innovators',
      desc: 'Hands-on venture studio co-building for technical founders seeking co-working space, agile MVP engineering, and capital syndication.',
      icon: UserCheck,
      accentBorder: 'border-l-emerald-600 dark:border-l-emerald-400',
      activeBorder: 'ring-2 ring-emerald-600 dark:ring-emerald-400',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
      highlights: [
        'Dedicated campus co-working & prototyping space',
        'Sprint-based MVP engineering & technical advisory',
        'Enterprise Go-to-Market pilots & corporate partners',
        'Angel syndicate and venture capital demo days',
      ],
      keyOutcome: 'Agile MVP & Seed Capital Syndication',
    },
  ];

  const currentTrack = tracks.find((t) => t.id === selectedTrack) || tracks[0];

  return (
    <section
      id="tracks"
      className={`py-12 sm:py-16 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#08182D] border-slate-800 text-white' : 'bg-white border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
            <span className="uppercase tracking-wider font-bold">Who NF Venture Studio Supports · Specialized Pathways</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Tailored Incubation for <span className="text-[#D9A72E]">Every Innovator</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 max-w-xl mx-auto leading-relaxed">
            Distinct operational and legal frameworks built to meet the specific requirements of student teams, academic researchers, and independent innovators.
          </p>
        </div>

        {/* 3 Pathway Cards (Clean, interactive selection, zero repetitive buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isSelected = selectedTrack === track.id;
            return (
              <div
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`group relative flex flex-col justify-between rounded-2xl border border-l-4 p-6 transition-all duration-200 cursor-pointer ${
                  track.accentBorder
                } ${
                  isSelected
                    ? isDark
                      ? 'bg-slate-900 border-slate-700 shadow-lg ring-2 ring-[#D9A72E]/60 -translate-y-1'
                      : 'bg-white border-[#DCE3EC] shadow-md ring-2 ring-[#123B73] -translate-y-1'
                    : isDark
                    ? 'bg-slate-900/80 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                    : 'bg-[#F7F9FC] border-[#DCE3EC] hover:bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header: Icon, Badge, and Radio Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-2xs ${track.iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                          Pathway #{track.number}
                        </span>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {track.badge}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Selection Check Badge */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#123B73] dark:bg-sky-400 text-white'
                          : 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-transparent group-hover:border-slate-400'
                      }`}
                      aria-label={isSelected ? `${track.title} selected` : `Select ${track.title}`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>

                  {/* Title & Target Audience */}
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                      {track.title}
                    </h3>
                    <p className="text-xs font-medium text-[#123B73] dark:text-sky-300 mt-1">
                      {track.targetGroup}
                    </p>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {track.desc}
                  </p>

                  {/* 4 Key Highlights */}
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Program Inclusions:
                    </span>
                    {track.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A72E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Milestone Chip */}
                <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Key Outcome:
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-[11px]">
                    {track.keyOutcome}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single Unified Section Action Bar (Replaces 3 redundant card buttons) */}
        <div
          className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 ${
            isDark ? 'bg-slate-900 border-slate-700' : 'bg-[#F7F9FC] border-[#DCE3EC]'
          }`}
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-[#EAF1F9] dark:bg-slate-800 border border-[#DCE3EC] dark:border-slate-700 items-center justify-center text-[#123B73] dark:text-sky-300 shrink-0">
              <Sparkles className="w-6 h-6 text-[#D9A72E]" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9A72E]">
                  Universal Application Window
                </span>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  · Cohort 2026 Active
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Applying for the <span className="text-[#123B73] dark:text-sky-300">{currentTrack.title}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Targeted for {currentTrack.targetGroup.toLowerCase()} with AICTE-NISP governance &amp; grant linkages.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => onOpenApplication(selectedTrack)}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#123B73] hover:bg-[#0B1F3A] transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Submit Application for {currentTrack.shortTitle}</span>
              <ArrowRight className="w-4 h-4 text-[#D9A72E]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
