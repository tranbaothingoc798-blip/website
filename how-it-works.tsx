"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Send us your brief.",
    body: "Product, positioning, angles you want to test. One form, one reply.",
  },
  {
    n: "02",
    title: "We generate the concepts.",
    body: "AI UGC-style videos across multiple hooks, scenes, and formats — all native to Meta and TikTok.",
  },
  {
    n: "03",
    title: "You launch and learn.",
    body: "Fresh creative in your ad account within days. Iterate on what wins, kill what doesn't.",
  },
];

const viewport = { once: true, margin: "-100px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function HowItWorks() {
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
          <p className="type-mono text-[var(--text-tertiary)]">HOW IT WORKS</p>
          <h2 className="type-h2 mt-4 text-[var(--text-primary)] max-w-[700px] mx-auto">
            From brief to 20+ ad concepts in days.
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* connector line — desktop only, behind numbers */}
          <div
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-[1.75rem] h-px"
            style={{ background: "var(--border)" }}
          />
          <div className="relative grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.4, delay: 0.08 * i, ease }}
              >
                <div
                  className="type-mono inline-block bg-[var(--background)] pr-4"
                  style={{
                    color: "var(--accent)",
                    fontSize: "2rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.n}
                </div>
                <h3 className="type-h3 mt-6 text-[var(--text-primary)]">
                  {s.title}
                </h3>
                <p className="mt-3 type-body text-[var(--text-secondary)]">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
