"use client";

import React, { useState } from "react";
import { Copy, ExternalLink, Download, Check, Mail, Phone } from "lucide-react";
import { portfolioData } from "@/content/portfolioData";
import { PlaceholderType } from "@/components/ui/PlaceholderModal";

interface TransmissionDispatchSectionProps {
  onOpenModal: (type: PlaceholderType) => void;
}

export const TransmissionDispatchSection: React.FC<TransmissionDispatchSectionProps> = () => {
  const { dispatch, credentials } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(credentials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="w-full bg-surface-container py-16 border-b border-outline-variant" id="dispatch">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Docket Frame */}
        <div className="border-4 border-primary bg-surface p-6 sm:p-8 md:p-12 relative shadow-md">
          {/* Top Docket Header Ribbon */}
          <div className="flex flex-wrap justify-between items-center pb-6 mb-8 border-b-2 border-primary gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-terracotta font-bold">
                {dispatch.header}
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-1">
                {dispatch.title}
              </h2>
            </div>
            <div className="font-mono text-xs border border-primary px-3 py-2 bg-surface-container text-right self-start sm:self-auto">
              <div className="text-[10px] text-outline">{dispatch.statusLabel}</div>
              <div className="text-secondary font-bold">{dispatch.statusValue}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Dispatch Text Rationale */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-base text-on-surface-variant leading-relaxed font-sans">
                {dispatch.description}
              </p>

              <div className="p-4 bg-surface-container border-l-2 border-secondary font-mono text-xs space-y-1.5">
                <div className="text-primary font-semibold">TARGET DOMAINS:</div>
                {dispatch.targetDomains.map((dom) => (
                  <div key={dom} className="text-on-surface-variant">
                    • {dom}
                  </div>
                ))}
              </div>

              <div className="font-mono text-[11px] text-outline">
                {dispatch.applicantRecord}
              </div>
            </div>

            {/* Dispatch Docket Actions */}
            <div className="lg:col-span-6 space-y-3 font-mono text-xs">
              {/* Email Item */}
              <div className="border-2 border-primary p-4 bg-surface-container-low flex flex-col sm:flex-row justify-between sm:items-center gap-3 hover:bg-surface-container transition-colors">
                <div>
                  <span className="text-[10px] text-outline block uppercase tracking-wider">
                    ELECTRONIC TRANSMISSION (DIRECT EMAIL):
                  </span>
                  <a
                    href={`mailto:${credentials.email}`}
                    className="font-bold text-primary text-sm hover:text-secondary transition-colors underline decoration-outline-variant underline-offset-4"
                  >
                    {credentials.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="bg-primary text-surface px-3 py-1.5 hover:bg-secondary transition-colors inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-secondary-container" />
                        <span className="text-[10px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${credentials.email}`}
                    className="border border-primary text-primary px-3 py-1.5 hover:bg-primary hover:text-surface transition-colors inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider"
                    title="Open Email Client"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </a>
                </div>
              </div>

              {/* Telephone Item */}
              <div className="border-2 border-primary p-4 bg-surface-container-low flex flex-col sm:flex-row justify-between sm:items-center gap-3 hover:bg-surface-container transition-colors">
                <div>
                  <span className="text-[10px] text-outline block uppercase tracking-wider">
                    TELECOMMUNICATIONS (DIRECT LINE):
                  </span>
                  <a
                    href={`tel:${credentials.phone}`}
                    className="font-bold text-primary text-sm hover:text-secondary transition-colors"
                  >
                    {credentials.formattedPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(credentials.phone);
                    }}
                    className="bg-primary text-surface px-3 py-1.5 hover:bg-secondary transition-colors inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider cursor-pointer"
                    title="Copy Phone Number"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                  <a
                    href={`tel:${credentials.phone}`}
                    className="border border-primary text-primary px-3 py-1.5 hover:bg-primary hover:text-surface transition-colors inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider"
                    title="Initiate Call"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              </div>

              {/* LinkedIn Item */}
              <a
                href={credentials.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary p-4 bg-surface-container-low flex justify-between items-center hover:bg-surface-container transition-colors group block"
              >
                <div>
                  <span className="text-[10px] text-outline block uppercase tracking-wider">
                    PROFESSIONAL REGISTRY (LINKEDIN):
                  </span>
                  <span className="font-bold text-primary text-sm group-hover:text-secondary transition-colors">
                    linkedin.com/in/gurupavan-b-r-88741b351
                  </span>
                </div>
                <div className="bg-primary text-surface p-2 group-hover:bg-secondary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* Verified CV Docket Item */}
              <div className="border-2 border-terracotta p-4 bg-surface-container-low flex flex-col sm:flex-row justify-between sm:items-center gap-3 hover:bg-surface-container transition-colors">
                <div>
                  <span className="text-[10px] text-terracotta block uppercase tracking-wider font-bold">
                    VERIFIED CURRICULUM VITAE:
                  </span>
                  <span className="font-bold text-primary text-sm">
                    {credentials.resumeFilename} [OFFICIAL VERIFIED]
                  </span>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <a
                    href={credentials.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-surface px-3 py-1.5 hover:bg-secondary transition-colors inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium"
                    title="Open on Google Drive"
                  >
                    <span>View (Drive)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={credentials.resumePdfLocal}
                    download={credentials.resumeFilename}
                    className="bg-terracotta text-white px-3 py-1.5 hover:bg-primary transition-colors inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium"
                    title="Download Direct PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Docket Footer Note */}
          <div className="mt-8 pt-4 border-t border-outline-variant flex flex-wrap justify-between items-center text-[10px] font-mono text-outline gap-2">
            <span>ORIGIN: BENGALURU, KARNATAKA, INDIA</span>
            <span>ENCRYPTION: ARCHIVAL FOLIO VERIFIED</span>
            <span>EXPEDITE CODE: #GPBR-084</span>
          </div>
        </div>
      </div>
    </section>
  );
};
