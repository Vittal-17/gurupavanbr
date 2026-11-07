"use client";

import React from "react";
import { CheckCircle2, Building, ShieldCheck, ShoppingCart } from "lucide-react";
import { portfolioData } from "@/content/portfolioData";

export const AboutDossierSection: React.FC = () => {
  return (
    <section className="w-full border-b border-outline-variant bg-surface" id="analysis">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-4 mb-10 border-b border-outline-variant">
          <span className="bg-primary text-surface font-mono text-[10px] tracking-widest px-2 py-0.5 uppercase font-bold">
            DOSSIER 01 // CRITIQUE & RATIONALE
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-primary">
            Beyond the Numbers
          </h2>
          <span className="text-outline font-mono text-xs ml-auto hidden sm:inline">
            PERSPECTIVE STATEMENT
          </span>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left 5-Column Editorial Pull Quote Card */}
          <div className="lg:col-span-5 border-2 border-primary bg-surface-container p-8 flex flex-col justify-between relative shadow-sm">
            <div className="absolute -top-3 left-6 bg-terracotta text-white font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 font-bold">
              EDITORIAL THESIS
            </div>

            <div className="mt-4">
              <span className="font-serif-display text-6xl text-secondary leading-none select-none block">
                “
              </span>
              <blockquote className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-primary font-semibold leading-tight italic -mt-4 mb-6">
                {portfolioData.candidate.aboutThesis}
              </blockquote>
            </div>

            <div className="pt-6 border-t border-outline-variant flex items-center justify-between font-mono text-xs">
              <div>
                <div className="font-bold text-primary">{portfolioData.candidate.name}</div>
                <div className="text-secondary text-[11px]">B.Com DA • Operational Reconciler</div>
              </div>
              <CheckCircle2 className="w-6 h-6 text-secondary" />
            </div>
          </div>

          {/* Right 7-Column Analytical Synthesis Text */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-on-surface-variant text-base leading-relaxed font-sans">
            <p className="text-sm sm:text-base leading-relaxed">
              {portfolioData.candidate.aboutBio1}
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              {portfolioData.candidate.aboutBio2}
            </p>

            {/* Tri-Pillar Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-outline-variant font-mono text-xs">
              <div className="p-3 bg-surface-container-low border border-outline-variant">
                <div className="flex items-center gap-1.5 text-secondary font-bold mb-1">
                  <Building className="w-3.5 h-3.5" />
                  <span>VOYA FINANCIAL</span>
                </div>
                <div className="text-[11px] text-on-surface">BlackLine & GL Reconciliations</div>
              </div>

              <div className="p-3 bg-surface-container-low border border-outline-variant">
                <div className="flex items-center gap-1.5 text-terracotta font-bold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>JC SOLUTIONS</span>
                </div>
                <div className="text-[11px] text-on-surface">State RPL Safety Modules</div>
              </div>

              <div className="p-3 bg-surface-container-low border border-outline-variant">
                <div className="flex items-center gap-1.5 text-primary font-bold mb-1">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>AVENUE SUPERMARTS</span>
                </div>
                <div className="text-[11px] text-on-surface">30+ Mos Retail POS Balancing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
