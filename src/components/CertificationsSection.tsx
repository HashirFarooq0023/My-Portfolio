import React, { useState } from 'react';
import { ExternalLink, Eye, X } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';
import { LiquidGlassButton } from './ui/LiquidGlassButton';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto border-t border-white/10">
      <span className="section-number">03 / CERTIFICATIONS</span>

      <div className="mt-8 space-y-6">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div
            key={cert.id}
            className="real-glass-panel p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            {/* Cert Details */}
            <div className={cert.image ? "md:col-span-8" : "md:col-span-12"}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {cert.title}
                </h3>
              </div>

              <div className="text-xs sm:text-sm font-mono text-[#888888] mb-3">
                <span className="text-[#CCCCCC]">{cert.issuer}</span>
                <span className="mx-2">·</span>
                <span>{cert.date}</span>
              </div>

              <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed mb-5 max-w-2xl">
                {cert.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {cert.verifyUrl && (
                  <LiquidGlassButton
                    variant="secondary"
                    as="a"
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs font-mono"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </LiquidGlassButton>
                )}

                {cert.image && (
                  <LiquidGlassButton
                    variant="ghost"
                    onClick={() => setSelectedCert(cert)}
                    className="px-3.5 py-2 text-xs font-mono"
                  >
                    <Eye className="w-3.5 h-3.5 opacity-70" />
                    <span>View Certificate</span>
                  </LiquidGlassButton>
                )}
              </div>
            </div>

            {/* Cert Image Thumbnail (if available) */}
            {cert.image && (
              <div className="md:col-span-4">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="group relative block w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/20 bg-[#080808] hover:border-white/40 transition-all text-left shadow-lg"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-xs font-mono text-white bg-black/75 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-xl">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certificate High-Res Modal Zoom */}
      {selectedCert && selectedCert.image && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="real-glass-panel-elevated relative max-w-4xl w-full p-5 sm:p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
              <div>
                <h4 className="text-lg font-bold text-white">
                  {selectedCert.title}
                </h4>
                <p className="text-xs font-mono text-[#888888]">
                  {selectedCert.issuer} — {selectedCert.date}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-lg overflow-hidden border border-white/15 bg-black">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[72vh] object-contain mx-auto"
              />
            </div>

            {selectedCert.verifyUrl && (
              <div className="pt-4 flex justify-end">
                <LiquidGlassButton
                  variant="primary"
                  as="a"
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 text-xs font-mono"
                >
                  <span>Verify with Coursera</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </LiquidGlassButton>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
