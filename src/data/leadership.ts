export type LeadershipMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  term?: string;
  order?: number;
  linkedin?: string;
  initials?: string;
};

export type Leader = LeadershipMember;

export const leadershipTeam: LeadershipMember[] = [
  {
    id: "abdul-mannan",
    name: "Abdul Mannan",
    role: "President",
    term: "2025 — 2027",
    order: 1,
    initials: "AM",
    bio: "Provides overall leadership and strategic direction for Ballantyne Islamic Center. Oversees long-term planning, community development, and alignment with the organization’s mission of worship, education, and service.",
    image: "/media/leadership/member-1.jpg",
  },
  {
    id: "mohammed-ajmal",
    name: "Mohammed Ajmal",
    role: "Vice President",
    term: "2025 — 2027",
    order: 2,
    initials: "MA",
    bio: "Supports executive leadership, operational planning, community initiatives, and organizational development while helping ensure the effective delivery of programs and services.",
    image: "/media/leadership/member-2.jpg",
  },
  {
    id: "ikram-khan",
    name: "Ikram Khan",
    role: "Secretary",
    term: "2025 — 2027",
    order: 3,
    initials: "IK",
    bio: "Maintains governance records, board documentation, and meeting minutes while supporting transparency, communication, and continuity in organizational leadership.",
    image: "/media/leadership/member-3.jpg",
  },
  {
    id: "arafath-mohammed",
    name: "Arafath Mohammed",
    role: "Treasurer",
    term: "2025 — 2027",
    order: 4,
    initials: "AM",
    bio: "Provides financial oversight, budgeting guidance, and fiscal accountability while supporting responsible stewardship and transparent financial operations.",
    image: "/media/leadership/member-4.jpg",
  },
  {
    id: "mohammed-mahmood",
    name: "Mohammed Mahmood",
    role: "Board Member",
    term: "2025 — 2027",
    order: 5,
    initials: "MM",
    bio: "Supports governance, strategic planning, organizational development, and community engagement initiatives for Ballantyne Islamic Center.",
    image: "/media/leadership/member-5.jpg",
  },
  {
    id: "masoom-shaik",
    name: "Masoom Shaik",
    role: "Board Member",
    term: "2025 — 2027",
    order: 6,
    initials: "MS",
    bio: "Contributes to planning, development, governance, and community support efforts that advance the mission of Ballantyne Islamic Center.",
    image: "/media/leadership/member-6.jpg",
  },
];