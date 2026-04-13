"use client";

import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ] as const;

  return (
    <header className="border-b border-(--border-subtle) bg-[#020617cc] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-360 items-center justify-between px-5 py-4 md:px-10 xl:px-30">
        <a
          href="#"
          aria-label="Belício Cardoso — Início"
          className="flex items-center gap-2 rounded"
        >
          <span aria-hidden="true" className="size-6 rounded-full bg-(--accent) md:size-7" />
          <span className="hidden text-sm font-medium text-(--text-primary) sm:block md:hidden">
            belicio.bcardoso
          </span>
          <span className="hidden text-sm font-medium text-(--text-primary) md:block">
            belicio.bcardoso.nom.br
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-(--text-secondary) transition-colors hover:text-(--text-primary)"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 rounded-full border border-(--border-accent) bg-[#22c55e15] px-3 py-1 lg:flex">
          <span aria-hidden="true" className="size-2 rounded-full bg-(--accent) status-pulse" />
          <span className="font-mono text-xs text-(--accent)">
            Disponível para projetos · Bahia, BR
          </span>
        </div>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="text-(--text-primary) lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="Navegação mobile" className="border-t border-(--border-subtle) px-5 py-4 lg:hidden">
          <ul className="space-y-3" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-sm text-(--text-secondary) transition-colors hover:text-(--text-primary)"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
