export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-stone-200 border-t border-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold tracking-[0.35em] text-stone-900 mb-2 uppercase">
              SHACK MOUNTS
            </div>
            <p className="text-sm text-stone-600 mb-4">
              Rugged connectivity hardware for mountains, oceans, and mission scenes.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-600">
              contact@shackmounts.com
            </p>
          </div>
          <div className="text-sm text-stone-600 flex flex-col gap-2 uppercase tracking-[0.3em]">
            <a href="#hero" className="hover:text-stone-900 transition-colors">
              Home
            </a>
            <a href="#product" className="hover:text-stone-900 transition-colors">
              Products
            </a>
            <a href="#why" className="hover:text-stone-900 transition-colors">
              Why ShackMounts
            </a>
            <a href="#specs" className="hover:text-stone-900 transition-colors">
              Specs
            </a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">
              Contact
            </a>
          </div>
          <div className="text-sm text-stone-600">
            <p className="mb-2">Lifetime Toughness Warranty</p>
            <p className="text-xs">
              Not affiliated with Starlink or SpaceX. ShackMounts hardware is designed for the Starlink Mini.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-stone-600 tracking-[0.4em] uppercase">
          © {currentYear} ShackMounts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
