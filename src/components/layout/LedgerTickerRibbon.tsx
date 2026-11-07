"use client";

import React from "react";
import { portfolioData } from "@/content/portfolioData";

export const LedgerTickerRibbon: React.FC = () => {
  return (
    <div className="w-full bg-surface-container border-b border-outline-variant py-2.5 px-6 md:px-12 overflow-x-auto whitespace-nowrap scrollbar-none">
      <div className="max-w-[1440px] mx-auto flex items-center gap-6 text-[12px] font-mono">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-terracotta text-white uppercase text-[10px] tracking-widest font-semibold flex-shrink-0">
          AUDIT TALLY
        </span>
        <span className="text-primary font-semibold flex-shrink-0">
          CGPA: {portfolioData.academics.cgpa} / {portfolioData.academics.cgpaScale}
        </span>
        <span className="text-outline-variant select-none">/</span>
        <span className="text-secondary font-medium flex-shrink-0">
          {portfolioData.academics.degree} — Bangalore City University
        </span>
        <span className="text-outline-variant select-none">/</span>
        <span className="text-primary font-semibold flex-shrink-0">
          Active: Voya Financial (Corporate Reconciliation)
        </span>
        <span className="text-outline-variant select-none">/</span>
        <span className="text-primary flex-shrink-0">
          Operations & Reconciliations: 30+ Mos Ground Tenure
        </span>
        <span className="text-outline-variant select-none">/</span>
        <span className="text-terracotta font-medium flex-shrink-0">
          Student Council Vice President (SFGC)
        </span>
        <span className="text-outline-variant select-none">/</span>
        <span className="text-on-surface-variant flex-shrink-0">
          RPL Safety Trainer (Govt. of Karnataka Skill Mission)
        </span>
        <span className="text-outline-variant select-none">/</span>
        <span className="text-outline flex-shrink-0">
          ARCHIVAL SERIAL: #{portfolioData.candidate.registryId}
        </span>
      </div>
    </div>
  );
};
