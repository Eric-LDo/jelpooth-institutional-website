"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { services } from "@/data/content";
import { whatsappLink } from "@/data/site";

const schema = z.object({
  tipo: z.string().min(1, "Escolha um tipo de projeto"),
  objetivo: z.string().min(10, "Conte um pouco mais (mínimo de 10 caracteres)"),
  prazo: z.string().min(1, "Escolha um prazo"),
  investimento: z.string().min(1, "Escolha uma faixa"),
  temMarca: z.string().min(1, "Escolha uma opção"),
  nome: z.string().min(2, "Informe o seu nome"),
  email: z.email("E-mail inválido"),
  telefone: z.string().min(10, "Informe o WhatsApp com DDD"),
  empresa: z.string().optional(),
});
type Quote = z.infer<typeof schema>;

const STEPS: { title: string; fields: (keyof Quote)[] }[] = [
  { title: "O projeto", fields: ["tipo", "objetivo"] },
  { title: "Prazo e investimento", fields: ["prazo", "investimento", "temMarca"] },
  { title: "Seu contato", fields: ["nome", "email", "telefone"] },
];

const tipos = [...services.map((s) => ({ value: s.slug, label: s.title })), { value: "nao-sei", label: "Ainda não sei" }];
const prazos = ["O quanto antes", "Em até 1 mês", "Em até 3 meses", "Sem pressa"];
const faixas = ["Até R$ 3 mil", "R$ 3 a 8 mil", "R$ 8 a 20 mil", "Acima de R$ 20 mil", "Prefiro conversar"];
const marcas = ["Tenho logo e domínio", "Tenho só o logo", "Ainda não tenho"];

export default function QuoteForm({ initialType }: { initialType?: string }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<Quote>({
    resolver: zodResolver(schema),
    defaultValues: { tipo: tipos.some((t) => t.value === initialType) ? initialType : "" },
  });

  const next = async () => {
    if (await trigger(STEPS[step].fields)) setStep((s) => s + 1);
  };

  const onSubmit = (d: Quote) => {
    const tipo = tipos.find((t) => t.value === d.tipo)?.label ?? d.tipo;
    const msg = [
      `Olá! Quero um orçamento.`,
      `Projeto: ${tipo}`,
      `Objetivo: ${d.objetivo}`,
      `Prazo: ${d.prazo}`,
      `Investimento: ${d.investimento}`,
      `Marca/domínio: ${d.temMarca}`,
      `Nome: ${d.nome}${d.empresa ? ` (${d.empresa})` : ""}`,
      `E-mail: ${d.email}`,
      `WhatsApp: ${d.telefone}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
    router.push("/obrigado");
  };

  const Options = ({ name, items }: { name: keyof Quote; items: { value: string; label: string }[] }) => (
    <div className="options">
      {items.map((o) => (
        <label key={o.value} className="option">
          <input type="radio" value={o.value} {...register(name)} />
          <span>{o.label}</span>
        </label>
      ))}
    </div>
  );
  const simple = (list: string[]) => list.map((v) => ({ value: v, label: v }));
  const Err = ({ name }: { name: keyof Quote }) => (errors[name] ? <span className="err">{errors[name]?.message}</span> : null);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <div className="progress" aria-hidden="true">
          {STEPS.map((s, i) => <i key={s.title} className={i <= step ? "on" : ""} />)}
        </div>
        <p className="chip">Etapa {step + 1} de {STEPS.length} · {STEPS[step].title}</p>
      </div>

      {step === 0 && (
        <>
          <div className="field">
            <fieldset>
              <legend>Que tipo de projeto você precisa?</legend>
              <Options name="tipo" items={tipos} />
            </fieldset>
            <Err name="tipo" />
          </div>
          <div className="field">
            <label htmlFor="objetivo">Qual o objetivo? O que o projeto precisa resolver?</label>
            <textarea id="objetivo" className="input" placeholder="Ex.: quero que os clientes agendem visitas pelo site" {...register("objetivo")} />
            <Err name="objetivo" />
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <div className="field">
            <fieldset>
              <legend>Para quando você precisa?</legend>
              <Options name="prazo" items={simple(prazos)} />
            </fieldset>
            <Err name="prazo" />
          </div>
          <div className="field">
            <fieldset>
              <legend>Quanto pretende investir?</legend>
              <Options name="investimento" items={simple(faixas)} />
            </fieldset>
            <Err name="investimento" />
          </div>
          <div className="field">
            <fieldset>
              <legend>Você já tem identidade visual e domínio?</legend>
              <Options name="temMarca" items={simple(marcas)} />
            </fieldset>
            <Err name="temMarca" />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input id="nome" className="input" autoComplete="name" {...register("nome")} />
              <Err name="nome" />
            </div>
            <div className="field">
              <label htmlFor="empresa">Empresa (opcional)</label>
              <input id="empresa" className="input" autoComplete="organization" {...register("empresa")} />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" className="input" autoComplete="email" {...register("email")} />
              <Err name="email" />
            </div>
            <div className="field">
              <label htmlFor="telefone">WhatsApp com DDD</label>
              <input id="telefone" type="tel" className="input" autoComplete="tel" placeholder="(48) 9 9999-0000" {...register("telefone")} />
              <Err name="telefone" />
            </div>
          </div>
        </>
      )}

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {step > 0 && (
          <button type="button" className="btn-ghost" onClick={() => setStep((s) => s - 1)}>
            ← Voltar
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button type="button" className="btn-primary" onClick={next}>
            Continuar <span className="dot">→</span>
          </button>
        ) : (
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            Enviar pelo WhatsApp <span className="dot">→</span>
          </button>
        )}
      </div>
    </form>
  );
}
