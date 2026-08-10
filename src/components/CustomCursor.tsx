"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";

function subscribeFinePointer(onStoreChange: () => void) {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getFinePointer() {
  return window.matchMedia("(pointer: fine)").matches;
}

export function CustomCursor() {
  const reduce = useReducedMotion();
  const fine = useSyncExternalStore(subscribeFinePointer, getFinePointer, () => false);
  const enabled = Boolean(fine && !reduce);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      setMoved(true);
      setPos({ x: e.clientX, y: e.clientY });
    };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      setHover(!!el?.closest("a, button, input, textarea, [data-cursor]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled || !moved) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[90] h-2 w-2 rounded-full bg-accent mix-blend-difference"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[90] rounded-full border border-ink/40"
        animate={{
          x: pos.x - (hover ? 22 : 16),
          y: pos.y - (hover ? 22 : 16),
          width: hover ? 44 : 32,
          height: hover ? 44 : 32,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.4 }}
      />
    </>
  );
}
