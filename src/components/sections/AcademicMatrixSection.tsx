"use client";

import React from "react";
import { portfolioData, CurricularSubject, AppliedConcept } from "@/content/portfolioData";

export const AcademicMatrixSection: React.FC = () => {
  const { academics } = portfolioData;

  return (
    <section className="w-full border-b border-outline-variant bg-surface-container-low" id="scholastic">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-10 border-b border-primary gap-4">
          <div>
            <span className="bg-primary text-surface font-mono text-[10px] tracking-widest px-2 py-0.5 uppercase block w-fit mb-2 font-bold">
              DOSSIER 04 // SCHOLASTIC TRANSCRIPT & CIVIC SERVICE
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              Academic & Applied Matrix
            </h2>
          </div>
          <div className="font-mono text-xs text-outline">
            INSTITUTION: SESHADRIPURAM FIRST GRADE COLLEGE // BCU AFFILIATED
          </div>
        </div>

        {/* High-Density Tabular Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Scholastic Degree & Curriculum Matrix (7 Cols) */}
          <div className="lg:col-span-7 border-2 border-primary bg-surface p-6 md:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-start pb-4 border-b border-outline-variant mb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary font-bold">
                    PRIMARY DEGREE
                  </span>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-primary mt-0.5">
                    {academics.university}
                  </h3>
                  <p className="text-xs text-on-surface-variant font-mono">{academics.institution}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-3xl font-bold text-secondary block leading-none">
                    {academics.cgpa}
                  </span>
                  <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
                    CUMULATIVE CGPA / {academics.cgpaScale}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="font-serif-display text-lg sm:text-xl font-bold text-primary mb-2">
                  {academics.degree}
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                  {academics.description}
                </p>
              </div>

              {/* Curricular High-Density Table */}
              <div className="border border-outline-variant">
                <div className="bg-surface-container px-3 py-1.5 border-b border-outline-variant font-mono text-[10px] uppercase font-bold text-primary">
                  CORE CURRICULAR COMPONENT BREAKDOWN
                </div>
                <div className="divide-y divide-outline-variant font-mono text-xs">
                  {academics.curriculum.map((subj: CurricularSubject, sIdx: number) => (
                    <div
                      key={subj.name}
                      className={`p-2.5 flex justify-between items-center ${
                        sIdx % 2 === 0 ? "bg-surface" : "bg-surface-container-low"
                      }`}
                    >
                      <span className="text-on-surface">{subj.name}</span>
                      <span className="text-secondary font-semibold">{subj.tier}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prior Credential Bar */}
              <div className="mt-6 p-3.5 bg-surface-container-low border border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-primary text-surface font-mono text-[10px] uppercase font-bold tracking-wider">
                    PRIOR CREDENTIAL
                  </span>
                  <span className="font-bold text-primary">{academics.priorExam.name}:</span>
                  <span className="text-on-surface-variant">{academics.priorExam.stream}</span>
                </div>
                <span className="font-bold text-terracotta bg-surface px-2 py-0.5 border border-outline-variant self-start sm:self-auto flex-shrink-0">
                  {academics.priorExam.score}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Governance & Applied Projects (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Governance Docket Card */}
            <div className="border-2 border-primary bg-surface p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-start pb-3 border-b border-outline-variant mb-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta font-bold">
                      COLLEGIATE MANDATE
                    </span>
                    <h4 className="font-serif-display text-xl font-bold text-primary mt-0.5">
                      {academics.leadership.title}
                    </h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-primary bg-surface-container px-2 py-0.5 border border-outline-variant">
                    {academics.leadership.period}
                  </span>
                </div>

                <div className="font-mono text-sm font-bold text-primary mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-terracotta" />
                  <span>{academics.leadership.role}</span>
                </div>

                <p className="text-xs text-on-surface-variant leading-relaxed mb-4 font-sans">
                  {academics.leadership.description}
                </p>

                <div className="space-y-2 border-t border-outline-variant pt-3 font-mono text-[11px] text-on-surface">
                  {academics.leadership.points.map((pt: string, pIdx: number) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <span className="text-secondary font-bold">›</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Applied Concepts Summary Index */}
            <div className="border border-outline-variant bg-surface p-5 font-mono text-xs shadow-sm">
              <div className="flex justify-between items-center pb-2 mb-3 border-b border-outline-variant">
                <span className="font-bold text-primary uppercase text-[11px]">
                  Applied Analytical Concepts
                </span>
                <span className="text-terracotta text-[10px] font-bold">DOSSIER EXHIBITS</span>
              </div>

              <div className="space-y-3">
                {academics.appliedConcepts.map((concept: AppliedConcept) => (
                  <div
                    key={concept.id}
                    className="p-2.5 bg-surface-container border border-outline-variant hover:bg-surface-container-high transition-colors"
                  >
                    <div className="flex justify-between text-[11px] font-bold text-primary mb-1">
                      <span>{concept.id} {concept.title}</span>
                      <span className="text-secondary">{concept.tech}</span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant font-sans">
                      {concept.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
