import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LiquidGlassButton } from './ui/LiquidGlassButton';

interface HeroProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateSection }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Atmospheric Background Glow for Glass Translucency */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[450px] pointer-events-none bg-subtle-glow -z-10" />

      {/* Profile & Name Identification */}
      <div className="flex items-center gap-4 sm:gap-5 mb-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full real-glass-panel p-1 shrink-0 overflow-hidden shadow-2xl">
          <img
            src={PERSONAL_INFO.profileImage}
            alt="Hashir Farooq"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div>
          <span className="text-sm font-semibold tracking-wider text-white uppercase block">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block mt-0.5">
            {PERSONAL_INFO.eyebrow}
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.95] max-w-5xl">
        Building software that solves real problems.
      </h1>

      {/* Concise Professional Summary */}
      <p className="text-lg sm:text-2xl text-[#C0C0C0] font-light leading-relaxed max-w-4xl mb-10">
        {PERSONAL_INFO.heroSummary}
      </p>

      {/* Liquid Glass Physical Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
        <LiquidGlassButton
          variant="primary"
          onClick={() => onNavigateSection('projects')}
          className="px-7 py-3.5 text-sm font-medium"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-4 h-4 opacity-75" />
        </LiquidGlassButton>

        <LiquidGlassButton
          variant="secondary"
          onClick={() => onNavigateSection('experience')}
          className="px-6 py-3.5 text-sm font-medium"
        >
          <span>Experience</span>
        </LiquidGlassButton>

        <LiquidGlassButton
          variant="secondary"
          onClick={() => onNavigateSection('contact')}
          className="px-6 py-3.5 text-sm font-medium"
        >
          <span>Contact Me</span>
        </LiquidGlassButton>

        <LiquidGlassButton
          variant="secondary"
          as="a"
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 text-sm font-medium"
        >
          <Github className="w-4 h-4 opacity-75" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
        </LiquidGlassButton>
      </div>

      {/* Quick Direct Contacts */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#888888] border-t border-white/10 pt-6">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Mail className="w-3.5 h-3.5 text-[#666666]" />
          <span>{PERSONAL_INFO.email}</span>
        </a>
        <a
          href={`tel:${PERSONAL_INFO.phoneRaw}`}
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#666666]" />
          <span>{PERSONAL_INFO.phone}</span>
        </a>
        <a
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Linkedin className="w-3.5 h-3.5 text-[#666666]" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};
