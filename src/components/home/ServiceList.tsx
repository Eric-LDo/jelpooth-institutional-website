"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import { gsap, useGSAP } from "@/lib/gsap";

// Lista editorial: ao passar o mouse, a linha se pinta de azul e uma prévia do tipo de projeto acompanha o cursor.
export default function ServiceList() {
  const root = useRef<HTMLDivElement>(null);
  const prev = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: root });

  const show = contextSafe((e: React.MouseEvent<HTMLAnchorElement>, bg?: string) => {
    if (!prev.current || !bg) return;
    const row = e.currentTarget;
    prev.current.style.background = bg;
    gsap.to(prev.current, { opacity: 1, scale: 1, top: row.offsetTop - 25, duration: 0.45, ease: "back.out(1.4)" });
  });
  const hide = contextSafe(() => {
    if (prev.current) gsap.to(prev.current, { opacity: 0, scale: 0.8, duration: 0.3 });
  });

  return (
    <div className="svc-list" ref={root} onMouseLeave={hide}>
      {services.map((s) => (
        <Link key={s.slug} href={`/servicos#${s.slug}`} className="rowl" onMouseEnter={(e) => show(e, s.preview)}>
          <span className="n">{s.tag}</span>
          <h3>{s.title}</h3>
          <span className="d">
            {s.short}
            <br />
            <b>{s.deadline}</b>
          </span>
          <ArrowRight className="ar" size={24} />
        </Link>
      ))}
      <Link href="/orcamento" className="rowl alt" onMouseEnter={hide}>
        <span className="n">?</span>
        <h3>Não sabe por onde começar?</h3>
        <span className="d">Conte o seu problema em 2 minutos e indicamos o melhor caminho.</span>
        <ArrowRight className="ar" size={24} />
      </Link>
      <div className="prev" ref={prev} aria-hidden="true" />
    </div>
  );
}
