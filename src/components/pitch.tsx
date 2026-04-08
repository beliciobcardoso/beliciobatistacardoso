/**
 * Pitch Section Component
 * 
 * Responsabilidade: Apresentar o "Elevator Pitch" com narrativa profissional.
 * Padrão: Presentational component (stateless)
 * Acessibilidade: Estrutura semântica com article
 */

interface PitchProps {
  readonly title: string;
  readonly content: string;
  readonly keyFocus: readonly string[];
}

export function Pitch({ title, content, keyFocus }: PitchProps) {
  return (
    <article className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
          {title}
        </h2>

        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-8">
          {content}
        </p>

        {/* Key Focus Pillars */}
        {keyFocus.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white mb-4">
              Foco Principal
            </h3>
            <ul className="space-y-3">
              {keyFocus.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                >
                  <span className="inline-block w-2 h-2 mt-2 bg-blue-600 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
