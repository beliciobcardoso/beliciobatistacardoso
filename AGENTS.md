<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Tailwind CSS vars

When using Tailwind with CSS variables, prefer the shorthand syntax like `text-(--text-primary)` and `hover:text-(--text-primary)` instead of `text-[var(--text-primary)]`.

## Tailwind spacing/size scale

Prefer native scale utilities when equivalent exists, instead of arbitrary bracket values. Examples:
- `xl:px-30` instead of `xl:px-[120px]`
- `max-w-360` instead of `max-w-[1440px]`


"varra o projeto e normalize todas as classes Tailwind que têm alternativa nativa (sem []), incluindo variants hover/md/xl."