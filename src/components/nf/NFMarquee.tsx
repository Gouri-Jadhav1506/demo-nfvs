import React from 'react';
import { Rocket, Trophy, FlaskConical, Shield, Zap, GraduationCap, Target, Award } from 'lucide-react';

interface NFMarqueeProps {
  isDark?: boolean;
}

const marqueeItems = [
  { icon: Rocket, label: 'Student Startups' },
  { icon: Trophy, label: 'NIRF · NAAC · NBA Aligned' },
  { icon: FlaskConical, label: 'AI, IoT & Robotics Labs' },
  { icon: Shield, label: 'AICTE-NISP Compliant' },
  { icon: Zap, label: '₹3Cr+ Grant Pipeline' },
  { icon: GraduationCap, label: 'Academic IP Commercialisation' },
  { icon: Target, label: '12-Month Turnkey Rollout' },
  { icon: Award, label: 'IIC Star Ratings Support' },
  { icon: Rocket, label: 'Investor Demo Days' },
  { icon: FlaskConical, label: 'Patent Drafting & Filing' },
  // Duplicate for seamless loop
  { icon: Rocket, label: 'Student Startups' },
  { icon: Trophy, label: 'NIRF · NAAC · NBA Aligned' },
  { icon: FlaskConical, label: 'AI, IoT & Robotics Labs' },
  { icon: Shield, label: 'AICTE-NISP Compliant' },
  { icon: Zap, label: '₹3Cr+ Grant Pipeline' },
  { icon: GraduationCap, label: 'Academic IP Commercialisation' },
  { icon: Target, label: '12-Month Turnkey Rollout' },
  { icon: Award, label: 'IIC Star Ratings Support' },
  { icon: Rocket, label: 'Investor Demo Days' },
  { icon: FlaskConical, label: 'Patent Drafting & Filing' },
];

export const NFMarquee: React.FC<NFMarqueeProps> = ({ isDark = false }) => {
  return (
    <div
      className={`relative py-3 border-y overflow-hidden transition-colors duration-200 ${
        isDark
          ? 'bg-[#060D1A] border-slate-800'
          : 'bg-[#F7F9FC] border-[#DCE3EC]'
      }`}
    >
      {/* Edge Fades */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none ${
          isDark
            ? 'bg-gradient-to-r from-[#060D1A] to-transparent'
            : 'bg-gradient-to-r from-[#F7F9FC] to-transparent'
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none ${
          isDark
            ? 'bg-gradient-to-l from-[#060D1A] to-transparent'
            : 'bg-gradient-to-l from-[#F7F9FC] to-transparent'
        }`}
      />

      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {marqueeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <span
              key={idx}
              className={`inline-flex items-center gap-2 px-6 py-0.5 text-xs font-semibold tracking-wide flex-shrink-0 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-[#D9A72E] flex-shrink-0" />
              <span>{item.label}</span>
              <span className="mx-3 text-slate-300 dark:text-slate-700">·</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
