import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { services } from "@/data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="fg">
          <div>
            <Link href="/" className="brand">
              <i className="mark" />
              JELPOOTH
            </Link>
            <p style={{ marginTop: 16, maxWidth: 300, lineHeight: 1.6 }}>{site.tagline}</p>
          </div>
          <div>
            <h6>Serviços</h6>
            <ul>
              {services.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicos#${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6>Empresa</h6>
            <ul>
              <li><Link href="/sobre">Sobre nós</Link></li>
              <li><Link href="/projetos">Projetos</Link></li>
              <li><Link href="/contato">Contato</Link></li>
              <li><Link href="/privacidade">Política de privacidade</Link></li>
            </ul>
          </div>
          <div>
            <h6>Fale com a gente</h6>
            <ul>
              <li><a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp {site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener">Instagram</a> ·{" "}
                <a href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>© {new Date().getFullYear()} Jelpooth</span>
          <span>Feito em semanas, como os seus projetos.</span>
        </div>
      </div>
    </footer>
  );
}
