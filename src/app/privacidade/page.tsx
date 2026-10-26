import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Política de privacidade", description: "Como a Jelpooth trata os dados enviados pelo site." };

// Texto base. Revise com um profissional antes de publicar.
export default function Privacidade() {
  return (
    <>
      <PageHero eyebrow="Privacidade" title={<>Política de <span className="gt">privacidade.</span></>} lead="Como tratamos os dados que você envia pelo site, de acordo com a LGPD (Lei 13.709/2018)." />
      <section className="section">
        <div className="wrap prose">
          <h2>Quais dados coletamos</h2>
          <p>Coletamos apenas o que você informa nos formulários de contato e de orçamento: nome, e-mail, telefone, empresa e a descrição do projeto. Também usamos métricas anônimas de navegação para entender como o site é usado.</p>
          <h2>Para que usamos</h2>
          <ul>
            <li>Responder ao seu contato e preparar propostas.</li>
            <li>Manter o histórico do atendimento.</li>
            <li>Melhorar o site a partir de métricas agregadas.</li>
          </ul>
          <h2>Com quem compartilhamos</h2>
          <p>Não vendemos nem cedemos os seus dados. Eles passam apenas pelas ferramentas necessárias para o atendimento, como WhatsApp, e-mail e o serviço de métricas.</p>
          <h2>Por quanto tempo guardamos</h2>
          <p>Pelo tempo necessário ao atendimento e às obrigações legais. Depois disso, os dados são excluídos.</p>
          <h2>Seus direitos</h2>
          <p>Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail {site.email}.</p>
          <p style={{ marginTop: 40, fontSize: 13 }}>Última atualização: outubro de 2026.</p>
        </div>
      </section>
    </>
  );
}
