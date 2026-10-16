import React, { useEffect, useRef, useState } from 'react';
import { NFLogo } from './NFLogo';
import { ClipboardCheck, Network, Cpu, Rocket, ArrowRight, Play, Pause, RotateCcw, Check, CheckCircle2 } from 'lucide-react';

interface NFArchitectureAndProcessProps {
  onOpenApplication: (track?: string) => void;
  onOpenLabDetails: (domain: 'AI' | 'IoT' | 'Robotics' | 'Electronics') => void;
  isDark?: boolean;
}

export const NFArchitectureAndProcess: React.FC<NFArchitectureAndProcessProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const playIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearPlayInterval = () => {
    if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
      playIntervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearPlayInterval();
    };
  }, []);

  const stages = [
    {
      id: 1,
      label: 'Stage I – Assess',
      subtitle: 'MoU & Capability Audit',
      month: 'Month 1',
      tag: 'MoU & Audit',
      progress: 25,
      Icon: ClipboardCheck,
      desc: 'Capability audit of academic labs, student research projects, existing faculty patents, and institutional E-Cell baseline.',
      deliverables: [
        'Lab & IP capability audit report',
        'NBA & NAAC Criterion 3 baseline evaluation',
        'Institutional co-execution partnership MoU',
      ],
    },
    {
      id: 2,
      label: 'Stage II – Govern',
      subtitle: 'Board & IP Policy Ratification',
      month: 'Month 2',
      tag: 'Board & IP',
      progress: 50,
      Icon: Network,
      desc: 'Institutional Incubation Board constitution and formal AICTE-NISP compliant IP policy adoption and ratification.',
      deliverables: [
        'Institutional Incubation Board constituted',
        'AICTE-NISP IP policy ratified by leadership',
        'Faculty SPOC & student E-Cell governance operational',
      ],
    },
    {
      id: 3,
      label: 'Stage III – Build',
      subtitle: 'Space Setup & Digital ERP',
      month: 'Months 3–4',
      tag: 'Space & ERP',
      progress: 75,
      Icon: Cpu,
      desc: 'On-campus incubation and prototyping space configuration alongside complete Digital Incubation ERP portal rollout.',
      deliverables: [
        '500–2,000+ sq. ft. dedicated campus innovation hub',
        'Digital Incubation ERP management portal deployed',
        'Annual IIC master activity & workshop schedule',
      ],
    },
    {
      id: 4,
      label: 'Stage IV – Operate & Handover',
      subtitle: 'Cohort Launch & Handover',
      month: 'Months 5–12+',
      tag: 'Self-Sustaining',
      progress: 100,
      Icon: Rocket,
      desc: 'Structured cohort incubation, mentor matchmaking, investor demo days, and turnkey operational handover for sustainability.',
      deliverables: [
        'Cohort-1 venture intake, prototyping & mentorship',
        'Investor demo days, patent filings & seed linkage',
        'Turnkey handover with established operational playbooks',
      ],
    },
  ];

  const handleStageSelect = (idx: number) => {
    if (isPlaying) {
      clearPlayInterval();
      setIsPlaying(false);
    }
    setActiveStage(idx);
    setScrollProgress(stages[idx].progress);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      clearPlayInterval();
      setIsPlaying(false);
    } else {
      clearPlayInterval();
      setIsPlaying(true);

      let nextIndex = activeStage;
      if (nextIndex >= stages.length - 1 || isFinished) {
        nextIndex = 0;
        setActiveStage(0);
        setScrollProgress(stages[0].progress);
        setIsFinished(false);
      }

      playIntervalRef.current = setInterval(() => {
        nextIndex += 1;
        if (nextIndex >= stages.length) {
          clearPlayInterval();
          setIsPlaying(false);
          setIsFinished(true);
        } else {
          setActiveStage(nextIndex);
          setScrollProgress(stages[nextIndex].progress);
        }
      }, 2600);
    }
  };

  return (
    <section
      id="architecture"
      className={`py-14 sm:py-20 border-b transition-colors duration-200 ${
        isDark ? 'bg-[#081528] border-slate-800 text-white' : 'bg-white border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-3 bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
            <span>Operational Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Architecture &amp; <span className="text-[#D9A72E]">Rollout Roadmap</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A battle-tested four-pillar institutional model and a 12-month phased transition from assessment to self-sustaining operation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* ================= LEFT BOX: FOUR-PILLAR INCUBATION ARCHITECTURE ================= */}
          <div
            className={`flex flex-col rounded-2xl border p-6 sm:p-7 shadow-xs transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-[#F7F9FC] border-[#DCE3EC]'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Four-Pillar Incubation Architecture
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Institutional Co-Execution Framework</p>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#123B73] dark:text-sky-400">
                Core Model
              </span>
            </div>

            {/* 4 Pillars Grid with Central Connected Hub */}
            <div className="flex-1 flex flex-col justify-between space-y-2 relative">
              
              {/* Top Row: Pillar 1 & 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Pillar 1 */}
                <div
                  className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:border-l-2 hover:border-l-[#123B73] dark:hover:border-l-sky-400 ${
                    isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-[#DCE3EC]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      1. Pre-Incubation
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#123B73] dark:text-sky-400 font-bold">·</span>
                      <span><strong>Hackathons &amp; bootcamps</strong> for idea discovery</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#123B73] dark:text-sky-400 font-bold">·</span>
                      <span><strong>3–6 month cohorts</strong> with PoC micro-grants</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#123B73] dark:text-sky-400 font-bold">·</span>
                      <span><strong>Prototyping labs</strong> &amp; workstation access</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#123B73] dark:text-sky-400 font-bold">·</span>
                      <span><strong>E-Cell activation</strong> &amp; campus demo days</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div
                  className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:border-l-2 hover:border-l-[#D9A72E] ${
                    isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-[#DCE3EC]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      2. Venture Incubation
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#D9A72E] font-bold">·</span>
                      <span><strong>Dev-for-Equity</strong> rapid MVP engineering</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#D9A72E] font-bold">·</span>
                      <span><strong>Entity incorporation</strong> (Pvt Ltd / LLP support)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#D9A72E] font-bold">·</span>
                      <span><strong>CXO mentoring</strong> &amp; domain guidance</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#D9A72E] font-bold">·</span>
                      <span><strong>GTM pilots</strong> &amp; angel syndication access</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Central Connecting Flow Hub */}
              <div className="relative py-1 flex flex-col items-center justify-center">
                {/* Thin vertical connector line from top */}
                <div className="w-[1.5px] h-2.5 bg-gradient-to-b from-[#123B73]/30 to-[#D9A72E]/50 dark:from-sky-400/30 dark:to-[#D9A72E]/50" />
                
                <div
                  className={`px-4 py-2 rounded-xl border flex items-center gap-3 transition-shadow duration-200 hover:shadow-sm ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-[#DCE3EC] text-slate-900 shadow-xs'
                  }`}
                >
                  <NFLogo size="sm" variant={isDark ? 'light' : 'dark'} showSubtitle={false} />
                  <div className="text-left border-l border-slate-200 dark:border-slate-700 pl-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
                      <span className="text-xs font-bold text-[#123B73] dark:text-sky-300">
                        NF Venture Studio Engine
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Co-Execution &amp; Lab-to-Market Pipeline
                    </div>
                  </div>
                </div>

                {/* Thin vertical connector line to bottom */}
                <div className="w-[1.5px] h-2.5 bg-gradient-to-b from-[#D9A72E]/50 to-[#123B73]/30 dark:from-[#D9A72E]/50 dark:to-sky-400/30" />
              </div>

              {/* Bottom Row: Pillar 3 & 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Pillar 3 */}
                <div
                  className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:border-l-2 hover:border-l-[#123B73] dark:hover:border-l-sky-400 ${
                    isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-[#DCE3EC]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      3. IPR &amp; Tech Transfer
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#123B73] dark:text-sky-400 font-bold">·</span>
                      <span><strong>Patent filings</strong> (provisional &amp; complete)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#123B73] dark:text-sky-400 font-bold">·</span>
                      <span><strong>AICTE-NISP policy</strong> adoption &amp; compliance</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#123B73] dark:text-sky-400 font-bold">·</span>
                      <span><strong>TTO enablement</strong> &amp; faculty training</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#123B73] dark:text-sky-400 font-bold">·</span>
                      <span><strong>Corporate licensing</strong> &amp; spin-off models</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 4 */}
                <div
                  className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:border-l-2 hover:border-l-emerald-600 dark:hover:border-l-emerald-400 ${
                    isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-[#DCE3EC]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      4. IIC &amp; Accreditation
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">·</span>
                      <span><strong>100% IIC calendar</strong> execution &amp; ratings</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">·</span>
                      <span><strong>NAAC Criterion 3</strong> documented dossiers</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">·</span>
                      <span><strong>NBA SAR evidence</strong> &amp; research score uplift</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">·</span>
                      <span><strong>NIRF &amp; ARIIA</strong> statutory compliance filing</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT BOX: 12-MONTH ROLLOUT JOURNEY ================= */}
          <div
            id="process"
            className={`flex flex-col rounded-2xl border p-6 sm:p-7 shadow-xs transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-[#F7F9FC] border-[#DCE3EC]'
            }`}
          >
            {/* Header with Play Flow button */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  12-Month Rollout Journey
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Interactive Phased Implementation</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-[#123B73] text-white border-[#123B73]'
                      : isFinished
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200'
                        : isDark
                          ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                          : 'bg-white text-slate-700 border-[#DCE3EC] hover:bg-slate-50'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-white" />
                      <span>Pause</span>
                    </>
                  ) : isFinished ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Replay</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#123B73] dark:text-sky-300" />
                      <span>Play Flow</span>
                    </>
                  )}
                </button>

                <span className="text-xs font-mono font-bold text-[#123B73] dark:text-sky-300">
                  {scrollProgress}%
                </span>
              </div>
            </div>

            {/* Interactive Stage Tabs */}
            <div className="flex sm:grid sm:grid-cols-4 gap-2 mb-3 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              {stages.map((st, i) => {
                const isSelected = i === activeStage;
                const isPast = i < activeStage;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleStageSelect(i)}
                    className={`py-2 px-2 rounded-xl text-center border transition-all cursor-pointer shrink-0 min-w-[100px] sm:min-w-0 ${
                      isSelected
                        ? isDark
                          ? 'bg-[#123B73] border-sky-400 text-white font-bold'
                          : 'bg-white border-[#123B73] text-[#123B73] font-bold shadow-xs'
                        : isPast
                          ? isDark
                            ? 'bg-slate-800/80 border-emerald-500/40 text-emerald-300'
                            : 'bg-emerald-50/60 border-emerald-200 text-emerald-800'
                          : isDark
                            ? 'bg-slate-800/40 border-slate-800 text-slate-400 hover:border-slate-700'
                            : 'bg-white border-[#DCE3EC] text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1 text-[11px] font-semibold">
                      {isPast ? (
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      ) : null}
                      <span>{st.month}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {st.tag}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="relative h-2 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#123B73] via-[#123B73] to-[#D9A72E] dark:from-sky-500 dark:to-[#D9A72E] transition-all duration-500 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>

            {/* 4 Sequential Stage Cards with Timeline Indicator */}
            <div className="flex-1 flex flex-col justify-between space-y-2.5 relative">
              {stages.map((stage, i) => {
                const Icon = stage.Icon;
                const isCurrent = i === activeStage;
                const isCompleted = i < activeStage;

                return (
                  <div
                    key={i}
                    onClick={() => handleStageSelect(i)}
                    className={`p-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-start gap-3 ${
                      isCurrent
                        ? isDark
                          ? 'bg-slate-800 border-sky-400 border-l-4 border-l-[#D9A72E] shadow-sm'
                          : 'bg-white border-[#123B73] border-l-4 border-l-[#D9A72E] shadow-xs'
                        : isCompleted
                          ? isDark
                            ? 'bg-slate-900/60 border-slate-800 border-l-4 border-l-emerald-500/80'
                            : 'bg-white/80 border-[#DCE3EC] border-l-4 border-l-emerald-600'
                          : isDark
                            ? 'bg-slate-900/40 border-slate-800/80 border-l-4 border-l-transparent'
                            : 'bg-white/60 border-slate-200 border-l-4 border-l-transparent'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                        isCurrent
                          ? 'bg-[#123B73] text-white border-transparent'
                          : isCompleted
                            ? 'bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-slate-700'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 sm:gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                            {stage.label}
                          </h4>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">
                            ({stage.month})
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1 shrink-0 ${
                            isCompleted
                              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                              : isCurrent
                                ? 'bg-blue-50 text-[#123B73] dark:bg-slate-700 dark:text-sky-300 font-semibold'
                                : 'text-slate-400'
                          }`}
                        >
                          {isCompleted ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 inline" />
                              <span>Completed</span>
                            </>
                          ) : isCurrent ? (
                            <>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
                              <span>Active Stage</span>
                            </>
                          ) : (
                            stage.tag
                          )}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {stage.desc}
                      </p>

                      {isCurrent && (
                        <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-700 animate-fadeIn">
                          <div className="text-[10px] font-semibold text-[#D9A72E] uppercase tracking-wider mb-1.5">
                            Key Deliverables:
                          </div>
                          <div className="space-y-1">
                            {stage.deliverables.map((item, dIdx) => (
                              <div key={dIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={() => onOpenApplication('institutional')}
                  className="group w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#123B73] hover:bg-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Book Institutional Readiness Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/80 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Institutional Partnership Roles Matrix */}
        <div
          className={`mt-10 p-6 sm:p-7 rounded-2xl border transition-colors ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-[#F7F9FC] border-[#DCE3EC]'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="text-xs font-semibold text-[#D9A72E] uppercase tracking-wider mb-1">
                Governance &amp; Responsibility Matrix
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Partnership Roles &amp; Responsibilities
              </h3>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
              Turnkey Co-Execution
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
            {/* Left: What NF Venture Studio Deploys */}
            <div
              className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-[#DCE3EC]'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#123B73] dark:bg-sky-400" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  NF Venture Studio Deploys
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#123B73] dark:text-sky-400 font-bold">✓</span>
                  <span><strong>Turnkey protocols</strong> &amp; Digital Incubation ERP portal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#123B73] dark:text-sky-400 font-bold">✓</span>
                  <span><strong>Venture studio engineers</strong> &amp; experienced operator mentors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#123B73] dark:text-sky-400 font-bold">✓</span>
                  <span><strong>Structured cohorts</strong>, hackathons, and patent drafting support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#123B73] dark:text-sky-400 font-bold">✓</span>
                  <span><strong>Investor networks</strong>, seed capital connections, and corporate pilots.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#123B73] dark:text-sky-400 font-bold">✓</span>
                  <span><strong>Audit dossiers</strong> for NAAC, NBA, NIRF, and IIC submissions.</span>
                </li>
              </ul>
            </div>

            {/* Right: What Your Institute Provides */}
            <div
              className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-[#DCE3EC]'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D9A72E]" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Your Institute Provides
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#D9A72E] font-bold">✓</span>
                  <span><strong>Campus innovation space</strong> (500–2,000+ sq. ft.).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9A72E] font-bold">✓</span>
                  <span><strong>Basic infrastructure</strong> (utilities, power, internet connectivity, and workstations).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9A72E] font-bold">✓</span>
                  <span><strong>Faculty SPOC</strong> and institutional IIC coordinator nomination.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9A72E] font-bold">✓</span>
                  <span><strong>Student outreach</strong> and engagement across academic departments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9A72E] font-bold">✓</span>
                  <span><strong>Incubation Board</strong> formation and AICTE-NISP IP policy adoption.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
