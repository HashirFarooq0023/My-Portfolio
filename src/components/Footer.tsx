import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-2xl py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-semibold text-sm tracking-tight text-white block">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs font-mono text-[#666666] block mt-0.5">
            AI &amp; Full-Stack Software Developer
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-[#888888]">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 active:scale-95 text-[#AAAAAA] hover:text-white transition-all flex items-center gap-1 text-xs font-mono"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
