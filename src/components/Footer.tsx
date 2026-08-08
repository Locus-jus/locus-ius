import { AtSign, ArrowUpRight, Mail } from "lucide-react";
import { site, waLink } from "../config";
import { BrandLogo, WhatsAppIcon } from "./ui";

const NAV = [
  { href: "#portfolio", label: "Projetos" },
  { href: "#servico", label: "Serviço" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t border-line-dark bg-brown">
      <div className="container-site py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <BrandLogo tone="dark" />
            <p className="micro-label mt-8 text-champagne-bright">Sites para advocacia</p>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ivory/65">
              Estúdio independente para escritórios de advocacia: da conversa e da direção de arte ao site
              publicado — uma pessoa, do início ao fim.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-champagne-bright"></span>
              <a
                href="#topo"
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/60 transition-colors duration-300 hover:text-ivory"
              >
                Voltar ao topo
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="micro-label text-ivory/50">Navegação</p>
            <nav aria-label="Rodapé" className="mt-7 flex flex-col gap-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="link-underline w-fit text-[13px] font-medium uppercase tracking-[0.18em] text-ivory/80 transition-colors duration-300 hover:text-champagne-bright"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <p className="micro-label text-ivory/50">Contato</p>
            <ul className="mt-7 space-y-5">
              <li>
                <a
                  href={waLink("Olá, vim pelo site e quero conversar sobre um projeto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-3.5 text-sm text-ivory/80 hover:text-ivory"
                >
                  <WhatsAppIcon className="h-4 w-4 text-champagne-bright" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline inline-flex items-center gap-3.5 text-sm text-ivory/80 hover:text-ivory"
                >
                  <Mail className="h-4 w-4 text-champagne-bright" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                {site.instagram ? (
                  <a
                    href={`https://instagram.com/${site.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-3.5 text-sm text-ivory/80 hover:text-ivory"
                  >
                    <AtSign className="h-4 w-4 text-champagne-bright" aria-hidden="true" />
                    @{site.instagram}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-3.5 text-sm text-ivory/50">
                    <AtSign className="h-4 w-4 text-champagne-bright" aria-hidden="true" />
                    Instagram — em breve
                  </span>
                )}
              </li>
            </ul>
            <a
              href={waLink("Olá, gostaria de solicitar um orçamento para o site do meu escritório.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-champagne-bright"
            >
              Iniciar conversa
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-line-dark pt-8">
          <p className="max-w-3xl text-[12px] leading-relaxed text-ivory/40">
            © {year} {site.brand}. Os projetos apresentados nesta página são conceituais — totalmente
            fictícios, criados para demonstrar possibilidades de direção de design.
          </p>
        </div>
      </div>

      {/* Wordmark gigante, cortada pela base do rodapé */}
      <div aria-hidden="true" className="select-none overflow-hidden px-4">
        <p className="-mb-[0.18em] whitespace-nowrap text-center font-display text-[clamp(3.4rem,13vw,11rem)] uppercase leading-none tracking-[-0.02em] text-ivory/[0.05]">
          locus, ius
        </p>
      </div>
    </footer>
  );
}
