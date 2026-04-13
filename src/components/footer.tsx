export function Footer() {
  return (
    <footer className="px-5 py-5 md:px-10 md:py-6 xl:px-30">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center justify-between gap-1 text-center md:flex-row md:text-left">
        <p className="text-xs text-(--text-muted) md:text-[13px]">
          © {new Date().getFullYear()} Belício Cardoso. Todos os direitos reservados.
        </p>
        <p className="text-xs text-(--text-muted) md:text-[13px]">
          Feito com Next.js, Tailwind CSS e dedicação.
        </p>
      </div>
    </footer>
  );
}
