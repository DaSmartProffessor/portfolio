"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Sparkles, CalendarDays } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { quotes, getQuoteOfTheDay, type Quote } from "@/data/quotes";

function QuoteCard({
  quote,
  variant = "default",
}: {
  quote: Quote;
  variant?: "featured" | "default";
}) {
  return (
    <motion.div
      key={quote.text}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative w-full"
    >
      <span
        aria-hidden
        className={
          variant === "featured"
            ? "absolute -top-4 -left-2 font-display text-8xl font-black leading-none text-white/20 select-none"
            : "absolute -top-4 -left-2 font-display text-8xl font-black leading-none text-brand-500/10 select-none dark:text-brand-400/10"
        }
      >
        &ldquo;
      </span>
      <blockquote className="relative z-10 pt-6">
        <p
          className={
            variant === "featured"
              ? "text-lg font-medium leading-relaxed text-white/90 sm:text-xl"
              : "text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200 sm:text-xl"
          }
        >
          {quote.text}
        </p>
        <footer className="mt-4 flex items-center gap-3">
          <div
            className={
              variant === "featured"
                ? "h-px flex-1 bg-white/20"
                : "h-px flex-1 bg-slate-200 dark:bg-slate-700"
            }
          />
          <div className="text-right">
            <p
              className={
                variant === "featured"
                  ? "text-sm font-semibold text-white"
                  : "text-sm font-semibold text-slate-800 dark:text-slate-100"
              }
            >
              — {quote.author}
            </p>
            {quote.role && (
              <p
                className={
                  variant === "featured"
                    ? "text-xs text-white/60"
                    : "text-xs text-slate-500 dark:text-slate-400"
                }
              >
                {quote.role}
              </p>
            )}
          </div>
        </footer>
      </blockquote>
    </motion.div>
  );
}

export function Quotes() {
  const dailyQuote = getQuoteOfTheDay();
  const [random, setRandom] = useState<Quote>(() => {
    const pool = quotes.filter((q) => q.text !== dailyQuote.text);
    return pool[Math.floor(Math.random() * pool.length)];
  });
  const [spinning, setSpinning] = useState(false);

  const generate = useCallback(() => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 500);
    setRandom((prev) => {
      const pool = quotes.filter(
        (q) => q.text !== prev.text && q.text !== dailyQuote.text
      );
      return pool[Math.floor(Math.random() * pool.length)];
    });
  }, [dailyQuote.text]);

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Section id="quotes" className="bg-slate-50/60 dark:bg-slate-900/30">
      <SectionTitle
        eyebrow="Quotes"
        title="Words that inspire"
        description="A daily dose of wisdom from great minds in tech and beyond."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Quote of the Day */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 p-8 shadow-xl shadow-brand-500/20"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-2 text-white/70">
              <CalendarDays className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-widest">
                Quote of the Day
              </span>
            </div>
            <p className="mb-1 text-xs font-medium text-white/50">{today}</p>
            <AnimatePresence mode="wait">
              <QuoteCard key={dailyQuote.text} quote={dailyQuote} variant="featured" />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Random Quote Generator */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mb-6 flex items-center gap-2 text-brand-600 dark:text-brand-400">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-widest">
              Generate a Quote
            </span>
          </div>

          <div className="flex flex-1 flex-col justify-between gap-8">
            <div className="min-h-[10rem]">
              <AnimatePresence mode="wait">
                <QuoteCard key={random.text} quote={random} />
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={generate}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-brand-500 hover:bg-brand-500/5 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-400"
            >
              <RefreshCw
                className={`h-4 w-4 transition-transform duration-500 ${spinning ? "rotate-180" : "group-hover:rotate-90"}`}
              />
              Generate new quote
            </button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
