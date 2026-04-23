"use client";

import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

const viewport = { once: true, margin: "-100px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function FinalCTA() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <section className="relative isolate py-32 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, var(--accent-glow), transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease }}
          className="text-center"
        >
          <p className="type-mono text-[var(--text-tertiary)]">GET STARTED</p>
          <h2 className="type-h2 mt-4 text-[var(--text-primary)] max-w-[800px] mx-auto">
            See what 20+ concepts in days actually looks like.
          </h2>
          <p className="type-body-lg mt-5 text-[var(--text-secondary)] max-w-[600px] mx-auto">
            Book a 20-minute demo. We&apos;ll walk through example work and map
            it to what you&apos;re running.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]"
        >
          {calendlyUrl ? (
            <div className="h-[720px] w-full">
              <InlineWidget
                url={calendlyUrl}
                styles={{ height: "100%", width: "100%" }}
                pageSettings={{
                  backgroundColor: "0F1011",
                  primaryColor: "7B68EE",
                  textColor: "F7F8F8",
                }}
              />
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="type-body text-[var(--text-secondary)]">
                Booking isn&apos;t wired up yet. Set{" "}
                <code className="type-mono text-[var(--text-primary)]">
                  NEXT_PUBLIC_CALENDLY_URL
                </code>{" "}
                in your environment to embed Calendly here.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
