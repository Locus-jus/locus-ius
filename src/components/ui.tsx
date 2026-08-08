import { useEffect, useRef, type ReactNode } from "react";

/* ============ MARCA — Locus, Ius ============ */
export function BrandWordmark({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={"inline-flex flex-col " + className}>
      <span
        className={
          "font-display text-[20px] leading-none tracking-[-0.04em] md:text-[22px] " +
          (tone === "dark" ? "text-ivory" : "text-charcoal")
        }
      >
        Locus<span className="text-champagne">,</span> Ius
      </span>
      <span
        className={
          "mt-1.5 text-[8.5px] font-semibold uppercase tracking-[0.32em] " +
          (tone === "dark" ? "text-ivory/50" : "text-taupe")
        }
      >
        Sites para advocacia
      </span>
    </span>
  );
}

export function BrandLogo({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const text = tone === "dark" ? "text-ivory" : "text-charcoal";
  const sub = tone === "dark" ? "text-ivory/55" : "text-taupe";
  const accent = "#c3a86e";

  return (
    <span className={"inline-flex items-center gap-3 " + className}>
      <span className="relative h-12 w-10 shrink-0">
        <span className={"absolute left-[1px] top-[-2px] font-serif text-[40px] leading-none " + text}>L</span>
        <span className={"absolute right-0 top-[7px] font-serif text-[33px] leading-none " + text}>I</span>
        <span
          aria-hidden="true"
          className="absolute bottom-1.5 left-[15px] h-2.5 w-2.5 rotate-45"
          style={{ background: accent }}
        ></span>
      </span>

      <span className="inline-flex flex-col">
        <span className={"font-serif italic text-[22px] leading-none tracking-[-0.04em] " + text}>
          locus<span style={{ color: accent }}>,</span> <span style={{ color: tone === "dark" ? "#d7be86" : accent }}>ius</span>
        </span>
        <span className={"mt-1 text-[8.5px] font-semibold uppercase tracking-[0.34em] " + sub}>
          Sites para advocacia
        </span>
      </span>
    </span>
  );
}

/* Monograma LI — versão inline (favicon / avatares / selo) */
export function LocusMark({
  className = "h-10 w-10",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const stroke = tone === "light" ? "#111827" : "#f7f8fb";
  const accent = "#2563eb";
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" className={className}>
      <rect width="128" height="128" fill={tone === "light" ? "#f7f8fb" : "#0f172a"} />
      <g stroke={stroke} strokeWidth="7">
        <line x1="26" y1="28" x2="26" y2="100" />
        <line x1="26" y1="94" x2="62" y2="94" />
        <line x1="86" y1="28" x2="86" y2="100" />
        <line x1="70" y1="28" x2="102" y2="28" />
      </g>
      <line x1="70" y1="100" x2="102" y2="100" stroke={accent} strokeWidth="7.5" />
    </svg>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* Fotografia com entrada em escala lenta (use em conjunto com <Reveal>) */
export function useParallax(strength = 16) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        const offset = Math.max(-1, Math.min(1, progress)) * strength;
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return ref;
}

export function Section({
  id,
  eyebrow,
  index,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  index?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      <div className="container-site">
        <Reveal>
          <div>
            <div className="flex items-center justify-between border-b border-line pb-4">
              <p className="eyebrow">
                <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
                {eyebrow}
              </p>
              {index ? (
                <span aria-hidden="true" className="micro-label">
                  {index}
                </span>
              ) : null}
            </div>
            <h2 className="font-display-xl mt-10 max-w-4xl text-[clamp(2.5rem,5.4vw,4.9rem)] leading-[1.02] text-charcoal md:mt-12">
              {title}
            </h2>
            {intro ? (
              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-taupe md:text-base">{intro}</p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function WhatsAppIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.83 14.02c-.25.7-1.45 1.33-2.02 1.42-.52.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.54-3.47-1.56-4.99-4.34-5.14-4.54-.15-.2-1.23-1.63-1.23-3.11 0-1.48.78-2.21 1.06-2.51.28-.29.61-.38.81-.38.2 0 .41 0 .58.01.19.01.44-.07.69.53.25.61.86 2.11.93 2.38.07.15.12.33.02.53-.09.2-.14.32-.28.5-.14.17-.3.39-.42.52-.14.14-.29.29-.12.58.16.28.73 1.2 1.56 1.95 1.07.94 1.95 1.26 2.26 1.4.28.14.44.12.61-.07.17-.2.7-.84.89-1.1.16-.28.36-.23.62-.14.25.09 1.6.89 1.9 1.03.28.14.46.2.53.31.07.12.07.66-.2 1.35z" />
    </svg>
  );
}
