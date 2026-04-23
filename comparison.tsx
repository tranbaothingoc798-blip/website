"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows: { attribute: string; us: string; them: string }[] = [
  { attribute: "Turnaround", us: "Days", them: "Weeks" },
  { attribute: "Concepts per cycle", us: "20+", them: "2–5" },
  { attribute: "Creator sourcing", us: "Not needed", them: "Required" },
  {
    attribute: "Usage rights",
    us: "Cleared by default",
    them: "Negotiated per creator",
  },
  {
    attribute: "Revision cycles",
    us: "Built into the process",
    them: "Often multiple rounds",
  },
  { attribute: "Cost per iteration", us: "A fraction", them: "Premium" },
];

const viewport = { once: true, margin: "-100px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease }}
        >
          <p className="type-mono text-[var(--text-tertiary)]">THE DIFFERENCE</p>
          <h2 className="type-h2 mt-4 text-[var(--text-primary)] max-w-2xl">
            Faster, cheaper, and built for testing.
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-12 hidden md:block"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="type-mono text-left py-4 text-[var(--text-tertiary)] font-normal w-1/3">
                  Attribute
                </th>
                <th className="type-mono text-left py-4 text-[var(--text-tertiary)] font-normal">
                  AIUGC Media
                </th>
                <th className="type-mono text-left py-4 text-[var(--text-tertiary)] font-normal">
                  Traditional UGC
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.attribute} className="border-b border-[var(--border)]">
                  <td className="py-5 type-body text-[var(--text-primary)]">
                    {r.attribute}
                  </td>
                  <td className="py-5 type-body text-[var(--text-primary)]">
                    <span className="inline-flex items-center gap-2">
                      <Check
                        size={16}
                        style={{ color: "var(--accent)" }}
                        aria-hidden
                      />
                      {r.us}
                    </span>
                  </td>
                  <td className="py-5 type-body text-[var(--text-tertiary)]">
                    <span className="inline-flex items-center gap-2">
                      <X size={16} aria-hidden />
                      {r.them}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile stacked cards */}
        <div className="mt-10 md:hidden flex flex-col gap-3">
          {rows.map((r) => (
            <div
              key={r.attribute}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5"
            >
              <p className="type-mono text-[var(--text-tertiary)]">
                {r.attribute}
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2 type-body text-[var(--text-primary)]">
                  <Check
                    size={16}
                    style={{ color: "var(--accent)" }}
                    aria-hidden
                  />
                  <span className="type-mono text-[var(--text-tertiary)] mr-1">
                    AIUGC
                  </span>
                  {r.us}
                </div>
                <div className="flex items-center gap-2 type-body text-[var(--text-tertiary)]">
                  <X size={16} aria-hidden />
                  <span className="type-mono mr-1">TRAD.</span>
                  {r.them}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
