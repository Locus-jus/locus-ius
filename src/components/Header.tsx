import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site, waLink } from "../config";
import { BrandLogo } from "./ui";

const NAV = [
  { href: "#portfolio", label: "Projetos", n: "01" },
  { href: "#servico", label: "Serviço", n: "02" },
  { href: "#processo", label: "Processo", n: "03" },
  { href: "#sobre", label: "Sobre", n: "04" },
  { href: "#faq", label: "FAQ", n: "05" },
];

const waCta = "Olá, gostaria de solicitar um orçamento para o site do meu escritório.";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 " +
        (scrolled || open
          ? "border-b border-line bg-ivory/92 shadow-[0_1px_0_0_rgb(36_34_30/0.04)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent")
      }
    >
      {/* Faixa de topo — microtipografia */}
      <div
        className={
          "hidden overflow-hidden border-b border-line transition-all duration-500 " +
          (scrolled ? "max-h-0" : "max-h-8")
        }
      >
        <div className="container-site flex items-center justify-between py-2.5">
          <span className="micro-label">Estúdio independente · direção de arte</span>
          <span className="micro-label hidden md:block">Foco — advocacia</span>
          <span className="micro-label">
            São Paulo
            <span aria-hidden="true" className="mx-1.5 text-stone">
              /
            </span>
            Brasil
          </span>
        </div>
      </div>

      <div className={"flex items-center justify-between transition-all duration-500 " + (scrolled ? "h-14" : "h-16 md:h-[4.6rem]")}>
        <div className="container-site flex w-full items-center justify-between">
          <a href="#topo" className="group" aria-label={`${site.brand} — início`}>
            <BrandLogo className="transition-opacity duration-300 group-hover:opacity-80" />
          </a>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Navegação principal">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[10px] font-semibold uppercase tracking-[0.24em] text-taupe transition-colors duration-300 hover:text-charcoal"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href={waLink(waCta)}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 border-b border-charcoal/60 pb-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-charcoal transition-colors duration-300 hover:border-champagne hover:text-champagne lg:inline-flex"
            >
              Iniciar conversa
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 text-champagne transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-charcoal lg:hidden"
              aria-expanded={open}
              aria-controls="menu-principal"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile — editorial em tela inteira */}
      <div
        id="menu-principal"
        className={
          "lg:hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
          (open ? "grid" : "grid grid-rows-[0fr]")
        }
      >
        <div className="overflow-hidden border-t border-line">
          <nav className="bg-ivory px-6 py-7" aria-label="Navegação principal móvel">
            <ul className="divide-y divide-line">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-5 py-5"
                  >
                    <span aria-hidden="true" className="font-display text-sm italic text-champagne">
                      {item.n}
                    </span>
                    <span className="font-display text-[26px] leading-none tracking-tight text-charcoal">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={waLink(waCta)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center gap-2 border-b border-charcoal/50 pb-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-charcoal"
            >
              Iniciar conversa
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-champagne" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
