import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SmoothScroll from "@/components/site/SmoothScroll";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], axes: ["opsz"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Jelpooth | Sites, apps e sistemas sob medida", template: "%s | Jelpooth" },
  description: "Sites, aplicativos e sistemas sob medida no ar em semanas, com preço fechado e entregas semanais.",
  openGraph: { siteName: "Jelpooth", locale: "pt_BR", type: "website" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = { themeColor: "#05060a", viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
