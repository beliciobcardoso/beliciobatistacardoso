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
  const isWhatsAppLink = /wa\.me|api\.whatsapp\.com|whatsapp:/i.test(primaryButton.href);

  return (
    <section
      id="contact"
      className="section-divider px-5 py-12 md:px-10 md:py-24 xl:px-30"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto flex w-full max-w-360 flex-col items-center text-center">
        <p className="font-mono text-[11px] tracking-[0.16em] text-(--accent)">04 / CONTATO</p>

        <h2 id="cta-heading" className="mt-3 max-w-[20ch] text-3xl font-bold text-(--text-primary) md:text-[36px]">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-(--text-secondary) md:text-base">
          {description}
        </p>

        <a
          href={primaryButton.href}
          aria-label={primaryButton.label}
          target={shouldOpenInNewTab ? "_blank" : undefined}
          rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
          className={`mt-8 inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold transition-colors
                      ${
                        isPrimary
                          ? "bg-(--accent) text-[#020617] hover:bg-[#4ade80]"
                          : "border border-(--text-muted) text-(--text-primary) hover:border-(--text-secondary)"
                       }`}
        >
          {isWhatsAppLink ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="currentColor">
              <path d="M20.52 3.48A11.92 11.92 0 0 0 12.02 0C5.41 0 .03 5.37.02 11.99a11.9 11.9 0 0 0 1.62 5.95L0 24l6.23-1.63a12 12 0 0 0 5.77 1.47h.01c6.61 0 11.99-5.37 12-11.99a11.9 11.9 0 0 0-3.49-8.37ZM12 21.82h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.6-.23-.37a9.84 9.84 0 0 1-1.5-5.24c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.13 1.03 6.99 2.9a9.82 9.82 0 0 1 2.88 6.98c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49a9.15 9.15 0 0 1-1.68-2.08c-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.94-2.25-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.06 2.9 1.21 3.1.15.2 2.08 3.18 5.05 4.45.71.31 1.27.5 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.04-1.43.25-.7.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35Z" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {primaryButton.label}
        </a>

        {secondaryText && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-(--bg-surface) px-5 py-3">
            <span aria-hidden="true" className="font-mono text-sm text-(--accent)">$</span>
            <p className="font-mono text-xs text-(--text-muted) md:text-sm">{secondaryText}</p>
          </div>
        )}
      </div>
    </section>
  );
}
