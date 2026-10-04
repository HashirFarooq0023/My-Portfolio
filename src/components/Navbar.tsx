import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LiquidGlassButton } from './ui/LiquidGlassButton';

interface NavbarProps {
  isProjectPage: boolean;
  onNavigateHome: (sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isProjectPage,
  onNavigateHome
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = navRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
    el.style.setProperty('--surface-light-opacity', '1');
  };

  const handleMouseLeave = () => {
    const el = navRef.current;
    if (!el) return;
    el.style.setProperty('--surface-light-opacity', '0');
  };

  // Minimalist primary top-level links (No overcrowded buttons)
  const navLinks = [
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' }
  ];

  // Mobile menu links (full list)
  const mobileNavLinks = [
    { label: 'Introduction', id: 'intro' },
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleItemClick = (id?: string) => {
    setMobileMenuOpen(false);
    onNavigateHome(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
        <div
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`pointer-events-auto relative w-full max-w-5xl rounded-full px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500 overflow-hidden ${
            scrolled ? 'real-glass-navbar-scrolled' : 'real-glass-navbar'
          }`}
        >
          {/* Moving Specular Highlight Layer */}
          <span className="liquid-glass-surface-reflection pointer-events-none" aria-hidden="true" />

          {/* Brand */}
          <button
            type="button"
            onClick={() => handleItemClick()}
            className="group flex items-center gap-2 text-left focus-visible:outline-none"
            aria-label="Home"
          >
            <span className="font-semibold text-xs sm:text-sm tracking-wider text-white group-hover:text-white/80 transition-colors uppercase">
              {PERSONAL_INFO.name}
            </span>
          </button>

          {/* Minimal Desktop Navigation Links */}
          {!isProjectPage ? (
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleItemClick(link.id)}
                  className="text-xs font-mono uppercase tracking-wider text-[#A8A8A8] hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={() => handleItemClick('projects')}
                className="text-xs font-mono uppercase tracking-wider text-[#AAAAAA] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Projects</span>
              </button>
            </div>
          )}

          {/* Single Minimal Right Action: Contact */}
          <div className="hidden md:flex items-center">
            <LiquidGlassButton
              variant="primary"
              onClick={() => handleItemClick('contact')}
              className="px-5 py-1.5 text-xs font-medium"
            >
              <span>Contact</span>
            </LiquidGlassButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-white/90 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Floating Frosted Liquid Glass Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 flex flex-col justify-between p-6 pt-24"
        >
          <div className="real-glass-panel-elevated p-6 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {mobileNavLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className="text-left text-base font-medium text-white hover:text-[#AAAAAA] transition-colors py-2 border-b border-white/5 last:border-none flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#555555]">→</span>
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              <LiquidGlassButton
                variant="primary"
                onClick={() => handleItemClick('contact')}
                className="w-full py-3 text-sm font-medium"
              >
                <span>Contact Me</span>
              </LiquidGlassButton>

              <div className="flex items-center justify-between text-xs font-mono text-[#888888] pt-2 px-1">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
