import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUpRight, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LiquidGlassButton } from './ui/LiquidGlassButton';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <span className="section-number">GET IN TOUCH</span>

      <div className="mb-12">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.02]">
          LET&apos;S BUILD<br />
          SOMETHING USEFUL.
        </h2>

        <p className="text-base sm:text-xl text-[#A0A0A0] max-w-3xl leading-relaxed">
          Open to software engineering roles, technical internships, AI integrations, and full-stack product collaborations.
        </p>
      </div>

      {/* Liquid Glass Contact Channels */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        <LiquidGlassButton
          variant="primary"
          as="a"
          href={`mailto:${PERSONAL_INFO.email}`}
          className="px-7 py-4 text-sm font-medium"
        >
          <Mail className="w-4 h-4" />
          <span>Send Email</span>
        </LiquidGlassButton>

        <LiquidGlassButton
          variant="secondary"
          as="a"
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-4 text-sm font-medium"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
        </LiquidGlassButton>

        <LiquidGlassButton
          variant="secondary"
          as="a"
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-4 text-sm font-medium"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
        </LiquidGlassButton>

        <LiquidGlassButton
          variant="ghost"
          onClick={handleCopyEmail}
          className="px-5 py-4 text-xs font-mono"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
        </LiquidGlassButton>
      </div>

      {/* Direct Contact Details */}
      <div className="border-t border-white/10 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-mono text-[#888888]">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#555555] block mb-1">
            Direct Email
          </span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-white hover:underline transition-all"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-[#555555] block mb-1">
            Phone / WhatsApp
          </span>
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="text-white hover:underline transition-all"
          >
            {PERSONAL_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
