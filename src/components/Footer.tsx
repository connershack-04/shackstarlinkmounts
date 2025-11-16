export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold tracking-[0.35em] text-zinc-100 mb-2 uppercase">
              SHACK MOUNTS
            </div>
            <p className="text-sm text-zinc-500 mb-4">
              Rugged connectivity hardware for mountains, oceans, and mission scenes.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              contact@shackmounts.com
            </p>
          </div>
          <div className="text-sm text-zinc-400 flex flex-col gap-2 uppercase tracking-[0.3em]">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#product" className="hover:text-white transition-colors">
              Products
            </a>
            <a href="#why" className="hover:text-white transition-colors">
              Why ShackMounts
            </a>
            <a href="#specs" className="hover:text-white transition-colors">
              Specs
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <div className="text-sm text-zinc-500">
            <p className="mb-2">Lifetime Toughness Warranty</p>
            <p className="text-xs">
              Not affiliated with Starlink or SpaceX. ShackMounts hardware is designed for the Starlink Mini.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-zinc-600 tracking-[0.4em] uppercase">
          © {currentYear} ShackMounts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
