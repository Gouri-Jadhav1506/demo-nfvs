import React, { useState } from 'react';
import {
  ClipboardCheck,
  Network,
  Cpu,
  Rocket,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  TrendingUp,
  FileCheck2,
  Repeat,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Building2,
  BarChart3,
  Award,
} from 'lucide-react';
import prototypingLabImg from '../../assets/prototyping_lab.jpg';
import founderMentorshipImg from '../../assets/founder_mentorship.jpg';
import labAiComputeImg from '../../assets/lab_ai_compute.jpg';
import ventureStudioHubImg from '../../assets/venture_studio_hub.jpg';

interface NFArchitectureAndProcessProps {
  onOpenApplication: (track?: string) => void;
  onOpenLabDetails: (domain: 'AI' | 'IoT' | 'Robotics' | 'Electronics') => void;
  isDark?: boolean;
}

export const NFArchitectureAndProcess: React.FC<NFArchitectureAndProcessProps> = ({
  onOpenApplication,
  onOpenLabDetails,
  isDark = false,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'rollout'>('architecture');
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activeStage, setActiveStage] = useState<number>(0);

  const pillars = [
    {
      number: '01',
      stepNum: 1,
      title: 'Physical Hub & Makerspace',
      shortTitle: 'Physical Hub',
      role: 'Hardware & Prototyping Foundation',
      scope: '500–2,000+ sq. ft. Space',
      desc: 'Turnkey planning of dedicated founder co-working suites, meeting pods, and rapid prototyping test benches (AI, IoT, Robotics).',
      icon: Cpu,
      image: prototypingLabImg,
      badge: 'Turnkey Makerspace',
      feedsInto: 'Feeds validated hardware & prototypes into Governance & IP structuring',
      deliverables: [
        'Makerspace & electronics benches',
        'Collaborative founder co-working',
        'Hardware inspection equipment',
      ],
      impactTag: 'Infrastructure Readiness',
      actionType: 'lab' as const,
    },
    {
      number: '02',
      stepNum: 2,
      title: 'Governance & IP Framework',
      shortTitle: 'Governance & IP',
      role: 'Statutory Compliance & Legal Guardrails',
      scope: 'AICTE-NISP Policy Compliance',
      desc: 'Institutional Incubation Board constitution, AICTE-NISP compliant IP charters, faculty spin-off guidelines, and student equity rules.',
      icon: ShieldCheck,
      image: founderMentorshipImg,
      badge: 'Statutory Charters',
      feedsInto: 'Provides legally protected entities for Digital ERP tracking & milestone logging',
      deliverables: [
        'Ratified institutional IP charter',
        'Incubation Board constitution',
        'Faculty equity & conflict policies',
      ],
      impactTag: '100% Founder IP Protection',
      actionType: 'dossier' as const,
    },
    {
      number: '03',
      stepNum: 3,
      title: 'Digital Incubation ERP',
      shortTitle: 'Incubation ERP',
      role: 'Telemetry, Mentorship & Audit Analytics',
      scope: 'Telemetry & Accreditation Data',
      desc: 'Centralized software platform for application tracking, founder milestone logging, mentor time tracking, and instant NAAC/NBA/NIRF audit reports.',
      icon: Network,
      image: labAiComputeImg,
      badge: 'Accreditation Telemetry',
      feedsInto: 'Feeds verifiable venture metrics into central grant applications & angel syndicates',
      deliverables: [
        'Applicant evaluation portal',
        'Milestone & KPI dashboard',
        'Audit-ready accreditation logs',
      ],
      impactTag: 'Instant NIRF & NAAC Export',
      actionType: 'dossier' as const,
    },
    {
      number: '04',
      stepNum: 4,
      title: 'Capital & Industry Linkage',
      shortTitle: 'Capital & Industry',
      role: 'Commercialization & Venture Scaling',
      scope: 'National Ecosystem Access',
      desc: 'Direct bridge connecting university innovators to central & state seed grants (NIDHI, BIRAC, MSME), angel syndicates, and enterprise pilots.',
      icon: TrendingUp,
      image: ventureStudioHubImg,
      badge: 'Syndication Engine',
      feedsInto: 'Commercial revenue & grant reinvestment cycle back into campus physical facilities',
      deliverables: [
        'Non-dilutive grant preparation',
        'Annual investor demo days',
        'Corporate innovation challenges',
      ],
      impactTag: '₹3Cr+ Non-Dilutive Pipeline',
      actionType: 'dossier' as const,
    },
  ];

  const stages = [
    {
      stage: 'Stage I',
      title: 'MoU & Capability Audit',
      timeline: 'Month 1',
      tag: 'Audit & MoU',
      icon: ClipboardCheck,
      desc: 'Baseline capability evaluation across campus departmental labs, faculty patents, student projects, and existing E-Cell infrastructure.',
      milestones: [
        'Comprehensive campus lab & IP audit report',
        'NBA & NAAC Criterion 3 baseline evaluation',
        'Institutional co-execution partnership MoU signed',
      ],
      impact: 'Identifies immediate commercialization opportunities within existing campus research.',
    },
    {
      stage: 'Stage II',
      title: 'Governance & IP Ratification',
      timeline: 'Month 2',
      tag: 'Board & IP',
      icon: Network,
      desc: 'Formal constitution of the Institutional Incubation Board and institutional ratification of an AICTE-NISP compliant IP charter.',
      milestones: [
        'Institutional Incubation Board officially constituted',
        'AICTE-NISP IP policy ratified by university leadership',
        'Faculty SPOC & student E-Cell governance operationalized',
      ],
      impact: 'Protects university equity and provides legal clarity for student and faculty inventors.',
    },
    {
      stage: 'Stage III',
      title: 'Hub Setup & ERP Deployment',
      timeline: 'Months 3–4',
      tag: 'Space & ERP',
      icon: Cpu,
      desc: 'Configuring the physical on-campus incubation facility alongside deploying the complete digital Incubation ERP system.',
      milestones: [
        '500–2,000+ sq. ft. dedicated campus innovation hub furnished',
        'Digital Incubation ERP portal configured for students and mentors',
        'Annual MoE-IIC activity and workshop calendar scheduled',
      ],
      impact: 'Creates an inspiring physical and digital home for campus startup founders.',
    },
    {
      stage: 'Stage IV',
      title: 'Cohort Launch & Handover',
      timeline: 'Months 5–12+',
      tag: 'Self-Sustaining',
      icon: Rocket,
      desc: 'Inducting the first venture cohort, coordinating weekly mentor sprints, organizing demo days, and executing turnkey operational handover.',
      milestones: [
        'Cohort-1 venture intake, prototyping sprints & mentor matching',
        'Investor demo days, patent filings & seed grant linkage',
        'Turnkey operational handover with documented playbooks',
      ],
      impact: 'Establishes a permanent, self-sustaining campus incubation engine with verifiable ranking impact.',
    },
  ];

  const currentPillar = pillars[activePillar];
  const CurrentPillarIcon = currentPillar.icon;

  return (
    <section
      id="architecture"
      className={`py-10 sm:py-14 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#08182D] border-slate-800 text-white' : 'bg-white border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell space-y-8 sm:space-y-10">
        
        {/* Section Header with Dual View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
              <span>Campus Execution Framework</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Institutional Architecture &amp; <span className="text-[#D9A72E]">Turnkey Rollout</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
              Explore our four-pillar infrastructure foundation and the step-by-step 12-month operational roadmap.
            </p>
          </div>

          {/* Interactive Dual View Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-[#123B73] text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              4-Pillar Architecture
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rollout')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'rollout'
                  ? 'bg-[#123B73] text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              12-Month Rollout
            </button>
          </div>
        </div>

        {/* View 1: 4-Pillar Connected Flow Cycle Architecture */}
        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Interactive Connected Flow Cycle Stepper / Ribbon */}
            <div className="relative">
              {/* Desktop Connecting Flow Track */}
              <div
                className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#123B73]/20 via-[#D9A72E]/40 to-[#123B73]/20 dark:from-sky-500/20 dark:via-amber-400/30 dark:to-sky-500/20 z-0"
                aria-hidden="true"
              />

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={p.number}
                      type="button"
                      onClick={() => setActivePillar(idx)}
                      className={`group relative p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden ${
                        isActive
                          ? 'bg-[#123B73] text-white border-[#123B73] shadow-md ring-2 ring-[#D9A72E]/60 -translate-y-1'
                          : isDark
                          ? 'bg-slate-900/90 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-slate-600'
                          : 'bg-[#F7F9FC] text-slate-800 border-[#DCE3EC] hover:bg-white hover:border-slate-300 hover:shadow-xs'
                      }`}
                    >
                      {/* Top Node Header: Step & Icon */}
                      <div className="flex items-center justify-between mb-3 w-full">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-extrabold transition-colors ${
                            isActive
                              ? 'bg-[#D9A72E] text-slate-950 font-bold'
                              : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#123B73] dark:text-sky-300'
                          }`}
                        >
                          {p.number}
                        </span>

                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                            isActive
                              ? 'bg-white/15 text-[#D9A72E]'
                              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 group-hover:text-[#123B73]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Title & Scope */}
                      <div className="space-y-1">
                        <div
                          className={`text-[10px] font-mono uppercase font-bold tracking-wider truncate ${
                            isActive ? 'text-[#D9A72E]' : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {p.scope}
                        </div>
                        <h3 className="text-xs sm:text-sm font-extrabold leading-snug truncate">
                          {p.shortTitle}
                        </h3>
                      </div>

                      {/* Directional Step Marker Indicator */}
                      <div className="mt-3 pt-2.5 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[11px] font-semibold">
                        <span className={isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}>
                          Pillar 0{p.stepNum}
                        </span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform ${
                            isActive
                              ? 'text-[#D9A72E] translate-x-1'
                              : 'text-slate-400 group-hover:translate-x-0.5'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Synergistic Flow Highlight Bar */}
            <div
              className={`p-3 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs transition-colors ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                  : 'bg-[#EAF1F9]/60 border-[#DCE3EC] text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 font-medium">
                <span className="p-1 rounded-md bg-[#123B73] text-[#D9A72E]">
                  <Repeat className="w-3.5 h-3.5" />
                </span>
                <span>
                  <strong className="text-slate-900 dark:text-white">Continuous Incubation Cycle: </strong>
                  {currentPillar.feedsInto}
                </span>
              </div>

              {/* Step indicator with quick navigation */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setActivePillar((prev) => (prev - 1 + pillars.length) % pillars.length)}
                  aria-label="Previous pillar"
                  className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono font-bold px-2 py-0.5 text-[11px] text-[#123B73] dark:text-sky-300">
                  0{activePillar + 1} / 0{pillars.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActivePillar((prev) => (prev + 1) % pillars.length)}
                  aria-label="Next pillar"
                  className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Active Pillar Interactive Showcase Card */}
            <div
              className={`rounded-2xl border overflow-hidden transition-all duration-300 shadow-md ${
                isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-[#DCE3EC]'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[380px]">
                
                {/* Left: Authentic Image with Contextual Graphical Overlays */}
                <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] lg:min-h-full overflow-hidden bg-slate-950">
                  <img
                    src={currentPillar.image}
                    alt={`NF Venture Studio Architecture - ${currentPillar.title}`}
                    className="w-full h-full object-cover object-center block absolute inset-0 transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20 text-[11px] font-mono font-bold uppercase tracking-wider">
                      <CurrentPillarIcon className="w-3.5 h-3.5 text-[#D9A72E]" />
                      <span>{currentPillar.badge}</span>
                    </span>
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-[#123B73]/90 text-white border border-white/20 text-[11px] font-mono font-bold">
                      {currentPillar.scope}
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D9A72E] font-bold block">
                      Execution Pillar 0{currentPillar.stepNum}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold leading-tight">
                      {currentPillar.title}
                    </h4>
                    <p className="text-xs text-slate-200 line-clamp-2 font-medium">
                      {currentPillar.role}
                    </p>
                  </div>
                </div>

                {/* Right: Structured Architecture Details with Deliverable Tags */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-1.5 pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9A72E]">
                          Pillar 0{currentPillar.stepNum} of 04 · {currentPillar.impactTag}
                        </span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300">
                          {currentPillar.scope}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                        {currentPillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#123B73] dark:text-sky-300">
                        {currentPillar.role}
                      </p>
                    </div>

                    {/* Concise Narrative Description */}
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {currentPillar.desc}
                    </p>

                    {/* Deliverables as Graphical Chips (No text-heavy clutter) */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Institutional Deliverables &amp; Setup:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {currentPillar.deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className={`p-2.5 rounded-xl border flex items-start gap-2 transition-colors ${
                              isDark
                                ? 'bg-slate-800/60 border-slate-700/80'
                                : 'bg-slate-50 border-slate-200'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A72E] shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Next Stage Trigger */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5">
                      {pillars.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => setActivePillar(dotIdx)}
                          aria-label={`Go to pillar ${dotIdx + 1}`}
                          className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                            dotIdx === activePillar
                              ? 'w-6 bg-[#123B73] dark:bg-sky-400'
                              : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      {currentPillar.actionType === 'lab' ? (
                        <button
                          type="button"
                          onClick={() => onOpenLabDetails('AI')}
                          className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl border transition-colors cursor-pointer ${
                            isDark
                              ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:text-[#123B73]'
                          }`}
                        >
                          <span>Explore Lab Hardware</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#D9A72E]" />
                        </button>
                      ) : null}

                      <button
                        type="button"
                        onClick={() => onOpenApplication('institutional')}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-[#123B73] hover:bg-[#0B1F3A] rounded-xl transition-all shadow-xs cursor-pointer"
                      >
                        <span>Request Campus Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        )}

        {/* View 2: 12-Month Rollout Roadmap */}
        {activeTab === 'rollout' && (
          <div className="space-y-6 animate-fadeIn" id="process">
            {/* Stage Selector Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {stages.map((stg, idx) => {
                const Icon = stg.icon;
                const isActive = activeStage === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`p-3 rounded-xl border transition-all duration-200 text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#123B73] text-white border-[#123B73] shadow-xs'
                        : isDark
                        ? 'bg-slate-900 border-slate-700 text-slate-100 hover:bg-slate-800'
                        : 'bg-[#F7F9FC] border-[#DCE3EC] text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold uppercase ${isActive ? 'text-[#D9A72E]' : 'text-slate-600 dark:text-slate-300'}`}>
                        {stg.timeline}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#D9A72E]' : 'text-slate-500 dark:text-slate-300'}`} />
                    </div>
                    <div className="text-xs font-bold leading-tight truncate">
                      {stg.stage}: {stg.tag}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detail Card */}
            <div
              className={`p-5 sm:p-7 rounded-2xl border transition-all duration-300 shadow-md ${
                isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-[#DCE3EC] text-slate-900'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#123B73] text-white text-xs font-mono font-bold">
                      {stages[activeStage].timeline}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D9A72E] font-mono">
                      {stages[activeStage].stage} · Milestone
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {stages[activeStage].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
                    {stages[activeStage].desc}
                  </p>

                  <div className="p-3 rounded-lg bg-[#F7F9FC] dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 text-justify">
                    <strong className="text-[#123B73] dark:text-sky-300 font-semibold">Institutional Impact: </strong>
                    {stages[activeStage].impact}
                  </div>
                </div>

                <div className="lg:col-span-5 p-4 rounded-xl bg-[#F7F9FC] dark:bg-slate-800 border border-slate-300 dark:border-slate-700 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white pb-1.5 border-b border-slate-200 dark:border-slate-700">
                    Stage Deliverables
                  </div>
                  {stages[activeStage].milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{m}</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenApplication('institutional')}
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-white bg-[#123B73] hover:bg-[#0B1F3A] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Request Campus Dossier</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
