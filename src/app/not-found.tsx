import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function NotFound() {
  return (
    <PageHero eyebrow="Erro 404" title={<>Essa página <span className="gt">não existe.</span></>} lead="O link pode estar errado ou a página mudou de lugar.">
      <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
        <Link href="/" className="btn-primary">Ir para o início <span className="dot">→</span></Link>
        <Link href="/orcamento" className="btn-ghost">Pedir orçamento</Link>
      </div>
    </PageHero>
  );
}
