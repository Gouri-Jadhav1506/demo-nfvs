import React, { useState } from 'react';
import {
  Trophy,
  Settings2,
  GitPullRequest,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Award,
} from 'lucide-react';

interface NFWhyPartnerSectionProps {
  onOpenApplication: (track?: string) => void;
  isDark?: boolean;
}

export const NFWhyPartnerSection: React.FC<NFWhyPartnerSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const [activeAccreditation, setActiveAccreditation] = useState<'ALL' | 'NAAC' | 'NBA' | 'IIC' | 'NIRF'>('ALL');

  const institutionalValues = [
    {
      number: '01',
      title: 'Ranking & Accreditation Uplift',
      desc: 'Build verifiable, audit-ready evidence for student startups, patents, faculty research, and funded projects aligned with NIRF, NAAC, and NBA criteria.',
      icon: Trophy,
      badge: 'Accreditation Aligned',
      highlights: ['NAAC Criterion 3 (Research & Innovation)', 'NBA Tier-I & II SAR Evidence Packs', 'NIRF-Innovation / ARIIA Submissions'],
    },
    {
      number: '02',
      title: 'Day-Zero Turnkey Operations',
      desc: 'Eliminates administrative burden on academic leadership. NF Venture Studio handles lab space setup, mentor matching, incubation ERP telemetry, and compliance dossiers.',
      icon: Settings2,
      badge: 'Zero Faculty Overhead',
      highlights: ['Furnished campus makerspace & lab', 'Complete Digital Incubation ERP', 'Standard Operating Procedures & Playbooks'],
    },
    {
      number: '03',
      title: 'Direct Industry & Capital Syndication',
      desc: 'Transforms campus intellectual property into investable enterprises through our curated network of 50+ CXO operators, corporate pilots, and grant pipelines.',
      icon: GitPullRequest,
      badge: 'Market Traction',
      highlights: ['Non-dilutive grant guidance (NIDHI/BIRAC)', 'Annual investor demo days & pitch events', 'Corporate innovation challenges & pilot POs'],
    },
  ];

  const accreditationData = [
    {
      id: 'NAAC',
      body: 'NAAC Accreditation',
      criterion: 'Criterion 3: Research, Innovations & Extension',
      deliverable: 'Audited student venture logs, patent filings, and E-Cell workshop registers ready for peer review.',
    },
    {
      id: 'NBA',
      body: 'NBA Accreditation',
      criterion: 'Tier-I & II SAR: Industry Interaction & Funded R&D',
      deliverable: 'Industry MoUs, prototyping lab evidence packs, sponsored research dossiers, and faculty spin-offs.',
    },
    {
      id: 'IIC',
      body: 'MoE Innovation Cell (IIC)',
      criterion: 'Quarterly Activity Calendar & Star Ratings',
      deliverable: 'Certified compliance reporting for MIC quarterly innovation calendars, hackathons, and IPR clinics.',
    },
    {
      id: 'NIRF',
      body: 'NIRF-Innovation / ARIIA',
      criterion: 'Research, Innovation & Entrepreneurial Outcomes',
      deliverable: 'Direct measurement of registered startup ventures, patent commercialization, and incubation revenue.',
    },
  ];

  const filteredData = activeAccreditation === 'ALL'
    ? accreditationData
    : accreditationData.filter((item) => item.id === activeAccreditation);

  return (
    <section
      id="why-ncf"
      className={`py-10 sm:py-14 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#0B1F3A] border-slate-800 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
              <span>Institutional Value Proposition</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Why Partner with <span className="text-[#D9A72E]">NF Venture Studio</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
              A comprehensive partnership framework that transforms campus culture, creates student employment opportunities, 
              and establishes an audited innovation ecosystem.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenApplication('institutional')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#123B73] hover:bg-[#0B1F3A] transition-colors shrink-0"
          >
            <span>Request Partnership Brief</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {institutionalValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                  isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-[#DCE3EC] text-slate-900'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-300">
                      <Icon className="w-5 h-5 text-[#D9A72E]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      #{val.number}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A72E]">
                      {val.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 leading-snug">
                      {val.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
                    {val.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                    {val.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-800 dark:text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123B73] dark:text-sky-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accreditation Alignment Matrix (Compact Infographic Strip) */}
        <div className="p-5 sm:p-6 rounded-2xl border bg-white dark:bg-slate-900 border-[#DCE3EC] dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800 gap-3">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9A72E]">
                Compliance &amp; Verification
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                Accreditation Alignment Matrix
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1">
              {(['ALL', 'NAAC', 'NBA', 'IIC', 'NIRF'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveAccreditation(tab)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activeAccreditation === tab
                      ? 'bg-[#123B73] text-white shadow-xs'
                      : isDark
                      ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredData.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#F7F9FC] dark:bg-slate-800 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#D9A72E]" />
                    {item.body}
                  </h4>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[#123B73] dark:text-sky-300">
                    {item.id}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-[#123B73] dark:text-sky-300">
                  {item.criterion}
                </div>

                <p className="text-[11px] text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
                  <strong className="text-slate-900 dark:text-white">Audit Deliverable: </strong>
                  {item.deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
