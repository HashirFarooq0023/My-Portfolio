import React from 'react';
import { ENGINEERING_APPROACH } from '../data/portfolioData';

export const EngineeringApproach: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <span className="section-number">ENGINEERING APPROACH</span>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          How I Build
        </h2>
        <p className="text-base sm:text-lg text-[#999999] max-w-3xl">
          Five principles guiding my engineering decisions across every product and system.
        </p>
      </div>

      <div className="space-y-6">
        {ENGINEERING_APPROACH.map((principle) => (
          <div
            key={principle.number}
            className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
          >
            <div className="md:col-span-1">
              <span className="text-xs font-mono font-bold text-[#666666]">
                {principle.number}
              </span>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {principle.title}
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
