/**
 * Hero Section Component
 *
 * Layout: 2 colunas — conteúdo à esquerda, terminal de status à direita.
 * A coluna direita destaca a foto profissional da marca pessoal.
 * Depth: borders-only. Sem sombras.
 */

import Image from "next/image";

interface HeroProps {
  readonly headline: string;
  readonly subheadline: string;
  readonly primaryCTA: { label: string; href: string };
  readonly secondaryCTA: { label: string; href: string; newTab?: boolean };
}

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function Hero({ headline, subheadline, primaryCTA, secondaryCTA }: HeroProps) {
  const primaryIsExternal = isExternalHref(primaryCTA.href);
  const secondaryShouldOpenInNewTab = secondaryCTA.newTab || isExternalHref(secondaryCTA.href);

  return (
    <section
      className="min-h-[calc(100vh-3.5rem)] flex items-center
                 pt-14 py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1fr_460px] gap-14 lg:gap-20 items-center">

        {/* ── Left column ── */}
        <div>
          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-8">
            <span
              aria-hidden="true"
              className="status-pulse inline-block w-2 h-2 rounded-full bg-green-500"
            />
            <span className="font-mono text-[0.7rem] text-slate-600 tracking-widest uppercase">
              Disponível para projetos · Bahia, BR
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight
                       text-slate-50 leading-[1.07]"
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-400 max-w-xl">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex items-center gap-3 flex-wrap">
            <a
              href={primaryCTA.href}
              target={primaryIsExternal ? "_blank" : undefined}
              rel={primaryIsExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center px-5 py-2.5
                         bg-green-500 text-[#020617] text-sm font-semibold rounded-md
                         hover:bg-green-400 active:bg-green-600
                         transition-colors duration-150
                         focus-visible:outline-2
                         focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              {primaryCTA.label}
            </a>
            <a
              href={secondaryCTA.href}
              target={secondaryShouldOpenInNewTab ? "_blank" : undefined}
              rel={secondaryShouldOpenInNewTab ? "noopener noreferrer" : undefined}
              className="inline-flex items-center px-5 py-2.5
                         border border-slate-700 text-slate-400 text-sm font-medium rounded-md
                         hover:border-slate-600 hover:text-slate-200 hover:bg-slate-800/40
                         active:bg-slate-800
                         transition-colors duration-150
                         focus-visible:outline-2
                         focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              {secondaryCTA.label}
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-12 flex items-center gap-8 flex-wrap">
            {[
              { value: "24", label: "Anos de carreira" },
              { value: "3+",  label: "Produtos próprios" },
              { value: "∞",   label: "Sistemas resilientes" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-mono text-2xl font-bold text-slate-100 leading-none
                              [font-variant-numeric:tabular-nums]">
                  {value}
                </p>
                <p className="text-xs text-slate-600 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: Portrait Card ── */}
        <div className="w-[85%] max-w-md mx-auto lg:max-w-none">
          <figure className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-[0_0_0_1px_rgba(148,163,184,0.06)] mt-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.15),rgba(2,6,23,0.85))]" />
            <div className="relative p-4 sm:p-5">
              <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-stone-400/10">
                <Image
                  src="/brand-portrait.webp"
                  alt="Belício Batista Cardoso"
                  width={800}
                  height={800}
                  priority
                  className="h-full w-[80%] object-contain mx-auto"
                  sizes="(min-width: 800px) 460px, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              <figcaption className="mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.65rem] tracking-[0.24em] uppercase text-slate-500">
                      Marca pessoal
                    </p>
                    <h2 className="text-xl font-semibold text-slate-50">
                      Belício Batista Cardoso
                    </h2>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-green-400">
                    Disponível
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-slate-500">
                      Cargo
                    </p>
                    <p className="mt-1 text-slate-200">Arquiteto de Soluções</p>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-slate-500">
                      Base
                    </p>
                    <p className="mt-1 text-slate-200">Salvador, Bahia</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>

      </div>
    </section>
  );
}
