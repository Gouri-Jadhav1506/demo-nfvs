import React, { useState } from 'react';
import { Trophy, Settings2, GitPullRequest, ArrowRight, FileCheck2 } from 'lucide-react';

interface NFWhyPartnerSectionProps {
  onOpenApplication: (track?: string) => void;
  isDark?: boolean;
}

export const NFWhyPartnerSection: React.FC<NFWhyPartnerSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const [activeAccreditation, setActiveAccreditation] = useState<'ALL' | 'NAAC' | 'NBA' | 'IIC' | 'NIRF'>('ALL');

  const reasons = [
    {
      number: '01',
      title: 'Boost Institutional Rankings',
      description:
        'Build audit-ready evidence for patents, student startups, faculty research, and NIRF, NAAC, and NBA ranking submissions.',
      icon: Trophy,
      tag: 'NIRF · NAAC · NBA Aligned',
      badgeText: 'Rankings Uplift',
    },
    {
      number: '02',
      title: 'Turnkey Day-Zero Management',
      description:
        'Handles space planning, mentor matching, ERP tracking, and compliance dossiers with minimal faculty overhead.',
      icon: Settings2,
      tag: 'Zero Operational Friction',
      badgeText: 'Turnkey Protocols',
    },
    {
      number: '03',
      title: 'Industry & Capital Connect',
      description:
        'Connects academic research with CXO operators, corporate pilots, angel syndicates, and government grant pipelines.',
      icon: GitPullRequest,
      tag: 'Lab to Market Transition',
      badgeText: 'Market Validation',
    },
  ];

  const accreditationData = [
    {
      id: 'NAAC',
      body: 'NAAC Accreditation',
      badge: 'Criterion 3',
      criteria: 'Criterion 3: Research, Innovations & Extension ecosystem metrics.',
      evidence: 'AQAR dossiers, incubation handbooks, and verifiable student E-Cell logs.',
    },
    {
      id: 'NBA',
      body: 'NBA (Tier-I & II SAR)',
      badge: 'SAR Evidence',
      criteria: 'Tier-I/II SAR: Industry interaction, active IPR, and funded R&D.',
      evidence: 'SAR evidence packs, PoC grant registers, and filed patent portfolios.',
    },
    {
      id: 'IIC',
      body: 'IIC (MoE–MIC)',
      badge: 'Star Ratings',
      criteria: 'Ministry of Education Innovation Cell quarterly activity calendar and Star Ratings.',
      evidence: 'Execution packs, IPR awareness clinics, and certified MIC activity reporting.',
    },
    {
      id: 'AICTE',
      body: 'AICTE / NISP',
      badge: 'Policy Adoption',
      criteria: 'National Innovation and Startup Policy (NISP) institutional governance.',
      evidence: 'Startup policy drafts, IP charters, and faculty equity frameworks.',
    },
    {
      id: 'NIRF',
      body: 'NIRF / ARIIA',
      badge: 'NIRF-Innovation',
      criteria: 'Research, innovation achievement metrics, and graduation startup outcomes.',
      evidence: 'Patent filings, startup counts, corporate publication data, and industry engagements.',
    },
  ];

  const filteredAccreditation = activeAccreditation === 'ALL'
    ? accreditationData
    : accreditationData.filter(item => item.id === activeAccreditation || (activeAccreditation === 'NIRF' && item.id === 'AICTE'));

  return (
    <section
      id="why-ncf"
      className={`py-14 sm:py-20 border-b transition-colors duration-200 ${
        isDark ? 'bg-[#0B1F3A] border-slate-800 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell space-y-12 sm:space-y-16">
        
        {/* Section 1: Why Partner With NF Venture Studio */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-3 bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
              <span>Institutional Value</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Why Partner with <span className="text-[#D9A72E]">NF Venture Studio</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              A comprehensive institutional model that bridges academia and industry, creating measurable impact for universities, researchers, and students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {reasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`group flex flex-col justify-between rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-l-4 hover:border-l-[#D9A72E] ${
                    isDark ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-[#DCE3EC] hover:border-slate-300'
                  }`}
                >
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                          isDark ? 'bg-slate-800 text-sky-400' : 'bg-[#EAF1F9] text-[#123B73]'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="text-right">
                        <span className="text-xl font-mono font-bold text-slate-400 dark:text-slate-500">
                          #{item.number}
                        </span>
                        <div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 inline-block">
                            {item.badgeText}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                      {item.description}
                    </p>

                    <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs font-medium text-[#D9A72E]">
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 pt-0">
                    <button
                      onClick={() => onOpenApplication('institutional')}
                      className={`w-full py-2.5 px-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border ${
                        isDark
                          ? 'text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border-slate-700'
                          : 'text-[#123B73] hover:bg-[#123B73] hover:text-white bg-white border-[#DCE3EC]'
                      }`}
                    >
                      <span>Explore Institutional Model</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Accreditation & Audit-Ready Evidence Matrix */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-colors ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#DCE3EC]'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9A72E] uppercase tracking-wider mb-1">
                <FileCheck2 className="w-4 h-4" />
                <span>Accreditation &amp; Ranking Impact</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Audit-Ready <span className="text-[#D9A72E]">Accreditation Evidence</span> Matrix
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Concrete documentation and verifiable outputs generated directly by NF Venture Studio for your institution.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
              {(['ALL', 'NAAC', 'NBA', 'IIC', 'NIRF'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveAccreditation(filter)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    activeAccreditation === filter
                      ? 'bg-[#123B73] text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Evidence Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-6">
            {filteredAccreditation.map((row, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:border-slate-300 dark:hover:border-slate-700 ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700/80'
                    : 'bg-[#F7F9FC] border-[#DCE3EC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {row.body}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#123B73] dark:text-sky-400">
                      {row.badge}
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                      Criteria &amp; Indicators:
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {row.criteria}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#123B73] dark:text-sky-300 block mb-0.5">
                    Evidence NF Venture Studio Supplies:
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {row.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
