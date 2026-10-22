import React, { useState } from 'react';
import {
  Lightbulb,
  Users,
  Building,
  Target,
  Calendar,
  Sparkles,
  TrendingUp,
  GraduationCap,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface NFIICSectionProps {
  onOpenApplication?: (track?: string) => void;
  isDark?: boolean;
}

export const NFIICSection: React.FC<NFIICSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const [selectedQuarter, setSelectedQuarter] = useState<number>(0);

  const quarters = [
    {
      id: 'Q1',
      quarter: 'Quarter 1',
      title: 'Ideation & Mindset',
      badge: 'Discovery Phase',
      activities: [
        'Innovation awareness seminars and campaigns',
        'Entrepreneurship as an attractive career pathway',
        'Inspirational success stories by alumni & founders',
        'Problem-solving & structured idea generation sessions',
      ],
    },
    {
      id: 'Q2',
      quarter: 'Quarter 2',
      title: 'Design & Prototyping',
      badge: 'Validation Phase',
      activities: [
        'Hands-on design thinking and PoC workshops',
        'Hardware & software prototype development bootcamps',
        'Business Model Canvas (BMC) structuring drills',
        'Incubation centre & technology lab exposure visits',
      ],
    },
    {
      id: 'Q3',
      quarter: 'Quarter 3',
      title: 'Business Planning & IPR',
      badge: 'Structuring Phase',
      activities: [
        'Startup business planning and feasibility analysis',
        'Intellectual Property Rights (IPR) filing clinics',
        'Inter-college business plan competitions',
        'Startup pitching masterclasses and demo days',
      ],
    },
    {
      id: 'Q4',
      quarter: 'Quarter 4',
      title: 'Incubation & Acceleration',
      badge: 'Scale Phase',
      activities: [
        'Startup incubation admission & acceleration cohorts',
        'Grant discovery, seed funding & investor readiness',
        'Industry interaction & corporate partner networking',
        'Annual startup showcase, innovation review & awards',
      ],
    },
  ];

  const objectives = [
    { icon: Lightbulb, title: 'Innovation Awareness', desc: 'Promoting inventive problem solving across campus.' },
    { icon: Users, title: 'Entrepreneurship Skills', desc: 'Building founder capabilities for startup creation.' },
    { icon: Building, title: 'Industry Connect', desc: 'Connecting with CXO operators & startup ecosystems.' },
    { icon: Target, title: 'Commercialization', desc: 'Transforming ideas into scalable ventures.' },
  ];

  return (
    <section
      id="iic-ecosystem"
      className={`py-10 sm:py-14 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#0B1F3A] border-slate-800 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
              <span>Ministry of Education Innovation Cell (MIC)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Institution's Innovation Council <span className="text-[#D9A72E]">(IIC)</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
              NF Venture Studio partners with academic institutions to operationalize certified IIC annual activity calendars, 
              securing higher star ratings and driving campus entrepreneurship.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#D9A72E] font-bold shrink-0">
            <span>Quarterly MIC Activity Execution</span>
          </div>
        </div>

        {/* 4 Objectives Compact Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {objectives.map((obj, idx) => {
            const Icon = obj.icon;
            return (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border ${
                  isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-[#DCE3EC] text-slate-900'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-300 mb-2">
                  <Icon className="w-4 h-4 text-[#D9A72E]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  {obj.title}
                </h4>
                <p className="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5 leading-snug text-justify">
                  {obj.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Four-Quarter Calendar Module */}
        <div
          className={`p-5 sm:p-7 rounded-2xl border transition-colors shadow-sm ${
            isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-[#DCE3EC] text-slate-900'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-3">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9A72E]">
                Annual Execution Calendar
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                Four-Quarter Activity Approach
              </h3>
            </div>

            {/* Quarter Pill Selector */}
            <div className="flex flex-wrap gap-1.5">
              {quarters.map((q, idx) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setSelectedQuarter(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedQuarter === idx
                      ? 'bg-[#123B73] text-white shadow-xs'
                      : isDark
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {q.id}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-[#123B73] text-white font-mono font-bold flex items-center justify-center text-xs">
                  {quarters[selectedQuarter].id}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {quarters[selectedQuarter].title}
                </span>
              </div>
              <span className="inline-block text-[11px] font-semibold text-[#D9A72E] bg-[#D9A72E]/10 px-2.5 py-0.5 rounded-full border border-[#D9A72E]/30">
                {quarters[selectedQuarter].badge}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 text-justify">
                Structured activities executed with faculty SPOCs and student E-Cell leaders.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quarters[selectedQuarter].activities.map((act, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-[#F7F9FC] dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
