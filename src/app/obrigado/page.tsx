import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Recebemos o seu pedido", robots: { index: false } };

export default function Obrigado() {
  return (
    <PageHero
      eyebrow="Pedido enviado"
      title={<>Recebemos.<br /><span className="gt">Já já</span> a gente fala.</>}
      lead={`Finalize o envio na conversa do WhatsApp que abriu. Respondemos em até ${site.responseTime}. Enquanto isso, veja alguns projetos.`}
    >
      <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
        <Link href="/projetos" className="btn-primary">Ver projetos <span className="dot">→</span></Link>
        <Link href="/" className="btn-ghost">Voltar ao início</Link>
      </div>
    </PageHero>
  );
}
