"use client";

import React from "react";
import { portfolioData, LedgerEntry } from "@/content/portfolioData";

export const ChronologicalLedgerSection: React.FC = () => {
  return (
    <section className="w-full border-b border-outline-variant bg-surface" id="chronology">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-10 border-b border-outline-variant gap-4">
          <div>
            <span className="bg-primary text-surface font-mono text-[10px] tracking-widest px-2 py-0.5 uppercase block w-fit mb-2 font-bold">
              DOSSIER 03 // AUDITED WORK REPOSITORIES
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              Chronological Ledger
            </h2>
          </div>
          <div className="font-mono text-xs text-secondary border border-secondary px-3 py-1 bg-surface-container font-medium">
            AUDITED PERIOD: MARCH 2023 – PRESENT
          </div>
        </div>

        {/* Entries Stack */}
        <div className="space-y-10">
          {portfolioData.timeline.map((entry: LedgerEntry, index: number) => {
            const isEntry1 = index === 0;
            const badgeBg = isEntry1
              ? "bg-secondary text-white"
              : index === 1
              ? "bg-terracotta text-white"
              : "bg-primary text-surface";

            return (
              <div
                key={entry.id}
                className="border-2 border-primary bg-surface-container-low p-6 md:p-8 relative shadow-sm"
              >
                {/* Ledger Stamp Badge & Top Plate */}
                <div className="flex flex-wrap justify-between items-start gap-4 pb-5 border-b border-outline-variant">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 ${
                        index === 1 ? "bg-secondary" : "bg-primary"
                      } text-surface flex items-center justify-center font-mono font-bold text-base flex-shrink-0`}
                    >
                      {entry.id}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span
                          className={`${badgeBg} font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5`}
                        >
                          {entry.badge}
                        </span>
                        <span className="font-mono text-xs text-outline">{entry.docRef}</span>
                      </div>
                      <h3 className="font-serif-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                        {entry.role}
                      </h3>
                      <p className="font-mono text-xs text-secondary font-medium">
                        {entry.company}{" "}
                        <span className="text-outline font-normal">| {entry.subdivision}</span>
                      </p>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-right bg-surface border border-outline-variant px-3 py-1.5 self-start">
                    <div className="font-bold text-primary">{entry.period}</div>
                    <div className="text-[11px] text-terracotta font-medium">
                      {entry.location}
                    </div>
                  </div>
                </div>

                {/* Split-Panel Details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
                  {/* Left: Scope of Responsibility */}
                  <div className="md:col-span-4 border-r-0 md:border-r border-outline-variant pr-0 md:pr-4">
                    <div className="font-mono text-xs font-bold text-primary uppercase mb-2">
                      {entry.scopeTitle}
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-4 font-sans">
                      {entry.scopeDescription}
                    </p>

                    <div className="bg-surface p-3 border border-outline-variant font-mono text-[11px] space-y-1.5 text-on-surface">
                      {entry.metadata.map((meta) => (
                        <div key={meta.label}>
                          <span className="text-outline">{meta.label}</span> {meta.value}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Audited Contributions */}
                  <div className="md:col-span-8 pl-0 md:pl-2">
                    <div className="font-mono text-xs font-bold text-secondary uppercase mb-3">
                      Audited Contributions
                    </div>
                    <ul className="space-y-3 text-xs md:text-sm text-on-surface font-sans">
                      {entry.contributions.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span
                            className={`w-2 h-2 ${
                              index === 2 ? "bg-primary" : "bg-secondary"
                            } mt-1.5 flex-shrink-0`}
                          />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
