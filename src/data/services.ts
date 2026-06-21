import type { LucideIcon } from "lucide-react";
import { Layers, Code2, Smartphone, FileText } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "System Architecture",
    description:
      "Translate customer problems into robust, scalable software architecture built to last.",
    icon: Layers,
  },
  {
    title: "Web Application Development",
    description:
      "Design and build full-stack web applications, from polished interfaces to reliable backends.",
    icon: Code2,
  },
  {
    title: "Mobile Application Development",
    description:
      "Develop cross-platform mobile applications with React Native for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Technical Documentation",
    description:
      "Produce clear technical documentation that helps teams understand and maintain software.",
    icon: FileText,
  },
];
