"use client";

import React from "react";
import { ArrowRight, FileText } from "lucide-react";
import { portfolioData } from "@/content/portfolioData";
import { PlaceholderType } from "@/components/ui/PlaceholderModal";

interface HeroSectionProps {
  onOpenModal: (type: PlaceholderType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="w-full border-b border-outline-variant bg-surface" id="hero">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Broadsheet Masthead Header Rule */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-10 border-b border-primary gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-primary text-surface font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 font-bold">
              VOL. I — FOLIO 01
            </span>
            <span className="font-mono text-[11px] text-secondary tracking-widest uppercase font-medium">
              COMMERCIAL PRUDENCE × QUANTITATIVE LOGIC
            </span>
          </div>
          <div className="font-mono text-[11px] text-outline tracking-wider">
            CLASSIFICATION: CLASS-I CANDIDATE FOLIO // DEPLOYMENT READY
          </div>
        </div>

        {/* Asymmetric Dual-Column Layout: Left 65%, Right 35% */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-12 items-start">
          {/* Left Hero Column: 60-65% */}
          <div className="lg:col-span-6 flex flex-col justify-between pr-0 lg:pr-4">
            <div>
              {/* Dateline Monospace Metadata */}
              <div className="font-mono text-[12px] text-terracotta uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="inline-block w-2.5 h-0.5 bg-terracotta" />
                <span>BENGALURU EXECUTIVE DISPATCH • RECONCILIATIONS & ANALYTICS</span>
              </div>

              {/* Monumental High-Contrast Editorial Serif Headline */}
              <h1 className="font-serif-display text-4xl sm:text-6xl xl:text-7xl font-semibold leading-[1.08] tracking-tight text-primary mb-6">
                {portfolioData.candidate.headline}
                <br />
                <span className="italic font-normal text-secondary font-serif-display">
                  {portfolioData.candidate.headlineItalic}
                </span>
              </h1>

              <div className="w-20 h-1 bg-secondary mb-8" />

              {/* Monospace Executive Rationale Subhead */}
              <div className="p-4 bg-surface-container border-l-2 border-primary mb-8 font-mono text-[12px] leading-relaxed text-on-surface">
                <span className="text-terracotta font-bold uppercase tracking-wider">
                  [RATIONALE SUMMARY]:
                </span>{" "}
                {portfolioData.candidate.rationaleSummary}
              </div>

              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-10 font-sans">
                {portfolioData.candidate.heroBio}
              </p>
            </div>

            {/* Action Cluster */}
            <div className="pt-6 border-t border-outline-variant flex flex-wrap items-center gap-4">
              <a
                href="#chronology"
                className="bg-primary text-surface hover:bg-secondary px-6 py-3 font-mono text-[11px] uppercase tracking-wider transition-colors inline-flex items-center gap-2 font-medium"
              >
                <span>Inspect Chronological Ledger</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.credentials.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container text-primary border border-primary px-6 py-3 font-mono text-[11px] uppercase tracking-wider hover:bg-surface transition-colors inline-flex items-center gap-2 font-medium"
              >
                <FileText className="w-4 h-4 text-secondary" />
                <span>Requisition Full Dossier (PDF)</span>
              </a>

              <span className="font-mono text-[11px] text-outline ml-auto hidden sm:inline">
                REF #{portfolioData.candidate.registryId}
              </span>
            </div>
          </div>

          {/* Right Hero Column: 35-40% - Physical-Look Financial Ledger Card */}
          <div className="lg:col-span-4 border-2 border-primary bg-surface-container-low shadow-sm">
            {/* Card Header Plate */}
            <div className="bg-primary text-surface p-4 flex justify-between items-center border-b border-primary">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-secondary-container uppercase">
                  OFFICIAL REGISTRY SPECIFICATION
                </div>
                <div className="font-serif-display text-base sm:text-lg font-bold tracking-wide">
                  {portfolioData.metricsCard.header}
                </div>
              </div>
              <span className="px-2 py-0.5 bg-terracotta text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                {portfolioData.metricsCard.tag}
              </span>
            </div>

            {/* Micro Archival Portrait Plate */}
            <div className="p-5 border-b border-outline-variant bg-surface flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onOpenModal("photo")}
                  aria-label="View verified candidate portrait in high resolution"
                  className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-primary overflow-hidden relative group flex-shrink-0 bg-surface-container shadow-inner cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary text-left"
                >
                  <img
                    src={portfolioData.credentials.photoUrl}
                    alt={portfolioData.candidate.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 border border-secondary/30 pointer-events-none" />
                </button>
                <div>
                  <div className="font-mono text-xs font-bold text-primary">
                    {portfolioData.candidate.name}
                  </div>
                  <div className="font-mono text-[11px] text-secondary">
                    REGISTRY: {portfolioData.candidate.registryId}
                  </div>
                  <div className="font-mono text-[10px] text-terracotta font-medium mt-0.5">
                    VERIFIED CANDIDATE RECORD
                  </div>
                </div>
              </div>
              <div className="text-right font-mono text-[10px] text-outline">
                <div>{portfolioData.candidate.coordinates.lat}</div>
                <div>{portfolioData.candidate.coordinates.lon}</div>
                <div className="text-terracotta font-medium">
                  {portfolioData.candidate.coordinates.city}
                </div>
              </div>
            </div>

            {/* Tabular Debit/Credit Style Metrics Table */}
            <div className="p-5 space-y-0 text-xs font-mono">
              <div className="text-[10px] text-outline uppercase tracking-wider pb-2 border-b border-outline-variant flex justify-between">
                <span>PARAMETER / METRIC</span>
                <span>CERTIFIED VALUE</span>
              </div>

              {/* Rows */}
              <div className="py-2.5 border-b border-outline-variant flex justify-between items-center">
                <span className="text-on-surface-variant">Scholastic Standing:</span>
                <span className="font-bold text-primary px-2 py-0.5 bg-surface-container border border-outline-variant">
                  CGPA {portfolioData.academics.cgpa} / {portfolioData.academics.cgpaScale}
                </span>
              </div>

              <div className="py-2.5 border-b border-outline-variant flex justify-between items-center">
                <span className="text-on-surface-variant">Active Enterprise Tenure:</span>
                <span className="font-bold text-secondary">Voya Financial</span>
              </div>

              <div className="py-2.5 border-b border-outline-variant flex justify-between items-center">
                <span className="text-on-surface-variant">Retail Field Service:</span>
                <span className="font-bold text-primary">30+ Consecutive Mos</span>
              </div>

              <div className="py-2.5 border-b border-outline-variant flex justify-between items-center">
                <span className="text-on-surface-variant">Operational Accuracy Rate:</span>
                <span className="font-bold text-primary">99.8% POS Compliance</span>
              </div>

              <div className="py-2.5 border-b border-outline-variant flex justify-between items-center">
                <span className="text-on-surface-variant">Civic Governance Role:</span>
                <span className="text-primary font-medium">Vice President (SFGC)</span>
              </div>

              <div className="py-2.5 border-b border-outline-variant flex justify-between items-center">
                <span className="text-on-surface-variant">Vocational Training Deliveries:</span>
                <span className="text-secondary font-medium">RPL Labour Safety (State)</span>
              </div>

              <div className="py-2.5 border-b border-outline-variant flex justify-between items-center">
                <span className="text-on-surface-variant">Core Technical Apparatus:</span>
                <span className="font-mono text-primary font-bold">SQL • Excel • Python • Accounts</span>
              </div>

              <div className="pt-3 pb-1 flex justify-between items-center">
                <span className="text-on-surface-variant">Status:</span>
                <span className="inline-flex items-center gap-1.5 text-terracotta font-bold">
                  <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                  <span>ACTIVE AVAILABILITY</span>
                </span>
              </div>
            </div>

            {/* Bottom Micro Stamp Bar */}
            <div className="bg-surface-container p-3 border-t border-primary flex justify-between items-center font-mono text-[10px] text-outline">
              <span>VERIFIED ON FILE: BCU & INSTITUTIONS</span>
              <span className="text-primary font-bold">SEC. RECON #01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
