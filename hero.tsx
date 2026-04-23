"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BookDemoButton } from "@/components/book-demo-button";
import { Button } from "@/components/ui/button";

const headlineLines = ["20+ ad concepts.", "Shipped in days.", "Not weeks."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate pt-32 md:pt-40 pb-24 md:pb-32 min-h-[90vh] flex items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--accent-glow), transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="type-mono text-[var(--text-tertiary)]"
          >
            AI UGC FOR PERFORMANCE MARKETING
          </motion.p>

          <h1 className="type-display mt-6 text-[var(--text-primary)]">
            {headlineLines.map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.split(" ").map((word, wordIdx) => {
                  const totalIdx =
                    headlineLines
                      .slice(0, lineIdx)
                      .reduce((n, l) => n + l.split(" ").length, 0) + wordIdx;
                  return (
                    <motion.span
                      key={`${lineIdx}-${wordIdx}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1 + totalIdx * 0.04,
                      }}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="type-body-lg text-[var(--text-secondary)] mt-8 max-w-[600px] mx-auto"
          >
            AIUGC Media generates UGC-style video ads for ecommerce brands and
            agencies at 10x the volume of traditional creator workflows —
            without the sourcing, usage rights, or endless revision cycles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <BookDemoButton label="Book a demo" size="lg" />
            <Button
              asChild
              variant="ghost"
              size="lg"
              aria-label="See example ads"
            >
              <a href="#examples">See example ads</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 max-w-[1100px] mx-auto"
        >
          <div
            className="relative aspect-video rounded-xl border border-[var(--border)] overflow-hidden bg-[var(--surface)]"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.04), 0 40px 120px -20px var(--accent-glow)",
            }}
          >
            <video
              className="w-full h-full object-cover"
              src="/videos/hero-montage.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Montage of AI-generated UGC video ads"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
