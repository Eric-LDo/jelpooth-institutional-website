"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Link href="/" className="brand" aria-label="Jelpooth, página inicial">
            <i className="mark" />
            JELPOOTH
          </Link>
          <nav aria-label="Principal">
            <ul className="nav-links">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/orcamento" className="pill">
            Pedir orçamento
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      {open && (
        <nav className="mobile-nav" aria-label="Menu">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <Link href="/orcamento" className="btn-primary" style={{ marginTop: 24, alignSelf: "flex-start", fontSize: 15 }}>
            Pedir orçamento <span className="dot">→</span>
          </Link>
        </nav>
      )}
    </>
  );
}
