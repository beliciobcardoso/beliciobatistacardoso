/**
 * Hero Section Component
 * 
 * Responsabilidade: Apresentar o headline principal, sub-headline e CTAs primários.
 * Padrão: Presentational component (stateless)
 * SEO: Contém h1 com palavra-chave principal
 */

interface HeroProps {
  readonly headline: string;
  readonly subheadline: string;
  readonly primaryCTA: {
    label: string;
    href: string;
  };
  readonly secondaryCTA: {
    label: string;
    href: string;
  };
}

export function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section
      className="relative isolate py-20 px-4 sm:px-6 lg:px-8"
      role="banner"
    >
      <div className="mx-auto max-w-4xl">
        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl">
          {subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <a
            href={primaryCTA.href}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            aria-label={primaryCTA.label}
          >
            {primaryCTA.label}
          </a>
          <a
            href={secondaryCTA.href}
            className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200"
            aria-label={secondaryCTA.label}
          >
            {secondaryCTA.label}
          </a>
        </div>
      </div>
    </section>
  );
}
