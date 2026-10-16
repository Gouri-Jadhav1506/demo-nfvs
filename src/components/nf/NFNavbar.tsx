import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NFLogo } from './NFLogo';
import {
  Phone,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Layers,
  FlaskConical,
  Network,
  Rocket,
  Trophy,
} from 'lucide-react';

interface NFNavbarProps {
  onOpenApplication: (track?: string) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const NFNavbar: React.FC<NFNavbarProps> = ({
  onOpenApplication,
  theme = 'light',
  onToggleTheme,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAboutPage = location.pathname === '/about' || location.pathname === '/about-us';
  const isTeamPage = location.pathname === '/team' || location.pathname === '/our-team';
  const isContactPage = location.pathname === '/contact' || location.pathname === '/contact-us';
  const isHomePage = location.pathname === '/' || location.pathname === '/nf-venture-studio' || location.pathname === '/studio';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileHomeExpanded, setMobileHomeExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const isDark = theme === 'dark';
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHomeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown and mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setHomeDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll-spy: detect which section is active
  useEffect(() => {
    if (!isHomePage) return;

    const sections = ['tracks', 'support', 'architecture', 'process', 'why-ncf', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  // Sections inside the Home dropdown
  const homeSections = [
    { name: 'Tracks', desc: '3 Specialized Tracks', href: '#tracks', icon: Layers },
    { name: 'Support', desc: '3 Capability Pillars', href: '#support', icon: FlaskConical },
    { name: 'Architecture', desc: '4-Pillar Incubation Architecture', href: '#architecture', icon: Network },
    { name: 'Rollout', desc: '12-Month Turnkey Rollout', href: '#process', icon: Rocket },
    { name: 'Accreditation', desc: 'NBA, NAAC, NIRF & IIC', href: '#why-ncf', icon: Trophy },
  ];

  // Main standalone navigation items
  const mainNavItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setHomeDropdownOpen(false);

    if (href === '/about' || href === '/about-us' || href === '#about') {
      if (!isAboutPage) {
        navigate('/about');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/team' || href === '/our-team') {
      if (!isTeamPage) {
        navigate('/team');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/contact' || href === '/contact-us' || href === '#contact') {
      if (!isContactPage) {
        navigate('/contact');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '#' || href === '#home' || href === '/') {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (href.startsWith('#')) {
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
      }
      return;
    }

    navigate(href);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setHomeDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHomeDropdownOpen(false);
    }, 180);
  };

  const isHomeChildActive = isHomePage && ['tracks', 'support', 'architecture', 'process', 'why-ncf'].includes(activeSection);
  const isHomeActive = isHomePage && (isHomeChildActive || activeSection === '');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 border-b ${
        isDark
          ? 'bg-[#0B1F3A] border-slate-800 text-white'
          : 'bg-white border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-[64px] sm:h-[76px]">

          {/* 1. Left: Brand Logo with comfortable vertical breathing room */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#');
              }}
              className="flex items-center transition-opacity duration-200 hover:opacity-95"
              aria-label="NF Venture Studio Home"
            >
              <NFLogo size="sm" variant={isDark ? 'light' : 'dark'} className="xl:hidden" />
              <NFLogo size="md" variant={isDark ? 'light' : 'dark'} className="hidden xl:inline-flex" />
            </a>
          </div>

          {/* 2. Center: Clean Navigation Links in Reference-Inspired Pill Container */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/80">
            
            {/* Home with Understated Dropdown */}
            <div
              ref={dropdownRef}
              className="relative inline-flex items-center"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                type="button"
                onClick={() => handleNavClick('#')}
                className={`px-3.5 py-1.5 text-xs rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-1 ${
                  isHomeActive
                    ? 'bg-[#123B73] text-white font-semibold shadow-xs'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800 font-medium'
                      : 'text-[#172334] hover:text-[#123B73] hover:bg-white font-medium'
                }`}
              >
                <span>Home</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    homeDropdownOpen ? 'rotate-180' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHomeDropdownOpen(!homeDropdownOpen);
                  }}
                />
              </button>

              {/* Clean Solid Dropdown Menu */}
              {homeDropdownOpen && (
                <div
                  className={`absolute top-full left-0 mt-2 w-64 rounded-xl border p-2 shadow-lg z-50 transition-all ${
                    isDark
                      ? 'bg-[#0B1F3A] border-slate-700 text-white'
                      : 'bg-white border-[#DCE3EC] text-[#172334]'
                  }`}
                >
                  <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Home Sections
                  </div>
                  <div className="space-y-0.5 mt-1">
                    {homeSections.map((item) => {
                      const Icon = item.icon;
                      const sectionId = item.href.replace('#', '');
                      const isItemActive = isHomePage && activeSection === sectionId;
                      return (
                        <button
                          type="button"
                          key={item.name}
                          onClick={() => handleNavClick(item.href)}
                          className={`w-full px-3 py-2 rounded-lg text-left transition-colors duration-200 flex items-center gap-2.5 cursor-pointer text-xs ${
                            isItemActive
                              ? isDark
                                ? 'bg-[#123B73] text-white font-semibold'
                                : 'bg-[#EAF1F9] text-[#123B73] font-semibold'
                              : isDark
                                ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                : 'text-[#172334] hover:bg-slate-50 hover:text-[#123B73]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 text-[#D9A72E] shrink-0" />
                          <div>
                            <span className="font-semibold block">{item.name}</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{item.desc}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Main Nav Links: About Us, Our Team, Contact */}
            {mainNavItems.map((item) => {
              const isActive = (item.name === 'About Us' && isAboutPage) ||
                               (item.name === 'Our Team' && isTeamPage) ||
                               (item.name === 'Contact' && isContactPage);
              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3.5 py-1.5 text-xs rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#123B73] text-white font-semibold shadow-xs'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800 font-medium'
                        : 'text-[#172334] hover:text-[#123B73] hover:bg-white font-medium'
                  }`}
                >
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* 3. Right Actions: Phone, Apply CTA, Theme Toggle */}
          <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">

            {/* Helpline Phone */}
            <a
              href="tel:8379879846"
              className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border hover:-translate-y-0.5 active:translate-y-0 ${
                isDark
                  ? 'text-slate-200 border-slate-700 bg-slate-900 hover:text-white hover:border-slate-600'
                  : 'text-[#172334] border-[#DCE3EC] bg-white hover:text-[#123B73] hover:border-slate-300 hover:shadow-xs'
              }`}
              title="Helpline: 8379879846"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9A72E]" />
              <span>8379879846</span>
            </a>

            {/* Single Prominent Primary CTA (Solid Pill) */}
            <button
              type="button"
              onClick={() => onOpenApplication()}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs text-white bg-[#123B73] hover:bg-[#0B1F3A] active:bg-[#0B1F3A] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-xs hover:shadow-sm inline-flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123B73] focus-visible:ring-offset-2 shrink-0"
              aria-label="Apply for Incubation"
            >
              <span>Apply <span className="hidden sm:inline">for Incubation</span></span>
            </button>

            {/* Theme Toggle Button */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className={`w-8 h-8 rounded-full border transition-all duration-200 inline-flex items-center justify-center cursor-pointer hover:-translate-y-0.5 active:translate-y-0 shrink-0 ${
                  isDark
                    ? 'border-slate-700 text-slate-300 hover:text-[#D9A72E] hover:border-slate-600 bg-slate-900'
                    : 'border-[#DCE3EC] text-slate-700 hover:text-[#123B73] hover:border-slate-300 bg-white hover:shadow-xs'
                }`}
                title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-[#D9A72E]" /> : <Moon className="w-3.5 h-3.5 text-[#123B73]" />}
              </button>
            )}

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-8 h-8 rounded-full border transition-all duration-200 inline-flex items-center justify-center cursor-pointer shrink-0 ${
                isDark
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                  : 'border-[#DCE3EC] text-[#172334] hover:bg-slate-50'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          role="region"
          aria-label="Mobile Navigation"
          className={`lg:hidden border-b px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-76px)] overflow-y-auto ${
            isDark ? 'bg-[#0B1F3A] border-slate-800' : 'bg-white border-[#DCE3EC]'
          }`}
        >
          {/* Home Section */}
          <div className={`rounded-xl border overflow-hidden ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-[#DCE3EC]'
          }`}>
            <div className="flex items-center justify-between p-1.5">
              <button
                type="button"
                onClick={() => handleNavClick('#')}
                className={`flex-1 text-left px-3 py-2 text-xs font-semibold rounded-lg ${
                  isDark ? 'text-white' : 'text-[#172334]'
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => setMobileHomeExpanded(!mobileHomeExpanded)}
                className="p-2 rounded-lg text-slate-500"
                aria-label="Expand Home Sections"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileHomeExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {mobileHomeExpanded && (
              <div className={`px-2.5 pb-2.5 pt-1 space-y-1 border-t ${
                isDark ? 'border-slate-800 bg-[#0B1F3A]' : 'border-[#DCE3EC] bg-white'
              }`}>
                {homeSections.map((item) => (
                  <button
                    type="button"
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#123B73]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {mainNavItems.map((item) => (
            <button
              type="button"
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${
                (item.name === 'About Us' && isAboutPage) ||
                (item.name === 'Our Team' && isTeamPage) ||
                (item.name === 'Contact' && isContactPage)
                  ? 'bg-[#123B73] text-white border-transparent'
                  : isDark
                    ? 'border-slate-800 text-slate-200 bg-slate-900/60'
                    : 'border-[#DCE3EC] text-slate-700 bg-slate-50'
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Helpline and CTA for mobile */}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:8379879846"
              className="w-full text-center py-2 text-xs font-semibold rounded-xl border border-[#DCE3EC] dark:border-slate-700 text-slate-700 dark:text-slate-200"
            >
              Helpline: 8379879846
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-[#123B73] hover:bg-[#0B1F3A]"
            >
              Apply for Incubation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
