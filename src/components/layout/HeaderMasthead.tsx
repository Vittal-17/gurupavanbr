"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, Menu, X } from "lucide-react";
import { portfolioData } from "@/content/portfolioData";

export const HeaderMasthead: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Frontispiece", href: "#hero" },
    { label: "Critique", href: "#analysis" },
    { label: "Disciplines", href: "#disciplines" },
    { label: "Ledger Timeline", href: "#chronology" },
    { label: "Academic Matrix", href: "#scholastic" },
    { label: "Dispatch", href: "#dispatch" },
  ];

  return (
    <header className="w-full border-b border-outline-variant bg-surface sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Micro Bar */}
        <div className="py-1.5 border-b border-outline-variant flex justify-between items-center text-[11px] font-mono tracking-wider text-on-surface-variant">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-primary">OFFICIAL REGISTRY SPECIFICATION</span>
            <span className="hidden md:inline border-l border-outline-variant pl-4">
              BENGALURU, KARNATAKA
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">FOLIO #084-A</span>
            <span className="text-outline-variant hidden sm:inline">|</span>
            <span className="text-terracotta font-medium">STATUS: {portfolioData.candidate.status.split("&")[0].trim()}</span>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="#hero"
              className="text-xl md:text-2xl font-serif-display font-bold tracking-tight text-primary flex items-center gap-2.5 hover:text-secondary transition-colors"
            >
              <span className="inline-block w-3 h-3 bg-primary" />
              <span>{portfolioData.candidate.name}</span>
              <span className="font-mono text-xs font-normal text-secondary tracking-widest pl-2 border-l border-outline-variant hidden sm:inline">
                ARCHIVAL LEDGER
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-secondary pb-0.5 hover:border-b-2 hover:border-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#dispatch"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-surface px-4 py-2 font-mono text-[11px] uppercase tracking-wider hover:bg-secondary transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Transmit Docket</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 text-primary hover:bg-surface-container transition-colors border border-outline-variant"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-outline-variant py-4 px-2 bg-surface-container-low flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-on-surface animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 hover:bg-surface-container hover:text-secondary transition-colors border-l-2 border-transparent hover:border-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-outline-variant px-3">
              <a
                href="#dispatch"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-primary text-surface py-2.5 font-mono text-xs uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Docket</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
