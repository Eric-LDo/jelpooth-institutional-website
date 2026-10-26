# Jelpooth: site institucional

Site da Jelpooth em Next.js 15 (App Router) com Tailwind 4.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Bibliotecas

| Biblioteca | Para quê |
| --- | --- |
| `gsap` + `@gsap/react` | Animações: linha do tempo do hero, ScrollTrigger (efeitos presos à rolagem) e SplitText (títulos linha a linha). Mesma base usada pela home do angular.dev na versão 17. |
| `lenis` | Rolagem suave, sincronizada com o relógio do GSAP. |
| `react-hook-form` + `zod` + `@hookform/resolvers` | Formulários de orçamento e contato com validação. |
| `lucide-react` | Ícones. |

## Onde editar

- `src/data/site.ts`: e-mail, WhatsApp, redes sociais e menu. **Troque os valores marcados como "a confirmar" antes de publicar.**
- `src/data/content.ts`: serviços, prazos, etapas, projetos e segmentos.
- `src/app/globals.css`: cores, fontes e estilos (tokens no topo do arquivo).

Os formulários não têm servidor: ao enviar, abrem o WhatsApp com a mensagem pronta e levam para `/obrigado`.
