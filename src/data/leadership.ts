export type LeadershipMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  term?: string;
  order?: number;
  linkedin?: string;
};

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Board Member Name",
    role: "President",
    term: "2025 — 2027",
    order: 1,
    bio: "Provides overall leadership and strategic direction for Masjid Ballantyne. Oversees long-term planning, community development initiatives, and ensures the Masjid operates in alignment with its mission of worship, education, and service.",
    image: "/media/leadership/member-1.jpg",
    email: "president@ballantynemasjid.org",
  },

  {
    name: "Board Member Name",
    role: "Vice President",
    term: "2025 — 2027",
    order: 2,
    bio: "Supports executive leadership and assists with operational planning, community initiatives, and organizational development. Works closely with leadership to ensure effective delivery of programs and services.",
    image: "/media/leadership/member-2.jpg",
    email: "vicepresident@ballantynemasjid.org",
  },

  {
    name: "Board Member Name",
    role: "Secretary",
    term: "2025 — 2027",
    order: 3,
    bio: "Maintains governance records, board documentation, and meeting minutes. Ensures transparency, proper communication, and continuity in organizational leadership.",
    image: "/media/leadership/member-3.jpg",
    email: "secretary@ballantynemasjid.org",
  },

  {
    name: "Board Member Name",
    role: "Treasurer",
    term: "2025 — 2027",
    order: 4,
    bio: "Provides financial oversight, budgeting guidance, and fiscal accountability. Ensures responsible stewardship of community resources and transparent financial operations.",
    image: "/media/leadership/member-4.jpg",
    email: "treasurer@ballantynemasjid.org",
  },

  // Future Board Members (Optional)

  {
    name: "Board Member Name",
    role: "Board Member",
    term: "2025 — 2027",
    order: 5,
    bio: "Supports Masjid governance, strategic planning, and community engagement initiatives. Works collaboratively with leadership to strengthen programs and services.",
    image: "/media/leadership/member-5.jpg",
  },

  {
    name: "Board Member Name",
    role: "Board Member",
    term: "2025 — 2027",
    order: 6,
    bio: "Contributes to Masjid planning, development, and community support efforts, helping advance the mission of Masjid Ballantyne.",
    image: "/media/leadership/member-6.jpg",
  },
];