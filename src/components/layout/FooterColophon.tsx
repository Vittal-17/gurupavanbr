"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/content/portfolioData";

export const FooterColophon: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t-2 border-primary px-6 md:px-12 py-12 bg-surface text-primary">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="font-serif-display text-xl font-bold tracking-tight mb-1.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary inline-block" />
            <span>GPBR — MODERN BROADSHEET LEDGER</span>
          </div>
          <p className="font-mono text-[11px] text-on-surface-variant">
            © MMXXIV {portfolioData.candidate.name}. CANDIDATE FOLIO RECORD NO. 084-A.
          </p>
          <p className="text-xs text-outline font-sans mt-1">
            Set in Playfair Display, Cormorant Garamond, Inter & JetBrains Mono. Bengaluru, India.
          </p>
        </div>

        {/* Back to top and quick links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 font-mono text-xs">
          <div className="flex flex-wrap gap-4 uppercase text-on-surface-variant">
            <a href="#hero" className="hover:text-primary transition-colors">
              Colophon
            </a>
            <a href="#disciplines" className="hover:text-primary transition-colors">
              Disciplines
            </a>
            <a href="#chronology" className="hover:text-primary transition-colors">
              Timeline
            </a>
            <a href="#dispatch" className="hover:text-primary transition-colors">
              Dispatch
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-surface-container border border-primary px-4 py-2 uppercase hover:bg-primary hover:text-surface transition-colors inline-flex items-center gap-2 font-mono text-[11px] tracking-wider font-semibold"
          >
            <span>Ascend to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
