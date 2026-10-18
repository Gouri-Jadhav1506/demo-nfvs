import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFHeroSection } from '../components/nf/NFHeroSection';
import { NFVentureEnginesSection } from '../components/nf/NFVentureEnginesSection';
import { NFIncubationFrameworkSection } from '../components/nf/NFIncubationFrameworkSection';
import { NFTracksSection } from '../components/nf/NFTracksSection';
import { NFSupportSection } from '../components/nf/NFSupportSection';
import { NFArchitectureAndProcess } from '../components/nf/NFArchitectureAndProcess';
import { NFWhyPartnerSection } from '../components/nf/NFWhyPartnerSection';
import { NFFinalCTA } from '../components/nf/NFFinalCTA';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { NFLabModal } from '../components/nf/NFLabModal';
import { NFMarquee } from '../components/nf/NFMarquee';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

export const NFVentureStudioPage: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('nf-theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'light';
  });

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');
  const [isLabModalOpen, setIsLabModalOpen] = useState(false);
  const [activeLabDomain, setActiveLabDomain] = useState<'AI' | 'IoT' | 'Robotics' | 'Electronics'>('AI');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();

  // Scroll reveal hooks
  useScrollReveal();
  useCountUp();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

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
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 400);
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

  const handleOpenLab = (domain: 'AI' | 'IoT' | 'Robotics' | 'Electronics') => {
    setActiveLabDomain(domain);
    setIsLabModalOpen(true);
  };

  const handleApplyFromLab = (domain: string) => {
    setSelectedTrack('student');
    setIsAppModalOpen(true);
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans selection:bg-[#123B73] selection:text-white relative overflow-x-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0B1F3A] text-slate-100' : 'bg-[#F7F9FC] text-[#172334]'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Top sticky Navbar with Theme Toggle and Buttons */}
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Spacer that pushes content below the fixed navbar */}
        <div className="h-[64px] sm:h-[76px]" aria-hidden="true" />
        {/* Hero Section */}
        <NFHeroSection onOpenApplication={handleOpenApplication} isDark={isDark} />

        {/* Incubation Framework Section */}
        <NFIncubationFrameworkSection isDark={isDark} />

        {/* Three Venture Engines Section */}
        <NFVentureEnginesSection isDark={isDark} />

        {/* Marquee ticker between framework and tracks */}
        <NFMarquee isDark={isDark} />

        {/* Section 1: The Three Specialized Tracks */}
        <NFTracksSection onOpenApplication={handleOpenApplication} isDark={isDark} />

        {/* Section 2: Comprehensive Incubation Support */}
        <NFSupportSection
          onOpenLabDetails={handleOpenLab}
          onOpenApplication={handleOpenApplication}
          isDark={isDark}
        />

        {/* Section 3: Integrated System Architecture & 4-Step Process */}
        <NFArchitectureAndProcess
          onOpenApplication={handleOpenApplication}
          onOpenLabDetails={handleOpenLab}
          isDark={isDark}
        />

        {/* Section 4: Why Partner With NCF? */}
        <NFWhyPartnerSection onOpenApplication={handleOpenApplication} isDark={isDark} />

        {/* Section 5: Restrained Institutional Final CTA */}
        <NFFinalCTA onOpenApplication={handleOpenApplication} isDark={isDark} />
      </main>

      <NFFooter
        onOpenApplication={handleOpenApplication}
        isDark={isDark}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />

      {/* Interactive Application Modal */}
      <NFApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialTrack={selectedTrack}
        isDark={isDark}
      />

      {/* Interactive Lab Details Modal */}
      <NFLabModal
        isOpen={isLabModalOpen}
        onClose={() => setIsLabModalOpen(false)}
        activeDomain={activeLabDomain}
        onSelectDomain={(d) => setActiveLabDomain(d)}
        onApply={handleApplyFromLab}
        isDark={isDark}
      />
    </div>
  );
};
