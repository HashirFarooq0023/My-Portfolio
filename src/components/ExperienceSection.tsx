import React from 'react';
import { ExternalLink } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { LiquidGlassButton } from './ui/LiquidGlassButton';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <span className="section-number">04 / EXPERIENCE</span>

      <div className="mt-8 space-y-6">
        {EXPERIENCE_DATA.map((exp) => (
          <div
            key={exp.id}
            className="real-glass-panel p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
          >
            {/* Header info */}
            <div className="md:col-span-5">
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                {exp.role}
              </h3>
              <p className="text-base text-[#CCCCCC] mt-0.5 font-medium">
                {exp.organization}
              </p>
              <span className="text-xs font-mono text-[#888888] uppercase tracking-wider block mt-2">
                {exp.period}
              </span>

              {exp.website && (
                <div className="mt-4">
                  <LiquidGlassButton
                    variant="ghost"
                    as="a"
                    href={exp.website}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 text-xs font-mono"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </LiquidGlassButton>
                </div>
              )}
            </div>

            {/* Bullet points */}
            <div className="md:col-span-7">
              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed flex items-start gap-3">
                    <span className="text-[#666666] font-mono text-xs select-none pt-1">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
