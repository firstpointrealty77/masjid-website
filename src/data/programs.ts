export type ProgramItem = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  ctaLabel: string;
  href: string;
  heroEyebrow: string;
  heroDescription: string;
  schedule: string[];
  highlights: string[];
  audience: string[];
  details: string[];
  registerText: string;
  registerHref: string;
  whatsappText?: string;
  whatsappHref?: string;
};

export const programsData: ProgramItem[] = [
  {
    slug: "quranic-education",
    title: "QURANIC EDUCATION",
    shortDescription:
      "Structured Qur’an learning programs including Nazirah and Hifz tracks. Students focus on recitation, tajwid, and memorization under qualified teachers.",
    image: "/media/programs/quranic-education.png",
    ctaLabel: "Register",
    href: "/programs/quranic-education",
    heroEyebrow: "Sacred Learning",
    heroDescription:
      "Our Quranic Education program is designed to help students build a lifelong relationship with the Book of Allah through proper recitation, tajwid, memorization, and love for Islamic learning.",
    schedule: [
      "Weekday and weekend class options",
      "Beginner to advanced learning tracks",
      "Structured recitation and tajwid practice",
    ],
    highlights: [
      "Nazirah and Hifz pathways",
      "Qualified instructors",
      "Tajwid-focused learning",
      "Consistent spiritual development",
    ],
    audience: [
      "Children beginning Qur’an reading",
      "Students improving tajwid",
      "Learners pursuing memorization",
      "Families seeking structured Islamic education",
    ],
    details: [
      "Students are guided according to their level with a focus on consistency, adab, and correct pronunciation.",
      "The program aims to nurture confidence, discipline, and love for the Qur’an in a caring Islamic environment.",
      "Parents are encouraged to stay engaged in their child’s learning journey and spiritual growth.",
    ],
    registerText: "Register for Quranic Education",
    registerHref:
      "/programs/coming-soon?program=quranic-education&action=register",
    whatsappText: "Join Program Updates",
    whatsappHref:
      "https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t",
  },
  {
    slug: "sunday-school",
    title: "SUNDAY SCHOOL",
    shortDescription:
      "Weekend Islamic education for children covering Qur’an, Islamic studies, and character development in a nurturing environment.",
    image: "/media/programs/sunday-school.png",
    ctaLabel: "Register",
    href: "/programs/sunday-school",
    heroEyebrow: "Weekend Learning",
    heroDescription:
      "Our Sunday School helps children grow in faith, character, and Islamic identity through engaging lessons in Qur’an, Islamic studies, manners, and community connection.",
    schedule: [
      "Weekend classes for school-age children",
      "Age-appropriate learning groups",
      "Balanced focus on deen, adab, and community",
    ],
    highlights: [
      "Islamic studies and values",
      "Qur’an reading support",
      "Character and manners development",
      "Welcoming classroom environment",
    ],
    audience: [
      "Children in elementary and middle school",
      "Families seeking weekend Islamic education",
      "Students building confidence in their Muslim identity",
    ],
    details: [
      "Lessons are designed to be meaningful, engaging, and rooted in authentic Islamic values.",
      "Students learn not only information, but also Islamic manners, responsibility, and respect.",
      "The goal is to help children feel connected to the masjid and proud of their faith.",
    ],
    registerText: "Register for Sunday School",
    registerHref:
      "/programs/coming-soon?program=sunday-school&action=register",
    whatsappText: "Join Parent Updates",
    whatsappHref:
      "https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t",
  },
  {
    slug: "sisters",
    title: "SISTERS PROGRAM",
    shortDescription:
      "Dedicated programs for sisters including halaqas, Islamic learning circles, and community gatherings to strengthen faith and sisterhood.",
    image: "/media/programs/sisters-program.png",
    ctaLabel: "Join",
    href: "/programs/sisters",
    heroEyebrow: "Sisterhood & Growth",
    heroDescription:
      "Our Sisters Program offers a welcoming space for learning, reflection, connection, and spiritual growth through classes, halaqas, and uplifting community gatherings.",
    schedule: [
      "Regular halaqas and study circles",
      "Faith-centered gatherings for sisters",
      "Supportive environment for growth and reflection",
    ],
    highlights: [
      "Islamic reminders and halaqas",
      "Strong community bond",
      "Welcoming and modest setting",
      "Programs for spiritual development",
    ],
    audience: [
      "Sisters seeking Islamic knowledge",
      "Women looking for community and support",
      "Those wanting regular halaqa participation",
    ],
    details: [
      "The program aims to strengthen faith through beneficial knowledge and meaningful sisterhood.",
      "Gatherings are designed to help sisters feel spiritually refreshed, connected, and supported.",
      "It provides a warm and respectful environment that encourages consistency in deen and community life.",
    ],
    registerText: "Join Sisters Program",
    registerHref: "/programs/coming-soon?program=sisters&action=join",
    whatsappText: "Join Sisters Updates",
    whatsappHref:
      "https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t",
  },
  {
    slug: "youth",
    title: "YOUTH PROGRAM",
    shortDescription:
      "Engaging youth activities, mentorship, and Islamic education designed to build strong identity, leadership, and connection to the masjid.",
    image: "/media/programs/youth-program.png",
    ctaLabel: "Join",
    href: "/programs/youth",
    heroEyebrow: "Youth, Identity & Mentorship",
    heroDescription:
      "Our Youth Program is built to help young Muslims grow with confidence, brotherhood, mentorship, and a stronger connection to Allah, the masjid, and the Muslim community.",
    schedule: [
      "Youth halaqas and group discussions",
      "Mentorship and personal development",
      "Masjid-centered gatherings and activities",
    ],
    highlights: [
      "Islamic identity building",
      "Mentorship and guidance",
      "Brotherhood and belonging",
      "Character and leadership development",
    ],
    audience: [
      "Teenagers and young adults",
      "Youth seeking mentorship and Islamic connection",
      "Families wanting a strong masjid environment for their children",
    ],
    details: [
      "The program creates a positive space where youth can ask questions, build friendships, and strengthen their Islamic foundation.",
      "Sessions are designed to be practical, relatable, and rooted in Qur’an and Sunnah.",
      "The goal is to nurture confident, principled young Muslims connected to the masjid.",
    ],
    registerText: "Join Youth Program",
    registerHref: "/programs/coming-soon?program=youth&action=join",
    whatsappText: "Join Youth Updates",
    whatsappHref:
      "https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t",
  },
  {
    slug: "converts",
    title: "CONVERTS CORNER",
    shortDescription:
      "Support system for new Muslims with mentorship, foundational Islamic learning, and a welcoming community to help them grow in faith.",
    image: "/media/programs/converts-corner.png",
    ctaLabel: "Learn More",
    href: "/programs/converts",
    heroEyebrow: "Welcoming New Muslims",
    heroDescription:
      "Converts Corner is a caring space for new Muslims and those exploring Islam to receive support, foundational learning, mentorship, and a genuine sense of belonging.",
    schedule: [
      "Foundational Islamic learning support",
      "Mentorship and guided conversations",
      "Welcoming community-centered gatherings",
    ],
    highlights: [
      "Warm and supportive environment",
      "Beginner-friendly learning",
      "Personal guidance and mentorship",
      "Community connection and belonging",
    ],
    audience: [
      "New Muslims",
      "Those exploring Islam",
      "Individuals seeking foundational guidance and support",
    ],
    details: [
      "This program is built on compassion, patience, and sincere care for every individual’s journey.",
      "Participants are supported with practical guidance in worship, beliefs, and day-to-day Islamic living.",
      "The focus is to help each person feel welcomed, respected, and connected to a caring Muslim community.",
    ],
    registerText: "Connect With Converts Corner",
    registerHref: "/programs/coming-soon?program=converts&action=learn",
    whatsappText: "Join Welcome Updates",
    whatsappHref:
      "https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t",
  },
];

export function getProgramBySlug(slug: string) {
  return programsData.find((program) => program.slug === slug);
}