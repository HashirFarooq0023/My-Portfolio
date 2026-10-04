import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <span className="section-number">02 / EDUCATION</span>

      <div className="mt-8">
        <div className="real-glass-panel p-8 sm:p-10 transition-all duration-400 hover:border-white/25">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {EDUCATION_DATA.degree}
              </h2>
              <p className="text-base sm:text-lg text-[#A0A0A0] mt-1">
                {EDUCATION_DATA.institution}
              </p>
            </div>

            <div className="text-xs sm:text-sm font-mono text-[#888888] uppercase tracking-wider">
              {EDUCATION_DATA.period}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
