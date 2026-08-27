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
    id: "mohammed-ajmal",
    name: "Mohammed Ajmal",
    role: "Board Member",
    term: "2025 — 2027",
    order: 1,
    initials: "MA",
    bio: "Supports executive leadership, operational planning, community initiatives, and organizational development while helping ensure the effective delivery of programs and services.",
    image: "/media/leadership/member-2.jpg",
  },
];