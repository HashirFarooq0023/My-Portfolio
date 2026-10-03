import React from 'react';
import { ArrowRight, Box } from 'lucide-react';
import { MEGATRIX_PRODUCTS } from '../data/portfolioData';
import { LiquidGlassSurface } from './ui/LiquidGlassSurface';
import { LiquidGlassButton } from './ui/LiquidGlassButton';

interface MegaTrixSectionProps {
  onNavigateToProject: (slug: string) => void;
}

export const MegaTrixSection: React.FC<MegaTrixSectionProps> = ({
  onNavigateToProject
}) => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto border-t border-white/10">
      <div className="mb-12">
        <span className="section-number">SOFTWARE ECOSYSTEM</span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          MegaTrix
        </h2>
        <p className="text-base sm:text-xl text-[#AAAAAA] max-w-3xl leading-relaxed">
          A growing software ecosystem focused on building practical software products across education, business management, e-commerce, and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MEGATRIX_PRODUCTS.map((prod) => (
          <LiquidGlassSurface
            key={prod.slug}
            className="p-6 flex flex-col justify-between h-full group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                  {prod.tag || 'SaaS Product'}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                {prod.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed mb-6 line-clamp-3">
                {prod.shortDescription}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#666666]">
                {prod.techStack[0]?.technologies.slice(0, 2).join(' · ')}
              </span>

              <button
                type="button"
                onClick={() => onNavigateToProject(prod.slug)}
                className="text-xs font-mono text-white/80 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </LiquidGlassSurface>
        ))}
      </div>
    </section>
  );
};
