export const site = {
  name: "Tata Ngwa Billy",
  shortName: "Billy",
  role: "Full-Stack & Web Engineer",
  tagline: "I design, build, and architect resilient software systems.",
  intro:
    "Detail-oriented software engineer crafting performant, user-centered web and mobile applications. I turn complex problems into clean, maintainable systems with a strong sense for design and developer experience.",
  about:
    "I am a deadline-driven software engineer who enjoys taking ideas from initial concept to production. I work across the stack, from architecting resilient backends to building polished, accessible interfaces. Enthusiastic team player, I thrive on shipping reliable software and continuously learning the technologies that move the industry forward.",
  location: "Bonamoussadi, Douala, Cameroon",
  fullAddress: "Kotto-Bangue, Bonamoussadi, Douala, Cameroon",
  email: "billytatangwa5@gmail.com",
  phoneDisplay: "+237 651 686 780",
  phoneRaw: "+237651686780",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/",
    whatsapp: "https://wa.me/237651686780",
  },
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Quotes", href: "#quotes" },
  { label: "Contact", href: "#contact" },
];
