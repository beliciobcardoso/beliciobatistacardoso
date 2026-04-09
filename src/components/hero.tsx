/**
 * Hero Section Component
 *
 * Layout: 2 colunas — conteúdo à esquerda, terminal de status à direita.
 * Signature: "belicio.service" renderizado como output de systemctl status.
 * O painel terminal é decorativo (aria-hidden) — dados redundantes com o corpo da página.
 * Depth: borders-only. Sem sombras.
 */

interface HeroProps {
  readonly headline: string;
  readonly subheadline: string;
  readonly primaryCTA: { label: string; href: string };
  readonly secondaryCTA: { label: string; href: string };
}

export function Hero({ headline, subheadline, primaryCTA, secondaryCTA }: HeroProps) {
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

        {/* ── Right column: Terminal Panel (decorative) ── */}
        <div aria-hidden="true" className="hidden lg:block">
          <div className="terminal-panel">
            {/* macOS-style header */}
            <div className="terminal-header">
              <span className="terminal-dot bg-red-500/60" />
              <span className="terminal-dot bg-yellow-500/60" />
              <span className="terminal-dot bg-green-500/60" />
              <span className="terminal-title">~ belicio.service</span>
            </div>

            {/* Output */}
            <div className="terminal-body">
              <p className="text-green-400">
                <span className="mr-1">●</span>
                <span className="text-slate-100 font-medium">belicio.service</span>
                {" — Engenheiro de Software"}
              </p>
              <p className="text-slate-600 pl-4">
                {"   Loaded: experience="}
                <span className="text-green-400">24yr</span>
                {"; type=fullstack"}
              </p>
              <p className="text-slate-600 pl-4">
                {"   Active: "}
                <span className="text-green-400">active (running)</span>
                {" since Jan 2000"}
              </p>
              <p className="text-slate-600 pl-4">
                {"   PID: BC-01 (architect · mentor)"}
              </p>
              <p className="mt-3 text-slate-500"> Módulos carregados:</p>
              {[
                ["backend  ", "NestJS · TypeScript · APIs"],
                ["frontend ", "React · Next.js · Vite"],
                ["devops   ", "Docker · CI/CD · Grafana"],
                ["database ", "PostgreSQL · MongoDB · Redis"],
                ["arch     ", "Microsserviços · SOLID · DDD"],
              ].map(([mod, stack]) => (
                <p key={mod} className="text-slate-600 pl-2">
                  {"  ▸ "}
                  <span className="text-slate-500">{mod}</span>
                  {" "}
                  <span className="text-slate-300">{stack}</span>
                </p>
              ))}
              <p className="mt-3 text-slate-700">
                {"Jan 2000: "}
                <span className="text-slate-500">sistema iniciado com sucesso</span>
              </p>
              <p className="text-slate-700">
                {"2025:     "}
                <span className="text-slate-500">Pós-grad. Engenharia de Software </span>
                <span className="text-green-500">[loaded]</span>
              </p>
              <p className="mt-3 text-slate-600">
                <span className="text-slate-700">$ </span>
                <span className="terminal-cursor" />
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
