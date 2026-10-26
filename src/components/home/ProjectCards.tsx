"use client";

import Link from "next/link";
import { useRef } from "react";
import { projects } from "@/data/content";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

// As telas chegam inclinadas e se endireitam em 3D conforme a rolagem.
export default function ProjectCards() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>(".scr", ref.current).forEach((el, i) => {
        gsap.fromTo(
          el,
          { rotateX: 28, rotateZ: i % 2 ? 4 : -4, scale: 0.86, opacity: 0.3 },
          {
            rotateX: 0,
            rotateZ: 0,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 100%", end: "top 50%", scrub: true },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <div className="cg" ref={ref}>
      {projects.map((p) => (
        <Link key={p.slug} href={`/projetos#${p.slug}`} className="case">
          <div className={`scr ${p.theme}`}>
            <div className="tb">
              <i />
              <i />
              <i />
            </div>
            <div className="in">
              <b>{p.headline}</b>
              <span>{p.caption}</span>
            </div>
            {p.theme === "mind" ? (
              <div className="fake">
                Entrar na lista
                <i />
                <i />
                <i className="go" />
              </div>
            ) : (
              <div className="phone">
                <i />
                <i style={{ width: "70%" }} />
                <i className="a" />
                <i />
                <i style={{ width: "60%" }} />
              </div>
            )}
          </div>
          <div className="cb">
            <div>
              <h3 className="h3">{p.name}</h3>
              <p>{p.summary}</p>
            </div>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
