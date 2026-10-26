import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import FinalCta from "@/components/site/FinalCta";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Landing pages, sites institucionais, MVPs, sistemas e automações com prazo e preço fechados.",
};

const included = [
  ["Funciona no celular", "Layout pensado primeiro para a tela pequena, onde está a maior parte dos seus clientes."],
  ["Pronto para o Google", "Títulos, descrições e velocidade ajustados para aparecer nas buscas."],
  ["Domínio e hospedagem", "Configuramos tudo no nome da sua empresa, com HTTPS."],
  ["WhatsApp integrado", "Botões e mensagens prontas para o cliente falar com você em um toque."],
  ["Métricas", "Google Analytics e pixel de anúncios para você saber de onde vêm os contatos."],
  ["30 dias de ajustes", "Depois da publicação, seguimos por perto para pequenos ajustes."],
];

const faq = [
  ["Quanto tempo leva?", "Depende do projeto. Uma landing page costuma ficar pronta em cerca de 1 semana e um MVP em cerca de 4 semanas. O prazo exato vem na proposta, antes de começar."],
  ["Como funciona o pagamento?", "O valor é fechado na proposta. Normalmente dividimos em uma entrada e o restante na entrega, e combinamos outras formas quando precisa."],
  ["Eu acompanho o andamento?", "Sim. Toda semana você recebe uma versão nova para testar e pode pedir ajustes no caminho."],
  ["De quem é o código e o domínio?", "Seu. Código, domínio e acessos ficam no nome da sua empresa."],
  ["E depois que o site estiver no ar?", "Os 30 primeiros dias de ajustes estão incluídos. Depois, oferecemos manutenção mensal para quem quiser."],
];

export default function Servicos() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={<>Escolha o ponto<br />de <span className="gt">partida.</span></>}
        lead="Cinco formas de tirar o seu projeto do papel. Todas com escopo, prazo e preço definidos antes de começar."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {services.map((s) => (
            <Reveal key={s.slug} className="svc-detail">
              <div id={s.slug} style={{ scrollMarginTop: 100 }}>
                <span className="chip">{s.deadline}</span>
                <h2 className="h2" style={{ marginTop: 14 }}>{s.title}</h2>
              </div>
              <div>
                <p className="sub" style={{ maxWidth: 560, fontSize: 18, color: "var(--ink)" }}>{s.long}</p>
                <p className="sub" style={{ marginTop: 14, maxWidth: 560 }}>
                  <strong style={{ color: "var(--ink)" }}>Para quem: </strong>
                  {s.forWho}
                </p>
                <ul className="check-list">
                  {s.includes.map((i) => (
                    <li key={i}><Check size={16} />{i}</li>
                  ))}
                </ul>
                <Link href={`/orcamento?tipo=${s.slug}`} className="btn-ghost" style={{ marginTop: 24 }}>
                  Quero este →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead eyebrow="Em todo projeto" title={<>O que vem <span className="gt">incluído.</span></>} />
          <Reveal className="grid-3" stagger=".card">
            {included.map(([t, d]) => (
              <div key={t} className="card">
                <h3 className="h3">{t}</h3>
                <p className="sub">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Perguntas frequentes" title={<>Antes de <span className="gt">começar.</span></>} />
          <Reveal className="faq">
            {faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
