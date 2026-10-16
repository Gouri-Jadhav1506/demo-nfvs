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
      className="relative py-16 sm:py-20 bg-[#0B1F3A] text-white border-t border-b border-slate-800 overflow-hidden"
    >
      {/* Subtle background radial tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(18, 59, 115, 0.45) 0%, rgba(11, 31, 58, 0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative architectural grid corner */}
      <svg
        className="absolute right-0 bottom-0 w-80 h-80 opacity-[0.04] pointer-events-none text-white"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <pattern id="final-cta-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#final-cta-grid)" />
      </svg>

      <div className="section-shell relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 bg-white/10 text-sky-200 border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
          <span>Institutional Partnership &amp; Venture Creation</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Deploy Turnkey Incubation on <span className="text-[#D9A72E]">Your Campus?</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Partner with NF Venture Studio to establish an accredited, industry-connected innovation center with full governance, rapid prototyping labs, and investor syndication.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={() => onOpenApplication('institutional')}
            className="group w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-[#123B73] hover:bg-[#D9A72E] hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Apply for Incubation Center</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => onOpenApplication('institutional')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#D9A72E]" />
            <span>Schedule Campus Assessment</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
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
