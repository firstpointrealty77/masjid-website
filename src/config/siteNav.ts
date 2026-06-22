export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const siteNav: NavGroup[] = [
  {
    label: "About",
    items: [
      {
        label: "About Us",
        href: "/about",
        description: "Learn about Masjid Ballantyne and our mission.",
      },
    ],
  },
  {
    label: "Prayer",
    items: [
      {
        label: "Prayer Times",
        href: "/prayer/times",
      },
      {
        label: "Jumu'ah",
        href: "/prayer/jumuah",
      },
      {
        label: "Ramadan",
        href: "/prayer/ramadan",
      },
      {
        label: "Eid",
        href: "/prayer/eid",
      },
    ],
  },
  {
    label: "Community",
    items: [
      {
        label: "Programs",
        href: "/programs",
      },
      {
        label: "Events",
        href: "/events",
      },
      {
        label: "Media",
        href: "/media",
      },
    ],
  },
  {
    label: "Construction",
    items: [
      {
        label: "Construction Progress",
        href: "/construction-progress",
      },
      {
        label: "Donate",
        href: "/donate",
      },
    ],
  },
];