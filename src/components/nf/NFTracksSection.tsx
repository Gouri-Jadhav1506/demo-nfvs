import React from 'react';
import { GraduationCap, Award, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface NFTracksSectionProps {
  onOpenApplication: (track: string) => void;
  isDark?: boolean;
}

export const NFTracksSection: React.FC<NFTracksSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const tracks = [
    {
      id: 'student',
      number: '01',
      title: 'Student Startup Track',
      targetGroup: 'UG/PG students, campus innovators & E-Cell teams',
      icon: GraduationCap,
      bullets: [
        { bold: 'E-Cell hackathons', text: ' & structured innovation bootcamps' },
        { bold: '3–6 month cohorts', text: ' for pre-incubation & validation' },
        { bold: 'PoC micro-grants', text: ' & prototyping lab infrastructure' },
        { bold: 'Investor demo days', text: ' & experienced operator mentorship' },
      ],
      highlight: 'From campus project to scalable startup venture',
      badgeText: 'Cohort Enrolment',
      ctaText: 'Apply as Student Innovator',
    },
    {
      id: 'faculty',
      number: '02',
      title: 'Faculty & Researcher Track',
      targetGroup: 'Faculty researchers, scholars & departmental lab leads',
      icon: Award,
      bullets: [
        { bold: 'Commercialisation roadmaps', text: ' from laboratory to market' },
        { bold: 'AICTE-NISP IP policy', text: ' & institutional equity frameworks' },
        { bold: 'Grant readiness', text: ' for NIDHI, BIRAC & MSME schemes' },
        { bold: 'Patent drafting', text: ' & Technology Transfer Office (TTO) support' },
      ],
      highlight: 'Commercialise deep-tech patents & academic research',
      badgeText: 'Research to Venture',
      ctaText: 'Commercialize Faculty Research',
    },
    {
      id: 'external',
      number: '03',
      title: 'Individual & Open Track',
      targetGroup: 'Alumni, solo founders & grassroots tech innovators',
      icon: UserCheck,
      bullets: [
        { bold: 'Dedicated co-working', text: ' physical & collaborative incubation spaces' },
        { bold: 'Dev-for-Equity', text: ' rapid MVP engineering sprints' },
        { bold: 'Corporate pilots', text: ' & enterprise Go-to-Market access' },
        { bold: 'Angel syndication', text: ' & venture capital pitch access' },
      ],
      highlight: 'Grassroots & alumni to investable enterprises',
      badgeText: 'Venture Studio Build',
      ctaText: 'Join as Solo Founder',
    },
  ];

  return (
    <section
      id="tracks"
      className={`py-14 sm:py-20 border-b transition-colors duration-200 ${
        isDark ? 'bg-[#081528] border-slate-800 text-white' : 'bg-white border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-3 bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
            <span>Incubation Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Who NF Venture Studio <span className="text-[#D9A72E]">Supports</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Dedicated incubation frameworks designed to translate academic curiosity, technical IP, and entrepreneurial grit into viable enterprises.
          </p>
        </div>

        {/* 3 Clean Institutional Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                className={`group flex flex-col justify-between rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-l-4 hover:border-l-[#D9A72E] ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    : 'bg-[#F7F9FC] border-[#DCE3EC] hover:border-slate-300'
                }`}
              >
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                        isDark ? 'bg-slate-800 text-sky-400 group-hover:bg-[#123B73] group-hover:text-white' : 'bg-[#EAF1F9] text-[#123B73] group-hover:bg-[#123B73] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-mono font-bold text-slate-400 dark:text-slate-500">
                        #{track.number}
                      </span>
                      <div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 inline-block">
                          {track.badgeText}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Target */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {track.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {track.targetGroup}
                    </p>
                  </div>

                  {/* Bullets */}
                  <div className="my-3 space-y-2.5 flex-1">
                    {track.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#123B73] dark:text-sky-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="font-semibold text-slate-900 dark:text-white">
                            {bullet.bold}
                          </strong>
                          {bullet.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Highlight */}
                  <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-[#D9A72E] font-medium">
                    {track.highlight}
                  </div>
                </div>

                {/* Card Button */}
                <div className="p-4 sm:p-5 pt-0">
                  <button
                    onClick={() => onOpenApplication(track.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#123B73] hover:bg-[#0B1F3A] active:bg-[#0B1F3A] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-sm"
                  >
                    <span>{track.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
