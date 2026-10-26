import type { Metadata } from "next";
import { Mail, MessageCircle, AtSign, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = { title: "Contato", description: "Fale com a Jelpooth pelo WhatsApp, e-mail ou formulário." };

export default function Contato() {
  const channels = [
    { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: whatsappLink("Olá! Vim pelo site.") },
    { icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
    { icon: AtSign, label: "Instagram", value: "@jelpooth", href: site.instagram },
    { icon: Clock, label: "Atendimento", value: `Seg. a sex., 9h às 18h. Resposta em até ${site.responseTime}.` },
  ];
  return (
    <>
      <PageHero eyebrow="Contato" title={<>Vamos <span className="gt">conversar.</span></>} lead="Escolha o canal que preferir. Se já sabe o que precisa, o pedido de orçamento é o caminho mais rápido." />
      <section className="section">
        <div className="wrap grid-2" style={{ gap: 48, alignItems: "start" }}>
          <Reveal stagger=".card" className="form" >
            {channels.map((c) => {
              const Icon = c.icon;
              const body = (
                <div className="card" style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <Icon size={22} color="var(--c1)" />
                  <div>
                    <div className="h3" style={{ fontSize: 18, margin: 0 }}>{c.label}</div>
                    <div className="sub" style={{ fontSize: 14 }}>{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? <a key={c.label} href={c.href} target="_blank" rel="noopener">{body}</a> : <div key={c.label}>{body}</div>;
            })}
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
