// Dados de contato e navegação usados no site inteiro.
// Troque os valores marcados como "a confirmar" antes de publicar.
export const site = {
  name: "Jelpooth",
  tagline: "Sites, aplicativos e sistemas sob medida, entregues em semanas.",
  url: "https://jelpooth.com.br",
  email: "contato@jelpooth.com.br", // a confirmar
  whatsapp: "5500000000000", // a confirmar: DDI + DDD + número, só dígitos
  instagram: "https://instagram.com/jelpooth", // a confirmar
  linkedin: "https://linkedin.com/company/jelpooth", // a confirmar
  responseTime: "1 dia útil",
};

export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];
