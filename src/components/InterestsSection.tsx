import React from 'react';
import { INTERESTS_DATA } from '../data/portfolioData';

export const InterestsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <span className="section-number">OUTSIDE OF CODE</span>

      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 mt-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Interests &amp; Pursuits
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base text-[#AAAAAA] font-mono">
          {INTERESTS_DATA.map((item, idx) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-white">{item}</span>
              {idx < INTERESTS_DATA.length - 1 && (
                <span className="text-[#444444]">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
