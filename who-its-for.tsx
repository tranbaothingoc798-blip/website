"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const cards = [
  {
    label: "FOR DTC & ECOMMERCE BRANDS",
    title: "Refresh paid social without the production drag.",
    body: "Test more hooks. Replace fatigued winners faster. Get more creative into market without another agency retainer or creator hunt.",
    bullets: [
      "Ship 20+ concepts in days, not weeks",
      "Cut cost per creative iteration",
      "No creator sourcing, no usage-rights friction",
      "More shots at finding winners",
    ],
  },
  {
    label: "FOR PERFORMANCE MARKETING AGENCIES",
    title: "A white-label creative layer for your client accounts.",
    body: "Deliver more creative across every client without adding headcount or getting buried in creator coordination. We sit behind the scenes.",
    bullets: [
      "White-label delivery under your brand",
      "Scale creative output across accounts",
      "Protect margin on fulfillment-heavy retainers",
      "No creator contracts or rights management",
    ],
  },
];

const viewport = { once: true, margin: "-100px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function WhoItsFor() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease }}
          className="text-center"
        >
          <p className="type-mono text-[var(--text-tertiary)]">WHO IT&apos;S FOR</p>
          <h2 className="type-h2 mt-4 text-[var(--text-primary)] max-w-[700px] mx-auto">
            Built for the teams under creative pressure.
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay: i * 0.08, ease }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-8 md:p-10"
            >
              <p
                className="type-mono"
                style={{ color: "var(--accent)" }}
              >
                {c.label}
              </p>
              <h3 className="type-h3 mt-4 text-[var(--text-primary)]">
                {c.title}
              </h3>
              <p className="mt-4 type-body text-[var(--text-secondary)]">
                {c.body}
              </p>
              <ul className="mt-6 space-y-3">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 type-body text-[var(--text-secondary)]"
                  >
                    <Check
                      size={16}
                      className="mt-1 shrink-0"
                      style={{ color: "var(--accent)" }}
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
