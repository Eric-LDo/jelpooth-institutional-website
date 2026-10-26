import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import QuoteForm from "@/components/forms/QuoteForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Pedir orçamento", description: "Responda 5 perguntas rápidas e receba uma proposta com escopo, prazo e valor fechados." };

export default async function Orcamento({ searchParams }: { searchParams: Promise<{ tipo?: string }> }) {
  const { tipo } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Pedir orçamento"
        title={<>Conte a sua ideia.<br />A gente faz <span className="gt">o resto.</span></>}
        lead={`Leva uns 2 minutos. Em até ${site.responseTime} você recebe uma proposta com escopo, prazo e valor fechados.`}
      />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Reveal>
            <QuoteForm initialType={tipo} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
