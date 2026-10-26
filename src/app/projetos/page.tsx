import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ProjectCards from "@/components/home/ProjectCards";
import FinalCta from "@/components/site/FinalCta";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos publicados pela Jelpooth: landing pages, sites e plataformas em uso.",
};

export default function Projetos() {
  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title={<>Feito pela<br /><span className="gt">Jelpooth.</span></>}
        lead="Projetos publicados e em uso. Cada um começou com uma conversa e uma proposta fechada."
      />
      <section className="section">
        <div className="wrap">
          <ProjectCards />
        </div>
      </section>
      <section className="section alt" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {projects.map((p) => (
            <Reveal key={p.slug} className="svc-detail">
              <div id={p.slug} style={{ scrollMarginTop: 100 }}>
                <span className="chip">{p.tags.join(" · ")}</span>
                <h2 className="h2" style={{ marginTop: 14 }}>{p.name}</h2>
              </div>
              <div style={{ display: "grid", gap: 18 }}>
                <div>
                  <p className="sub" style={{ color: "var(--mute)", fontSize: 14 }}>Desafio</p>
                  <p className="sub" style={{ color: "var(--ink)", maxWidth: 560 }}>{p.challenge}</p>
                </div>
                <div>
                  <p className="sub" style={{ color: "var(--mute)", fontSize: 14 }}>Solução</p>
                  <p className="sub" style={{ maxWidth: 560 }}>{p.solution}</p>
                </div>
                <div className="tags" style={{ justifyContent: "flex-start" }}>
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                <a href={p.url} target="_blank" rel="noopener" className="btn-ghost" style={{ justifySelf: "start" }}>
                  Ver ao vivo ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
