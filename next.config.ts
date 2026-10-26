import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Endereços antigos continuam funcionando e apontam para as novas páginas.
  async redirects() {
    return [
      { source: "/page/aboutus", destination: "/sobre", permanent: true },
      { source: "/page/services", destination: "/servicos", permanent: true },
      { source: "/page/solutions", destination: "/solucoes", permanent: true },
      { source: "/page/customers", destination: "/projetos", permanent: true },
      { source: "/page/contacts", destination: "/contato", permanent: true },
    ];
  },
};

export default nextConfig;
