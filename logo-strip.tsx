"use client";

import { motion } from "framer-motion";

const wordmarks = ["Halcyon", "Northwind", "Meridian", "Parallax", "Lumen", "Axiom"];

export function LogoStrip() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="type-mono text-[var(--text-tertiary)] text-center"
        >
          TRUSTED BY ECOMMERCE TEAMS RUNNING PAID SOCIAL
        </motion.p>
        {/* TODO: swap text wordmarks for real brand logo SVGs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16"
        >
          {wordmarks.map((name) => (
            <span
              key={name}
              className="font-medium text-[var(--text-primary)] opacity-40 grayscale"
              style={{ fontSize: "1.125rem" }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
