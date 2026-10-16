import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Users,
  Quote,
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  Camera,
} from 'lucide-react';
import ashokPatilImg from '../../assets/ashok patil.jpg';
import rahulMoreImg from '../../assets/rahul more.png';
import pallaviShirkeImg from '../../assets/pallavi shrike.png';
import mohammadAshparazImg from '../../assets/Mohammed Ashparaz.png';
import sayaliKaleImg from '../../assets/sayali kale.jpeg';

interface PillarMember {
  id: string;
  name: string;
  designation: string;
  shortRole: string;
  imageSrc: string;
  initials: string;
  focus: string;
  responsibilities: string[];
}

interface ExecutiveMessage {
  id: string;
  title: string;
  roleBadge: string;
  message: string;
}

const TeamMemberPhoto: React.FC<{
  src: string;
  name: string;
  initials: string;
  isDark: boolean;
}> = ({ src, name, initials, isDark }) => {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [src]);

  if (src && !imgFailed) {
    return (
      <div
        className={`relative w-full h-full min-h-[220px] sm:min-h-full rounded-xl overflow-hidden border transition-colors ${isDark
            ? 'border-slate-700 bg-slate-800'
            : 'border-[#DCE3EC] bg-slate-100'
          }`}
      >
        <img
          src={src}
          alt={name}
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full min-h-[220px] sm:min-h-full rounded-xl border flex flex-col items-center justify-center p-4 ${isDark
          ? 'bg-slate-800 border-slate-700 text-slate-300'
          : 'bg-slate-100 border-[#DCE3EC] text-slate-600'
        }`}
    >
      <div
        className={`w-16 h-16 rounded-xl border flex items-center justify-center text-xl font-bold ${isDark
            ? 'bg-slate-900 border-slate-700 text-sky-400'
            : 'bg-white border-[#DCE3EC] text-[#123B73]'
          }`}
      >
        {initials}
      </div>

      <div className="mt-3 text-center">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
          <Camera className="w-3 h-3 text-[#D9A72E]" />
          Official Portrait
        </span>
      </div>
    </div>
  );
};

export const NFTeamPage: React.FC = () => {
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

  // 1. Core Working Pillars Data (5 Executive Members)
  const corePillars: PillarMember[] = [
    {
      id: 'ashok-patil',
      name: 'Mr. Ashok Patil',
      designation: 'Chief Executive Officer (CEO)',
      shortRole: 'CEO',
      imageSrc: ashokPatilImg,
      initials: 'AP',
      focus:
        'Executive venture leadership, strategic institutional partnerships, turnkey incubation deployment, and startup venture syndication.',
      responsibilities: ['Venture Creation Strategy', 'Institutional Governance', 'Investor Syndication'],
    },
    {
      id: 'rahul-more',
      name: 'Capt. Rahul More',
      designation: 'Chief Operating Officer (COO)',
      shortRole: 'COO',
      imageSrc: rahulMoreImg,
      initials: 'RM',
      focus:
        'Operational infrastructure rollout, campus incubation operations, turnkey execution, and defense / deep-tech program orchestration.',
      responsibilities: ['Turnkey Lab Rollout', 'Operations Governance', 'Defense & Deep-Tech Cohorts'],
    },
    {
      id: 'pallavi-shirke',
      name: 'Mrs. Pallavi Shirke',
      designation: 'Chief Financial Officer (CFO)',
      shortRole: 'CFO',
      imageSrc: pallaviShirkeImg,
      initials: 'PS',
      focus:
        'Financial governance, fiscal strategy, venture grant allocation, statutory compliance, and capital structuring for student & faculty startups.',
      responsibilities: ['Fiscal Strategy & Audits', 'Venture Grant Allocation', 'Capital Structuring'],
    },
    {
      id: 'mohammad-ashparaz',
      name: 'Mr. Mohammad Ashparaz',
      designation: 'Chief Marketing Officer (CMO)',
      shortRole: 'CMO',
      imageSrc: mohammadAshparazImg,
      initials: 'MA',
      focus:
        'Ecosystem positioning, institutional partner outreach, student innovator recruitment, commercialization funnels, and corporate alliances.',
      responsibilities: ['Ecosystem Marketing', 'Institutional Alliances', 'Founder Acquisition'],
    },
    {
      id: 'sayali-kale',
      name: 'Ms. Sayali Kale',
      designation: 'HR A. Executive',
      shortRole: 'HR',
      imageSrc: sayaliKaleImg,
      initials: 'SK',
      focus:
        'Venture talent sourcing, human resource administration, founder-team formation, internship fellowship programs, and organizational culture.',
      responsibilities: ['Talent Sourcing & Culture', 'Team Formation Support', 'Fellowship Cohorts'],
    },
  ];

  // 2. Executive Messages Data
  const executiveMessages: ExecutiveMessage[] = [
    {
      id: 'msg-president',
      title: 'Message from the President',
      roleBadge: 'Office of the President',
      message:
        'Welcome to NF Venture Studio, an initiative focused on strengthening innovation and creating meaningful opportunities for students, researchers, and institutions. At Naree Care Foundation, we believe that education becomes more powerful when knowledge is supported by practical experience and the freedom to explore new ideas. Our vision is to create an environment where creativity, collaboration, and entrepreneurship can flourish. Through our efforts, we aim to empower institutions and innovators to develop solutions that address real-world challenges and contribute to lasting social and economic progress.',
    },
    {
      id: 'msg-ceo',
      title: 'Message from the CEO',
      roleBadge: 'Office of the Chief Executive Officer',
      message:
        'Welcome to NF Venture Studio, where we work to transform promising ideas into practical solutions and sustainable ventures. We understand that every innovation begins with a vision, but turning that vision into reality requires the right guidance, resources, and partnerships. Our focus is on helping students, researchers, and aspiring entrepreneurs move forward with confidence through structured incubation, mentorship, and industry connections. By bringing academic knowledge and real-world opportunities together, we aim to build a supportive ecosystem where innovators can develop their ideas, overcome challenges, and create ventures with lasting value.',
    },
    {
      id: 'msg-coo',
      title: 'Message from the COO',
      roleBadge: 'Office of the Chief Operating Officer',
      message:
        'At NF Venture Studio, we believe that successful innovation depends on turning good ideas into well-executed action. Our focus is on building the systems, processes, and infrastructure that help institutions and innovators move from planning to implementation. From establishing incubation facilities to coordinating programmes and supporting venture development, we work to make the innovation journey organised, practical, and effective. Through teamwork, clear processes, and consistent execution, we aim to provide a dependable foundation that allows students, researchers, and entrepreneurs to focus on what matters most: developing solutions and bringing their ideas to life.',
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${isDark ? 'bg-[#081528] text-slate-100' : 'bg-[#F7F9FC] text-[#172334]'
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
              <Users className="w-3.5 h-3.5 text-[#D9A72E]" />
              <span>Executive Leadership &amp; Operations · NF Venture Studio</span>
            </div>

            <h1
              className="font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw + 0.5rem, 3rem)' }}
            >
              Institutional Leadership &amp; <span className="text-[#D9A72E]">Core Working Pillars</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Our multidisciplinary leadership team unites academic administrators, venture operators, research directors, and engineering builders to translate campus research into viable commercial enterprises.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Target className="w-3.5 h-3.5 text-[#D9A72E]" />
                Shared Mission
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#123B73] dark:text-sky-300">
                <Compass className="w-3.5 h-3.5 text-[#123B73] dark:text-sky-400" />
                Collaborative Execution
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Institutional Integrity
              </span>
            </div>
          </section>

          {/* 2. FIRST: Executive Messages (Approved Leadership Paragraphs - Center-Aligned Heading) */}
          <section id="executive-messages" className="space-y-6 sm:space-y-8 reveal">
            <div className="text-center max-w-2xl mx-auto space-y-2 border-b pb-5 border-slate-200 dark:border-slate-800">
              <div className="text-xs font-semibold text-[#123B73] dark:text-sky-400 uppercase tracking-wider">
                Institutional Leadership Addresses
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Executive <span className="text-[#D9A72E]">Messages</span>
              </h2>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Governance &amp; Vision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {executiveMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${isDark
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-[#DCE3EC] hover:border-slate-300'
                    }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start sm:items-center justify-between gap-2 flex-wrap">
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#DCE3EC] dark:border-slate-700 bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 uppercase tracking-wider">
                        {msg.roleBadge}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                        <Quote className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {msg.title}
                      </h3>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        NF Venture Studio · Institutional Governance
                      </div>
                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-800" />

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      "{msg.message}"
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="text-[#D9A72E] font-medium">
                      Official Institutional Policy
                    </span>
                    <span>Naree Care Foundation</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. SECOND: Core Working Pillars (Full-Width Horizontal Leadership Cards Stacked Vertically) */}
          <section id="core-working-pillars" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xs font-semibold text-[#D9A72E] uppercase tracking-wider mb-1">
                  Executive Leadership Team
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Core <span className="text-[#D9A72E]">Working Pillars</span>
                </h2>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                5 Key Executive Profiles
              </span>
            </div>

            <div className="space-y-6 sm:space-y-8 reveal-stagger">
              {corePillars.map((member) => (
                <article
                  key={member.id}
                  className={`w-full rounded-2xl border p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-5 sm:gap-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${isDark
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-[#DCE3EC] hover:border-slate-300'
                    }`}
                >
                  {/* Left Column: Executive Photograph (25–32% width on desktop) */}
                  <div className="w-full md:w-[28%] lg:w-[26%] shrink-0 flex items-stretch min-w-0">
                    <div className="w-full h-56 sm:h-64 md:h-full min-h-[220px] md:min-h-[270px]">
                      <TeamMemberPhoto
                        src={member.imageSrc}
                        name={member.name}
                        initials={member.initials}
                        isDark={isDark}
                      />
                    </div>
                  </div>

                  {/* Right Column: Executive Information */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-3">
                      {/* 1. Small role badge */}
                      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-[#DCE3EC] dark:border-slate-700 bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
                          {member.shortRole}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                          NF Venture Studio · Executive
                        </span>
                      </div>

                      {/* 2. Executive name & 3. Official designation */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                          {member.name}
                        </h3>
                        <div className="text-sm font-semibold text-[#D9A72E] mt-1">
                          {member.designation}
                        </div>
                      </div>

                      {/* 4. Focus description */}
                      <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {member.focus}
                      </p>
                    </div>

                    {/* 5. Core Functional Scope responsibilities */}
                    <div className="pt-4 mt-5 border-t border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Core Functional Scope:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.responsibilities.map((resp, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-3 py-1 rounded-md border border-[#DCE3EC] dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {resp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 4. Action CTA Banner */}
          <section
            className={`p-8 sm:p-12 rounded-2xl border text-center space-y-4 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-[#EAF1F9] border-[#DCE3EC]'
              }`}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Collaborate with Our Leadership &amp; <span className="text-[#D9A72E]">Venture Team</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
              Whether you are an academic institution seeking turnkey incubation setup or a student innovator ready to build, our team is here to support your journey.
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
                to="/contact"
                className={`px-5 py-3 rounded-xl font-semibold text-xs border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 ${isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-slate-600'
                    : 'bg-white border-[#DCE3EC] text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-xs'
                  }`}
              >
                <span>Contact Executive Office</span>
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
