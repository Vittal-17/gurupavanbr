"use client";

import React, { useState, useEffect } from "react";
import { HeaderMasthead } from "@/components/layout/HeaderMasthead";
import { LedgerTickerRibbon } from "@/components/layout/LedgerTickerRibbon";
import { FooterColophon } from "@/components/layout/FooterColophon";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutDossierSection } from "@/components/sections/AboutDossierSection";
import { DisciplinesSection } from "@/components/sections/DisciplinesSection";
import { ChronologicalLedgerSection } from "@/components/sections/ChronologicalLedgerSection";
import { AcademicMatrixSection } from "@/components/sections/AcademicMatrixSection";
import { TransmissionDispatchSection } from "@/components/sections/TransmissionDispatchSection";
import { PlaceholderModal, PlaceholderType } from "@/components/ui/PlaceholderModal";

export default function Home() {
  const [activeModal, setActiveModal] = useState<PlaceholderType>(null);

  // Smooth scroll handler for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <HeaderMasthead />
      <LedgerTickerRibbon />

      <main className="flex-grow">
        <HeroSection onOpenModal={setActiveModal} />
        <AboutDossierSection />
        <DisciplinesSection />
        <ChronologicalLedgerSection />
        <AcademicMatrixSection />
        <TransmissionDispatchSection onOpenModal={setActiveModal} />
      </main>

      <FooterColophon />

      <PlaceholderModal
        type={activeModal}
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
}
