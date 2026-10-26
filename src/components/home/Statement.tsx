"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const TEXT = "Sites, aplicativos e sistemas sob medida, no ar em semanas, com preço fechado e você acompanhando cada semana.";
const HIGHLIGHT = new Set(["semanas,", "preço", "fechado", "cada", "semana."]);

// Inspirado no angular.dev: cada palavra acende conforme a página rola.
export default function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".wd", ref.current);
      const lit = (w: HTMLElement) => (w.dataset.hi ? "#2f6bff" : "#f2f1ec");
      if (prefersReducedMotion()) {
        words.forEach((w) => (w.style.color = lit(w)));
        return;
      }
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 85%", end: "bottom 35%", scrub: true },
      });
      words.forEach((w, i) => {
        tl.to(w, { color: w.dataset.hi ? "#3de0ff" : "#f2f1ec", duration: 1, ease: "none" }, i * 0.5);
        if (w.dataset.hi) tl.to(w, { color: "#5b8cff", duration: 1 }, i * 0.5 + 1);
      });
    },
    { scope: ref },
  );

  return (
    <section className="section statement">
      <div className="wrap">
        <p ref={ref}>
          {TEXT.split(" ").map((w, i) => (
            <span key={i}>
              <span className="wd" data-hi={HIGHLIGHT.has(w) ? "1" : undefined}>
                {w}
              </span>{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
