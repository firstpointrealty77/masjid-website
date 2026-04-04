export type SpiritualTeamMember = {
  name: string;
  role: string;
  email?: string;
  image?: string;
  shortTitle?: string;
  bio: string;
  order?: number;
};

export const spiritualTeam: SpiritualTeamMember[] = [
  {
    name: "Shaykh",
    role: "Resident Scholar",
    shortTitle: "Resident Scholar",
    email: "@XXX.com",
    image: "/media/spiritual-team/XSG.jpg",
    credentialsPdf: "/docs/spiritual-team/Sheik1-credentials.pdf",
    order: 1,
    bio: ``,
  },
  {
    name: "Shaykh",
    role: "Director of Quranic Education",
    shortTitle: "Director of Quranic Education",
    email: "@bic.org",
    image: "/media/spiritual-team/ABC.jpg",
    credentialsPdf: "/docs/spiritual-team/Sheik2-credentials.pdf",
    order: 2,
    bio: ``,
  },
];