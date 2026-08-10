"use client";

import { motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/Logo";
import { Arrow, Button, Magnetic } from "@/components/ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-radial-fade pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 text-accent md:right-[-4%] md:top-8"
        animate={reduce ? undefined : { y: [0, -18, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <Logo className="h-[280px] w-auto md:h-[420px]" />
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="max-w-5xl">
          <div className="overflow-hidden">
            <motion.p
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
              initial={reduce ? false : { y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              Startup IT services studio
            </motion.p>
          </div>

          <h1 className="mt-5 font-display text-[clamp(2.6rem,8vw,7.2rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            <Line delay={0.18}>We provide IT</Line>
            <Line delay={0.28}>
              services that{" "}
              <em className="font-serif font-normal not-italic text-accent md:italic">
                ship.
              </em>
            </Line>
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            4wordtech is a startup helping clients with websites, apps, cloud, AI,
            and ongoing support — from first brief to live product.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
          >
            <Magnetic>
              <Button href="/contact">
                Book a free consultation <Arrow />
              </Button>
            </Magnetic>
            <Button href="/work" variant="secondary">
              See example work
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Taking on new clients
          </p>
          <a
            href="#services"
            className="group inline-flex items-center gap-3 text-sm text-muted hover:text-ink"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-line">
              <span className="absolute h-3 w-px animate-bounce bg-accent" />
            </span>
            Scroll
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}
