"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Seletor dos filhos que entram um após o outro. Sem ele, o bloco inteiro entra junto. */
  stagger?: string;
  as?: "div" | "section" | "ul";
};

// Sobe e aparece quando entra na tela. O conteúdo já está visível sem JavaScript.
export default function Reveal({ children, className, stagger, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      const targets = stagger ? ref.current.querySelectorAll(stagger) : ref.current;
      gsap.from(targets, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  );
}
