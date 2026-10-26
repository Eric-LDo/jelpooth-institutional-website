import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import FinalCta from "@/components/site/FinalCta";
import { segments } from "@/data/content";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Soluções digitais para comércio, saúde, educação, prestadores de serviço, startups e indústria.",
};

export default function Solucoes() {
  return (
    <>
      <PageHero
        eyebrow="Soluções por segmento"
        title={<>Feito para o<br /><span className="gt">seu ramo.</span></>}
        lead="Cada negócio tem um gargalo diferente. Veja o que costumamos resolver no seu segmento."
      />
      <section className="section">
        <div className="wrap">
          <Reveal className="grid-3" stagger=".card">
            {segments.map((s) => (
              <div key={s.name} className="card" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <span className="chip">{s.service}</span>
                <h2 className="h3" style={{ fontSize: 28, margin: 0 }}>{s.name}</h2>
                <div>
                  <p className="sub" style={{ color: "var(--mute)", fontSize: 14 }}>O problema</p>
                  <p className="sub" style={{ color: "var(--ink)" }}>{s.problem}</p>
                </div>
                <div>
                  <p className="sub" style={{ color: "var(--mute)", fontSize: 14 }}>O que fazemos</p>
                  <p className="sub">{s.solution}</p>
                </div>
                <Link href="/orcamento" className="btn-ghost" style={{ marginTop: "auto", alignSelf: "flex-start" }}>
                  Falar sobre o meu caso →
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
