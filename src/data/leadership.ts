export type LeadershipMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  term?: string;
  order?: number;
  linkedin?: string;
  initials?: string;
};

export type Leader = LeadershipMember;

export const leadershipTeam: LeadershipMember[] = [
  {
    id: "president",
    name: "Abdul Mannan",
    role: "President",
    term: "2025 — 2027",
    order: 1,
    initials: "BM",
    bio: "Provides overall leadership and strategic direction for Masjid Ballantyne. Oversees long-term planning, community development initiatives, and ensures the Masjid operates in alignment with its mission of worship, education, and service.",
    image: "/media/leadership/member-1.jpg",
    email: "president@ballantynemasjid.org",
  },
  {
    id: "vice-president",
    name: "Mohammed Ajmal",
    role: "Vice President",
    term: "2025 — 2027",
    order: 2,
    initials: "BM",
    bio: "Supports executive leadership and assists with operational planning, community initiatives, and organizational development. Works closely with leadership to ensure effective delivery of programs and services.",
    image: "/media/leadership/member-2.jpg",
    email: "vicepresident@ballantynemasjid.org",
  },
  {
    id: "secretary",
    name: "IKRAM KHAN",
    role: "Secretary",
    term: "2025 — 2027",
    order: 3,
    initials: "BM",
    bio: "Maintains governance records, board documentation, and meeting minutes. Ensures transparency, proper communication, and continuity in organizational leadership.",
    image: "/media/leadership/member-3.jpg",
    email: "secretary@ballantynemasjid.org",
  },
  {
    id: "treasurer",
    name: "ARAFATH MOHAMMED",
    role: "Treasurer",
    term: "2025 — 2027",
    order: 4,
    initials: "BM",
    bio: "Provides financial oversight, budgeting guidance, and fiscal accountability. Ensures responsible stewardship of community resources and transparent financial operations.",
    image: "/media/leadership/member-4.jpg",
    email: "treasurer@ballantynemasjid.org",
  },
  {
    id: "board-member-1",
    name: "Board Member Name",
    role: "Board Member",
    term: "2025 — 2027",
    order: 5,
    initials: "BM",
    bio: "Supports Masjid governance, strategic planning, and community engagement initiatives. Works collaboratively with leadership to strengthen programs and services.",
    image: "/media/leadership/member-5.jpg",
  },
  {
    id: "board-member-2",
    name: "Board Member Name",
    role: "Board Member",
    term: "2025 — 2027",
    order: 6,
    initials: "BM",
    bio: "Contributes to Masjid planning, development, and community support efforts, helping advance the mission of Masjid Ballantyne.",
    image: "/media/leadership/member-6.jpg",
  },
];