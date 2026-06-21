"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Available for new projects
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-200">
            {site.role}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {site.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-transform hover:scale-[1.03]"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-400"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={site.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-brand-500 to-accent-500 blur-2xl opacity-30" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl dark:border-slate-800">
              <Image
                src="/avatar.jpeg"
                alt={site.name}
                fill
                priority
                sizes="(max-width: 640px) 16rem, 20rem"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <p className="text-xs text-slate-500 dark:text-slate-400">Based in</p>
              <p className="text-sm font-semibold">Douala, Cameroon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
