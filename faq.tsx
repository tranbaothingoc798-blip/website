"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qa = [
  {
    q: "How is this different from traditional UGC?",
    a: "Traditional UGC means sourcing creators, negotiating usage rights, writing briefs, managing revisions, and waiting weeks. We use AI to generate UGC-style video ads in days, at a fraction of the cost, with none of the coordination overhead.",
  },
  {
    q: "Will it actually perform on Meta and TikTok?",
    a: "The format, pacing, and hooks are built to match what's working on paid social right now. You're not getting stiff, obviously-AI content — you're getting native-feeling ads designed to test quickly and iterate on what wins.",
  },
  {
    q: "What do you need from us to get started?",
    a: "A short brief covering your product, positioning, and the angles you want to test. That's it. No shot lists, no creator briefs, no revision loops.",
  },
  {
    q: "How many concepts do we get?",
    a: "A typical cycle delivers 20+ distinct concepts — different hooks, scenes, and formats — so your media buyer has real testing volume to work with.",
  },
  {
    q: "Can agencies white-label this?",
    a: "Yes. Agencies use us as a silent creative layer behind their client work. Your clients see your brand; we sit behind the scenes.",
  },
  {
    q: "How fast is turnaround?",
    a: "Days, not weeks. Exact timing depends on volume and brief complexity — we'll give you a specific date when you send your brief.",
  },
];

const viewport = { once: true, margin: "-100px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease }}
          className="text-center"
        >
          <p className="type-mono text-[var(--text-tertiary)]">FAQ</p>
          <h2 className="type-h2 mt-4 text-[var(--text-primary)]">
            Questions we get a lot.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {qa.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
