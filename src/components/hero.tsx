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
    <section className="px-5 py-10 md:px-10 md:py-20 xl:px-30" aria-labelledby="hero-heading">
      <div className="mx-auto flex w-full max-w-360 flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-15">
        <div className="w-full lg:flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--border-accent) bg-[#22c55e15] px-3 py-1 md:hidden">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-(--accent) status-pulse" />
            <span className="font-mono text-[11px] text-(--accent)">
              Disponível · Bahia, BR
            </span>
          </div>

          <p className="font-mono text-[10px] tracking-[0.18em] text-(--accent) md:text-xs md:tracking-[0.16em]">
            ENGENHEIRO DE SOFTWARE · FULLSTACK · DEVOPS
          </p>

          <h1 id="hero-heading" className="mt-5 max-w-[18ch] text-4xl leading-[1.1] font-bold text-(--text-primary) md:text-6xl">
            {headline}
          </h1>

          <p className="mt-5 max-w-[63ch] text-[15px] leading-relaxed text-(--text-secondary) md:text-lg">
            {subheadline}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href={primaryCTA.href}
              target={primaryIsExternal ? "_blank" : undefined}
              rel={primaryIsExternal ? "noopener noreferrer" : undefined}
              className="inline-flex min-w-42.5 items-center justify-center rounded-lg bg-(--accent) px-7 py-3.5 text-sm font-semibold text-[#020617] transition-colors hover:bg-[#4ade80]"
            >
              {primaryCTA.label}
            </a>
            <a
              href={secondaryCTA.href}
              target={secondaryShouldOpenInNewTab ? "_blank" : undefined}
              rel={secondaryShouldOpenInNewTab ? "noopener noreferrer" : undefined}
              className="inline-flex min-w-42.5 items-center justify-center rounded-lg border border-(--text-muted) px-7 py-3.5 text-sm font-medium text-(--text-primary) transition-colors hover:border-(--text-secondary)"
            >
              {secondaryCTA.label}
            </a>
          </div>

          <div className="mt-8 flex w-full justify-between gap-5 sm:mt-10 sm:max-w-xl sm:justify-start sm:gap-10">
            {[
              { value: "24", label: "Anos de carreira" },
              { value: "3+", label: "Produtos próprios" },
              { value: "∞", label: "Sistemas resilientes" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <p className="font-mono text-[28px] leading-none font-bold text-(--text-primary) md:text-[34px]">
                  {value}
                </p>
                <p className="mt-1 text-[11px] text-(--text-muted)">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="w-full overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--bg-surface) lg:w-105">
          <div className="relative h-60 w-full md:h-80">
            <Image
              src="/imagen_main.png"
              alt="Belício Cardoso"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          <figcaption className="flex flex-col gap-2 px-4 py-4 md:px-6 md:py-5">
            <h2 className="text-xl font-semibold text-(--text-primary)">Belício Cardoso</h2>
            <p className="text-sm text-(--text-secondary)">Arquiteto de Soluções</p>
            <p className="text-[13px] text-(--text-muted)">Salvador, Bahia</p>

            <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-(--border-accent) bg-[#22c55e15] px-2.5 py-1">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-(--accent)" />
              <span className="text-[11px] text-(--accent)">Disponível</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
