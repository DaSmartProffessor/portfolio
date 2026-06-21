"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, Loader2 } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const cards = [
    { icon: MapPin, label: "Location", value: site.fullAddress, href: undefined },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      icon: Phone,
      label: "Phone",
      value: site.phoneDisplay,
      href: `tel:${site.phoneRaw}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with me",
      href: site.socials.whatsapp,
    },
  ];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");

    if (!accessKey) {
      setStatus("error");
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", `New portfolio message from ${formData.get("name")}`);
    formData.append("from_name", `${site.name} Portfolio`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="bg-slate-50/60 dark:bg-slate-900/30">
      <SectionTitle
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind or just want to say hello? Send a message and I'll get back to you."
      />

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="grid gap-4">
            {cards.map((card) => {
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-500/50 dark:border-slate-800 dark:bg-slate-900">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-600 dark:text-brand-400">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      {card.label}
                    </p>
                    <p className="truncate text-sm font-medium">{card.value}</p>
                  </div>
                </div>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
          >
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="user_subject" placeholder="What's this about?" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Thanks! Your message has been sent. I&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-600 dark:text-red-400">
                {accessKey
                  ? "Something went wrong. Please try again or reach me via WhatsApp/email."
                  : "Contact form is not configured yet. Please reach me via WhatsApp or email above."}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700"
      />
    </div>
  );
}
