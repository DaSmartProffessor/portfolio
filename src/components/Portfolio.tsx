"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visible = projects.filter(
    (p) => filter === "all" || p.categories.includes(filter as ProjectCategory)
  );

  return (
    <Section id="portfolio">
      <SectionTitle
        eyebrow="Portfolio"
        title="Selected work"
        description="A few projects I've contributed to across web, mobile, and platform engineering."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              filter === f.value
                ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow"
                : "border border-slate-200 text-slate-600 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-400"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 transition-transform hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} repository`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 transition-transform hover:scale-110"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
