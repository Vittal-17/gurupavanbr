# GPBR Portfolio — Design System Specification

> **Platform**: Google Stitch MCP Design Integration  
> **Project Name**: GPBR — The Modern Ledger  
> **Stitch Project ID**: `13180684718264495196` (`projects/13180684718264495196`)  
> **Design Author**: Google Stitch (via Antigravity MCP integration)  
> **Phase**: Phase 3 — Design Review & Direction Selection  

---

## 1. Executive Summary & Design Philosophy

The GPBR Portfolio is architected to establish an authentic, high-credibility professional identity for **Gurupavan B R**, unifying commerce education, taxation foundations, and computational data analytics with over 30 months of frontline retail cashier experience at Avenue Super Market Ltd. and state-level labour safety training with JC Solutions.

### Anti-Generic Design Mandates
1. **Zero Purple/Violet/Lilac**: Absolute prohibition of purple, magenta, or violet-spectrum accents and gradients across all tokens and elements.
2. **No Pure Black / Blinding White**: Rejecting generic pitch-black `#000000` dark modes and clinical `#FFFFFF` whiteboards in favor of tactile paper substrates, architectural sandstone, and deep petrol/charcoal structural inks.
3. **Anti-SaaS Template**: Rejecting floating glassmorphism blobs, radial neon glows, arbitrary percentage bars, and generic 3-card hero sections.
4. **Strict Factual Grounding**: Every metric, date range, institution, and role is derived verbatim from verified resume records. Zero inflation, zero invented metrics, and zero speculative titles.

---

## 2. Real Stitch Design Systems & Screen Inventory

### Direction A: Modern Ledger (Broadsheet Editorial)
* **Stitch Design System ID**: `assets/ed3782099d46446fa5aa1f3b9ebe8c9f`
* **Inspiration**: Heritage financial broadsheets (*Financial Times*, *The Economist*, *Bloomberg Businessweek*) & Swiss editorial typography.
* **Mood**: Authoritative, measured, intellectual, discreetly luxurious.
* **Generated Screens (5 total)**:
  1. **Primary Desktop (12-Column Asymmetric)**:  
     * Screen ID: `02fad6f3638a40a499b3a9255943dad5`  
     * Dimensions: `2560 × 10488 px` (Desktop viewport)  
     * Screenshot: `projects/13180684718264495196/files/380a7c177d56485fbff0e12b256b0b0a`  
     * Code: `projects/13180684718264495196/files/23509e26a68a422387a10062453f4421`
  2. **Variant 1 — Broadsheet Dual-Column**:  
     * Screen ID: `64938d7ae09941c9a90a29687dd95cb5`  
     * Dimensions: `2560 × 10462 px` (Desktop viewport)  
     * Screenshot: `projects/13180684718264495196/files/630fd779a5a0435ba154e7cbc9bf82ab`  
     * Code: `projects/13180684718264495196/files/635e502cf1544d0d95b79f7f09781b12`
  3. **Variant 2 — Archival Review Folio**:  
     * Screen ID: `a7c141556dab4f92a7140d63b25c8a49`  
     * Dimensions: `2560 × 11768 px` (Desktop viewport)  
     * Screenshot: `projects/13180684718264495196/files/0dfe26792dac47958cf53b6fa4e1db2c`  
     * Code: `projects/13180684718264495196/files/f71d1d5aea7d4675b619d736eb5ce640`
  4. **Mobile Responsive (390px Viewport)**:  
     * Screen ID: `381d011051874affad15731bbd46f666`  
     * Dimensions: `780 × 6668 px` (Mobile viewport)  
     * Screenshot: `projects/13180684718264495196/files/73a34864fcf64a61b32fd46e4dd1629a`  
     * Code: `projects/13180684718264495196/files/c4cc9607cf374706a8978aea5147117a`
  5. **Tablet Responsive (768px Viewport)**:  
     * Screen ID: `00e5d7b99a2d45bf9636bf5997d3251d`  
     * Dimensions: `2560 × 5968 px` (Tablet responsive layout)  
     * Screenshot: `projects/13180684718264495196/files/ed9ae694a7104cd0b8f2666743ada4e2`  
     * Code: `projects/13180684718264495196/files/67dc975305fc4efb85a4b608170b56be`

#### Color Palette (Direction A)
| Token | Hex Value | Role & Usage |
|---|---|---|
| `surface` / `background` | `#FBF9F3` | Warm unbleached archival parchment substrate |
| `surface-container-low` | `#F5F3ED` | Secondary recessed paper container |
| `surface-container` | `#F0EEE8` | Column headers, sidebars, data trays |
| `surface-container-high`| `#EAE8E2` | Inset balance tables & docket tabs |
| `primary` / `ink` | `#0E2A38` | Deep petrol blue for headlines, ledger rules, master borders |
| `secondary` | `#1A6370` | Editorial teal for interactive links, focus states, verified badges |
| `tertiary` | `#C66A4E` | Muted terracotta for pending alert tags, telemetry nodes |
| `accent-copper` | `#D19A66` | Subtle copper for analytical flourishes and benchmark callouts |
| `outline` / `rule` | `#D9D4C7` | Hairline ledger grid lines (`1px solid`) |

#### Typography (Direction A)
* **Headline / Display**: `Playfair Display` (Weight: 600, Optical sizes: 56px hero, 38px H1, 26px H2)
* **Body / Narrative**: `Inter` (Weight: 400/500, Optical sizes: 16px body-lg, 14px body-md, line-height: 1.6)
* **Ledger / Metadata**: `JetBrains Mono` (Weight: 500, tabular numerals, uppercase 11px with `0.08em` tracking)

---

### Direction B: Structured Modernism (Architectural Monograph)
* **Stitch Design System ID**: `assets/e8476441412c4d36964d36f73712a885`
* **Inspiration**: Swiss International Typographic Style, architectural engineering monographs, precision data consoles.
* **Mood**: Analytical, sharp, structured, engineering-meets-commerce.
* **Generated Screens (4 total)**:
  1. **Primary Desktop (Structural Grid)**:  
     * Screen ID: `39572c742c154fc7822e78e95072d29c`  
     * Dimensions: `2560 × 9070 px` (Desktop viewport)  
     * Screenshot: `projects/13180684718264495196/files/1fffe14b9cd4453e97bcb92bcc675ab4`  
     * Code: `projects/13180684718264495196/files/98150dac04f14d85887b91b6596c9f48`
  2. **Variant 1 — Blueprint Matrix**:  
     * Screen ID: `f7d8c17f70d847d7aa74d1289098ca31`  
     * Dimensions: `2560 × 8362 px` (Desktop viewport)  
     * Screenshot: `projects/13180684718264495196/files/c5ffe195827d445d8bb75551b3af346a`  
     * Code: `projects/13180684718264495196/files/b5081a3fa4c347299f636c95a50fb768`
  3. **Variant 2 — Continuous Data Ribbon**:  
     * Screen ID: `73cf1d1db886423e96d830ec26ccd224`  
     * Dimensions: `2560 × 9924 px` (Desktop viewport)  
     * Screenshot: `projects/13180684718264495196/files/6f438d833dc64b49ba418bb928ddb2db`  
     * Code: `projects/13180684718264495196/files/81edac7c694d464a8104286cf17eda72`
  4. **Mobile Responsive (390px Viewport)**:  
     * Screen ID: `083f9f82fc214676920086d3b5913667`  
     * Dimensions: `2560 × 9532 px` (390px mobile vertical flow)  
     * Screenshot: `projects/13180684718264495196/files/48841f88c063451a88687c3c582a9458`  
     * Code: `projects/13180684718264495196/files/bfede72e876946b497f592674773ef1d`

#### Color Palette (Direction B)
| Token | Hex Value | Role & Usage |
|---|---|---|
| `surface` / `canvas` | `#EAE6DF` / `#FDF9F2` | Warm architectural sandstone substrate |
| `surface-container` | `#DFD9CE` / `#F1EDE6` | Modular sub-panels and technical containers |
| `surface-container-high`| `#D6CFBF` / `#ECE8E1` | Recessed technical fields, code viewports |
| `primary` / `graphite` | `#1E2824` / `#091310` | Deep charcoal-green for structural girders, frames, dark headers |
| `secondary` | `#1A3A5E` / `#436086` | Restrained cobalt for primary action triggers and focus boundaries |
| `secondary-slate` | `#385A75` | Slate blue for secondary frames and data chips |
| `tertiary` / `amber` | `#D9822B` | Warm amber for node pins, pending flags, live telemetry |
| `outline` / `drafting` | `#C8C2B5` / `#737875` | Crisp `1px` architectural drafting wireframe |

#### Typography (Direction B)
* **Headline / Architectural Display**: `Space Grotesk` (Weight: 600, 56px display-xl, 40px headline-lg, tight tracking `-0.03em`)
* **Body / Systemic**: `Inter` (Weight: 400, 18px body-lg, 15px body-md, line-height: 1.55)
* **Drafting Monospace**: `JetBrains Mono` (Weight: 400/500, tabular figures, coordinate stamps, bracketed indices `[SEC_01 // ARCH]`)

---

### Direction C: Contemporary Heritage (Private Banking & Archival Folio)
* **Stitch Design System ID**: `assets/d4bf9ac07c3046e6a1ded1bebcec9736`
* **Inspiration**: Private wealth institutions, classical bookplate presses, collegiate honor societies.
* **Mood**: Premium, understated, tactile, confident, permanent.
* **Generated Screens (4 total)**:
  1. **Primary Desktop (Folio Broadside)**:  
     * Screen ID: `ce2b60cdec314a2a8f2de689514c40f2`  
     * Dimensions: `2560 × 11820 px` (Desktop viewport)  
     * Screenshot: `projects/13180684718264495196/files/28fd29cb3e114a75a3c4e25c4cc6d005`  
     * Code: `projects/13180684718264495196/files/c07786e253e74d539732141f215aab73`
  2. **Variant 1 — Classical Bookplate Ledger**:  
     * Screen ID: `f3b9abd5ac8942b984680233ee15d4aa`  
     * Dimensions: `2560 × 12208 px` (Desktop viewport)  
     * Screenshot: `projects/13180684718264495196/files/00142ff6e510401da239a0661c8fd8a2`  
     * Code: `projects/13180684718264495196/files/1f387ba265224a06938ae34f8d7ae5b2`
  3. **Variant 2 — Private Banking Dossier**:  
     * Screen ID: `a67ec90887b743d8a8706827e00ef5e6`  
     * Dimensions: `2560 × 13190 px` (Desktop viewport)  
     * Screenshot: `projects/13180684718264495196/files/142c217d48e449d1b4f48689135e8e51`  
     * Code: `projects/13180684718264495196/files/c645b11f3cd44c98bd05b7efed6c95a7`
  4. **Mobile Responsive (390px Viewport)**:  
     * Screen ID: `c7790a98968741b69c94cf97fb7f5fcc`  
     * Dimensions: `2560 × 9048 px` (390px mobile vertical flow)  
     * Screenshot: `projects/13180684718264495196/files/92af2e6246b349edb2c1dd626ab43c13`  
     * Code: `projects/13180684718264495196/files/f60d24c3a57b4909bdfb68bb10511bb3`

#### Color Palette (Direction C)
| Token | Hex Value | Role & Usage |
|---|---|---|
| `surface` / `vellum` | `#F5F3EB` / `#FFF8EF` | Warm soft ecru and tactile cream ground |
| `surface-container` | `#EBE6DA` / `#F5EDDF` | Elevated tactile cream containers |
| `surface-container-high`| `#DDD6C8` / `#EFE7D9` | Foundational panels of warm stone |
| `primary` / `olive` | `#263323` / `#111E0F` | Deep rich olive for headlines, structural dividing lines, master text |
| `secondary` | `#365338` / `#486549` | Muted forest green for badges, status chips, secondary pill enclosures |
| `tertiary` / `sienna` | `#A44A3F` / `#8F3B30` | Burnt sienna for archival seals, critical callouts, verified stamps |
| `outline` / `stone` | `#C8C0B0` / `#747871` | Warm stone rules and hairlines (`1px solid`) |

#### Typography (Direction C)
* **Headline / Literary Serif**: `EB Garamond` (Weight: 400/500, generous line-heights, italic flourishes for editorial sub-clauses)
* **Body / Journalistic**: `Newsreader` (Weight: 400, 18px body-lg, 16px body-md)
* **Labels / Metadata**: `Work Sans` (Weight: 500/600, uppercase with tracking `0.06em` to `0.08em`)

---

## 3. Seven Core Content Sections (Audited Resume Specification)

### Section 01: Top Bar & Hero
* **Headline**: *"A business mindset. An analytical lens."*
* **Subtitle**: *"Commerce & Data Analytics | Finance | Business Operations"*
* **Narrative**: *"Combining financial foundations, analytical thinking, and hands-on operational experience. Bachelor of Commerce (Data Analytics) from Bangalore City University."*
* **Metric Ticker**:
  * Academic Standing: `CGPA 8.48 / 10.0`
  * University / Institution: Bangalore City University (Seshadripuram First Grade College)
  * Operational Experience: `30+ Months` Retail Checkout & Cashiering
  * Civic / Campus Role: Vice President, Student Council
* **Action & Media Tokens**:
  * `[PROFILE_PHOTO_PENDING]` (4:5 editorial framed placeholder, monogram watermark, no fake portrait)
  * `[RESUME_PDF_PENDING]` (Download action with graceful pending indicator)

### Section 02: About ("Beyond the Numbers")
* **Thesis Quote**: *"Data reveals patterns; business discipline turns them into impact."*
* **Narrative Arc**: Traces the convergence between core commerce disciplines (accounting cycles, corporate taxation principles) and computational tools (SQL queries, Python, Advanced Excel), reinforced by 30+ months of real-world retail store cashiering and government-affiliated workplace safety training.

### Section 03: Expertise ("Four Disciplines. One Connected Perspective")
* **01 // Finance & Accounting**: Corporate accounting, personal finance, income tax law & practice, double-entry bookkeeping, financial statement analysis.
* **02 // Data & Analytics**: Advanced Excel, business statistics, exploratory data analysis, foundational SQL querying, operational metrics.
* **03 // Business Operations**: Retail checkout operations, POS transactions, inventory tracking, workplace safety training administration.
* **04 // Leadership & Collaboration**: Student Council Vice President, public training module facilitation, cross-functional committee coordination.

### Section 04: Experience (Audited Career Timeline)
1. **May 2025 – May 2026**: RPL Labour Safety Trainer Intern at **JC Solutions**  
   * Associated with Government of Karnataka Skill Development Mission.  
   * Conducted workplace safety training modules, managed worker attendance records, logged skill assessment data, communicated safety procedures.
2. **March 2023 – October 2025**: Part-Time Cashier at **Avenue Super Market Ltd.**  
   * Executed daily customer billing, processed cash and digital POS transactions, verified register balances, assisted customers during peak retail hours.

### Section 05: Education & Civic Leadership
* **Undergraduate**: Bachelor of Commerce (Data Analytics) — Bangalore City University, Seshadripuram First Grade College, **CGPA: 8.48 / 10.0**.  
  * Key Coursework: Data Analytics, Operations Research, Income Tax Law & Practice, Advanced Excel.  
* **Pre-University**: KSEEB, **77.0%** (Mathematics, Statistics, Accountancy, Business Studies).  
* **Campus Leadership**: Vice President, Student Council, Seshadripuram First Grade College; Cultural Committee Member; Inter-collegiate management fest awards.

### Section 06: Selected Work Concepts (Awaiting Production Data)
* Prominently badged with amber/terracotta indicator: `[PROPOSED CONCEPT // AWAITING VERIFIED DATA]`
  1. *Retail Inventory & Stockout Analysis Concept* (Replenishment workflow and stock level monitoring)
  2. *Multi-Store Shift Settlement & Transaction Data Model* (Analytical schema and store transaction summaries)
  3. *Statutory Tax Computation & Performance Workbook* (Advanced Excel model applying Indian income tax schedules)

### Section 07: Contact & Dispatch ("Let's Connect the Dots")
* Direct action tokens:
  * `[CONTACT_EMAIL_PENDING]`
  * `[LINKEDIN_URL_PENDING]`
  * `[RESUME_PDF_PENDING]`
* Back-to-top navigational anchor and understated colophon.

---

## 4. Pending Placeholder Tokens & Configuration Contract

| Token | Planned Implementation | Initial Release Behavior |
|---|---|---|
| `PROFILE_PHOTO_PENDING` | Real professional portrait (4:5 aspect ratio) | Geometric monogram frame (`GPBR`) with technical registration crosshairs |
| `LINKEDIN_URL_PENDING` | Gurupavan's verified LinkedIn profile URL | Visually styled link element, gracefully disabled until URL provided |
| `RESUME_PDF_PENDING` | Official PDF resume download | Styled CTA with modal alert or disabled state indicating pending document |
| `CONTACT_EMAIL_PENDING` | Direct professional email address | Styled dispatch button, configurable in centralized TypeScript data |
| `GRADUATION_STATUS_PENDING` | Degree conferral date / completion certificate | Verbatim resume status: B.Com (Data Analytics), CGPA 8.48/10 |
| `VERIFIED_PROJECTS_PENDING` | GitHub repositories or live dashboard URLs | Displayed exclusively as proposed concepts with prominent disclaimers |

---

## 5. Decision Gate & Next Steps

* **Current Status**: Design Generation & Screen Exploration Complete (Phases 1–3). 13 screens generated and cataloged across 3 distinct aesthetic directions.
* **Next Gate (Phase 4)**: Implementation into Next.js App Router, TypeScript, Tailwind CSS, and GSAP ScrollTrigger **will only begin after explicit user approval of the selected design direction and palette**.
