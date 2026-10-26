export type Service = {
  slug: string;
  tag: string;
  title: string;
  short: string;
  long: string;
  deadline: string;
  includes: string[];
  forWho: string;
  preview: string;
};

// Prazos médios são exemplos até a Jelpooth confirmar os valores reais.
export const services: Service[] = [
  {
    slug: "landing-pages",
    tag: "Landing",
    title: "Landing pages",
    short: "Para vender um produto, captar contatos ou lançar uma campanha.",
    long: "Uma página única, rápida e direta, pensada para transformar visita em contato ou venda.",
    deadline: "A partir de 1 semana",
    forWho: "Lançamentos, campanhas pagas, listas de espera e eventos.",
    includes: ["Texto e layout focados em conversão", "Formulário ou WhatsApp integrado", "Métricas do Google e pixel de anúncios"],
    preview: "linear-gradient(135deg,#ff7a59,#ffb36b)",
  },
  {
    slug: "sites-institucionais",
    tag: "Site",
    title: "Sites institucionais",
    short: "A vitrine da empresa: rápida, bonita no celular e pronta para o Google.",
    long: "O site que apresenta a sua empresa com credibilidade e leva o visitante a falar com você.",
    deadline: "Cerca de 2 semanas",
    forWho: "Empresas e profissionais que precisam passar confiança online.",
    includes: ["Até 6 páginas", "SEO básico e Google Business", "Painel simples para editar textos"],
    preview: "linear-gradient(160deg,#c9a46b,#2a1d14)",
  },
  {
    slug: "mvp",
    tag: "MVP",
    title: "MVP de app ou plataforma",
    short: "Tire a ideia do papel e valide com clientes reais antes de investir alto.",
    long: "A primeira versão funcional do seu produto, com o essencial para colocar na mão de usuários reais.",
    deadline: "Cerca de 4 semanas",
    forWho: "Startups, novos produtos digitais e ideias que precisam de validação.",
    includes: ["Login, cadastro e painel", "Pagamentos e notificações", "Versão web que funciona no celular"],
    preview: "linear-gradient(135deg,#8b5cff,#3de0ff)",
  },
  {
    slug: "sistemas",
    tag: "Sistema",
    title: "Sistemas e painéis",
    short: "Troque planilhas e processos manuais por um sistema do seu jeito.",
    long: "Um sistema interno feito para o jeito que a sua empresa trabalha, sem adaptar o processo ao software.",
    deadline: "Sob medida",
    forWho: "Empresas que controlam pedidos, estoque, agenda ou clientes em planilhas.",
    includes: ["Cadastros e permissões por usuário", "Relatórios e painéis", "Acesso de qualquer lugar"],
    preview: "linear-gradient(135deg,#0f2a1c,#3ddc84)",
  },
  {
    slug: "automacoes",
    tag: "Auto",
    title: "Automações e integrações",
    short: "WhatsApp, e-mail, pagamentos e planilhas conversando sozinhos.",
    long: "Conectamos as ferramentas que você já usa para eliminar tarefas repetitivas.",
    deadline: "Sob medida",
    forWho: "Equipes que perdem horas copiando dados de um lugar para outro.",
    includes: ["Mensagens automáticas", "Integração com pagamentos e ERPs", "Alertas e relatórios automáticos"],
    preview: "linear-gradient(135deg,#2f6bff,#0b1a45)",
  },
];

export const steps = [
  { k: "01", title: "Conversa", text: "Entendemos o seu negócio e o que precisa sair do papel primeiro.", when: "DIA 0" },
  { k: "02", title: "Proposta fechada", text: "Escopo, prazo e valor definidos antes de começar. Sem surpresa no fim.", when: "EM ATÉ 1 DIA ÚTIL" },
  { k: "03", title: "Entregas semanais", text: "Toda semana você testa uma versão nova e pede ajustes no caminho.", when: "TODA SEXTA" },
  { k: "04", title: "No ar e com suporte", text: "Publicamos, deixamos tudo no seu nome e seguimos por perto.", when: "SEU DOMÍNIO" },
];

export const reasons = [
  { label: "Prazo", big: "Semanas", text: "e não meses. A primeira versão chega logo para você testar." },
  { label: "Preço", big: "Fechado", text: "Você sabe quanto vai investir antes do primeiro dia." },
  { label: "Propriedade", big: "100% seu", text: "Código, domínio e acessos no nome da sua empresa." },
  { label: "Atendimento", big: "Direto", text: "Fale com quem está construindo, sem intermediários." },
];

export type Project = {
  slug: string;
  name: string;
  headline: string;
  caption: string;
  summary: string;
  challenge: string;
  solution: string;
  tags: string[];
  stack: string[];
  url: string;
  theme: "mind" | "jel";
};

export const projects: Project[] = [
  {
    slug: "jelpmind",
    name: "JelpMind",
    headline: "Provas corrigidas pela câmera do celular.",
    caption: "Lista de espera do JelpMind.",
    summary: "Página de lançamento com vídeo do produto, cadastro protegido e indicação pelo WhatsApp.",
    challenge: "Captar professores interessados antes do lançamento, sem cadastros duplicados ou falsos.",
    solution: "Landing page com vídeo de demonstração, animações na rolagem, cadastro gravado em banco com regras de segurança e convite pronto para compartilhar no WhatsApp.",
    tags: ["Landing page", "Cadastro"],
    stack: ["React", "Tailwind", "Firebase"],
    url: "https://lpjelpmind.jelpooth.com.br",
    theme: "mind",
  },
  {
    slug: "jelpooth",
    name: "Site da Jelpooth",
    headline: "Da ideia ao ar em semanas.",
    caption: "O site que você está vendo agora.",
    summary: "Rápido, responsivo e animado, feito para gerar pedidos de orçamento.",
    challenge: "Mostrar velocidade e qualidade sem depender de textos longos.",
    solution: "Home que se constrói na tela, animações ligadas à rolagem e um pedido de orçamento em poucos passos.",
    tags: ["Site institucional"],
    stack: ["Next.js", "GSAP", "Tailwind"],
    url: "https://jelpooth.com.br",
    theme: "jel",
  },
];

export const segments = [
  { name: "Comércio e varejo", problem: "Vendas presas ao balcão e ao Instagram.", solution: "Catálogo online, pedidos pelo WhatsApp e loja virtual quando fizer sentido.", service: "Sites institucionais" },
  { name: "Saúde e clínicas", problem: "Agenda no caderno e pacientes que esquecem a consulta.", solution: "Site com agendamento online e lembretes automáticos.", service: "Automações e integrações" },
  { name: "Educação", problem: "Inscrições, turmas e materiais espalhados em várias ferramentas.", solution: "Plataforma para inscrição, área do aluno e comunicação com a turma.", service: "MVP de app ou plataforma" },
  { name: "Prestadores de serviço", problem: "Orçamentos manuais e clientes que somem no meio do caminho.", solution: "Página de captação e sistema simples de orçamentos e acompanhamento.", service: "Sistemas e painéis" },
  { name: "Startups", problem: "Uma ideia promissora que precisa provar valor rápido.", solution: "MVP enxuto para validar com usuários reais e apresentar a investidores.", service: "MVP de app ou plataforma" },
  { name: "Indústria e distribuição", problem: "Pedidos, estoque e entregas controlados em planilhas.", solution: "Painel de pedidos e estoque com acesso da equipe e dos representantes.", service: "Sistemas e painéis" },
];

export const techs = [
  ["react", "React"],
  ["nodejs", "Node.js"],
  ["firebase", "Firebase"],
  ["tailwind", "Tailwind"],
  ["angular", "Angular"],
  ["docker", "Docker"],
  ["figma", "Figma"],
  ["github", "GitHub"],
] as const;
