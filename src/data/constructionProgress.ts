export type ConstructionStageStatus = "completed" | "active" | "upcoming";

export type ConstructionStage = {
  id: number;
  title: string;
  target: string;
  status: ConstructionStageStatus;
  description: string;
};

export type SpendingCategory = {
  id: number;
  label: string;
  amount: number;
  note?: string;
};

export type MilestoneItem = {
  id: number;
  label: string;
  date: string;
  status: "done" | "current" | "next";
};

export type ConstructionProgressData = {
  pageTitle: string;
  pageEyebrow: string;
  intro: string;
  phaseLabel: string;
  phaseStatus: string;
  targetCompletion: string;
  phaseGoalAmount: number;
  amountRaised: number;
  amountSpent: number;
  stages: ConstructionStage[];
  milestones: MilestoneItem[];
  spending: SpendingCategory[];
};

export const constructionProgressData: ConstructionProgressData = {
  pageTitle: "Construction Progress",
  pageEyebrow: "Building the House of Allah",
  intro:
    "Follow the journey of Masjid Ballantyne as each phase moves forward. This page shares transparent progress updates, major milestones, and how Phase 1 funds are being allocated.",

  phaseLabel: "Phase 1",
  phaseStatus: "In Progress",
  targetCompletion: "December 2026",

  phaseGoalAmount: 350000,
  amountRaised: 1000,
  amountSpent: 500,

  stages: [
    {
      id: 1,
      title: "Property Secured",
      target: "Completed",
      status: "completed",
      description:
        "The future home of the masjid has been secured through a lease-to-own arrangement, marking the first major milestone toward establishing a permanent house of Allah for the community.",
    },
    {
      id: 2,
      title: "Planning & Due Diligence",
      target: "Completed",
      status: "completed",
      description:
        "Initial planning, project review, budgeting, and preparation work were completed to move the masjid project forward with clarity and direction.",
    },
    {
      id: 3,
      title: "Permits & Approvals",
      target: "Current",
      status: "active",
      description:
        "Permit-related coordination, compliance review, documentation, and approvals are currently in progress for Phase 1.",
    },
    {
      id: 4,
      title: "Site Preparation",
      target: "Upcoming",
      status: "upcoming",
      description:
        "On-site preparation, contractor coordination, and readiness work will begin once approvals are finalized.",
    },
    {
      id: 5,
      title: "Foundation / Build-Out",
      target: "Upcoming",
      status: "upcoming",
      description:
        "Core construction and physical build-out work will begin in the next major phase of the project.",
    },
    {
      id: 6,
      title: "Interior Setup",
      target: "Upcoming",
      status: "upcoming",
      description:
        "Interior finishing, prayer space setup, utilities, and essential masjid preparation will follow.",
    },
    {
      id: 7,
      title: "Opening",
      target: "Upcoming",
      status: "upcoming",
      description:
        "Final readiness, inspections, community preparation, and opening, InshaAllah.",
    },
  ],

  milestones: [
    {
      id: 1,
      label: "Property Secured Through Lease-to-Own",
      date: "January 2026",
      status: "done",
    },
    {
      id: 2,
      label: "Planning & Due Diligence Completed",
      date: "February 2026",
      status: "done",
    },
    {
      id: 3,
      label: "Permits & Approvals In Progress",
      date: "March 2026",
      status: "current",
    },
    {
      id: 4,
      label: "Site Preparation Begins",
      date: "April 2026",
      status: "next",
    },
  ],

  spending: [
    {
      id: 1,
      label: "Property Lease-to-Own Payments",
      amount: 9500,
      note: "Lease-to-own related payments and property securing costs for the future masjid site.",
    },
    {
      id: 2,
      label: "Permits & Compliance",
      amount: 4200,
      note: "Permit fees, filings, approvals, documentation, and coordination.",
    },
    {
      id: 3,
      label: "Site Preparation",
      amount: 0,
      note: "Preparation, layout, cleanup, early contractor work, and site readiness tasks.",
    },
    {
      id: 4,
      label: "Construction Materials",
      amount: 0,
      note: "Initial purchased materials for early Phase 1 work.",
    },
    {
      id: 5,
      label: "Electrical",
      amount: 0,
      note: "Electrical-related early setup and infrastructure items.",
    },
    {
      id: 6,
      label: "Plumbing",
      amount: 0,
      note: "Preliminary plumbing and installation-related expenses.",
    },
    {
      id: 7,
      label: "Prayer Hall Setup",
      amount: 0,
      note: "Prayer area readiness, essential setup, and functional items.",
    },
    {
      id: 8,
      label: "Interior Finishing",
      amount: 0,
      note: "Interior work, finishing materials, and appearance-related needs.",
    },
    {
      id: 9,
      label: "Miscellaneous",
      amount: 0,
      note: "Smaller supporting items and necessary project expenses.",
    },
  ],
};