"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown, Wallet, type LucideIcon } from "lucide-react";

const pains: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Clock,
    title: "Weeks of lead time.",
    body: "Creator sourcing, contracts, and revisions eat your testing window.",
  },
  {
    icon: TrendingDown,
    title: "Not enough concepts.",
    body: "A handful of expensive shoots means a handful of shots at finding a winner.",
  },
  {
    icon: Wallet,
    title: "Cost per iteration is brutal.",
    body: "Every new hook means another creator fee, another brief, another delay.",
  },
];

const viewport = { once: true, margin: "-100px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function Problem() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.4, ease }}
          >
            <p className="type-mono text-[var(--text-tertiary)]">
              THE PROBLEM
            </p>
            <h2 className="type-h2 mt-4 text-[var(--text-primary)] max-w-xl">
              Winning ads die faster than you can replace them.
            </h2>
            <div className="mt-8 space-y-5 type-body-lg text-[var(--text-secondary)] max-w-xl">
              <p>
                Paid social teams live and die by creative velocity. Every
                winning ad has a half-life, and the moment it fatigues, CAC
                spikes and your media buyer is back asking for more concepts.
              </p>
              <p>
                Traditional UGC can&apos;t keep up. Sourcing creators,
                negotiating usage rights, briefing, revising, waiting —
                it&apos;s weeks of coordination for a handful of assets. By
                the time they&apos;re live, your best performer is already
                cooked.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {pains.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.4, delay: 0.05 * i, ease }}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6"
              >
                <p.icon
                  size={20}
                  className="mb-4"
                  style={{ color: "var(--accent)" }}
                  aria-hidden
                />
                <h3 className="type-h3 text-[var(--text-primary)]">
                  {p.title}
                </h3>
                <p className="mt-2 type-body text-[var(--text-secondary)]">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
