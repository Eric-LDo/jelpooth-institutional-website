import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { TechMarquee } from "@/components/home/WhyTiles";
import FinalCta from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: "A Jelpooth transforma ideias em sites, aplicativos e sistemas em semanas, com preço fechado.",
};

const method = [
  ["Escopo enxuto", "Começamos pelo que traz resultado primeiro. O resto entra nas próximas versões."],
  ["Entregas semanais", "Toda semana tem algo novo para você testar. Nada de sumir por meses."],
  ["Tecnologia de mercado", "Usamos as mesmas ferramentas de grandes empresas, rápidas e seguras."],
  ["Conversa direta", "Você fala com quem está construindo o projeto, sem intermediários."],
];

const values = [
  ["Prazo é compromisso", "O prazo da proposta é o prazo da entrega."],
  ["Transparência", "Você sabe o que está sendo feito, quanto custa e por quê."],
  ["O projeto é seu", "Código, domínio e acessos ficam no seu nome desde o primeiro dia."],
];

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title={<>Tecnologia que<br />vira <span className="gt">resultado.</span></>}
        lead="A Jelpooth cria sites, aplicativos e sistemas sob medida para empresas que não podem esperar meses para crescer."
      />

      <section className="section">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 48 }}>
          <Reveal>
            <div className="eyebrow">Nossa missão</div>
            <h2 className="h2">Impulsionar <span className="gt">histórias de sucesso.</span></h2>
          </Reveal>
          <Reveal className="prose">
            <p>Tudo começou com uma ideia simples: usar a tecnologia não apenas como ferramenta, mas como ponte para o crescimento.</p>
            <p>Vimos empresas incríveis travadas por processos manuais, equipes sobrecarregadas e oportunidades perdidas por falta de presença digital. Foi aí que entendemos o nosso propósito: transformar tecnologia em resultado real.</p>
            <p>Criamos soluções sob medida: sites que vendem, aplicativos que facilitam e sistemas que escalam. E fazemos isso rápido, porque cada semana parada é uma semana sem clientes.</p>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead eyebrow="Nosso método" title={<>Por que entregamos <span className="gt">rápido.</span></>} sub="Velocidade com processo, não com pressa." />
          <Reveal className="wg" stagger=".tile">
            {method.map(([t, d]) => (
              <div key={t} className="tile">
                <span className="lb">Método</span>
                <div>
                  <h3 className="h3">{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Compromissos" title={<>O que você pode <span className="gt">esperar.</span></>} />
          <Reveal className="grid-3" stagger=".card">
            {values.map(([t, d]) => (
              <div key={t} className="card">
                <h3 className="h3">{t}</h3>
                <p className="sub">{d}</p>
              </div>
            ))}
          </Reveal>
          <TechMarquee />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
