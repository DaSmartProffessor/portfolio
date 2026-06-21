"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" className="bg-slate-50/60 dark:bg-slate-900/30">
      <SectionTitle
        eyebrow="Skills"
        title="Technologies I work with"
        description="A snapshot of the tools and languages I use to design and ship software."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-5 font-display text-lg font-semibold">
              {group.category}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {group.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.06 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-800/60"
                >
                  <div className="relative h-8 w-8">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      sizes="32px"
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-center text-xs font-medium leading-tight text-slate-600 dark:text-slate-400">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
