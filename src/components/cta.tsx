/**
 * CTA Section Component
 *
 * Seção de conversão com prompt de terminal como elemento visual.
 * Centrada, densa, precisa. Sem gradientes decorativos.
 * O "$ contact" reforça a assinatura do sistema inteiro.
 */

interface CTAProps {
  readonly title: string;
  readonly description: string;
  readonly primaryButton: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  };
  readonly secondaryText?: string;
}

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function CTA({ title, description, primaryButton, secondaryText }: CTAProps) {
  const isPrimary = primaryButton.variant !== "secondary";
  const shouldOpenInNewTab = isExternalHref(primaryButton.href);

  return (
    <section
      id="contact"
      className="section-divider py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* Section label */}
        <p className="font-mono text-[0.7rem] text-slate-600 tracking-widest uppercase mb-5">
          04 / Contato
        </p>

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-5"
        >
          {title}
        </h2>

        <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          {description}
        </p>

        <a
          href={primaryButton.href}
          aria-label={primaryButton.label}
          target={shouldOpenInNewTab ? "_blank" : undefined}
          rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
          className={`inline-flex items-center px-6 py-3 text-sm font-semibold rounded-md
                      transition-colors duration-150
                      focus-visible:outline focus-visible:outline-2
                      focus-visible:outline-offset-2 focus-visible:outline-green-500
                      ${
                        isPrimary
                          ? "bg-green-500 text-[#020617] hover:bg-green-400 active:bg-green-600"
                          : "border border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200 hover:bg-slate-800/40"
                      }`}
        >
          {primaryButton.label}
        </a>

        {/* Terminal prompt */}
        {secondaryText && (
          <p className="font-mono text-[0.72rem] text-slate-700 mt-8">
            <span aria-hidden="true" className="text-slate-800">$ </span>
            {secondaryText}
          </p>
        )}
      </div>
    </section>
  );
}
