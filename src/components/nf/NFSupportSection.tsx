import React from 'react';
import { FileText, FlaskConical, IndianRupee, ArrowRight, ShieldCheck, Cpu, Wifi, Bot, Zap } from 'lucide-react';

interface NFSupportSectionProps {
  onOpenLabDetails: (domain: 'AI' | 'IoT' | 'Robotics' | 'Electronics') => void;
  onOpenApplication: (track?: string) => void;
  isDark?: boolean;
}

export const NFSupportSection: React.FC<NFSupportSectionProps> = ({
  onOpenLabDetails,
  onOpenApplication,
  isDark = false,
}) => {
  return (
    <section
      id="support"
      className={`py-14 sm:py-20 border-b transition-colors duration-200 ${
        isDark ? 'bg-[#0B1F3A] border-slate-800 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-3 bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
            <span>Infrastructure &amp; Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Comprehensive <span className="text-[#D9A72E]">Incubation Support</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            End-to-end legal, technical, prototyping, and capital backing configured specifically for educational institutions and emerging startups.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: IPR & Technology Transfer */}
          <div
            className={`flex flex-col justify-between rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
              isDark ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-[#DCE3EC] hover:border-slate-300'
            }`}
          >
            <div className="p-6 sm:p-7 flex-1 flex flex-col">
              <div className="flex items-center gap-3.5 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-slate-800 text-sky-400' : 'bg-[#EAF1F9] text-[#123B73]'
                  }`}
                >
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    IPR &amp; Technology Transfer
                  </h3>
                  <span className="text-xs font-medium text-[#D9A72E]">
                    Patent Drafting, Licensing &amp; Policy
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 flex-1 text-xs text-slate-700 dark:text-slate-300">
                {[
                  { bold: 'Patent drafting & filing', text: ' (provisional and complete applications)' },
                  { bold: 'AICTE-NISP IP policy', text: ' & institutional faculty equity frameworks' },
                  { bold: 'TTO enablement', text: ' & academic prior-art training programs' },
                  { bold: 'Corporate licensing', text: ' & spin-off governance structures' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#123B73] dark:text-sky-400 font-bold">✓</span>
                    <span>
                      <strong className="font-semibold text-slate-900 dark:text-white">
                        {item.bold}
                      </strong>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 p-3 rounded-xl border flex items-center justify-between text-xs ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700/80 text-slate-300'
                    : 'bg-slate-50 border-[#DCE3EC] text-slate-600'
                }`}
              >
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#123B73] dark:text-sky-400" />
                  <span>AICTE-NISP Aligned</span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800">
                  IP Support
                </span>
              </div>
            </div>

            <div className={`p-4 sm:p-5 pt-0`}>
              <button
                onClick={() => onOpenApplication('faculty')}
                className={`w-full py-2.5 px-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border ${
                  isDark
                    ? 'text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border-slate-700'
                    : 'text-[#123B73] hover:bg-[#123B73] hover:text-white bg-white border-[#DCE3EC]'
                }`}
              >
                <span>Request Patent Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Prototyping Labs */}
          <div
            className={`flex flex-col justify-between rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
              isDark ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-[#DCE3EC] hover:border-slate-300'
            }`}
          >
            <div className="p-6 sm:p-7 flex-1 flex flex-col">
              <div className="flex items-center gap-3.5 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-slate-800 text-[#D9A72E]' : 'bg-amber-50 text-[#D9A72E]'
                  }`}
                >
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    Prototyping Laboratories
                  </h3>
                  <span className="text-xs font-medium text-[#D9A72E]">
                    AI/Compute, IoT, Embedded &amp; Bio
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 flex-1 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2 leading-relaxed">
                  <span className="text-[#123B73] dark:text-sky-400 font-bold">✓</span>
                  <span>
                    <strong className="font-semibold text-slate-900 dark:text-white">
                      500–2,000+ sq. ft.
                    </strong>{' '}
                    campus prototyping &amp; co-working space setup.
                  </span>
                </div>
                <div className="flex items-start gap-2 leading-relaxed">
                  <span className="text-[#123B73] dark:text-sky-400 font-bold">✓</span>
                  <span>
                    <strong className="font-semibold text-slate-900 dark:text-white">
                      Hardware testbeds
                    </strong>{' '}
                    integrated with digital incubation monitoring.
                  </span>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Specialised Domain Labs:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenLabDetails('AI')}
                      className={`p-2 rounded-lg border text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                          : 'bg-slate-50 border-[#DCE3EC] hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5 text-[#123B73] dark:text-sky-400" />
                      <span>AI &amp; Data</span>
                    </button>
                    <button
                      onClick={() => onOpenLabDetails('IoT')}
                      className={`p-2 rounded-lg border text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                          : 'bg-slate-50 border-[#DCE3EC] hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Wifi className="w-3.5 h-3.5 text-[#123B73] dark:text-sky-400" />
                      <span>IoT Sensors</span>
                    </button>
                    <button
                      onClick={() => onOpenLabDetails('Robotics')}
                      className={`p-2 rounded-lg border text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                          : 'bg-slate-50 border-[#DCE3EC] hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Bot className="w-3.5 h-3.5 text-[#123B73] dark:text-sky-400" />
                      <span>Robotics</span>
                    </button>
                    <button
                      onClick={() => onOpenLabDetails('Electronics')}
                      className={`p-2 rounded-lg border text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                          : 'bg-slate-50 border-[#DCE3EC] hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5 text-[#123B73] dark:text-sky-400" />
                      <span>Electronics</span>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`mt-4 p-3 rounded-xl border flex items-center justify-between text-xs ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700/80 text-slate-300'
                    : 'bg-slate-50 border-[#DCE3EC] text-slate-600'
                }`}
              >
                <span className="font-medium">Hardware &amp; Prototyping</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                  Ready
                </span>
              </div>
            </div>

            <div className={`p-4 sm:p-5 pt-0`}>
              <button
                onClick={() => onOpenLabDetails('AI')}
                className={`w-full py-2.5 px-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border ${
                  isDark
                    ? 'text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border-slate-700'
                    : 'text-[#123B73] hover:bg-[#123B73] hover:text-white bg-white border-[#DCE3EC]'
                }`}
              >
                <span>View Lab Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Grant Engineering & Syndication */}
          <div
            className={`flex flex-col justify-between rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
              isDark ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-[#DCE3EC] hover:border-slate-300'
            }`}
          >
            <div className="p-6 sm:p-7 flex-1 flex flex-col">
              <div className="flex items-center gap-3.5 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
                  }`}
                >
                  <IndianRupee className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    Grant Engineering &amp; Syndication
                  </h3>
                  <span className="text-xs font-medium text-[#D9A72E]">
                    NIDHI · BIRAC · MSME · Angel Network
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 flex-1 text-xs text-slate-700 dark:text-slate-300">
                {[
                  { bold: 'Non-dilutive grants', text: ' (NIDHI, BIRAC, MSME, MeitY application guidance)' },
                  { bold: 'PoC micro-grants', text: ' & institutional seed capital support' },
                  { bold: 'CXO mentorship', text: ' & Go-to-Market corporate pilot facilitation' },
                  { bold: 'Investor demo days', text: ' & angel syndication access' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#123B73] dark:text-sky-400 font-bold">✓</span>
                    <span>
                      <strong className="font-semibold text-slate-900 dark:text-white">
                        {item.bold}
                      </strong>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 p-3 rounded-xl border flex items-center justify-between text-xs ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700/80 text-slate-300'
                    : 'bg-slate-50 border-[#DCE3EC] text-slate-600'
                }`}
              >
                <div className="flex items-center gap-1.5 font-medium">
                  <IndianRupee className="w-4 h-4 text-[#123B73] dark:text-sky-400" />
                  <span>₹3Cr+ Grant Pipeline</span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800">
                  Non-Dilutive
                </span>
              </div>
            </div>

            <div className={`p-4 sm:p-5 pt-0`}>
              <button
                onClick={() => onOpenApplication('student')}
                className={`w-full py-2.5 px-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border ${
                  isDark
                    ? 'text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border-slate-700'
                    : 'text-[#123B73] hover:bg-[#123B73] hover:text-white bg-white border-[#DCE3EC]'
                }`}
              >
                <span>Apply for Grant &amp; Seed Pipeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
