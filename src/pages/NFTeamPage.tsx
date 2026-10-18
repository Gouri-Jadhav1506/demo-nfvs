import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  User,
  Users,
  Building2,
  Rocket,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  ChevronRight,
  Camera,
  Target,
  Compass,
  FileText,
  Mail,
  Phone,
} from 'lucide-react';
import ashokPatilImg from '../../assets/ashok patil.jpg';
import rahulMoreImg from '../../assets/rahul more.png';
import pallaviShirkeImg from '../../assets/pallavi shrike.png';
import mohammadAshparazImg from '../../assets/Mohammed Ashparaz.png';
import sayaliKaleImg from '../../assets/sayali kale.jpeg';
import nfLogoImg from '../../assets/nf-logo.jpg';

export interface PillarMember {
  id: string;
  name: string;
  designation: string;
  shortRole: string;
  imageSrc: string;
  initials: string;
  focus: string;
  responsibilities: string[];
}

export interface ExecutiveMessage {
  id: string;
  title: string;
  roleBadge: string;
  greeting: string;
  message: string;
  authorName: string;
  authorDesignation: string;
  authorImage?: string;
  isPlaceholder?: boolean;
}

export const NFTeamPage: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('nf-theme');
    return saved === 'light' || saved === 'dark' ? saved : 'light';
  });

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  // Preserved Core Working Pillars Data (5 Executive Members for future individual profile views)
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

  // Preserved Executive Leadership Messages
  const executiveMessages: ExecutiveMessage[] = [
    {
      id: 'msg-president',
      title: "President's Message",
      roleBadge: 'Office of the President',
      greeting: 'Warm greetings and a heartfelt welcome to NF Venture Studio!',
      message:
        'At Naree Foundation, we believe that education creates its greatest value when knowledge is translated into meaningful action. NF Venture Studio reflects our commitment to building an environment where students, researchers, and institutions can explore ideas, develop practical solutions, and create opportunities for sustainable growth. By strengthening the connection between academic excellence, innovation, and entrepreneurship, we aim to support initiatives that address real-world challenges and contribute to lasting social and economic progress. We welcome institutions, innovators, and partners to join us in building this shared vision.',
      authorName: 'Office of the President',
      authorDesignation: 'President, Naree Foundation',
      isPlaceholder: true,
    },
    {
      id: 'msg-ceo',
      title: "Chief Executive Officer's Message",
      roleBadge: 'Office of the Chief Executive Officer',
      greeting: 'A warm welcome to all students, researchers, institutional partners, and aspiring entrepreneurs!',
      message:
        'Welcome to NF Venture Studio.\n\nWe are committed to building an ecosystem that encourages innovation, supports emerging entrepreneurs, and strengthens collaboration between institutions, industry, and researchers.\n\nThrough mentorship, incubation, and strategic partnerships, we aim to transform promising ideas into sustainable ventures with meaningful social and economic impact.\n\nThis message is provided as demo content and will be updated with the official message.',
      authorName: 'Mr. Ashok Patil',
      authorDesignation: 'Chief Executive Officer (CEO)',
      authorImage: ashokPatilImg,
    },
    {
      id: 'msg-coo',
      title: "Chief Operating Officer's Message",
      roleBadge: 'Office of the Chief Operating Officer',
      greeting: 'Greetings and welcome to NF Venture Studio!',
      message:
        'Strong ideas require strong systems to become reality. At NF Venture Studio, our focus is on establishing the processes, facilities, and collaborative networks that make innovation practical and measurable. From incubation programme coordination and prototype development to institutional readiness and industry engagement, we aim to create a structured environment in which innovators can make steady progress. Through clear execution, consistent support, and accountable processes, we strive to turn ambitious concepts into workable outcomes. We look forward to working with institutions and innovators to build an effective, collaborative, and outcome-oriented ecosystem.',
      authorName: 'Capt. Rahul More',
      authorDesignation: 'Chief Operating Officer (COO)',
      authorImage: rahulMoreImg,
    },
  ];

  // Sidebar navigation items list in approved order matching reference image
  const sidebarNavItems = [
    { id: 'our-inspiration', label: 'Our Inspiration', path: '/our-inspiration', icon: User },
    { id: 'from-presidents-desk', label: 'From President’s Desk', path: '/from-presidents-desk', icon: User },
    { id: 'from-vice-presidents-desk', label: 'From Vice President’s Desk', path: '/from-vice-presidents-desk', icon: User },
    { id: 'from-secretarys-desk', label: 'From Secretary’s Desk', path: '/from-secretarys-desk', icon: User },
    { id: 'from-ceos-desk', label: 'From CEO’s Desk', path: '/from-ceos-desk', icon: User },
    { id: 'from-executive-directors-desk', label: 'From Executive Director’s Desk', path: '/from-executive-directors-desk', icon: User },
    { id: 'our-team', label: 'Our Team', path: '/team', icon: User },
  ];

  // Determine active item based on current URL path
  const currentPath = location.pathname;
  const isOurTeamActive =
    currentPath === '/team' ||
    currentPath === '/our-team';

  // Profile data for Ashok Patil (CEO)
  const ceoMember = corePillars[0];

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        isDark ? 'bg-[#081528] text-slate-100' : 'bg-[#F7F9FC] text-[#172334]'
      }`}
    >
      {/* 1. Global Navigation Header */}
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 2. Main Page Layout */}
      <main className="flex-1 w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-24">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-stretch">

            {/* LEFT SIDEBAR */}
            <aside className="w-full lg:w-72 xl:w-80 shrink-0 flex flex-col justify-between space-y-5">
              <div className="space-y-5">
                {/* Sidebar Header Box: NF Venture Studio */}
                <div
                  className={`p-4 sm:p-5 rounded-xl border transition-colors shadow-xs ${
                    isDark
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-[#DCE3EC]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-amber-300/40 bg-white shrink-0 flex items-center justify-center">
                      <img
                        src={nfLogoImg}
                        alt="NF Logo"
                        className="w-full h-full object-contain p-0.5"
                      />
                    </div>
                    <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#123B73] dark:text-sky-300 leading-tight">
                      NF Venture Studio
                    </h2>
                  </div>
                  <div className="w-12 h-0.5 bg-[#D9A72E] mx-auto mt-2.5 rounded-full" />
                </div>

                {/* Sidebar Navigation Items List with Left-Aligned Icons */}
                <nav aria-label="Leadership Navigation" className="space-y-2">
                  {sidebarNavItems.map((item) => {
                    const ItemIcon = item.icon;
                    const isActive =
                      (item.id === 'our-team' && isOurTeamActive) ||
                      (item.path === currentPath);

                    return (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`group flex items-center gap-3.5 px-4 py-3 sm:py-3.5 rounded-xl border text-sm transition-all duration-200 select-none ${
                          isActive
                            ? 'bg-[#123B73] dark:bg-[#0F3263] text-white border-l-4 border-l-[#D9A72E] border-t-[#123B73] border-r-[#123B73] border-b-[#123B73] dark:border-t-slate-700 dark:border-r-slate-700 dark:border-b-slate-700 shadow-sm font-semibold'
                            : isDark
                            ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-slate-700 font-medium'
                            : 'bg-white border-[#DCE3EC] text-[#123B73] hover:bg-[#EAF1F9] hover:border-[#123B73]/30 font-medium shadow-2xs'
                        }`}
                      >
                        <ItemIcon
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                            isActive
                              ? 'text-[#D9A72E]'
                              : isDark
                              ? 'text-slate-400 group-hover:text-sky-300'
                              : 'text-[#123B73]/70 group-hover:text-[#123B73]'
                          }`}
                        />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Promotional Banner: Empowering Innovation for a Better Tomorrow — Enlarged to fill space */}
              <div
                className={`relative overflow-hidden rounded-2xl p-6 sm:p-8 text-white border shadow-md transition-all flex-1 min-h-[360px] sm:min-h-[420px] flex flex-col justify-center items-center mt-3 ${
                  isDark
                    ? 'bg-gradient-to-br from-[#091E42] via-[#0B2554] to-[#06152F] border-slate-700'
                    : 'bg-gradient-to-br from-[#091E42] via-[#0B2554] to-[#06152F] border-[#123B73]'
                }`}
              >
                {/* Subtle decorative glow & lightbulb outline */}
                <div
                  className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#D9A72E]/15 blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <svg
                  className="absolute -right-4 -bottom-4 w-36 h-36 text-[#D9A72E]/15 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>

                {/* Content Centered Vertically and Horizontally */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 w-full py-2">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#D9A72E] shadow-sm">
                    <Rocket className="w-7 h-7" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase font-mono tracking-widest text-[#D9A72E] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
                    NF VENTURE STUDIO
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-extrabold leading-snug text-white">
                      Empowering Innovation
                    </h3>
                    <div className="text-lg sm:text-xl font-extrabold text-[#D9A72E] leading-snug">
                      for a Better Tomorrow
                    </div>
                  </div>

                  <div className="w-16 h-0.5 bg-[#D9A72E] rounded-full mx-auto" />

                  <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed max-w-[240px]">
                    Translating research and ambitious ideas into scalable, deep-tech enterprise ventures.
                  </p>

                  {/* Supporting feature tags to enrich the card and fill vertical space */}
                  <div className="pt-2 flex flex-wrap justify-center gap-2 max-w-[260px]">
                    <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] font-semibold text-slate-200 shadow-2xs">
                      Turnkey Labs
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] font-semibold text-slate-200 shadow-2xs">
                      Incubation Centers
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] font-semibold text-slate-200 shadow-2xs">
                      Deep-Tech R&amp;D
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT MAIN CONTENT AREA */}
            <div className="flex-1 min-w-0 space-y-8 sm:space-y-10 flex flex-col justify-between">

              {/* SINGLE-MEMBER PROFILE LAYOUT CONTAINER MATCHING IMAGE */}
              <section className="reveal flex-1 flex flex-col">
                <div
                  className={`rounded-2xl border p-6 sm:p-8 lg:p-9 shadow-sm transition-colors flex-1 flex flex-col justify-between ${
                    isDark
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-[#DCE3EC]'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch h-full flex-1">

                    {/* LEFT COLUMN — CEO PROFILE & LEADERSHIP PRIORITIES */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 max-w-md mx-auto lg:max-w-none w-full">
                      <div className="space-y-3.5">
                        {/* Portrait of Mr. Ashok Patil */}
                        <div
                          className={`relative w-full aspect-[4/4.3] rounded-xl overflow-hidden border shadow-sm transition-all ${
                            isDark
                              ? 'border-slate-800 bg-slate-950'
                              : 'border-[#DCE3EC] bg-slate-100'
                          }`}
                        >
                          <img
                            src={ceoMember.imageSrc}
                            alt={ceoMember.name}
                            className="w-full h-full object-cover object-top block select-none"
                            loading="eager"
                          />
                        </div>

                        {/* CEO Information Beneath the Portrait */}
                        <div className="space-y-1.5 pt-0.5 text-left">
                          {/* Designation badge & Organization label */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border border-[#DCE3EC] dark:border-slate-700">
                              CEO
                            </span>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                              NF Venture Studio
                            </span>
                          </div>

                          {/* Full Name in Dark Navy-Blue */}
                          <h2 className="text-2xl sm:text-[26px] font-extrabold text-[#123B73] dark:text-white leading-tight">
                            {ceoMember.name}
                          </h2>

                          {/* Designation in Gold */}
                          <div className="text-sm sm:text-base font-bold text-[#D9A72E]">
                            {ceoMember.designation}
                          </div>

                          {/* Organization Line with Gold Building Icon */}
                          <div className="pt-0.5 flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            <Building2 className="w-4 h-4 text-[#D9A72E]" />
                            <span>NF Venture Studio · Pune</span>
                          </div>
                        </div>
                      </div>

                      {/* LEADERSHIP PRIORITIES CARD — Fills empty space and ends on exact same bottom line */}
                      <div
                        className={`rounded-xl border p-4 transition-colors shadow-2xs mt-auto ${
                          isDark
                            ? 'bg-slate-800/80 border-slate-700/80'
                            : 'bg-[#F4F7FB] border-[#DCE3EC]'
                        }`}
                      >
                        {/* Card Header with Gold Accent */}
                        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#DCE3EC]/80 dark:border-slate-700/70">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-3 bg-[#D9A72E] rounded-full inline-block" />
                            <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#123B73] dark:text-sky-300">
                              Leadership Priorities
                            </h3>
                          </div>
                          <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">
                            Core Focus
                          </span>
                        </div>

                        {/* 3 Vertically Stacked Priority Items with Thin Dividers */}
                        <div className="space-y-2.5">
                          {/* Priority 1: Institutional Incubation */}
                          <div className="flex items-start gap-2.5">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border shadow-2xs ${
                                isDark
                                  ? 'bg-slate-900 border-slate-700 text-[#D9A72E]'
                                  : 'bg-white border-[#DCE3EC] text-[#D9A72E]'
                              }`}
                            >
                              <Building2 className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <h4 className="text-xs font-bold text-[#123B73] dark:text-white leading-tight">
                                Institutional Incubation
                              </h4>
                              <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                                Building capable startup incubation centres within academic institutions.
                              </p>
                            </div>
                          </div>

                          <div className="border-t border-[#DCE3EC]/60 dark:border-slate-700/50" />

                          {/* Priority 2: Startup Enablement */}
                          <div className="flex items-start gap-2.5">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border shadow-2xs ${
                                isDark
                                  ? 'bg-slate-900 border-slate-700 text-[#D9A72E]'
                                  : 'bg-white border-[#DCE3EC] text-[#D9A72E]'
                              }`}
                            >
                              <Lightbulb className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <h4 className="text-xs font-bold text-[#123B73] dark:text-white leading-tight">
                                Startup Enablement
                              </h4>
                              <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                                Supporting innovators from idea validation to market readiness.
                              </p>
                            </div>
                          </div>

                          <div className="border-t border-[#DCE3EC]/60 dark:border-slate-700/50" />

                          {/* Priority 3: Ecosystem Partnerships */}
                          <div className="flex items-start gap-2.5">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border shadow-2xs ${
                                isDark
                                  ? 'bg-slate-900 border-slate-700 text-[#D9A72E]'
                                  : 'bg-white border-[#DCE3EC] text-[#D9A72E]'
                              }`}
                            >
                              <Users className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <h4 className="text-xs font-bold text-[#123B73] dark:text-white leading-tight">
                                Ecosystem Partnerships
                              </h4>
                              <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                                Connecting institutions, mentors, industry, and funding opportunities.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN — MESSAGE FROM THE CEO */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full pt-1 lg:pt-0">
                      <div>
                        {/* Heading: MESSAGE FROM THE CEO (Dark Navy + Gold) */}
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#123B73] dark:text-white uppercase">
                          MESSAGE FROM THE <span className="text-[#D9A72E]">CEO</span>
                        </h2>

                        {/* Decorative Underline Indicator: Two dots + rounded bar */}
                        <div className="flex items-center gap-1.5 mt-2.5 mb-5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#123B73] dark:bg-sky-400" />
                          <span className="w-12 h-1 rounded-full bg-[#123B73] dark:bg-sky-400" />
                        </div>

                        {/* Official CEO Message Text with Natural Left Alignment */}
                        <div className="space-y-3.5 text-sm sm:text-[14.5px] text-slate-700 dark:text-slate-200 leading-[1.7] text-left font-normal">
                          <p>
                            At NF Venture Studio, we believe that building successful startups requires more than a great idea &mdash; it requires the right infrastructure, expert guidance, institutional support, and a strong ecosystem that enables innovation to grow into sustainable businesses.
                          </p>

                          <p>
                            Our vision is to develop individual Startup Incubation Centres within academic institutions while building a comprehensive ecosystem that supports the establishment, management, and growth of these centres. We aim to empower institutions to become active hubs of innovation, entrepreneurship, research, and business development.
                          </p>

                          <p>
                            Through our integrated approach, we support innovators from pre-incubation and idea validation to startup formation, intellectual property protection, funding opportunities, government scheme facilitation, business planning, and market readiness. We also work towards strengthening institutional incubation capabilities through dedicated infrastructure, trained teams, industry connections, mentorship, and structured innovation activities.
                          </p>

                          <p>
                            At NF Venture Studio, our commitment extends beyond individual startups. We focus on creating a connected network of incubation centres that share knowledge, resources, expertise, and opportunities, enabling institutions and entrepreneurs to collaborate and achieve sustainable growth.
                          </p>

                          <p>
                            Together, we aspire to transform ideas into impactful ventures, institutions into innovation hubs, and entrepreneurial potential into meaningful economic and social progress.
                          </p>

                          <p className="font-bold text-[#123B73] dark:text-sky-300 pt-1">
                            Let us build an ecosystem where every promising idea has the opportunity to grow.
                          </p>
                        </div>
                      </div>

                      {/* Right-aligned Handwritten Signature & Sign-off, ending on bottom baseline */}
                      <div className="flex justify-end pt-4 mt-auto">
                        <div className="text-right space-y-0.5">
                          {/* Beautiful Cursive Signature */}
                          <div
                            style={{ fontFamily: "'Caveat', 'Great Vibes', cursive" }}
                            className="text-4xl sm:text-5xl text-[#123B73] dark:text-sky-300 font-semibold select-none pr-1 tracking-wide"
                          >
                            Mr. Ashok Patil
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-[#123B73] dark:text-white">
                            Ashok K. Patil
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                            CEO, NF Venture Studio
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </section>

              {/* Bottom Institutional Action CTA */}
              <section
                className={`p-6 sm:p-10 rounded-2xl border text-center space-y-4 transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-[#EAF1F9] border-[#DCE3EC]'
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  Collaborate with Our Leadership &amp; <span className="text-[#D9A72E]">Venture Studio</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                  Whether you are an academic institution seeking turnkey incubation deployment or an innovator developing deep-tech prototypes, our leadership team welcomes your partnership.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenApplication('student')}
                    className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#123B73] hover:bg-[#0B1F3A] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md inline-flex items-center gap-2"
                  >
                    <span>Apply for Incubation Center</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                  </button>
                  <Link
                    to="/contact"
                    className={`px-5 py-2.5 rounded-xl font-semibold text-xs border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 ${
                      isDark
                        ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-slate-600'
                        : 'bg-white border-[#DCE3EC] text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-2xs'
                    }`}
                  >
                    <span>Contact Executive Office</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </section>

            </div>

          </div>
        </div>
      </main>

      {/* 3. Global Footer */}
      <NFFooter
        onOpenApplication={handleOpenApplication}
        isDark={isDark}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />

      {/* 4. Interactive Application Modal */}
      <NFApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialTrack={selectedTrack}
        isDark={isDark}
      />
    </div>
  );
};
