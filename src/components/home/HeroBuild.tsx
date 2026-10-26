"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const STAGES = [
  { id: "rascunho", label: "Rascunho", day: "dia 01", left: "0%" },
  { id: "design", label: "Design", day: "dia 05", left: "33%" },
  { id: "func", label: "Funcionalidades", day: "dia 12", left: "66%" },
  { id: "ar", label: "No ar", day: "dia 21", left: "100%" },
];
const DOMAIN = "studionorte.com.br";

// O hero mostra um site de exemplo (cliente fictício) sendo construído do dia 1 ao dia 21.
export default function HeroBuild() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const day = { v: 0 };
      const dayEl = q(".day b")[0] as HTMLElement;
      const urlEl = q(".url-text")[0] as HTMLElement;
      const stp = q(".stp");
      const setDay = () => (dayEl.textContent = String(Math.round(day.v)).padStart(2, "0"));
      const finalState = () => {
        gsap.set(q(".x"), { opacity: 1, scale: 1, borderColor: "transparent" });
        gsap.set(q(".x .t, .form-demo, .toast, .badge, .url .lock"), { opacity: 1 });
        gsap.set(q(".x-im"), { background: "linear-gradient(160deg,#c9a46b,#6b4a2b 60%,#2a1d14)", borderRadius: 14 });
        gsap.set(q(".x-bt"), { background: "#e8d6b3", borderRadius: 999 });
        gsap.set(q(".x-c1, .x-c2, .x-c3"), { background: "#15171d", borderColor: "#22252e" });
        gsap.set(q(".fill"), { width: "100%" });
        stp.forEach((s) => s.classList.add("on"));
        dayEl.textContent = "21";
        urlEl.textContent = DOMAIN;
      };

      if (prefersReducedMotion()) {
        finalState();
        return;
      }

      SplitText.create(q("h1")[0], {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        onSplit: (self) => gsap.from(self.lines, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.08 }),
      });
      gsap.from(q(".lead, .cta"), { opacity: 0, y: 14, duration: 0.8, delay: 0.7, stagger: 0.15 });

      const on = (i: number) => () => stp[i].classList.add("on");
      const tl = gsap.timeline({ delay: 1.1, defaults: { ease: "power3.out" } });

      // Dia 1: rascunho
      tl.call(on(0))
        .to(q(".x"), { opacity: 1, scale: 1, duration: 0.6, stagger: 0.05 }, "<")
        .to(day, { v: 1, duration: 0.3, onUpdate: setDay }, "<")
        // Dia 5: design
        .addLabel("design", "+=0.8")
        .call(on(1), [], "design")
        .to(q(".fill"), { width: "33%", duration: 1.6, ease: "power2.inOut" }, "design")
        .to(day, { v: 5, duration: 1.5, onUpdate: setDay }, "design")
        .to(q(".x"), { borderColor: "transparent", borderStyle: "solid", duration: 0.6 }, "design+=0.5")
        .to(q(".x-im"), { background: "linear-gradient(160deg,#c9a46b,#6b4a2b 60%,#2a1d14)", borderRadius: 14, duration: 0.8 }, "<")
        .to(q(".x-bt"), { background: "#e8d6b3", borderRadius: 999, duration: 0.8 }, "<")
        .to(q(".x-c1, .x-c2, .x-c3"), { background: "#15171d", borderColor: "#22252e", duration: 0.8 }, "<")
        .to(q(".x .t"), { opacity: 1, duration: 0.6, stagger: 0.06 }, "<+0.2")
        // Dia 12: funcionalidades
        .addLabel("func", "+=0.7")
        .call(on(2), [], "func")
        .to(q(".fill"), { width: "66%", duration: 1.6, ease: "power2.inOut" }, "func")
        .to(day, { v: 12, duration: 1.5, onUpdate: setDay }, "func")
        .fromTo(q(".form-demo"), { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.6)" }, "func")
        .to(q(".cursor"), { opacity: 1, duration: 0.3 }, "func")
        .to(q(".cursor"), { left: "60%", top: "86%", duration: 0.9, ease: "power2.inOut" }, "func+=0.1")
        .to(q(".cursor"), { left: "80%", top: "80%", duration: 1, ease: "power2.inOut" })
        .to(q(".fb"), { scale: 0.94, duration: 0.12, yoyo: true, repeat: 1 })
        // Dia 21: no ar
        .addLabel("ar", "+=0.2")
        .call(on(3), [], "ar")
        .to(q(".cursor"), { opacity: 0, duration: 0.3 }, "ar")
        .to(q(".fill"), { width: "100%", duration: 1.6, ease: "power2.inOut" }, "ar")
        .to(day, { v: 21, duration: 1.5, onUpdate: setDay }, "ar")
        .to(q(".browser"), { rotateY: 0, rotateX: 0, duration: 1.2, ease: "power2.inOut" }, "ar")
        .to({ i: 0 }, {
          i: DOMAIN.length,
          duration: 1,
          ease: "none",
          onUpdate() {
            urlEl.textContent = DOMAIN.slice(0, Math.round(this.targets()[0].i));
          },
        }, "ar")
        .to(q(".url .lock"), { opacity: 1, duration: 0.3 })
        .fromTo(q(".badge"), { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2.4)" }, "<")
        .fromTo(q(".toast"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.8)" }, "<")
        .call(() => confetti(q(".browser")[0] as HTMLElement), [], "<");
    },
    { scope: root },
  );

  return (
    <section className="hero" ref={root}>
      <div className="orb" />
      <div className="grain" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Sites · apps · sistemas sob medida</div>
            <h1 className="h-display">
              Da ideia
              <br />
              ao ar em
              <br />
              <span className="gt">semanas.</span>
            </h1>
            <p className="lead">
              Enquanto outros ainda estão no orçamento, o seu projeto já está sendo usado. Preço fechado, entregas toda
              semana e o código é seu.
            </p>
            <div className="cta">
              <Link href="/orcamento" className="btn-primary">
                Começar meu projeto <span className="dot">→</span>
              </Link>
              <Link href="/projetos" className="btn-ghost">
                Ver projetos
              </Link>
            </div>
          </div>

          <div className="stage" aria-label="Exemplo de um site sendo construído do dia 1 ao dia 21" role="img">
            <div className="day">
              DIA<b>00</b>
            </div>
            <div className="browser" aria-hidden="true">
              <div className="chrome">
                <i />
                <i />
                <i />
                <div className="url">
                  <span className="lock">🔒</span>
                  <span className="url-text" />
                  <span className="caret" />
                </div>
              </div>
              <div className="badge">● NO AR</div>
              <div className="vp">
                <div className="x x-nv" style={{ transform: "scale(.96)" }}>
                  <div className="t site-nav">
                    <b>NORTE</b>
                    <span>Projetos &nbsp; Estúdio &nbsp; Contato</span>
                  </div>
                </div>
                <div className="x x-hd" style={{ transform: "scale(.96)" }}>
                  <div className="t hdt">
                    Espaços que contam histórias.
                    <small>
                      Arquitetura e interiores
                      <br />
                      em Florianópolis.
                    </small>
                  </div>
                </div>
                <div className="x x-im" style={{ transform: "scale(.96)" }}>
                  <div className="t imgt">Casa Lagoa · 2026</div>
                </div>
                <div className="x x-bt" style={{ transform: "scale(.96)" }}>
                  <div className="t btt">Agendar visita</div>
                </div>
                <div className="x x-c1" style={{ transform: "scale(.96)" }}>
                  <div className="t ct">
                    <b>Projetos</b>residenciais
                  </div>
                </div>
                <div className="x x-c2" style={{ transform: "scale(.96)" }}>
                  <div className="t ct">
                    <b>Interiores</b>sob medida
                  </div>
                </div>
                <div className="x x-c3" style={{ transform: "scale(.96)" }}>
                  <div className="t ct">
                    <b>Reformas</b>completas
                  </div>
                </div>
                <div className="form-demo">
                  <h6>Agende uma visita</h6>
                  <div className="fi">Maria Souza</div>
                  <div className="fi">(48) 9 9999-0000</div>
                  <div className="fi">Sexta, 10h</div>
                  <div className="fb">Confirmar</div>
                </div>
                <div className="toast">
                  <i>✓</i>
                  <div>
                    Novo agendamento recebido
                    <small>agora mesmo · via site</small>
                  </div>
                </div>
              </div>
              <svg className="cursor" viewBox="0 0 24 24">
                <path d="M3 2l7 19 3-8 8-3z" fill="#fff" stroke="#000" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="rail" aria-hidden="true" style={{ position: "relative", bottom: "auto", marginTop: 72 }}>
          <div className="track" />
          <div className="fill" />
          {STAGES.map((s) => (
            <div key={s.id} className="stp" style={{ left: s.left }}>
              {s.label}
              <em>{s.day}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function confetti(host: HTMLElement) {
  const colors = ["#3de0ff", "#2f6bff", "#8b5cff", "#3ddc84", "#f0e6d2"];
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("div");
    s.className = "spark";
    s.style.background = colors[i % colors.length];
    s.style.left = "84%";
    s.style.top = "14%";
    host.appendChild(s);
    const a = Math.random() * Math.PI * 2;
    const d = 80 + Math.random() * 180;
    gsap.to(s, {
      x: Math.cos(a) * d,
      y: Math.sin(a) * d + 120,
      rotation: Math.random() * 720,
      opacity: 0,
      duration: 1.5 + Math.random() * 0.6,
      ease: "power2.out",
      onComplete: () => s.remove(),
    });
  }
}
