"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Institutional",
  "Interior",
  "Urban / Masterplanning",
  "Other",
];

const fieldClass =
  "w-full bg-transparent border-b border-charcoal/25 focus:border-charcoal outline-none py-3 text-base placeholder:text-charcoal/35 transition-colors";
const labelClass = "text-eyebrow text-[0.65rem] text-charcoal/50 block mb-2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <p className="font-serif text-4xl md:text-5xl leading-tight">Thank you.</p>
        <p className="text-charcoal/65 mt-4 max-w-sm leading-relaxed">
          We&rsquo;ve received your note and will write back within two working days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your full name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@email.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+91" />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company / Organization
          </label>
          <input id="company" name="company" type="text" className={fieldClass} placeholder="Optional" />
        </div>
        <div>
          <label className={labelClass} htmlFor="location">
            Project Location
          </label>
          <input id="location" name="location" type="text" className={fieldClass} placeholder="City, state" />
        </div>
        <div>
          <label className={labelClass} htmlFor="area">
            Approximate Area
          </label>
          <input id="area" name="area" type="text" className={fieldClass} placeholder="e.g. 3,500 sq.ft" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="projectType">
          Project Type
        </label>
        <select id="projectType" name="projectType" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a project type
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={fieldClass}
          placeholder="Tell us about your site, timeline and what you have in mind."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="text-eyebrow text-xs bg-charcoal text-ivory rounded-full px-8 py-4 hover:bg-charcoal/85 transition-colors disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Start the Conversation"}
      </button>
    </form>
  );
}
