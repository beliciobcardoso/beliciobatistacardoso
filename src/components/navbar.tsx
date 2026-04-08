/**
 * Navbar Component
 *
 * Fixed top navigation — dark, ultra-minimal.
 * Logo: BC monogram + domain. Links: scroll anchors.
 * Depth strategy: border-bottom only (borders-only approach).
 */

export function Navbar() {
  const links = [
    { href: "#about",    label: "Sobre"    },
    { href: "#skills",   label: "Skills"   },
    { href: "#projects", label: "Projetos" },
    { href: "#contact",  label: "Contato"  },
  ] as const;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-14
                 flex items-center
                 border-b border-slate-800/60
                 bg-[#020617]/90 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Belício Cardoso — Início"
          className="flex items-center gap-2.5 rounded
                     focus-visible:outline focus-visible:outline-2
                     focus-visible:outline-offset-2 focus-visible:outline-green-500"
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-7 h-7
                       bg-green-500 text-[#020617] text-xs font-bold rounded font-mono"
          >
            BC
          </span>
          <span className="font-mono text-slate-500 text-sm hidden sm:block tracking-tight">
            beliciocardoso.dev
          </span>
        </a>

        {/* Navigation */}
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-0.5" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-1.5 text-sm text-slate-500
                             hover:text-slate-200 hover:bg-slate-800/50
                             rounded transition-colors duration-150
                             focus-visible:outline focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-green-500"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
