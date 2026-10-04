import React from 'react';
import { TECHNICAL_CAPABILITIES } from '../data/portfolioData';

export const TechnicalCapabilities: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <span className="section-number">06 / TECHNICAL CAPABILITIES</span>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Core Technologies &amp; Tooling
        </h2>
        <p className="text-base sm:text-lg text-[#AAAAAA] max-w-3xl leading-relaxed">
          Practical proficiency across systems programming, full-stack engineering, applied machine learning, and automation infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECHNICAL_CAPABILITIES.map((group) => (
          <div
            key={group.category}
            className="real-glass-panel p-6 transition-all duration-400 hover:border-white/25"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#888888] mb-4 pb-2 border-b border-white/10">
              {group.category}
            </h3>

            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm sm:text-base font-medium text-[#E0E0E0] hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
