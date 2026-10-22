import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface NFFinalCTAProps {
  onOpenApplication: (track?: string) => void;
  isDark?: boolean;
}

export const NFFinalCTA: React.FC<NFFinalCTAProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  return (
    <section
      id="final-cta"
      className="relative py-10 sm:py-14 bg-[#0B1F3A] text-white border-t border-b border-slate-800 overflow-hidden"
    >
      {/* Subtle background radial tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(18, 59, 115, 0.45) 0%, rgba(11, 31, 58, 0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-shell relative z-10 text-center max-w-4xl mx-auto space-y-5">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-white/10 text-sky-200 border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
          <span>Institutional Partnership &amp; Venture Creation</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Deploy Turnkey Incubation on <span className="text-[#D9A72E]">Your Campus?</span>
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto text-justify">
          Partner with NF Venture Studio to establish an accredited, industry-connected innovation center with full governance, rapid prototyping labs, and investor syndication.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => onOpenApplication('institutional')}
            className="group w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white text-[#123B73] hover:bg-[#D9A72E] hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Apply for Incubation Center</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => onOpenApplication('institutional')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#D9A72E]" />
            <span>Schedule Campus Assessment</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-xs text-slate-200 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>AICTE-NISP Compliant</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>NBA &amp; NAAC Criterion 3 Alignment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Faculty Overhead</span>
          </div>
        </div>
      </div>
    </section>
  );
};
