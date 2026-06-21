import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";
import { education, experience, summary, type ResumeEntry } from "@/data/experience";
import { site } from "@/data/site";

function Timeline({ entries }: { entries: ResumeEntry[] }) {
  return (
    <div className="relative space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
      {entries.map((entry) => (
        <div key={`${entry.title}-${entry.period}`} className="relative">
          <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-gradient-to-r from-brand-500 to-accent-500 dark:border-slate-950" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="font-display text-base font-semibold">{entry.title}</h4>
            <span className="rounded-full bg-brand-500/10 px-3 py-0.5 text-xs font-medium text-brand-600 dark:text-brand-400">
              {entry.period}
            </span>
          </div>
          <p className="mt-0.5 text-sm font-medium text-accent-600 dark:text-accent-400">
            {entry.organization}
            {entry.location ? ` · ${entry.location}` : ""}
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
            {entry.points.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Resume() {
  return (
    <Section id="resume">
      <SectionTitle
        eyebrow="Resume"
        title="My journey so far"
        description={summary.text}
      />

      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-bold">Education</h3>
          </div>
          <Timeline entries={education} />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400">
              <Briefcase className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-bold">Experience</h3>
          </div>
          <Timeline entries={experience} />
        </Reveal>
      </div>

      <Reveal className="mt-12 text-center">
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-400"
        >
          <ExternalLink className="h-4 w-4" />
          View Full Resume
        </a>
      </Reveal>
    </Section>
  );
}
