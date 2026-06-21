import { Mail, MapPin, Phone } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";
import { stats } from "@/data/skills";

export function About() {
  const details = [
    { icon: MapPin, label: "Location", value: site.location },
    { icon: Mail, label: "Email", value: site.email },
    { icon: Phone, label: "Phone", value: site.phoneDisplay },
  ];

  return (
    <Section id="about">
      <SectionTitle eyebrow="About" title="A little about me" />

      <div className="grid items-center gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <h3 className="font-display text-2xl font-bold">{site.role}</h3>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
            {site.about}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/50 p-4 dark:border-slate-800 dark:bg-slate-900/50"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <item.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="truncate text-sm font-medium">{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="grid gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
              >
                <p className="font-display text-4xl font-extrabold text-gradient">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
