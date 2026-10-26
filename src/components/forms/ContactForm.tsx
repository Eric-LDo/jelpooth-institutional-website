"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { whatsappLink } from "@/data/site";

const schema = z.object({
  nome: z.string().min(2, "Informe o seu nome"),
  contato: z.string().min(6, "Informe um e-mail ou telefone"),
  mensagem: z.string().min(10, "Escreva um pouco mais (mínimo de 10 caracteres)"),
});
type Contact = z.infer<typeof schema>;

export default function ContactForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<Contact>({ resolver: zodResolver(schema) });

  const onSubmit = (d: Contact) => {
    window.open(whatsappLink(`Olá! Sou ${d.nome} (${d.contato}).\n${d.mensagem}`), "_blank", "noopener");
    router.push("/obrigado");
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field">
        <label htmlFor="c-nome">Nome</label>
        <input id="c-nome" className="input" autoComplete="name" {...register("nome")} />
        {errors.nome && <span className="err">{errors.nome.message}</span>}
      </div>
      <div className="field">
        <label htmlFor="c-contato">E-mail ou telefone</label>
        <input id="c-contato" className="input" {...register("contato")} />
        {errors.contato && <span className="err">{errors.contato.message}</span>}
      </div>
      <div className="field">
        <label htmlFor="c-msg">Mensagem</label>
        <textarea id="c-msg" className="input" {...register("mensagem")} />
        {errors.mensagem && <span className="err">{errors.mensagem.message}</span>}
      </div>
      <button type="submit" className="btn-primary" style={{ justifySelf: "start" }}>
        Enviar mensagem <span className="dot">→</span>
      </button>
    </form>
  );
}
