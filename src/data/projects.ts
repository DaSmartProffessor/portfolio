export type ProjectCategory = "web" | "mobile";

export type Project = {
  title: string;
  description: string;
  image: string;
  categories: ProjectCategory[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projectFilters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile / Web", value: "mobile" },
];

export const projects: Project[] = [
  {
    title: "OpenCRVS",
    description:
      "Open-source platform for civil registration and vital statistics, helping digitize birth and death records.",
    image:
      "https://www.opencrvs.org/uploads/images/_2732xAUTO_crop_center_80_none/application-settings.png",
    categories: ["web", "mobile"],
    tags: ["Open Source", "Civic Tech", "TypeScript"],
    liveUrl: "https://www.opencrvs.org/product/features",
  },
  {
    title: "KingsCRP",
    description:
      "ERP system and business intelligence platform for managing operations and surfacing actionable insights.",
    image: "/projects/kingscrp.png",
    categories: ["web", "mobile"],
    tags: ["ERP", "Business Intelligence", "React"],
    repoUrl: "https://github.com/Kings-Ecosystem/kingscorp-ui",
  },
  {
    title: "Payunit",
    description:
      "Payment aggregator that unifies multiple payment providers behind a single, developer-friendly integration.",
    image: "/projects/payunit.png",
    categories: ["web"],
    tags: ["Fintech", "Payments", "API"],
    liveUrl: "https://app.payunit.net/",
  },
  {
    title: "Kings School",
    description:
      "School management platform that streamlines administration, enrollment, and academic tracking.",
    image: "https://www.kambangsinclaire.com/kingsschool.png",
    categories: ["web", "mobile"],
    tags: ["EdTech", "Management", "React"],
    repoUrl: "https://github.com/Kings-Ecosystem/kingsschool-ui",
  },
  {
    title: "Lab2Doctors",
    description:
      "Platform connecting laboratories and doctors to share results and coordinate patient care more efficiently.",
    image: "/projects/lab2doctors.png",
    categories: ["web"],
    tags: ["HealthTech", "Dashboard", "Web"],
  },
  {
    title: "Queues Slot",
    description:
      "Appointment and queue booking application that reduces wait times with real-time slot management.",
    image: "/projects/queues-slot.png",
    categories: ["web", "mobile"],
    tags: ["Scheduling", "Real-time", "Web"],
  },
];
