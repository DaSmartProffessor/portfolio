"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section id="services" className="bg-slate-50/60 dark:bg-slate-900/30">
      <SectionTitle
        eyebrow="Services"
        title="What I can do for you"
        description="From architecture to delivery, I help bring digital products to life."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-600 transition-colors group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white dark:text-brand-400">
              <service.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
