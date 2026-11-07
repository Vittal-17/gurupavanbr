"use client";

import React, { useEffect } from "react";
import { AlertCircle, X, Download, ExternalLink, Mail, User, Phone } from "lucide-react";
import { portfolioData } from "@/content/portfolioData";

export type PlaceholderType = "resume" | "linkedin" | "email" | "photo" | "phone" | null;

interface ModalContent {
  title: string;
  code: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  description: string;
  actionText: string;
  link?: string;
  image?: string;
}

interface PlaceholderModalProps {
  type: PlaceholderType;
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  type,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  const contentMap: Record<NonNullable<PlaceholderType>, ModalContent> = {
    resume: {
      title: "CURRICULUM VITAE DOCKET",
      code: "GURUPAVAN_B_R_RESUME.PDF",
      icon: Download,
      headline: "Official Verified Curriculum Vitae",
      description:
        "The official verified resume for Gurupavan B R covers his current tenure as Reconciliation Associate at Voya Financial, labour safety training with JC Solutions, retail operations at Avenue Supermarts Ltd., and academic distinction at Bangalore City University.",
      actionText: "Open Resume Document",
      link: portfolioData.credentials.resumeUrl,
    },
    linkedin: {
      title: "PROFESSIONAL REGISTRY",
      code: "LINKEDIN_VERIFIED",
      icon: ExternalLink,
      headline: "LinkedIn Professional Profile",
      description:
        "Direct registry link to Gurupavan's professional network on LinkedIn.",
      actionText: "Visit LinkedIn Profile",
      link: portfolioData.credentials.linkedInUrl,
    },
    email: {
      title: "ELECTRONIC TRANSMISSION PROTOCOL",
      code: "CONTACT_EMAIL_DIRECT",
      icon: Mail,
      headline: "Direct Email Dispatch",
      description: `Official direct transmission channel: ${portfolioData.credentials.email}. You may copy the address or send an email directly via your mail client.`,
      actionText: "Send Email (Mailto)",
      link: `mailto:${portfolioData.credentials.email}`,
    },
    phone: {
      title: "TELECOMMUNICATIONS DISPATCH",
      code: "TELEPHONE_DIRECT",
      icon: Phone,
      headline: "Direct Telecommunications Line",
      description: `Official telephone contact channel: ${portfolioData.credentials.formattedPhone}. Available for early-career opportunities and recruiter inquiries.`,
      actionText: "Initiate Call (Tel)",
      link: `tel:${portfolioData.credentials.phone}`,
    },
    photo: {
      title: "EXECUTIVE PORTRAIT ARCHIVE",
      code: "VERIFIED_PORTRAIT",
      icon: User,
      headline: "Gurupavan B R — Candidate Portrait",
      description:
        "Official executive candidate portrait for Gurupavan B R. Bachelor of Commerce (Data Analytics) from Bangalore City University (CGPA 8.48/10) and Reconciliation Associate at Voya Financial.",
      actionText: "Dismiss View",
      image: portfolioData.credentials.photoUrl,
    },
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/60 backdrop-blur-sm p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg border-4 border-primary bg-surface shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Plate */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-primary">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-primary text-surface font-mono text-[10px] uppercase font-bold tracking-wider">
              VERIFIED
            </span>
            <span className="font-mono text-xs font-bold text-primary">
              {current.title}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 hover:bg-surface-container transition-colors text-primary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4">
          {current.image && (
            <div className="w-full flex justify-center mb-4">
              <div className="w-40 h-52 border-2 border-primary overflow-hidden relative shadow-md bg-surface-container">
                <img
                  src={current.image}
                  alt={portfolioData.candidate.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 border border-secondary/40 pointer-events-none" />
              </div>
            </div>
          )}

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-secondary text-surface flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-headline" className="font-serif-display text-xl font-bold text-primary">
                {current.headline}
              </h3>
              <div className="font-mono text-[11px] text-terracotta mt-0.5">
                DOCKET ID: [{current.code}]
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-sans pt-2 border-t border-outline-variant">
            {current.description}
          </p>

          <div className="p-3 bg-surface-container-low border border-outline-variant font-mono text-[11px] text-on-surface flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>Audited against verified credentials: Bangalore, India.</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-primary flex justify-end gap-3 font-mono text-xs">
          {current.link ? (
            <>
              <button
                onClick={onClose}
                className="border border-outline px-4 py-2 uppercase hover:bg-surface-container transition-colors"
              >
                Close
              </button>
              <a
                href={current.link}
                target={current.link.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                onClick={onClose}
                className="bg-primary text-surface hover:bg-secondary px-5 py-2 uppercase tracking-wider transition-colors font-medium inline-flex items-center gap-1.5"
              >
                <span>{current.actionText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </>
          ) : (
            <button
              onClick={onClose}
              className="bg-primary text-surface hover:bg-secondary px-5 py-2.5 uppercase tracking-wider transition-colors font-medium"
            >
              {current.actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
