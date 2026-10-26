"use client";

import { useRef } from "react";
import { steps } from "@/data/content";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

// A linha entre as etapas se desenha com a rolagem e acende cada etapa quando chega nela.
export default function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".st", ref.current);
      if (prefersReducedMotion()) {
        items.forEach((el) => el.classList.add("on"));
        gsap.set(".lf", { width: "100%" });
        return;
      }
      gsap.set(items, { opacity: 0.35, y: 16 });
      gsap.to(".lf", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 55%",
          scrub: true,
          onUpdate: ({ progress }) =>
            items.forEach((el, i) => {
              const on = progress >= i / (items.length - 1) - 0.02;
              if (on !== el.classList.contains("on")) {
                el.classList.toggle("on", on);
                gsap.to(el, { opacity: on ? 1 : 0.35, y: on ? 0 : 16, duration: 0.5, ease: "power3.out" });
              }
            }),
        },
      });
    },
    { scope: ref },
  );

  return (
    <div className="steps" ref={ref}>
      <div className="ln" />
      <div className="lf" />
      {steps.map((s) => (
        <div key={s.k} className="st">
          <div className="k">{s.k}</div>
          <h3 className="h3">{s.title}</h3>
          <p>{s.text}</p>
          <span className="wk">{s.when}</span>
        </div>
      ))}
    </div>
  );
}
