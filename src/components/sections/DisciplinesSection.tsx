"use client";

import React from "react";
import { portfolioData } from "@/content/portfolioData";

export const DisciplinesSection: React.FC = () => {
  return (
    <section className="w-full border-b border-outline-variant bg-surface-container-low" id="disciplines">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-4 mb-10 border-b border-primary gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[10px] tracking-widest text-secondary uppercase font-bold">
              <span className="inline-block w-2 h-2 bg-secondary" />
              <span>DOSSIER 02 // TAXONOMY OF CAPABILITIES</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              Four Disciplines. One Connected Perspective.
            </h2>
          </div>
          <p className="font-mono text-xs text-on-surface-variant max-w-sm uppercase">
            Disciplines verified through degree coursework and direct operational deployment.
          </p>
        </div>

        {/* 4-Column Balanced Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-outline-variant divide-y md:divide-y-0 md:divide-x divide-outline-variant bg-surface shadow-sm">
          {portfolioData.disciplines.map((item, index) => {
            const isTerracotta = index === 2;
            const accentColor = isTerracotta ? "text-terracotta" : "text-secondary";

            return (
              <div
                key={item.id}
                className="p-6 md:p-7 flex flex-col justify-between hover:bg-surface-container transition-colors group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`font-mono text-2xl font-bold ${accentColor}`}>
                      {item.id}
                    </span>
                    <span className={`px-2 py-0.5 bg-surface-container border border-outline-variant font-mono text-[10px] uppercase font-bold ${accentColor}`}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant font-mono text-xs space-y-2 text-on-surface">
                  {item.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <span className={accentColor}>›</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
