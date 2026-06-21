export type Skill = { name: string; icon: string };

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: `${DEV}/typescript/typescript-original.svg` },
      { name: "JavaScript", icon: `${DEV}/javascript/javascript-original.svg` },
      { name: "SQL", icon: `${DEV}/postgresql/postgresql-original.svg` },
      { name: "Python", icon: `${DEV}/python/python-original.svg` },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: `${DEV}/react/react-original.svg` },
      { name: "Next.js", icon: `${DEV}/nextjs/nextjs-original.svg` },
      { name: "Tailwind CSS", icon: `${DEV}/tailwindcss/tailwindcss-original.svg` },
      { name: "React Native", icon: `${DEV}/react/react-original.svg` },
      { name: "HTML5", icon: `${DEV}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DEV}/css3/css3-original.svg` },
    ],
  },
  {
    category: "Backend & DevOps",
    skills: [
      { name: "Node.js", icon: `${DEV}/nodejs/nodejs-original.svg` },
      { name: "Express", icon: `${DEV}/express/express-original.svg` },
      { name: "PostgreSQL", icon: `${DEV}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", icon: `${DEV}/mongodb/mongodb-original.svg` },
      { name: "Docker", icon: `${DEV}/docker/docker-original.svg` },
      { name: "Git", icon: `${DEV}/git/git-original.svg` },
    ],
  },
];

export const stats = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Delivered", value: "6+" },
  { label: "Technologies", value: "10+" },
];
