"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

export type FadeDirection = "up" | "down" | "left" | "right" | "fade";

interface FadeInProps {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

const INITIAL_TRANSFORM: Record<FadeDirection, string> = {
  up:    "translateY(50px)",
  down:  "translateY(-50px)",
  left:  "translateX(60px)",
  right: "translateX(-60px)",
  fade:  "translateY(0)",
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  style = {},
  threshold = 0.12,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: INITIAL_TRANSFORM[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1), transform ${duration}ms cubic-bezier(0.22,1,0.36,1)`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
