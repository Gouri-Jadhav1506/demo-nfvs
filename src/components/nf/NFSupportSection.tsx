import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  IndianRupee,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Wifi,
  Bot,
  Zap,
  CheckCircle2,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Layers,
  LayoutGrid,
  Pause,
  Play,
  Crosshair,
  Sliders,
  Check,
  Building2,
} from 'lucide-react';
import prototypingLabImg from '../../assets/prototyping_lab.jpg';
import founderMentorshipImg from '../../assets/founder_mentorship.jpg';
import labAiComputeImg from '../../assets/lab_ai_compute.jpg';
import labRoboticsImg from '../../assets/lab_robotics.jpg';
import labIotElectronicsImg from '../../assets/lab_iot_electronics.jpg';

interface NFSupportSectionProps {
  onOpenLabDetails: (domain: 'AI' | 'IoT' | 'Robotics' | 'Electronics') => void;
  onOpenApplication: (track?: string) => void;
  isDark?: boolean;
}

interface Hotspot {
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  detail: string;
}

interface FocusArea {
  id: 'AI' | 'Robotics' | 'IoT' | 'Electronics' | 'VentureSupport';
  category: string;
  shortLabel: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  stats: string;
  badge: string;
  specsKey: 'AI' | 'IoT' | 'Robotics' | 'Electronics' | null;
  track: string;
  hotspots: Hotspot[];
  specs: { label: string; value: string }[];
  deliverable: string;
}

export const NFSupportSection: React.FC<NFSupportSectionProps> = ({
  onOpenLabDetails,
  onOpenApplication,
  isDark = false,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'spotlight' | 'matrix'>('spotlight');
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const SLIDE_DURATION = 6000; // 6 seconds per slide
  const TICK_INTERVAL = 50;

  const focusAreas: FocusArea[] = [
    {
      id: 'AI',
      category: 'Deep-Tech & AI Lab',
      shortLabel: 'AI & Compute',
      title: 'AI & Machine Learning Compute Lab',
      tagline: 'High-performance GPU clusters & edge inference pipelines',
      desc: 'Dedicated enterprise workstations running NVIDIA RTX & A100 instances, pre-configured PyTorch/TensorFlow frameworks, and edge accelerators for deep-tech model validation.',
      image: labAiComputeImg,
      icon: Cpu,
      stats: 'A100 & Jetson Orin',
      badge: 'Compute & Inference',
      specsKey: 'AI',
      track: 'student',
      hotspots: [
        {
          x: 28,
          y: 35,
          title: 'NVIDIA A100 Clusters',
          detail: 'Enterprise GPU nodes optimized for training LLMs & vision models.',
        },
        {
          x: 72,
          y: 65,
          title: 'Edge AI Accelerators',
          detail: 'Jetson AGX Orin & Coral TPUs for real-time low-power inference.',
        },
      ],
      specs: [
        { label: 'Compute Engine', value: 'NVIDIA RTX & A100' },
        { label: 'Frameworks', value: 'PyTorch, TensorRT & TF' },
        { label: 'Latency Bench', value: '<15ms Edge Inference' },
      ],
      deliverable: 'Production-ready AI models & low-latency inference APIs.',
    },
    {
      id: 'Robotics',
      category: 'Robotics & Hardware Lab',
      shortLabel: 'Robotics & Cobots',
      title: 'Robotics & Industrial Automation Lab',
      tagline: 'Precision electromechanical prototyping, actuation & ROS2 simulation',
      desc: 'Rapid physical fabrication suite equipped with 6-DOF industrial collaborative robot cells, multi-axis SLA/FDM 3D printing farm, and dynamic kinematics testbenches.',
      image: labRoboticsImg,
      icon: Bot,
      stats: '6-DOF Cobots & SLA 3D',
      badge: 'Kinematics & Fabrication',
      specsKey: 'Robotics',
      track: 'student',
      hotspots: [
        {
          x: 38,
          y: 38,
          title: '6-DOF Cobot Cell',
          detail: 'Collaborative robotic arm with force-torque feedback sensors.',
        },
        {
          x: 76,
          y: 60,
          title: 'SLA Printing Farm',
          detail: 'Sub-millimeter industrial additive fabrication for enclosures.',
        },
      ],
      specs: [
        { label: 'Actuation', value: '6-DOF Collaborative Arms' },
        { label: 'Simulation', value: 'ROS2 & Gazebo Rigs' },
        { label: 'Fabrication', value: 'Precision Industrial SLA' },
      ],
      deliverable: 'Functional electromechanical MVPs tested for industrial repeatability.',
    },
    {
      id: 'IoT',
      category: 'Smart Sensor Systems',
      shortLabel: 'IoT & Telemetry',
      title: 'IoT & Telemetry Systems Lab',
      tagline: 'Industrial wireless protocols, smart sensor arrays & edge gateways',
      desc: 'Comprehensive multi-protocol testing environment supporting LoRaWAN, BLE 5.3, Zigbee and Wi-Fi 6, with precision RF power analyzers and low-power simulation rigs.',
      image: labIotElectronicsImg,
      icon: Wifi,
      stats: 'LoRaWAN & BLE 5.3',
      badge: 'Wireless & Telemetry',
      specsKey: 'IoT',
      track: 'faculty',
      hotspots: [
        {
          x: 32,
          y: 42,
          title: 'Industrial Gateway',
          detail: 'Multi-band LoRaWAN & Wi-Fi 6 base transceiver system.',
        },
        {
          x: 68,
          y: 68,
          title: 'RF Spectrum Rig',
          detail: 'Real-time protocol logic analyzers & battery lifetime simulator.',
        },
      ],
      specs: [
        { label: 'Protocols', value: 'LoRaWAN, BLE 5.3 & Zigbee' },
        { label: 'Analysis', value: 'Spectrum & Logic Analyzers' },
        { label: 'Power Profiling', value: 'Ultra-low μA Draw Rigs' },
      ],
      deliverable: 'Field-tested hardware telemetry nodes ready for commercial pilots.',
    },
    {
      id: 'Electronics',
      category: 'PCB & Circuit Design',
      shortLabel: 'Electronics & PCB',
      title: 'Embedded Electronics & Hardware Lab',
      tagline: 'Multi-layer PCB prototyping, SMD rework & compliance assessment',
      desc: 'Turnkey electronics development benches featuring multi-layer PCB CNC milling, automated optical inspection, signal generators, and pre-compliance EMI/EMC assessment chambers.',
      image: prototypingLabImg,
      icon: Zap,
      stats: 'Multi-Layer PCB Milling',
      badge: 'Hardware & Compliance',
      specsKey: 'Electronics',
      track: 'faculty',
      hotspots: [
        {
          x: 35,
          y: 36,
          title: 'CNC PCB Milling',
          detail: 'Rapid multi-layer circuit isolation & trace milling station.',
        },
        {
          x: 74,
          y: 64,
          title: 'SMD Rework Station',
          detail: 'Reflow soldering, thermal imaging & automated optical inspection.',
        },
      ],
      specs: [
        { label: 'Fabrication', value: 'Multi-Layer CNC Milling' },
        { label: 'Inspection', value: 'Thermal Cam & AOI Rigs' },
        { label: 'Compliance', value: 'Pre-EMI/EMC Chamber' },
      ],
      deliverable: 'Production-ready Gerber files, BOM optimization & statutory compliance.',
    },
    {
      id: 'VentureSupport',
      category: 'Venture Scaling & Capital',
      shortLabel: 'IPR & Grants',
      title: 'IPR, Mentorship & Grant Syndication',
      tagline: 'Statutory AICTE-NISP charters, 50+ CXO operators & grant pipelines',
      desc: 'Structured institutional translation engine guiding campus ventures through patent filing, 1-on-1 sprint reviews with seasoned venture directors, and non-dilutive central grant schemes.',
      image: founderMentorshipImg,
      icon: IndianRupee,
      stats: '₹3Cr+ Grant Pipeline',
      badge: 'Capital & Mentorship',
      specsKey: null,
      track: 'institutional',
      hotspots: [
        {
          x: 36,
          y: 44,
          title: 'AICTE-NISP Office',
          detail: 'Institutional patent drafting & 100% student IP ownership.',
        },
        {
          x: 70,
          y: 60,
          title: 'Capital Syndication',
          detail: 'Direct linkages to NIDHI-EIR, BIRAC BIG & DST seed funds.',
        },
      ],
      specs: [
        { label: 'Capital Linkage', value: '₹3Cr+ Central Pipeline' },
        { label: 'Advisory Board', value: '50+ CXO Operators' },
        { label: 'Governance', value: '100% Founder IP Rights' },
      ],
      deliverable: 'Statutory company incorporation, IP assignment & grant readiness.',
    },
  ];

  // Auto-advance timer
  useEffect(() => {
    if (viewMode !== 'spotlight' || isPaused) return;

    const intervalTime = TICK_INTERVAL;
    const increment = (intervalTime / SLIDE_DURATION) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIdx((current) => (current + 1) % focusAreas.length);
          setActiveHotspot(null);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [viewMode, isPaused, focusAreas.length]);

  const handleSelectArea = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
    setActiveHotspot(null);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + focusAreas.length) % focusAreas.length);
    setProgress(0);
    setActiveHotspot(null);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % focusAreas.length);
    setProgress(0);
    setActiveHotspot(null);
  };

  const current = focusAreas[activeIdx];
  const CurrentIcon = current.icon;

  return (
    <section
      id="support"
      className={`py-12 sm:py-16 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#0B1F3A] border-slate-800 text-white' : 'bg-[#F7F9FC] border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300 border-[#DCE3EC] dark:border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E]" />
              <span className="uppercase tracking-wider font-bold">Infrastructure &amp; Capabilities · Prototyping Labs</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Turnkey Prototyping Infrastructure &amp; <span className="text-[#D9A72E]">Capabilities</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              Enterprise hardware test benches, GPU compute clusters, and institutional incubation capabilities deployed directly within university campuses.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            {/* View Mode Toggle: Spotlight vs Graphical Matrix */}
            <div className="inline-flex items-center p-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xs text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('spotlight')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'spotlight'
                    ? 'bg-[#123B73] text-white shadow-xs font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Interactive Facility Spotlight"
              >
                <Sliders className="w-3.5 h-3.5 text-[#D9A72E]" />
                <span>Facility Spotlight</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('matrix')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-[#123B73] text-white shadow-xs font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Comprehensive Capability Matrix"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-[#D9A72E]" />
                <span>Capabilities Matrix</span>
              </button>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE3EC] dark:border-slate-700 bg-white dark:bg-slate-800 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>AICTE-NISP Aligned</span>
            </span>
          </div>
        </div>

        {/* View Mode 1: Interactive Facility Spotlight */}
        {viewMode === 'spotlight' ? (
          <div className="space-y-5">
            
            {/* Interconnected Facility Selector Bar */}
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
              <div className="flex items-center gap-2 flex-nowrap min-w-max">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => handleSelectArea(idx)}
                      className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border overflow-hidden ${
                        isActive
                          ? 'bg-[#123B73] text-white border-[#123B73] shadow-md ring-2 ring-[#D9A72E]/50'
                          : isDark
                          ? 'bg-slate-900/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-[#EAF1F9] hover:text-[#123B73]'
                      }`}
                    >
                      {isActive && !isPaused && (
                        <div
                          className="absolute bottom-0 left-0 h-0.5 bg-[#D9A72E] transition-all duration-75"
                          style={{ width: `${progress}%` }}
                        />
                      )}

                      <span className={`p-1 rounded-md transition-colors ${
                        isActive ? 'bg-white/10 text-[#D9A72E]' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-[#123B73]'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="whitespace-nowrap">{area.shortLabel}</span>

                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A72E] animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="hidden sm:flex items-center gap-1.5 shrink-0 pl-2">
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer text-xs ${
                    isPaused
                      ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'
                      : isDark
                      ? 'border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white'
                      : 'border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-[#123B73]'
                  }`}
                  title={isPaused ? 'Resume rotation' : 'Pause rotation'}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous facility"
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    isDark
                      ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-[#123B73]'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next facility"
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    isDark
                      ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-[#123B73]'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Graphical Stage */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 shadow-md ${
                isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-[#DCE3EC]'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[440px]">
                
                {/* Left: Authentic Imagery with Interactive Hardware Hotspots */}
                <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] lg:min-h-full overflow-hidden bg-slate-950 group">
                  <img
                    src={current.image}
                    alt={`NF Venture Studio Infrastructure - ${current.title}`}
                    key={current.id}
                    className="w-full h-full object-cover object-center block absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white border border-white/20 text-[11px] font-mono font-bold uppercase tracking-wider">
                      <CurrentIcon className="w-3.5 h-3.5 text-[#D9A72E]" />
                      <span>{current.badge}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowHotspots(!showHotspots)}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono font-bold border transition-colors cursor-pointer ${
                          showHotspots
                            ? 'bg-amber-400/90 text-slate-950 border-amber-300'
                            : 'bg-black/60 text-slate-300 border-white/20 hover:text-white'
                        }`}
                        title="Toggle Hardware Markers"
                      >
                        <Crosshair className="w-3 h-3" />
                        <span>{showHotspots ? 'Pins Active' : 'Pins Hidden'}</span>
                      </button>
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-[#123B73]/90 backdrop-blur-md text-white border border-white/20 text-[11px] font-mono font-bold">
                        {current.stats}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Hotspot Pins */}
                  {showHotspots &&
                    current.hotspots.map((spot, sIdx) => {
                      const isOpened = activeHotspot === sIdx;
                      return (
                        <div
                          key={sIdx}
                          className="absolute z-20"
                          style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                        >
                          <div className="relative -translate-x-1/2 -translate-y-1/2">
                            <span className="absolute -inset-1 rounded-full bg-[#D9A72E]/40 animate-ping" />
                            
                            <button
                              type="button"
                              onClick={() => setActiveHotspot(isOpened ? null : sIdx)}
                              onMouseEnter={() => setActiveHotspot(sIdx)}
                              className={`relative w-7 h-7 rounded-full flex items-center justify-center font-mono text-[11px] font-bold shadow-lg transition-transform hover:scale-110 cursor-pointer ${
                                isOpened
                                  ? 'bg-[#D9A72E] text-slate-950 ring-2 ring-white'
                                  : 'bg-[#123B73] text-white border border-white/40'
                              }`}
                              aria-label={`Inspect ${spot.title}`}
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                            </button>

                            {isOpened && (
                              <div
                                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 sm:w-64 p-3 rounded-xl bg-slate-950/95 backdrop-blur-md text-white border border-white/20 shadow-2xl z-30 text-left animate-in fade-in zoom-in-95 duration-150"
                                onMouseLeave={() => setActiveHotspot(null)}
                              >
                                <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[10px] font-mono text-[#D9A72E] uppercase font-bold">
                                  <span>Hardware Inspection</span>
                                  <span>0{sIdx + 1}</span>
                                </div>
                                <h4 className="text-xs font-bold text-white mt-1.5 leading-snug">
                                  {spot.title}
                                </h4>
                                <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                                  {spot.detail}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}

                  {/* Bottom Caption on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D9A72E] font-bold block">
                      Turnkey Facility
                    </span>
                    <h3 className="text-base sm:text-lg font-bold leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-2 font-medium">
                      {current.tagline}
                    </p>
                  </div>
                </div>

                {/* Right: Crisp, Highly Informative Structured Layout */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-1 pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9A72E]">
                          Facility 0{activeIdx + 1} of 0{focusAreas.length}
                        </span>
                        
                        <div className="flex items-center gap-1 sm:hidden">
                          <button
                            type="button"
                            onClick={handlePrev}
                            className="p-1 px-2 rounded border border-slate-300 dark:border-slate-700 text-xs font-bold"
                          >
                            ←
                          </button>
                          <button
                            type="button"
                            onClick={handleNext}
                            className="p-1 px-2 rounded border border-slate-300 dark:border-slate-700 text-xs font-bold"
                          >
                            →
                          </button>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                        {current.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#123B73] dark:text-sky-300">
                        {current.tagline}
                      </p>
                    </div>

                    {/* Concise Narrative */}
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
                      {current.desc}
                    </p>

                    {/* Hardware Specifications Micro-Grid */}
                    <div className="pt-1">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                        Hardware Tooling &amp; Benchmarks
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {current.specs.map((item, specIdx) => (
                          <div
                            key={specIdx}
                            className={`p-2.5 rounded-xl border transition-colors ${
                              isDark
                                ? 'bg-slate-800/60 border-slate-700/80'
                                : 'bg-slate-50 border-slate-200/80'
                            }`}
                          >
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                              {item.label}
                            </span>
                            <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block leading-snug">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Standard Cohort Deliverable Ribbon */}
                    <div className="p-3 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent text-xs flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#D9A72E]/20 text-[#D9A72E] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-[#946912] dark:text-[#E8BD56] uppercase text-[10px] tracking-wider block font-mono">
                          Verified Cohort Deliverable
                        </span>
                        <span className="text-slate-800 dark:text-slate-200 font-medium">
                          {current.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Indicator Dots */}
                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {focusAreas.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => handleSelectArea(dotIdx)}
                          aria-label={`Go to facility ${dotIdx + 1}`}
                          className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                            dotIdx === activeIdx
                              ? 'w-6 bg-[#123B73] dark:bg-sky-400'
                              : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                      0{activeIdx + 1} / 0{focusAreas.length}
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        ) : (
          /* View Mode 2: Clean Structured Capabilities Matrix (Zero repeated buttons, unified selection) */
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {focusAreas.map((area, idx) => {
                const Icon = area.icon;
                const isSelected = activeIdx === idx;
                return (
                  <div
                    key={area.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`rounded-2xl border p-4 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? isDark
                          ? 'bg-slate-900 border-[#D9A72E] shadow-md ring-2 ring-[#D9A72E]/60 -translate-y-1'
                          : 'bg-white border-[#123B73] shadow-md ring-2 ring-[#123B73] -translate-y-1'
                        : isDark
                        ? 'bg-slate-900/80 border-slate-700 hover:bg-slate-800'
                        : 'bg-white border-[#DCE3EC] hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-extrabold ${
                          isSelected ? 'bg-[#D9A72E] text-slate-950' : 'bg-[#EAF1F9] dark:bg-slate-800 text-[#123B73] dark:text-sky-300'
                        }`}>
                          0{idx + 1}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-300">
                          <Icon className="w-4 h-4 text-[#D9A72E]" />
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9A72E] block">
                          {area.stats}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mt-0.5">
                          {area.shortLabel}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 space-y-1 text-[11px] font-mono">
                      <div className="text-slate-500 dark:text-slate-400 truncate">
                        {area.specs[0].label}: <strong className="text-slate-800 dark:text-slate-200">{area.specs[0].value}</strong>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className={`text-[10px] font-bold ${isSelected ? 'text-[#D9A72E]' : 'text-slate-400'}`}>
                          {isSelected ? '● Active Selection' : 'Click to Focus'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setViewMode('spotlight')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#123B73] dark:text-sky-300 bg-[#EAF1F9] dark:bg-slate-800 hover:bg-[#123B73] hover:text-white transition-all cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5 text-[#D9A72E]" />
                <span>Return to Facility Spotlight</span>
              </button>
            </div>
          </div>
        )}

        {/* Single Unified Action Bar (Replaces repeated CTA buttons on individual cards) */}
        <div
          className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 ${
            isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-[#DCE3EC]'
          }`}
        >
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9A72E]">
                Active Infrastructure Bay
              </span>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                · {current.stats}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Ready to deploy or access <span className="text-[#123B73] dark:text-sky-300">{current.title}</span>?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Turnkey campus facility with pre-configured developer workstations and AICTE-NISP compliance.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 flex-wrap sm:flex-nowrap">
            {current.specsKey && (
              <button
                type="button"
                onClick={() => onOpenLabDetails(current.specsKey!)}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                  isDark
                    ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                    : 'border-slate-300 bg-slate-50 text-slate-800 hover:bg-slate-100 hover:text-[#123B73]'
                }`}
              >
                <span>View Full Specs</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D9A72E]" />
              </button>
            )}
            <button
              type="button"
              onClick={() => onOpenApplication(current.track)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#123B73] hover:bg-[#0B1F3A] transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Apply for Facility Access</span>
              <ArrowRight className="w-4 h-4 text-[#D9A72E]" />
            </button>
          </div>
        </div>

        {/* Integrated Supporting Pillars Strip (Clean, non-repetitive telemetry) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
          <div
            className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all duration-200 hover:shadow-xs ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-[#DCE3EC]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-300 shrink-0">
              <FileText className="w-5 h-5 text-[#D9A72E]" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                IPR &amp; Tech Transfer
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium truncate mt-0.5">
                AICTE-NISP Policy &amp; 100% Founder IP
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all duration-200 hover:shadow-xs ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-[#DCE3EC]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-300 shrink-0">
              <GraduationCap className="w-5 h-5 text-[#D9A72E]" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                50+ CXO Mentors
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium truncate mt-0.5">
                Weekly Sprint Reviews &amp; GTM Pilots
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all duration-200 hover:shadow-xs ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-[#DCE3EC]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#EAF1F9] dark:bg-slate-800 flex items-center justify-center text-[#123B73] dark:text-sky-300 shrink-0">
              <IndianRupee className="w-5 h-5 text-[#D9A72E]" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                Non-Dilutive Grants
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium truncate mt-0.5">
                ₹3Cr+ NIDHI, BIRAC &amp; MSME Seed Lines
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
