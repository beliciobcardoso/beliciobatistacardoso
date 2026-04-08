/**
 * CTA (Call-To-Action) Section Component
 * 
 * Responsabilidade: Apresentar chamada principal para conversão/contato.
 * Padrão: Presentational component
 * Acessibilidade: Semantic HTML com role apropriado
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

export function CTA({
  title,
  description,
  primaryButton,
  secondaryText,
}: CTAProps) {
  const buttonClass =
    primaryButton.variant === "secondary"
      ? "border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
      : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800";

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" role="region" aria-label="Call to action">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          {title}
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <a
          href={primaryButton.href}
          className={`inline-block px-8 py-3 font-semibold rounded-lg transition-colors duration-200 ${buttonClass}`}
        >
          {primaryButton.label}
        </a>

        {secondaryText && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            {secondaryText}
          </p>
        )}
      </div>
    </section>
  );
}
