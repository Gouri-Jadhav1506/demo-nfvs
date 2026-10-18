import React, { useState, useEffect } from 'react';
import { Layers, CheckCircle2, MapPin, Phone, ArrowRight } from 'lucide-react';

interface NFIncubationFrameworkSectionProps {
  isDark?: boolean;
}

export const NFIncubationFrameworkSection: React.FC<NFIncubationFrameworkSectionProps> = ({
  isDark = false,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPaused, setIsAutoPaused] = useState<boolean>(false);

  // Gentle, unobtrusive auto-cycle through the 3 incubation stages
  useEffect(() => {
    if (isAutoPaused) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4200);

    return () => clearInterval(timer);
  }, [isAutoPaused]);

  const stages = [
    {
      step: '01',
      phase: 'Phase 01',
      title: 'Ideate & Filter',
      detail: 'Screen academic research, student projects, and faculty patents for commercial viability.',
    },
    {
      step: '02',
      phase: 'Phase 02',
      title: 'Incubate & Prototype',
      detail: 'Access deep-tech prototyping labs, technical mentorship, and regulatory guidance.',
    },
    {
      step: '03',
      phase: 'Phase 03',
      title: 'Scale & Commercialize',
      detail: 'Establish corporate tie-ups, venture capital access, and spin-off licensing models.',
    },
  ];

  return (
    <section
      id="incubation-framework"
      className={`py-12 sm:py-16 border-b transition-colors duration-200 ${
        isDark ? 'bg-[#0B1F3A] border-slate-800 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell">
        {/* Full-width Centered Framework Panel */}
        <div
          onMouseEnter={() => setIsAutoPaused(true)}
          onMouseLeave={() => setIsAutoPaused(false)}
          className={`w-full rounded-2xl border p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-200 hover:shadow-md ${
            isDark
              ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-white'
              : 'bg-white border-[#DCE3EC] hover:border-slate-300 text-[#172334]'
          }`}
        >
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-400 shadow-xs shrink-0">
                <Layers className="w-5 h-5 text-[#D9A72E]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold leading-tight text-slate-900 dark:text-white truncate">
                  Incubation Framework
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                  From Research to Market Readiness
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#D9A72E]/40 text-[#D9A72E] bg-[#D9A72E]/10">
                Institutional
              </span>
            </div>
          </div>

          {/* Three Stages Sequence: Horizontal on Desktop (lg:grid-cols-3), Stacked on Smaller Screens */}
          <div className="py-6 sm:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {stages.map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    className={`relative rounded-xl border p-4 sm:p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? isDark
                          ? 'bg-slate-800/90 border-sky-400/50 shadow-sm border-l-4 border-l-[#D9A72E]'
                          : 'bg-slate-50 border-[#123B73]/40 shadow-sm border-l-4 border-l-[#D9A72E]'
                        : isDark
                          ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                          : 'bg-white border-[#E2E8F0] hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-all duration-200 ${
                            isActive
                              ? 'bg-[#123B73] text-white ring-2 ring-[#D9A72E] shadow-xs'
                              : 'bg-[#123B73] text-white'
                          }`}
                        >
                          {item.step}
                        </div>
                        <span
                          className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded transition-colors duration-200 shrink-0 ${
                            isActive
                              ? 'bg-[#D9A72E] text-slate-950 font-bold'
                              : 'text-[#D9A72E] bg-[#D9A72E]/10'
                          }`}
                        >
                          {item.phase}
                        </span>
                      </div>

                      {/* Step Title */}
                      <div
                        className={`text-sm sm:text-base font-bold transition-colors duration-200 mb-1.5 ${
                          isActive
                            ? 'text-[#123B73] dark:text-sky-300'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {item.title}
                      </div>

                      {/* Step Detail */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-words">
                        {item.detail}
                      </p>
                    </div>

                    {/* Active State Bottom Indicator Bar */}
                    <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 rounded-full ${
                            isActive ? 'bg-[#D9A72E] w-full' : 'bg-transparent w-0'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Desktop progression connector between stages */}
                    {idx < 2 && (
                      <div
                        className="hidden lg:flex items-center justify-center absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-[#DCE3EC] dark:border-slate-800 text-slate-400 dark:text-slate-500 shadow-xs pointer-events-none"
                        aria-hidden="true"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-[#D9A72E]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Institutional Assurance Strip */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>NIRF &amp; IIC Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Hardware &amp; IoT Labs</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-[#123B73] dark:text-sky-400 shrink-0" />
                <span className="truncate">Nigdi, Pune · Maharashtra</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 lg:justify-end">
                <Phone className="w-4 h-4 text-[#D9A72E] shrink-0" />
                <a
                  href="tel:8379879846"
                  className="hover:underline font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                >
                  8379879846
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
