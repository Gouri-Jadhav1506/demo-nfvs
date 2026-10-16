import React, { useState, useEffect } from 'react';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { NFApplicationForm } from '../components/nf/NFApplicationForm';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  GraduationCap,
  Copy,
  Check,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

export const NFContactPage: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('nf-theme');
    return saved === 'light' || saved === 'dark' ? saved : 'light';
  });

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem('nf-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApplication = (track: string = 'student') => {
    setSelectedTrack(track);
    setIsAppModalOpen(true);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('8379879846');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@ncfvs.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        isDark ? 'bg-[#081528] text-slate-100' : 'bg-[#F7F9FC] text-[#172334]'
      }`}
    >
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 w-full pt-20 sm:pt-28 pb-14 sm:pb-20">
        <div className="section-shell space-y-12 sm:space-y-16">

          {/* 1. Header */}
          <section className="text-center pt-8 sm:pt-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
              <span>Contact &amp; Incubation Application Desk · Pune</span>
            </div>

            <h1
              className="font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw + 0.5rem, 3rem)' }}
            >
              Start Your <span className="text-[#D9A72E]">Innovation Journey</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Partner with NF Venture Studio to establish turnkey campus incubation centers, commercialize deep-tech intellectual property, or accelerate your startup venture.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Building2 className="w-3.5 h-3.5 text-[#D9A72E]" />
                Campus Partnerships
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#123B73] dark:text-sky-300">
                <GraduationCap className="w-3.5 h-3.5 text-[#123B73] dark:text-sky-400" />
                Student &amp; Faculty Tracks
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Institutional Backing
              </span>
            </div>
          </section>

          {/* 2. Main Grid: Contact Info (Left) + Form (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Left Column: Direct Office Contact Details */}
            <div className="lg:col-span-5 space-y-6">

              {/* Primary Contact Card */}
              <div
                className={`p-6 sm:p-7 rounded-2xl border transition-colors ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#DCE3EC]'
                }`}
              >
                <div className="space-y-5">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#D9A72E] mb-1">
                      Official Communications
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      NF Venture Studio
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      A Naree Care Foundation Initiative
                    </p>
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-800" />

                  {/* Phone Helpline */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Direct Incubation Helpline
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <a
                          href="tel:8379879846"
                          className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:underline"
                        >
                          +91 8379879846
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyPhone}
                          title="Copy phone number"
                          className="px-1.5 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                        >
                          {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Official Desk Emails
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <a
                          href="mailto:contact@ncfvs.in"
                          className="text-xs sm:text-sm font-semibold text-[#123B73] dark:text-sky-400 hover:underline"
                        >
                          contact@ncfvs.in
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          title="Copy email address"
                          className="px-1.5 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                        >
                          {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                      <div className="mt-1">
                        <a
                          href="mailto:ceo@ncfvs.in"
                          className="text-xs text-slate-600 dark:text-slate-400 hover:underline"
                        >
                          ceo@ncfvs.in (Office of the CEO)
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Venture Studio Headquarters
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                        Parijatak, Near Nigdi Police Station, Nigdi, Pune – 411044, Maharashtra
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Operating Hours
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                        Monday – Saturday: 9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* What Happens After Applying Card */}
              <div
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-300'
                    : 'bg-white border-[#DCE3EC] text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="w-4 h-4 text-[#D9A72E]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Incubation Process Flow
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-400 flex items-center justify-center shrink-0 font-bold text-[11px]">
                      1
                    </span>
                    <span>Submit your application form with basic project or institution details.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-400 flex items-center justify-center shrink-0 font-bold text-[11px]">
                      2
                    </span>
                    <span>Our review committee evaluates your proposal within 48 business hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-400 flex items-center justify-center shrink-0 font-bold text-[11px]">
                      3
                    </span>
                    <span>Direct discovery meeting scheduled for onboarding and lab resource allocation.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Embedded Application Form */}
            <div className="lg:col-span-7">
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-colors ${
                  isDark
                    ? 'bg-slate-900 text-white border-slate-800'
                    : 'bg-white text-[#172334] border-[#DCE3EC]'
                }`}
              >
                <div className="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#D9A72E] mb-1">
                    Direct Application Portal
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Apply for <span className="text-[#D9A72E]">Incubation Center</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    Submit your application directly to the NF Venture Studio Review Committee.
                  </p>
                </div>

                <NFApplicationForm
                  initialTrack="student"
                  isDark={isDark}
                  isModal={false}
                />
              </div>
            </div>

          </div>

        </div>
      </main>

      <NFFooter
        onOpenApplication={handleOpenApplication}
        isDark={isDark}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />

      <NFApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialTrack={selectedTrack}
        isDark={isDark}
      />
    </div>
  );
};
