import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <span className="section-number">01 / INTRODUCTION</span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15] mb-8 max-w-5xl">
        {PERSONAL_INFO.introLead}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-[#A8A8A8] text-base sm:text-lg leading-relaxed">
        <div className="md:col-span-8 space-y-4">
          <p>
            {PERSONAL_INFO.introBody}
          </p>
          <p>
            Rather than building superficial demos, I engineer complete systems: architecting database schemas, designing resilient API backends, integrating AI/LLM models where they genuinely deliver value, and crafting fluid frontend interfaces.
          </p>
        </div>

        <div className="md:col-span-4 border-l border-white/10 pl-6 space-y-3 font-mono text-xs text-[#888888]">
          <span className="text-white uppercase tracking-widest block font-semibold">
            Domains of Focus
          </span>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>Logistics &amp; Courier Systems</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>Education &amp; Campus Portals</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>Business &amp; Inventory ERPs</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>Production MERN E-Commerce</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>Applied AI, NLP &amp; Forecasting</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>Autonomous Social Automation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
