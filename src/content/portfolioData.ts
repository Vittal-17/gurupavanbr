export interface MetricTickerItem {
  label: string;
  value: string;
  tag?: string;
}

export interface Discipline {
  id: string;
  category: string;
  title: string;
  description: string;
  skills: string[];
}

export interface LedgerEntry {
  id: string;
  badge: string;
  docRef: string;
  role: string;
  company: string;
  subdivision: string;
  period: string;
  location: string;
  scopeTitle: string;
  scopeDescription: string;
  metadata: { label: string; value: string }[];
  contributions: string[];
}

export interface AppliedConcept {
  id: string;
  title: string;
  tech: string;
  description: string;
}

export interface CurricularSubject {
  name: string;
  tier: string;
}

export const portfolioData = {
  candidate: {
    name: "GURUPAVAN B R",
    shortName: "GP",
    monogram: "GP",
    headline: "A business mindset.",
    headlineItalic: "An analytical lens.",
    subhead: "Commerce & Data Analytics | Finance | Business Operations",
    location: "Bengaluru, Karnataka, India",
    registryId: "GPBR-084-A",
    coordinates: {
      lat: "12.9716° N",
      lon: "77.5946° E",
      city: "BENGALURU CENTRAL",
    },
    rationaleSummary:
      "Equipped with double-entry rigor, empirical variance controls, and computational database tools to translate operational data streams into executive balance sheet clarity.",
    heroBio:
      "Bachelor of Commerce graduate in Data Analytics from Bangalore City University (8.48 CGPA). Blending thirty months of continuous, frontline supermarket cash reconciliation and transaction throughput with enterprise corporate reconciliation at Voya Financial, institutional leadership as Student Council Vice President, and RPL safety training execution.",
    aboutThesis:
      "Data reveals patterns; business discipline turns them into measurable impact.",
    aboutBio1:
      "Trained under the rigorous canon of double-entry accounting and modern analytics, my methodology approaches corporate operations from ground truth rather than abstract theory. To evaluate performance accurately, one must comprehend how cash moves at the point-of-sale terminal, how ledger variance originates during shift closures, and how inventory discrepancies translate to the final profit and loss statement.",
    aboutBio2:
      "Working within the Corporate Reconciliation Team at Voya Financial, I handle high-integrity general ledger account reconciliations and journal desk workflows. Concurrently, across thirty months with Avenue Supermarts (DMart), I balanced fast-paced retail operations with register reconciliations, while instructing workforce cohorts in Recognition of Prior Learning (RPL) labour safety with JC Solutions under the Karnataka State Skill Mission framework. Together with my term as Student Council Vice President at SFGC, this trajectory grounds my data analysis in hands-on organizational accountability.",
    status: "ACTIVE TENURE & IMMEDIATE AVAILABILITY",
    availabilityDate: "ACTIVE COMMENCEMENT",
  },

  credentials: {
    photoUrl: "/images/gurupavan.jpg",
    email: "gurupavanbr@gmail.com",
    phone: "+91 6363884795",
    formattedPhone: "+91 63638 84795",
    linkedInUrl: "https://www.linkedin.com/in/gurupavan-b-r-88741b351",
    resumeUrl: "https://drive.google.com/file/d/1v1VyiJmztN-vspvYgeipHRbSnU3AIn7h/view?usp=drivesdk",
    resumePdfLocal: "/GURUPAVAN_B_R_RESUME.pdf",
    resumeFilename: "GURUPAVAN_B_R_RESUME.PDF",
  },

  metricsCard: {
    header: "OPERATIONAL TALLY & BALANCE CARD",
    tag: "AUDITED",
    rows: [
      { label: "Scholastic Standing:", value: "CGPA 8.48 / 10.0", highlight: true },
      { label: "Active Enterprise Tenure:", value: "Voya Financial", highlight: false },
      { label: "Retail Field Service:", value: "30+ Consecutive Mos", highlight: false },
      { label: "Operational Accuracy Rate:", value: "99.8% POS Compliance", highlight: false },
      { label: "Civic Governance Role:", value: "Vice President (SFGC)", highlight: false },
      { label: "Vocational Training Deliveries:", value: "RPL Labour Safety (State)", highlight: false },
      { label: "Core Technical Apparatus:", value: "SQL • Excel • Python • Accounts", highlight: false },
    ],
  },

  tickerItems: [
    { label: "AUDIT TALLY", value: "CGPA: 8.48 / 10.0", tag: "badge" },
    { label: "", value: "B.Com (Data Analytics) — Bangalore City University" },
    { label: "", value: "Voya Financial: Reconciliation Associate – Journal Desk" },
    { label: "", value: "Operations & Reconciliations: 30+ Mos Ground Tenure" },
    { label: "", value: "Student Council Vice President (SFGC)" },
    { label: "", value: "RPL Safety Trainer Certified (Govt. of Karnataka Skill Mission)" },
    { label: "", value: "ARCHIVAL SERIAL: #GPBR-084-A" },
  ],

  disciplines: [
    {
      id: "#01",
      category: "FINANCE",
      title: "Finance & Accounting",
      description:
        "Rigorous foundation in commercial law, double-entry ledgers, direct taxation structures, and financial reporting compliance.",
      skills: [
        "Corporate Accounting",
        "Ledger & Balance Reconciliation",
        "Income Tax Law (Old/New)",
        "Financial Statement Audit",
      ],
    },
    {
      id: "#02",
      category: "DATA",
      title: "Data & Analytics",
      description:
        "Quantitative modeling, structured querying logic, operations research, and statistical trend distillation from transaction logs.",
      skills: [
        "Advanced Excel (VBA/Pivot)",
        "SQL Schema & Window Queries",
        "Python Data Fundamentals",
        "Business Statistics & OR",
      ],
    },
    {
      id: "#03",
      category: "OPS",
      title: "Business Operations",
      description:
        "Ground-level operational execution, register closing reconciliations, inventory flow control, and shrinkage prevention.",
      skills: [
        "High-Volume Cash Balancing",
        "Inventory Flow & Restock",
        "POS System Operations",
        "Frontline Dispute Resolution",
      ],
    },
    {
      id: "#04",
      category: "LEADERSHIP",
      title: "Governance & Training",
      description:
        "Executive collegiate leadership, industrial safety protocol transmission, and stakeholder liaison under institutional guidelines.",
      skills: [
        "Student Council Vice Presidency",
        "RPL Labour Safety Instruction",
        "Budget Allocation Logistics",
        "Multi-Tier Consensus Building",
      ],
    },
  ],

  timeline: [
    {
      id: "01",
      badge: "ACTIVE TENURE // ENTERPRISE FINANCIAL DESK",
      docRef: "DOC REF: VOYA-FIN-REC-2026",
      role: "Reconciliation Associate – Journal Desk",
      company: "Voya Financial",
      subdivision: "Corporate Reconciliation & General Ledger Operations",
      period: "AUGUST 31, 2026 – PRESENT",
      location: "BENGALURU, KARNATAKA",
      scopeTitle: "Scope of Responsibility",
      scopeDescription:
        "Working within the Corporate Reconciliation Team supporting general ledger account reconciliation, BlackLine tool workflows, and journal entry governance.",
      metadata: [
        { label: "CORE TOOLING:", value: "BlackLine & ERP" },
        { label: "SPECIALIZATION:", value: "Balance Sheet & P&L" },
        { label: "DESK:", value: "Journal Governance" },
        { label: "AUDIT STATUS:", value: "Active Verified" },
      ],
      contributions: [
        "Working in the Reconciliation Team, supporting high-integrity account reconciliation activities across enterprise entities.",
        "Utilizing BlackLine for reconciliation-related workflows, variance tracking, and gaining practical exposure to automated balance certification.",
        "Handling Journal Desk activities and supporting end-to-end journal entry review, verification, and posting.",
        "Applying foundational debit and credit concepts to evaluate the downstream impact of adjustments on P&L and Balance Sheet accounts.",
        "Reviewing ledger and sub-ledger information, investigating discrepancies, and resolving reconciliation differences.",
      ],
    },
    {
      id: "02",
      badge: "CONTRACT ENGAGEMENT / STATE MISSION",
      docRef: "DOC REF: JCS-RPL-2025",
      role: "RPL Labour Safety Trainer Intern",
      company: "JC Solutions",
      subdivision: "In association with Karnataka State Skill Development Mission",
      period: "MAY 2025 – MAY 2026",
      location: "BENGALURU, KARNATAKA",
      scopeTitle: "Scope of Responsibility",
      scopeDescription:
        "Instruction and administrative verification of standardized occupational health and workplace hazard containment for unorganized worker cohorts.",
      metadata: [
        { label: "FRAMEWORK:", value: "Govt. RPL Norms" },
        { label: "TARGET:", value: "Construction & Industrial" },
        { label: "OUTPUT:", value: "Certified Compliance" },
      ],
      contributions: [
        "Instructed structured occupational health, industrial safety, and protective gear mandates under the Recognition of Prior Learning (RPL) state initiative.",
        "Managed end-to-end candidate registration ledgers, biometric skill verification data, and state certification compliance logs with zero documentation defects.",
        "Documented on-site safety assessment records and bridged grassroots worker comprehension barriers with official procedural manuals.",
      ],
    },
    {
      id: "03",
      badge: "CONCURRENT RETAIL FIELD SERVICE",
      docRef: "DOC REF: ASL-BLR-084",
      role: "Part-Time Cashier & Retail Operations Associate",
      company: "Avenue Supermarts Ltd. (DMart)",
      subdivision: "Commercial Operations Division",
      period: "MARCH 2023 – OCTOBER 2025",
      location: "30+ CONSECUTIVE MONTHS",
      scopeTitle: "Scope of Responsibility",
      scopeDescription:
        "High-cadence retail transaction execution, strict point-of-sale cash register drawer audits, and shelf inventory turnover coordination.",
      metadata: [
        { label: "TURNOVER:", value: "Peak Supermarket POS" },
        { label: "RECONCILIATION:", value: "Daily Shift Close" },
        { label: "DISCREPANCY:", value: "Under Audit Bounds (<0.2%)" },
      ],
      contributions: [
        "Operated terminal checkouts under high volume, accurately handling cash, unified payments (UPI), and point-of-sale card channels with sustained balancing precision.",
        "Executed closing register balancing, drawer tallies, physical vs. electronic cash reconciliation, and safe-deposit protocols per corporate audit guidelines.",
        "Coordinated with store back-office inventory personnel on shelf restocking, barcode variance detection, shrink prevention, and promotional compliance.",
        "Resolved frontline transactional discrepancies, price mismatches, and return requests with diplomatic composure and operational speed.",
      ],
    },
  ],

  academics: {
    degree: "Bachelor of Commerce in Data Analytics (B.Com DA)",
    university: "Dr. Manmohan Singh Bengaluru City University",
    institution: "Seshadripuram First Grade College (SFGC), Bengaluru",
    cgpa: "8.48",
    cgpaScale: "10.0",
    description:
      "An intensive dual-focus curriculum marrying full statutory commerce modules (mercantile jurisprudence, taxation, corporate accounting) with mathematical analytics, spreadsheet modeling, and operations research.",
    curriculum: [
      { name: "Data Analytics & Business Visualization", tier: "Distinction Tier" },
      { name: "Income Tax Law & Corporate Practice", tier: "Statutory Accounting" },
      { name: "Operations Research & Quantitative Methods", tier: "Mathematical Modeling" },
      { name: "Advanced Excel & Financial Workbook Design", tier: "Analytical Modeling" },
      { name: "Corporate Law, Governance & Auditing", tier: "Regulatory Theory" },
    ],
    priorExam: {
      name: "Pre-University Examination (KSEEB)",
      stream: "Commerce Stream (Acc., Stats., Math., Bus. Studies)",
      score: "77.0% FIRST CLASS",
    },
    leadership: {
      title: "Student Council Leadership",
      period: "2023 – 2024",
      role: "Vice President, Student Council (SFGC)",
      description:
        "Elected to executive collegiate governance overseeing 2,000+ enrolled peers. Acted as primary executive bridge between faculty council and student body committees.",
      points: [
        "Co-managed resource budgeting & event logistics for Annual Institutional Management Symposium.",
        "Represented institution at inter-collegiate Management Fest analytics challenges.",
        "Led student committee resolving grievances on facility access and study schedules.",
      ],
    },
    appliedConcepts: [
      {
        id: "#01",
        title: "Supermarket Inventory Turn Model",
        tech: "EXCEL / VBA",
        description:
          "Simulated DMart operational queues & safety buffer replenishment to lower stockout probability.",
      },
      {
        id: "#02",
        title: "SQL POS Register Variance Audit",
        tech: "POSTGRESQL",
        description:
          "Relational queries for cashier drawer balance auditing, hourly basket turnover, and tender-type breakdown.",
      },
      {
        id: "#03",
        title: "Income Tax & Enterprise Estimator",
        tech: "WORKBOOK",
        description:
          "Comparative fiscal model evaluating Old vs. New tax regimes with automated advance liability schedules.",
      },
      {
        id: "#04",
        title: "General Accounting & Bookkeeping",
        tech: "ACCOUNTING",
        description:
          "Core accounting operations including journal entry recording, general ledger maintenance, bank reconciliation statements (BRS), voucher management, and trial balance verification.",
      },
    ],
  },

  dispatch: {
    header: "OFFICIAL TRANSMISSION REQUISITION // APPLICANT DOSSIER #084-A",
    title: "Let's Connect the Dots.",
    statusLabel: "STATUS OF AVAILABILITY",
    statusValue: "IMMEDIATE COMMENCEMENT",
    description:
      "Currently entertaining early-career analyst roles, operations leadership tracks, and business intelligence associate positions across Bengaluru, Hyderabad, Mumbai, and pan-India financial ecosystems.",
    targetDomains: [
      "Financial Operations",
      "Business Analysis & Commercial Reporting",
      "Reconciliations",
    ],
    applicantRecord: "GURUPAVAN B R (BANGALORE CITY UNIVERSITY GRADUATE)",
  },
};
