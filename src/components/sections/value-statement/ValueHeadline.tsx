"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  wordContainerVariant,
  wordVariant,
  strongWordContainerVariant,
  charVariant,
} from "./variants";

type Segment = { text: string; strong?: boolean };

const SEGMENTS: Segment[] = [
  { text: "From daily tasks", strong: true },
  { text: " to long-term " },
  { text: "projects", strong: true },
  { text: " — everything stays at your " },
  { text: "fingertips", strong: true },
  { text: ". Our " },
  { text: "sleek mobile interface", strong: true },
  { text: " brings " },
  { text: "focus and fun", strong: true },
  { text: " to how you " },
  { text: "plan, organize, and collaborate", strong: true },
  { text: "." },
];

type PlainToken  = { kind: "plain";  word: string; trailingSpace: boolean };
type StrongToken = { kind: "strong"; word: string; trailingSpace: boolean };
type Token = PlainToken | StrongToken;

function buildTokens(segments: Segment[]): Token[] {
  const tokens: Token[] = [];
  for (const seg of segments) {
    const parts = seg.text.split(/(\s+)/);
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        if (tokens.length > 0) tokens[tokens.length - 1].trailingSpace = true;
      } else {
        tokens.push({ kind: seg.strong ? "strong" : "plain", word: part, trailingSpace: false });
      }
    }
  }
  return tokens;
}

const TOKENS = buildTokens(SEGMENTS);

type ValueHeadlineProps = { className?: string };

export function ValueHeadline({ className }: ValueHeadlineProps) {
  const shouldReduce = useReducedMotion();

  const h2Class = cn(
    "max-w-[820px] font-sans leading-[1.2]",
    "text-[28px] sm:text-[36px] lg:text-[48px]",
    className,
  );

  if (shouldReduce) {
    return (
      <h2 className={cn(h2Class, "text-balance")} style={{ letterSpacing: "-0.02em" }}>
        {SEGMENTS.map((seg, i) =>
          seg.strong ? (
            <span key={i} className="font-extrabold text-foreground">{seg.text}</span>
          ) : (
            <span key={i} className="font-medium text-muted-foreground">{seg.text}</span>
          ),
        )}
      </h2>
    );
  }

  return (
    <motion.h2
      variants={wordContainerVariant}
      className={h2Class}
      style={{ letterSpacing: "-0.02em" }}
    >
      {TOKENS.map((token, i) => {
        const trailing = token.trailingSpace ? "\u00A0" : "";

        if (token.kind === "plain") {
          // ── Normal words: tumbling card effect ───────────────────────────
          return (
            <motion.span
              key={i}
              variants={wordVariant}
              style={{ display: "inline-block", transformOrigin: "bottom left" }}
              className="font-medium text-muted-foreground"
            >
              {token.word}{trailing}
            </motion.span>
          );
        }

        // ── Strong words: rubber-band pop per character ───────────────────
        return (
          <motion.span
            key={i}
            variants={strongWordContainerVariant}
            style={{ display: "inline-block" }}
            className="font-extrabold text-foreground"
          >
            {[...token.word].map((char, j) => (
              <motion.span
                key={j}
                variants={charVariant}
                style={{ display: "inline-block", transformOrigin: "center bottom" }}
              >
                {char}
              </motion.span>
            ))}
            {trailing && <span style={{ display: "inline-block" }}>{trailing}</span>}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}
