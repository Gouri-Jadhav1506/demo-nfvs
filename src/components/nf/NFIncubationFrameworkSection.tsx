import React, { useState } from 'react';
import {
  Lightbulb,
  Rocket,
  Compass,
  Layers,
  TrendingUp,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Check,
  Target,
  Users,
  Cpu,
  Building2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface NFIncubationFrameworkSectionProps {
  isDark?: boolean;
}

export const NFIncubationFrameworkSection: React.FC<NFIncubationFrameworkSectionProps> = ({
  isDark = false,
}) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const [activeEcosystemPillar, setActiveEcosystemPillar] = useState<'founders' | 'mentorship' | 'resources' | 'infrastructure'>('founders');

  const journeySteps = [
    {
      step: '01',
      number: 1,
      phase: 'Idea',
      title: 'Problem Discovery',
      stageBadge: 'Stage 1 · Ideation',
      duration: 'Weeks 1–4',
      shortDesc: 'Screening academic research and market problems into structured hypotheses with real user persona validation.',
      icon: Lightbulb,
      tagline: 'Identifying genuine institutional & market pain points',
      outputMetric: 'Validated Problem-Solution Hypothesis',
      color: '#D9A72E',
      deliverables: [
        'Validated problem-solution hypothesis',
        'User interview logs & persona maps',
        'Competitive landscape benchmark',
      ],
    },
    {
      step: '02',
      number: 2,
      phase: 'Validation',
      title: 'Proof-of-Concept (PoC)',
      stageBadge: 'Stage 1 · Pre-Incubation',
      duration: 'Months 2–3',
      shortDesc: 'Engineering functional working prototypes on campus test benches (AI, IoT, Robotics) and prior-art patent screening.',
      icon: Compass,
      tagline: 'Prototyping technical feasibility in university labs',
      outputMetric: 'Working Hardware & Software Lab MVP',
      color: '#38BDF8',
      deliverables: [
        'Working hardware/software prototype',
        'Technical benchmark test report',
        'Patentability screening assessment',
      ],
    },
    {
      step: '03',
      number: 3,
      phase: 'Incubation',
      title: 'Business Architecture',
      stageBadge: 'Stage 2 · Structuring',
      duration: 'Months 4–5',
      shortDesc: 'Incorporating statutory company entities (Pvt Ltd / LLP), defining founder equity splits, and ratifying AICTE-NISP IP charters.',
      icon: Layers,
      tagline: 'Designing unit economics & statutory company incorporation',
      outputMetric: 'Statutory Entity & Ratified IP Charter',
      color: '#34D399',
      deliverables: [
        'Pvt Ltd / LLP incorporation certificate',
        'AICTE-NISP compliant IP charter',
        'Financial unit economics model (BMC)',
      ],
    },
    {
      step: '04',
      number: 4,
      phase: 'Launch',
      title: 'Incubation Launch',
      stageBadge: 'Stage 2 · Incubation',
      duration: 'Months 6–9',
      shortDesc: 'Deploying dedicated campus makerspace desks, weekly 1-on-1 CXO sprint reviews, and institutional pitch decks.',
      icon: Rocket,
      tagline: 'Dedicated campus workspace & CXO operator mentorship',
      outputMetric: 'Turnkey Desks & CXO Sprint Reviews',
      color: '#A78BFA',
      deliverables: [
        'Dedicated campus incubation desk',
        'Weekly mentor sprint review meetings',
        'Investor pitch deck & venture dossier',
      ],
    },
    {
      step: '05',
      number: 5,
      phase: 'Growth',
      title: 'Market Scale & Grants',
      stageBadge: 'Stage 2 · Growth',
      duration: 'Months 10–12+',
      shortDesc: 'Securing non-dilutive central grants (NIDHI, BIRAC, MSME), participating in demo days, and executing corporate pilots.',
      icon: TrendingUp,
      tagline: 'Non-dilutive grants, investor demo days & enterprise pilots',
      outputMetric: '₹3Cr+ Grant Pipeline & Enterprise Pilots',
      color: '#F472B6',
      deliverables: [
        'Government grant applications (NIDHI/BIRAC)',
        'Angel demo day presentation showcase',
        'Commercial enterprise pilot agreements',
      ],
    },
  ];

  const current = journeySteps[selectedStep];

  const ecosystemPillars = [
    {
      id: 'founders' as const,
      label: 'Founders',
      title: 'Student Innovators & Faculty Creators',
      icon: Users,
      badge: 'Talent Empowerment',
      stat: '100% Inventor IP',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-400/30',
      desc: 'Structured equity split frameworks, academic duty-leave policies for founders, and co-building support from day zero.',
      points: [
        'AICTE-NISP compliant cap-table structures protecting faculty and student equity',
        'Institutional credit waiver and academic examination flexibility for incubatees',
        'Interdisciplinary team formation matching engineering with management talent',
      ],
    },
    {
      id: 'mentorship' as const,
      label: 'Mentorship',
      title: '50+ CXO Operators & Technical Architects',
      icon: Compass,
      badge: 'Operator Network',
      stat: 'Weekly 1-on-1 Sprints',
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-400/30',
      desc: 'Hands-on operator guidance from seasoned founders who have scaled hardware, deep-tech, and enterprise software companies.',
      points: [
        'Weekly sprint cadence reviewing technical milestones and commercial unit economics',
        'Direct access to industry CTOs for code review, PCB design validation, and QA',
        'Masterclasses on go-to-market execution, B2B pricing, and corporate procurement',
      ],
    },
    {
      id: 'resources' as const,
      label: 'Resources',
      title: 'Non-Dilutive Capital & Legal Infrastructure',
      icon: Layers,
      badge: 'Capital Syndication',
      stat: '₹3Cr+ Grant Pipeline',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-400/30',
      desc: 'Syndicating non-dilutive central government grants, seed funding syndicates, and statutory compliance assistance.',
      points: [
        'Turnkey application support for NIDHI-EIR, NIDHI-PRAYAS, and BIRAC BIG grants',
        'Statutory company incorporation (Pvt Ltd / LLP), GST, DPIIT startup recognition',
        'Technology Transfer Office (TTO) support for provisional & complete patent drafting',
      ],
    },
    {
      id: 'infrastructure' as const,
      label: 'Infrastructure',
      title: 'Turnkey Campus Makerspaces & Testing Labs',
      icon: Cpu,
      badge: 'Hardware Testbeds',
      stat: '4 Lab Domains',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/30',
      desc: 'Furnished 500–2,000 sq. ft. campus incubation facilities equipped with specialized lab bays and IoT/Robotics equipment.',
      points: [
        'AI Compute Workstations (RTX/A100 instances, Jetson Orin edge accelerators)',
        'Rapid physical prototyping suite with multi-axis 3D printers and CNC tools',
        'Cloud-based incubation ERP for attendance, milestone tracking, and telemetry',
      ],
    },
  ];

  const currentEcosystem = ecosystemPillars.find((p) => p.id === activeEcosystemPillar) || ecosystemPillars[0];
  const CurrentEcosystemIcon = currentEcosystem.icon;

  const handlePrev = () => {
    setSelectedStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
  };

  const handleNext = () => {
    setSelectedStep((prev) => (prev + 1) % journeySteps.length);
  };

  return (
    <section
      id="incubation-framework"
      className={`py-12 sm:py-16 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#0B1F3A] border-slate-800 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
            <span className="uppercase tracking-wider font-bold">Startup Journey &amp; Ecosystem</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            The Startup Pathway: <span className="text-[#D9A72E]">Idea → Validation → Growth</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            A stage-gated institutional roadmap paired with an integrated ecosystem of founders, mentors, capital resources, and lab infrastructure.
          </p>
        </div>

        {/* 1. VISUAL ANIMATED PATHWAY (Idea → Validation → Incubation → Launch → Growth) */}
        <div className="space-y-6">
          <div className="relative p-2 sm:p-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-xs">
            
            {/* Pathway Breadcrumb Header */}
            <div className="hidden sm:flex items-center justify-between px-3 py-2 border-b border-slate-200 dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <span>Stage-Gated Venture Pipeline</span>
              <span className="flex items-center gap-1.5 text-[#D9A72E]">
                <span className="w-2 h-2 rounded-full bg-[#D9A72E] animate-ping" />
                Active Milestone: {current.phase}
              </span>
            </div>

            {/* Pathway Animated Highway Line */}
            <div className="relative pt-3 pb-2">
              
              {/* Animated Connecting Pathway Line */}
              <div className="hidden lg:block absolute top-[46px] left-[8%] right-[8%] h-1 z-0">
                <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
                  <line
                    x1="0"
                    y1="2"
                    x2="100%"
                    y2="2"
                    stroke={isDark ? '#334155' : '#CBD5E1'}
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  {/* Dynamic Glowing Energy Line */}
                  <line
                    x1="0"
                    y1="2"
                    x2={`${(selectedStep / 4) * 100}%`}
                    y2="2"
                    stroke="#D9A72E"
                    strokeWidth="3"
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
              </div>

              {/* 5 Milestone Step Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
                {journeySteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isSelected = selectedStep === idx;
                  const isPast = idx < selectedStep;

                  return (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => setSelectedStep(idx)}
                      className={`group relative text-left p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                        isSelected
                          ? 'bg-[#123B73] text-white border-[#123B73] shadow-lg ring-2 ring-[#D9A72E]/70 -translate-y-1'
                          : isDark
                          ? 'bg-slate-900/90 border-slate-700/80 text-slate-100 hover:bg-slate-800 hover:border-slate-600'
                          : 'bg-white border-[#DCE3EC] text-slate-900 hover:bg-slate-50 hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      {/* Top Header: Phase Badge & Node Icon */}
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider transition-colors ${
                            isSelected
                              ? 'bg-[#D9A72E] text-slate-950'
                              : isPast
                              ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {step.phase}
                        </span>

                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-white/20 text-[#D9A72E] scale-110'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-[#123B73]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Step Title & Duration */}
                      <div className="space-y-0.5">
                        <h3 className="text-xs sm:text-sm font-extrabold leading-tight">
                          {step.title}
                        </h3>
                        <div
                          className={`text-[10px] font-mono font-semibold ${
                            isSelected ? 'text-[#D9A72E]' : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {step.duration}
                        </div>
                      </div>

                      {/* Indicator pill */}
                      <div className="mt-2 pt-2 border-t border-slate-200/40 dark:border-slate-700/40 flex items-center justify-between text-[10px] font-mono">
                        <span className={isSelected ? 'text-white/90 font-bold' : 'text-slate-400'}>
                          0{idx + 1} / 05
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E] animate-pulse" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Milestone Focus Detail Card */}
            <div
              className={`mt-4 p-5 sm:p-7 rounded-2xl border transition-all duration-300 ${
                isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-[#DCE3EC] text-slate-900 shadow-sm'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Area: Milestone Overview */}
                <div className="lg:col-span-7 space-y-3.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#123B73] text-white text-xs font-mono font-bold">
                      Milestone {current.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D9A72E] font-mono">
                      Phase: {current.phase}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                      <Clock className="w-3 h-3 text-[#D9A72E]" />
                      <span>{current.duration}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#123B73] dark:text-sky-300 mt-0.5">
                      "{current.tagline}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {current.shortDesc}
                  </p>

                  {/* Output Banner */}
                  <div className="p-3 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent text-xs flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#D9A72E]/20 text-[#D9A72E] flex items-center justify-center shrink-0">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-[#946912] dark:text-[#E8BD56] uppercase text-[10px] tracking-wider block font-mono">
                        Key Milestone Deliverable
                      </span>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">
                        {current.outputMetric}
                      </span>
                    </div>
                  </div>

                  {/* Previous / Next Navigation */}
                  <div className="pt-2 flex items-center justify-between text-xs font-bold">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-[#123B73] dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous Stage</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-1 text-[#123B73] dark:text-sky-300 hover:underline transition-colors cursor-pointer"
                    >
                      <span>Next Stage</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Area: Deliverable Checklist */}
                <div className="lg:col-span-5 p-5 rounded-xl bg-[#F7F9FC] dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <span>Verified Stage Gate Criteria</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#D9A72E]" />
                  </div>

                  <div className="space-y-2">
                    {current.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className={`p-2.5 rounded-xl border flex items-start gap-2.5 transition-colors ${
                          isDark ? 'bg-slate-900/60 border-slate-700/80' : 'bg-white border-slate-200'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D9A72E] shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between border-t border-slate-200 dark:border-slate-700">
                    <span>AICTE-NISP Stage Gate</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Policy Compliant</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 2. INTERACTIVE ECOSYSTEM ELEMENTS (Founders · Mentorship · Resources · Infrastructure) */}
        <div className="space-y-5 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9A72E]">
                Comprehensive Venture Support
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                Interactive Incubation Ecosystem
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Click an ecosystem pillar to reveal tailored resources and frameworks
            </p>
          </div>

          {/* 4 Ecosystem Pillar Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {ecosystemPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activeEcosystemPillar === pillar.id;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveEcosystemPillar(pillar.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? isDark
                        ? 'bg-slate-800 border-sky-400 text-white shadow-md ring-2 ring-sky-400/40 -translate-y-1'
                        : 'bg-white border-[#123B73] text-slate-900 shadow-md ring-2 ring-[#123B73]/30 -translate-y-1'
                      : isDark
                      ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:bg-slate-800'
                      : 'bg-white border-[#DCE3EC] text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${pillar.bgColor} ${pillar.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isSelected
                          ? 'bg-[#123B73] text-white dark:bg-sky-400 dark:text-slate-950'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {pillar.stat}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-extrabold leading-snug">{pillar.label}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {pillar.badge}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Ecosystem Details Box */}
          <div
            className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
              isDark
                ? 'bg-slate-900/90 border-slate-700 text-white'
                : 'bg-white border-[#DCE3EC] text-slate-900 shadow-xs'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${currentEcosystem.bgColor} ${currentEcosystem.color}`}
                >
                  <CurrentEcosystemIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9A72E]">
                      {currentEcosystem.badge}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {currentEcosystem.stat}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {currentEcosystem.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                    {currentEcosystem.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar Key Support Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
              {currentEcosystem.points.map((pt, pIdx) => (
                <div
                  key={pIdx}
                  className={`p-3.5 rounded-xl border flex items-start gap-2.5 transition-colors ${
                    isDark ? 'bg-slate-800/60 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <Check className="w-4 h-4 text-[#D9A72E] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
