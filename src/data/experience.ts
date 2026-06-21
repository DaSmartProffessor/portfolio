export type ResumeEntry = {
  title: string;
  organization: string;
  period: string;
  location?: string;
  points: string[];
};

export const summary = {
  title: "Professional Summary",
  text: "Innovative and deadline-driven software engineer with hands-on experience architecting and developing user-centered digital products from initial concept to final delivery. Comfortable across the full stack, with a focus on clean code, performance, and great user experience.",
};

export const education: ResumeEntry[] = [
  {
    title: "Advanced Training in Software Development",
    organization: "Seven Advanced Academy",
    period: "2022 - 2023",
    location: "Douala, Cameroon",
    points: [
      "Intensive, project-based program in a leading Cameroonian tech education environment.",
      "Covered modern web engineering, software design principles, and collaborative development workflows.",
    ],
  },
];

export const experience: ResumeEntry[] = [
  {
    title: "Front-End Developer Intern",
    organization: "ViazizaTech SARL",
    period: "Mar 2022",
    location: "Yaoundé Effoulan",
    points: [
      "Adopted software engineering best practices and contributed to process improvements.",
      "Built features using JavaScript and modern front-end tooling.",
      "Kept up with evolving technology trends and wrote clean, maintainable code.",
    ],
  },
  {
    title: "Task Builder",
    organization: "Kings Softwares Inc.",
    period: "Jan 2023",
    points: [
      "Evaluated project requirements, identified challenges, and proposed data-driven alternatives.",
      "Collaborated with development and QA teams to exceed client expectations on function and performance.",
      "Optimized interfaces between hardware and software, and built automated reporting for sales and customer data.",
      "Managed team resources to deliver on sprint goals within expected timeframes.",
    ],
  },
  {
    title: "Front-End Intern",
    organization: "Seven Common Factor",
    period: "Feb 2024",
    location: "Sable Akwa Nord, Douala",
    points: [
      "Gathered and analyzed user feedback to improve software capabilities.",
      "Troubleshot and debugged applications to minimize downtime and disruptions.",
      "Wrote clean, sustainable code for functional web applications.",
    ],
  },
];
