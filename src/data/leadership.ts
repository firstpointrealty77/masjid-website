export type Leader = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials?: string;
  image?: string;
};

export const leadershipTeam: Leader[] = [
  {
    id: "president",
    name: "Chair / President Name",
    role: "Chair / President",
    initials: "CP",
    bio: "Provides overall leadership, strategic direction, and stewardship for the masjid’s mission, community growth, and long-term vision.",
  },
  {
    id: "vice-president",
    name: "Vice President Name",
    role: "Vice President",
    initials: "VP",
    bio: "Supports organizational planning, operations, and community initiatives while helping ensure the masjid’s programs and goals move forward effectively.",
  },
  {
    id: "secretary",
    name: "Secretary Name",
    role: "Secretary",
    initials: "SC",
    bio: "Oversees records, meeting coordination, communications, and organizational documentation to support clarity, accountability, and continuity.",
  },
  {
    id: "treasurer",
    name: "Treasurer Name",
    role: "Treasurer",
    initials: "TR",
    bio: "Helps manage financial oversight, budgeting, reporting, and responsible stewardship of donations and masjid resources.",
  },
  {
    id: "board-member-1",
    name: "Board Member Name",
    role: "Board Member",
    initials: "BM",
    bio: "Contributes to planning, governance, and community development with a focus on supporting the spiritual and organizational needs of the masjid.",
  },
  {
    id: "board-member-2",
    name: "Board Member Name",
    role: "Board Member",
    initials: "BM",
    bio: "Works alongside the leadership team to strengthen programs, serve families, and help advance the masjid’s mission with sincerity and service.",
  },
];