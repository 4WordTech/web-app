"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui";
import { nav, site } from "@/lib/content";
import { cx } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > last && y > 80 && !open);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <motion.header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled || open ? "bg-bg/80 backdrop-blur-xl border-b border-line" : "bg-transparent",
        )}
        animate={reduce ? undefined : { y: hidden ? -96 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-8">
          <Link href="/" className="text-ink" aria-label={site.name}>
            <Logo className="h-7 md:h-8" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact">Book a call</Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cx(
                "absolute h-px w-5 bg-ink transition-transform duration-300",
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cx(
                "absolute h-px w-5 bg-ink transition-transform duration-300",
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-bg pt-[72px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex h-full flex-col justify-between px-6 pb-10">
              <div className="flex flex-col gap-2 pt-8">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.45 }}
                  >
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={closeMenu}
                      className="font-display text-4xl font-semibold tracking-tight"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Button href="/contact" className="w-full" onClick={closeMenu}>
                Book a free consultation
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
