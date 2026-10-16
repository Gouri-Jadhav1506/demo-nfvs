import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Lightbulb,
  FlaskConical,
  Sparkles,
  Target,
  Cpu,
  Wifi,
  Bot,
  CircuitBoard,
  Layers,
  Rocket,
  Building2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const NFAboutPage: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('nf-theme');
    return saved === 'light' || saved === 'dark' ? saved : 'light';
  });

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const isDark = theme === 'dark';

  const pillars = [
    {
      title: 'Innovate',
      desc: 'Identifying high-potential technical problems and translating academic research into structured intellectual property.',
      icon: Lightbulb,
    },
    {
      title: 'Incubate',
      desc: 'Turnkey access to specialized lab infrastructure, prototyping hardware, technical mentorship, and business support.',
      icon: FlaskConical,
    },
    {
      title: 'Inspire',
      desc: 'Hands-on immersion, student-faculty development, hackathons, and cross-disciplinary knowledge sharing.',
      icon: Sparkles,
    },
    {
      title: 'Impact',
      desc: 'Commercializing research outcomes, achieving institutional accreditation milestones, and scaling venture revenue.',
      icon: Target,
    },
  ];

  const domains = [
    { name: 'AI & Machine Learning', icon: Cpu, desc: 'Applied intelligence and compute algorithms' },
    { name: 'IoT & Connected Systems', icon: Wifi, desc: 'Smart sensors and telemetric networks' },
    { name: 'Robotics & Mechatronics', icon: Bot, desc: 'Autonomous motion and automated tooling' },
    { name: 'Embedded Hardware Systems', icon: CircuitBoard, desc: 'PCB fabrication and edge processing' },
  ];

  const tracks = [
    {
      track: 'Track A',
      name: 'Student Innovators & Ideation',
      audience: 'UG/PG students, campus innovators & E-Cell teams',
      outcome: 'Validated proof of concept, patent readiness, and initial prototypes.',
      icon: Layers,
    },
    {
      track: 'Track B',
      name: 'Hardware & Deep-Tech Startups',
      audience: 'Early-stage founders, research spin-offs & engineers',
      outcome: 'Turnkey fabrication, MVP build, and investor readiness.',
      icon: Rocket,
    },
    {
      track: 'Track C',
      name: 'MSME & Institutional Projects',
      audience: 'Engineering institutions, faculty researchers & MSMEs',
      outcome: 'NBA/NAAC accreditation evidence, sponsored R&D, and productization.',
      icon: Building2,
    },
  ];

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

          {/* Section 1: Hero Banner */}
          <section className="text-center pt-8 sm:pt-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
              <span>About NF Venture Studio · Naree Care Foundation</span>
            </div>

            <h1
              className="font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw + 0.5rem, 3rem)' }}
            >
              Transforming Campus Research into <span className="text-[#D9A72E]">Scalable Ventures</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              NF Venture Studio is an institutional incubation ecosystem headquartered in Pune, Maharashtra. We partner with universities, research faculty, and student innovators to accelerate deep-tech breakthroughs from laboratory prototypes into commercially viable enterprises.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#123B73] dark:text-sky-300">
                From Lab to Market
              </span>
              <span className="px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#D9A72E]">
                From Idea to Impact
              </span>
              <span className="px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                From Campus to Capital
              </span>
              <span className="px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                From Research to Revenue
              </span>
            </div>
          </section>

          {/* Section 2: Mission & Core Domains */}
          <section
            className={`p-6 sm:p-10 rounded-2xl border transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#DCE3EC]'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D9A72E] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Institutional Vision &amp; Purpose</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  Bridging Academia and <span className="text-[#D9A72E]">Deep-Tech Industry</span>
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  As an initiative under <strong>Naree Care Foundation</strong>, NF Venture Studio establishes turnkey incubation centers and specialized prototyping laboratories directly on partner academic campuses. We supply institutional operational protocols, governance frameworks, and technical execution aligned with statutory accreditation requirements including NBA, NAAC, IIC, and NIRF-Innovation.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Turnkey campus prototyping infrastructure and fabrication access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Accreditation-ready audit dossiers for NBA Criterion 3 and NAAC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Cross-disciplinary faculty IP translation and student enterprise incubation</span>
                  </div>
                </div>
              </div>

              {/* 4 Technical Domains */}
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Specialized Technical Domains
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {domains.map((dom) => {
                    const Icon = dom.icon;
                    return (
                      <div
                        key={dom.name}
                        className={`flex items-start gap-3.5 p-3.5 rounded-xl border ${
                          isDark
                            ? 'bg-slate-800/80 border-slate-700 text-slate-200'
                            : 'bg-slate-50 border-[#DCE3EC] text-slate-800'
                        }`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-400 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white">
                            {dom.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {dom.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: The 4 Strategic Pillars */}
          <section className="space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="text-xs font-semibold text-[#123B73] dark:text-sky-400 uppercase tracking-wider">
                Operational Framework
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                The Four <span className="text-[#D9A72E]">Strategic Pillars</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className={`p-6 rounded-2xl border flex flex-col justify-between ${
                      isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#DCE3EC]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 4: 3 Specialized Incubation Tracks */}
          <section
            className={`p-6 sm:p-10 rounded-2xl border space-y-6 transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#DCE3EC]'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xs font-semibold text-[#D9A72E] uppercase tracking-wider mb-1">
                  Targeted Delivery
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Three Specialized <span className="text-[#D9A72E]">Incubation Tracks</span>
                </h2>
              </div>
              <button
                type="button"
                onClick={() => handleOpenApplication()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#123B73] hover:bg-[#0B1F3A] transition-colors cursor-pointer self-start sm:self-auto shadow-xs"
              >
                <span>Apply for Tracks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tracks.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.track}
                    className={`p-6 rounded-xl border flex flex-col justify-between ${
                      isDark ? 'bg-slate-800/60 border-slate-700/80' : 'bg-[#F7F9FC] border-[#DCE3EC]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#123B73] dark:text-sky-400">
                          {t.track}
                        </span>
                        <Icon className="w-5 h-5 text-slate-400" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {t.name}
                      </h3>
                      <div className="text-xs space-y-2">
                        <p className="text-slate-600 dark:text-slate-300">
                          <strong className="text-slate-900 dark:text-white">Target:</strong> {t.audience}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300">
                          <strong className="text-slate-900 dark:text-white">Outcome:</strong> {t.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 5: Leadership & Studio Headquarters */}
          <section
            className={`p-5 sm:p-8 rounded-2xl border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#DCE3EC]'
            }`}
          >
            {/* Leadership */}
            <div className="space-y-2">
              <div className="text-[11px] font-semibold text-[#D9A72E] uppercase tracking-wider">
                Office of the CEO
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">
                Mr. Ashok Patil
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                CEO, NF Venture Studio — A Naree Care Foundation Initiative, Pune.
              </p>
              <div className="pt-1">
                <a
                  href="mailto:ceo@ncfvs.in"
                  className="inline-flex items-center gap-1.5 text-xs text-[#123B73] dark:text-sky-400 hover:underline font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D9A72E]" />
                  <span>ceo@ncfvs.in</span>
                </a>
              </div>
            </div>

            {/* Headquarters */}
            <div className="space-y-2">
              <div className="text-[11px] font-semibold text-[#123B73] dark:text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Studio Headquarters</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Parijatak, Near Nigdi Police Station, Nigdi, Pune – 411044, Maharashtra
              </p>
            </div>

            {/* Communication */}
            <div className="space-y-2 text-xs">
              <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Direct Communication
              </div>
              <div className="space-y-1.5">
                <a
                  href="tel:8379879846"
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:underline font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D9A72E]" />
                  <span>+91 83798 79846 | +91 9209112577</span>
                </a>
                <a
                  href="mailto:contact@ncfvs.in"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>contact@ncfvs.in</span>
                </a>
                <a
                  href="mailto:ncfventurestudio@gmail.com"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>ncfventurestudio@gmail.com</span>
                </a>
              </div>
            </div>
          </section>

          {/* Section 6: Action CTA */}
          <section
            className={`p-8 sm:p-12 rounded-2xl border text-center space-y-4 transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-[#EAF1F9] border-[#DCE3EC]'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Partner with <span className="text-[#D9A72E]">NF Venture Studio</span> Today
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
              Accelerate your campus innovation potential or commercialize deep-tech intellectual property with turnkey institutional support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleOpenApplication()}
                className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-[#123B73] hover:bg-[#0B1F3A] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md inline-flex items-center gap-2"
              >
                <span>Apply for Incubation Center</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/80" />
              </button>
              <Link
                to="/"
                className={`px-5 py-3 rounded-xl font-semibold text-xs border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-slate-600'
                    : 'bg-white border-[#DCE3EC] text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <span>Explore Home Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

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
