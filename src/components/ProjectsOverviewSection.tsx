import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { ProjectDetail } from '../types/portfolio';
import { LiquidGlassButton } from './ui/LiquidGlassButton';

interface ProjectsOverviewSectionProps {
  onNavigateToProject: (slug: string) => void;
}

export const ProjectsOverviewSection: React.FC<ProjectsOverviewSectionProps> = ({
  onNavigateToProject
}) => {
  const collaborativeProjects = ALL_PROJECTS.filter(p => p.category === 'collaborative');
  const aiProjects = ALL_PROJECTS.filter(p => p.category === 'ai');
  const automationProjects = ALL_PROJECTS.filter(p => p.category === 'automation');
  const fullstackProjects = ALL_PROJECTS.filter(p => p.category === 'fullstack');

  const renderProjectShowcase = (project: ProjectDetail, indexStr: string) => (
    <div
      key={project.slug}
      className="real-glass-panel p-6 sm:p-8 lg:p-10 mb-8 group transition-all duration-500 hover:border-white/25"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Editorial Project Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm font-bold text-[#888888]">
                {indexStr}
              </span>
              {project.tag && (
                <span className="text-xs uppercase font-mono tracking-wider text-white/90 border-b border-white/20 pb-0.5">
                  {project.tag}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#A0A0A0] mb-4">
              {project.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Tech Stack List */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#888888] mb-8">
              {project.techStack.flatMap(ts => ts.technologies).slice(0, 5).map((tech, idx) => (
                <span key={tech} className="text-[#CCCCCC]">
                  {tech}{idx < 4 ? " ·" : ""}
                </span>
              ))}
            </div>
          </div>

          <div>
            <LiquidGlassButton
              variant="primary"
              onClick={() => onNavigateToProject(project.slug)}
              className="px-6 py-3 text-xs sm:text-sm font-medium"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </LiquidGlassButton>
          </div>
        </div>

        {/* Dominant Real Screenshot Surface */}
        <div className="lg:col-span-7">
          <div
            onClick={() => onNavigateToProject(project.slug)}
            className="project-image-glass cursor-pointer rounded-xl overflow-hidden border border-white/15 bg-[#080808] shadow-2xl group-hover:border-white/30 transition-all"
          >
            <img
              src={project.coverImage}
              alt={`${project.title} Interface`}
              className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain sm:object-cover mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <span className="section-number">05 / PROJECTS</span>

      <div className="mb-14">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Software Products &amp; Engineering Systems
        </h2>
        <p className="text-base sm:text-xl text-[#AAAAAA] max-w-3xl leading-relaxed">
          Every project below is an end-to-end engineered system built to solve specific operational, algorithmic, or business requirements.
        </p>
      </div>

      {/* 1. Real-World / Collaborative Products */}
      <div className="mb-16">
        <div className="border-b border-white/15 pb-3 mb-6">
          <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/90">
            Real-World &amp; Collaborative Products
          </h3>
        </div>
        <div>
          {collaborativeProjects.map((p, idx) =>
            renderProjectShowcase(p, `0${idx + 1}`)
          )}
        </div>
      </div>

      {/* 2. AI / Machine Learning */}
      <div className="mb-16">
        <div className="border-b border-white/15 pb-3 mb-6">
          <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/90">
            AI &amp; Machine Learning
          </h3>
        </div>
        <div>
          {aiProjects.map((p, idx) =>
            renderProjectShowcase(p, `0${collaborativeProjects.length + idx + 1}`)
          )}
        </div>
      </div>

      {/* 3. Automation */}
      <div className="mb-16">
        <div className="border-b border-white/15 pb-3 mb-6">
          <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/90">
            Automation Pipelines
          </h3>
        </div>
        <div>
          {automationProjects.map((p, idx) =>
            renderProjectShowcase(p, `0${collaborativeProjects.length + aiProjects.length + idx + 1}`)
          )}
        </div>
      </div>

      {/* 4. Full-Stack / Personal Development */}
      <div className="mb-8">
        <div className="border-b border-white/15 pb-3 mb-6">
          <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/90">
            Full-Stack Development
          </h3>
        </div>
        <div>
          {fullstackProjects.map((p, idx) =>
            renderProjectShowcase(p, `0${collaborativeProjects.length + aiProjects.length + automationProjects.length + idx + 1}`)
          )}
        </div>
      </div>
    </section>
  );
};
