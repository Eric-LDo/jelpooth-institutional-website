"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type Props = { children: React.ReactNode; className?: string; as?: "h1" | "h2"; delay?: number };

// Título que entra linha por linha, de baixo para cima (SplitText do GSAP).
export default function SplitHeading({ children, className, as: Tag = "h1", delay = 0.1 }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      SplitText.create(ref.current, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.08, delay }),
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
