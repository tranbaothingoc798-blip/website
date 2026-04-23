"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { examples, type Example } from "@/lib/examples";
import { cn } from "@/lib/utils";

const viewport = { once: true, margin: "-100px" };
const ease = [0.16, 1, 0.3, 1] as const;

function VideoTile({ item, index }: { item: Example; index: number }) {
  const ref = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  const onPlay = () => {
    const v = ref.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05, ease }}
      className={cn(
        "group relative aspect-[9/16] rounded-lg border border-[var(--border)] overflow-hidden bg-[var(--surface)] transition-all duration-200",
        "hover:border-[var(--border-strong)] hover:scale-[1.01]"
      )}
    >
      <video
        ref={ref}
        src={item.src}
        poster={item.poster}
        preload="metadata"
        playsInline
        controls={playing}
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />

      <span
        className="absolute top-3 left-3 type-mono text-[0.6875rem] px-2 py-1 rounded-md"
        style={{
          background: "rgba(8,9,10,0.8)",
          backdropFilter: "blur(6px)",
          color: "var(--text-secondary)",
        }}
      >
        {item.category}
      </span>

      {!playing && (
        <button
          type="button"
          onClick={onPlay}
          aria-label={`Play ${item.category} example`}
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
        >
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105"
            style={{
              background: "rgba(8,9,10,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--border-strong)",
            }}
          >
            <Play
              className="h-5 w-5 text-[var(--text-primary)]"
              fill="currentColor"
            />
          </span>
        </button>
      )}
    </motion.div>
  );
}

export function Examples() {
  return (
    <section id="examples" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease }}
        >
          <p className="type-mono text-[var(--text-tertiary)]">EXAMPLES</p>
          <h2 className="type-h2 mt-4 text-[var(--text-primary)] max-w-2xl">
            Real ads. Real formats. Real performance.
          </h2>
          <p className="type-body-lg mt-5 text-[var(--text-secondary)] max-w-[600px]">
            A sample of concepts produced for brands across beauty, wellness,
            and ecommerce.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((e, i) => (
            <VideoTile key={e.id} item={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
