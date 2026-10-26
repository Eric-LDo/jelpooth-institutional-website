import HeroBuild from "@/components/home/HeroBuild";
import Statement from "@/components/home/Statement";
import ServiceList from "@/components/home/ServiceList";
import ProcessSteps from "@/components/home/ProcessSteps";
import ProjectCards from "@/components/home/ProjectCards";
import { TechMarquee, WhyTiles } from "@/components/home/WhyTiles";
import SectionHead from "@/components/ui/SectionHead";
import FinalCta from "@/components/site/FinalCta";

export default function Home() {
  return (
    <>
      <HeroBuild />
      <Statement />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <SectionHead
            eyebrow="O que fazemos"
            title={<>Do primeiro site ao sistema<br />que organiza <span className="gt">sua empresa.</span></>}
            sub="Escolha o ponto de partida. A gente cuida do resto, do layout à publicação."
          />
          <ServiceList />
        </div>
      </section>

      <section className="section alt">
        <div className="grain" />
        <div className="wrap">
          <SectionHead
            eyebrow="Como trabalhamos"
            title={<>Você vê o projeto crescer,<br /><span className="gt">semana a semana.</span></>}
            sub="Quatro etapas, sempre na mesma ordem. Nada começa sem escopo, prazo e valor combinados."
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Projetos"
            title={<>Feito pela <span className="gt">Jelpooth.</span></>}
            sub="Projetos publicados e em uso. Clique para ver os detalhes de cada um."
          />
          <ProjectCards />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <SectionHead eyebrow="Por que a Jelpooth" title={<>Rápido não precisa<br />ser <span className="gt">improvisado.</span></>} />
          <WhyTiles />
          <TechMarquee />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
