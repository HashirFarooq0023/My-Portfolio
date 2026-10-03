import React, { useEffect } from 'react';
import { useRouter } from './lib/useRouter';
import { ALL_PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsOverviewSection } from './components/ProjectsOverviewSection';
import { MegaTrixSection } from './components/MegaTrixSection';
import { TechnicalCapabilities } from './components/TechnicalCapabilities';
import { EngineeringApproach } from './components/EngineeringApproach';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailPage } from './components/ProjectDetailPage';

export default function Portfolio() {
  const { route, navigateToProject, navigateToHome } = useRouter();

  useEffect(() => {
    if (route.type === 'home') {
      document.title = 'Hashir Farooq — AI & Full-Stack Software Developer';
    }
  }, [route]);

  // If a project detail route is active e.g. /projects/asanshipping
  if (route.type === 'project') {
    const currentProject = ALL_PROJECTS.find(p => p.slug === route.slug);

    if (currentProject) {
      return (
        <div className="min-h-screen bg-black text-[#F5F5F5] antialiased selection:bg-white selection:text-black">
          <Navbar isProjectPage={true} onNavigateHome={navigateToHome} />
          <main>
            <ProjectDetailPage
              project={currentProject}
              onBack={() => navigateToHome('projects')}
              onNavigateToProject={navigateToProject}
            />
          </main>
          <Footer />
        </div>
      );
    }
  }

  // Otherwise render the complete CV-first homepage
  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] antialiased selection:bg-white selection:text-black">
      {/* 1. Liquid Glass Navigation Bar */}
      <Navbar isProjectPage={false} onNavigateHome={navigateToHome} />

      {/* Main CV Narrative Progression */}
      <main>
        {/* HERO */}
        <Hero onNavigateSection={navigateToHome} />

        {/* 01 / INTRODUCTION */}
        <IntroSection />

        {/* 02 / EDUCATION */}
        <EducationSection />

        {/* 03 / CERTIFICATIONS (With Certificate Images & Verification Links) */}
        <CertificationsSection />

        {/* 04 / EXPERIENCE */}
        <ExperienceSection />

        {/* 05 / PROJECTS (Categorized Showcases with Case Study Links) */}
        <ProjectsOverviewSection onNavigateToProject={navigateToProject} />

        {/* MEGATRIX SOFTWARE ECOSYSTEM */}
        <MegaTrixSection onNavigateToProject={navigateToProject} />

        {/* 06 / TECHNICAL CAPABILITIES */}
        <TechnicalCapabilities />

        {/* HOW I BUILD / ENGINEERING APPROACH */}
        <EngineeringApproach />

        {/* OUTSIDE OF CODE / INTERESTS */}
        <InterestsSection />

        {/* GET IN TOUCH / CONTACT */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
