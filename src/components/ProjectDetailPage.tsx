import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Cpu,
  Database,
  Globe,
  Server
} from 'lucide-react';
import { ProjectDetail } from '../types/portfolio';
import { ALL_PROJECTS } from '../data/portfolioData';
import { LiquidGlassButton } from './ui/LiquidGlassButton';
import { LiquidGlassSurface } from './ui/LiquidGlassSurface';

interface ProjectDetailPageProps {
  project: ProjectDetail;
  onBack: () => void;
  onNavigateToProject: (slug: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onNavigateToProject
}) => {
  const [activeImage, setActiveImage] = useState<string>(project.coverImage);
  const [selectedGalleryModal, setSelectedGalleryModal] = useState<string | null>(null);

  useEffect(() => {
    setActiveImage(project.coverImage);
    document.title = `${project.title} — Case Study | Hashir Farooq`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  const nextProject = ALL_PROJECTS.find(p => p.slug === project.nextProjectSlug) || ALL_PROJECTS[0];

  return (
    <article className="min-h-screen bg-black text-[#F5F5F5] antialiased pt-24 sm:pt-28 pb-28 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto selection:bg-white selection:text-black">
      {/* 1. Glass Top Navigation Bar */}
      <div className="flex items-center justify-between gap-4 mb-10 sm:mb-14">
        <LiquidGlassButton
          variant="secondary"
          onClick={onBack}
          className="px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </LiquidGlassButton>

        <span className="text-xs uppercase font-mono tracking-widest text-[#777777]">
          {project.categoryLabel}
        </span>
      </div>

      {/* 2. Project Header */}
      <header className="mb-12 sm:mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {project.tag && (
            <span className="text-xs uppercase font-mono tracking-widest text-white/90 border-b border-white/20 pb-0.5">
              {project.tag}
            </span>
          )}
          <span className="text-xs uppercase font-mono tracking-widest text-[#777777]">
            Status: {project.status}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.05]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-2xl text-[#C0C0C0] font-light max-w-3xl leading-relaxed mb-6">
          {project.subtitle}
        </p>

        {/* Quick Tech Highlights */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10 text-xs font-mono text-[#888888]">
          <span className="text-white/60">Core Stack:</span>
          {project.techStack.flatMap(ts => ts.technologies).slice(0, 7).map((tech, idx) => (
            <span key={tech} className="text-[#BBBBBB]">
              {tech}{idx < 6 ? " ·" : ""}
            </span>
          ))}
        </div>
      </header>

      {/* 3. Hero Visual / Product UI Interface */}
      <section className="mb-16 sm:mb-24">
        <div className="project-image-glass rounded-xl overflow-hidden border border-white/10 bg-[#080808] shadow-2xl">
          <img
            src={activeImage}
            alt={`${project.title} Interface Preview`}
            className="w-full h-auto max-h-[640px] object-contain sm:object-cover mx-auto"
            loading="eager"
          />
        </div>

        {/* Gallery Thumbnails (if available) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveImage(project.coverImage)}
              className={`shrink-0 w-24 h-16 rounded-md overflow-hidden border transition-all ${
                activeImage === project.coverImage
                  ? 'border-white opacity-100'
                  : 'border-white/15 opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={project.coverImage}
                alt="Main cover thumbnail"
                className="w-full h-full object-cover"
              />
            </button>
            {project.gallery.map((img, idx) => (
              <button
                key={img}
                onClick={() => setActiveImage(img)}
                className={`shrink-0 w-24 h-16 rounded-md overflow-hidden border transition-all ${
                  activeImage === img
                    ? 'border-white opacity-100'
                    : 'border-white/15 opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={img}
                  alt={`Screenshot ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* 4. Overview Section */}
      <section className="mb-16 sm:mb-20">
        <span className="section-number">OVERVIEW</span>
        <p className="text-base sm:text-xl text-[#D0D0D0] leading-relaxed max-w-3xl">
          {project.overview}
        </p>
      </section>

      {/* 5. Problem & Solution Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-20">
        {/* Problem */}
        <div className="border-t border-white/15 pt-6">
          <span className="section-number">THE PROBLEM</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            Operational Bottlenecks &amp; Friction
          </h2>
          <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="border-t border-white/15 pt-6">
          <span className="section-number">THE SOLUTION</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            Engineering &amp; Automation
          </h2>
          <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* 6. "HOW I HANDLED IT" — Core Engineering Decisions */}
      <section className="mb-20 sm:mb-24">
        <span className="section-number">HOW I HANDLED IT</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
          Architectural &amp; Implementation Decisions
        </h2>

        <div className="space-y-6">
          {project.howHandled.map((item) => (
            <div
              key={item.number}
              className="border-b border-white/10 pb-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
            >
              <div className="sm:col-span-3 flex items-baseline gap-3">
                <span className="text-xs font-mono font-bold text-[#888888]">
                  {item.number}
                </span>
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                  {item.title}
                </h3>
              </div>
              <div className="sm:col-span-9">
                <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Architecture Section (if available) */}
      {project.architecture && (
        <section className="mb-20 sm:mb-24 border-t border-white/15 pt-8">
          <span className="section-number">ARCHITECTURE</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
            System Topology &amp; Component Flow
          </h2>

          <div className="space-y-3">
            {project.architecture.layers.map((layer, index) => (
              <React.Fragment key={layer.name}>
                <LiquidGlassSurface className="p-5 sm:p-6" enableLight={true}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono tracking-widest text-[#888888] uppercase">
                      LAYER 0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-white/80 bg-white/5 px-2.5 py-1 rounded">
                      {layer.tech}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {layer.name}
                  </h3>
                  {layer.description && (
                    <p className="text-xs sm:text-sm text-[#999999]">
                      {layer.description}
                    </p>
                  )}
                </LiquidGlassSurface>

                {index < project.architecture.layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <span className="text-xs font-mono text-[#555555]">↓</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      )}

      {/* 8. Tech Stack Matrix */}
      <section className="mb-20 sm:mb-24 border-t border-white/15 pt-8">
        <span className="section-number">TECH STACK</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
          Technologies Deployed
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.techStack.map((group) => (
            <div key={group.category} className="border border-white/10 p-5 rounded-lg bg-[#070707]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-3">
                {group.category}
              </span>
              <ul className="space-y-1.5">
                {group.technologies.map((tech) => (
                  <li key={tech} className="text-sm font-medium text-[#E0E0E0] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Key Features */}
      <section className="mb-20 sm:mb-24 border-t border-white/15 pt-8">
        <span className="section-number">KEY FEATURES</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
          Capabilities &amp; Functionality
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.features.map((feature) => (
            <div
              key={feature.number}
              className="p-5 border border-white/10 rounded-lg bg-[#070707] hover:border-white/20 transition-colors"
            >
              <span className="text-xs font-mono font-bold text-[#666666] block mb-2">
                {feature.number}
              </span>
              <h3 className="text-base font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Challenges & Solutions */}
      <section className="mb-20 sm:mb-24 border-t border-white/15 pt-8">
        <span className="section-number">CHALLENGES</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
          Engineering Obstacles &amp; Resolutions
        </h2>

        <div className="space-y-6">
          {project.challenges.map((challenge) => (
            <div key={challenge.number} className="border-l-2 border-white/20 pl-5 py-1">
              <span className="text-xs font-mono text-[#777777] block mb-1">
                CHALLENGE {challenge.number}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {challenge.title}
              </h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Status & Project Links */}
      <section className="mb-20 p-6 sm:p-8 rounded-xl border border-white/15 bg-[#090909]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-1">
              CURRENT STATUS
            </span>
            <p className="text-base sm:text-lg font-medium text-white">
              {project.status}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.links?.live && (
              <LiquidGlassButton
                variant="primary"
                as="a"
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 text-xs sm:text-sm font-medium"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </LiquidGlassButton>
            )}

            {project.links?.github && (
              <LiquidGlassButton
                variant="secondary"
                as="a"
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 text-xs sm:text-sm font-medium"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </LiquidGlassButton>
            )}
          </div>
        </div>
      </section>

      {/* 12. Next Project Navigation */}
      <nav className="border-t border-white/15 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <LiquidGlassButton
          variant="secondary"
          onClick={onBack}
          className="px-5 py-3 text-xs sm:text-sm font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Projects</span>
        </LiquidGlassButton>

        <button
          onClick={() => onNavigateToProject(nextProject.slug)}
          className="group text-left sm:text-right focus-visible:outline-none"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-1">
            NEXT PROJECT →
          </span>
          <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#CCCCCC] transition-colors flex items-center sm:justify-end gap-2">
            <span>{nextProject.title}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </nav>
    </article>
  );
};
