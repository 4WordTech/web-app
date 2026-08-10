"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cx } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {body ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {body}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function PlaceholderBadge({ className }: { className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent",
        className,
      )}
    >
      Placeholder
    </span>
  );
}

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  external,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-accent text-accent-ink hover:bg-[#d6ff62] shadow-[0_0_0_1px_rgba(200,245,66,0.2)]",
    secondary:
      "border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/5",
    ghost: "bg-transparent text-ink hover:text-accent px-0",
  }[variant];

  const cls = cx(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300",
    styles,
    className,
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noreferrer" onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Magnetic({
  children,
  className,
  strength = 12,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cx("inline-block will-change-transform", className)}
      animate={reduce ? undefined : pos}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        setPos({
          x: (x / r.width) * strength,
          y: (y / r.height) * strength,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  );
}

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cx("overflow-hidden border-y border-line", className)}>
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 py-4 pr-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink/70"
          >
            {item}
            <span className="text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cx("h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M3 13L13 3M13 3H5.5M13 3V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
