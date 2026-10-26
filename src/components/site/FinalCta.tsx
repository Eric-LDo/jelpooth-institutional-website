import Link from "next/link";
import { site, whatsappLink } from "@/data/site";

export default function FinalCta() {
  const line = (
    <>
      Tem uma ideia parada? &nbsp;<span className="gt">Vamos tirar do papel.</span>&nbsp;{" "}
    </>
  );
  return (
    <section className="final" aria-labelledby="final-title">
      <h2 id="final-title" className="sr-only">Pedir orçamento</h2>
      <div className="mq" aria-hidden="true">
        <span>{line}{line}</span>
      </div>
      <div className="mq o" aria-hidden="true">
        <span>SITES · APPS · SISTEMAS · MVPs · AUTOMAÇÕES · SITES · APPS · SISTEMAS · MVPs · AUTOMAÇÕES · </span>
      </div>
      <div className="wrap">
        <div className="ctab">
          <p>
            Responda 5 perguntas rápidas. Em até {site.responseTime} você recebe uma proposta com escopo, prazo e valor
            fechados.
          </p>
          <a className="btn-ghost btn-wa" href={whatsappLink("Olá! Quero conversar sobre um projeto.")} target="_blank" rel="noopener">
            <i className="live" />
            Chamar no WhatsApp
          </a>
          <Link href="/orcamento" className="big-cta">
            Pedir
            <br />
            orçamento
            <br />
            grátis →
          </Link>
        </div>
      </div>
    </section>
  );
}
