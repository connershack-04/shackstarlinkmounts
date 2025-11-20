export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#e8ddc4] border-t border-[#d1c19f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold tracking-[0.35em] text-[#2b3125] mb-2 uppercase">
              SHACK MOUNTS
            </div>
            <p className="text-sm text-[#4f4b3b] mb-4">
              Rugged connectivity hardware for mountains, oceans, and mission scenes.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#4f4b3b]">
              contact@shackmounts.com
            </p>
          </div>
          <div className="text-sm text-[#4f4b3b] flex flex-col gap-2 uppercase tracking-[0.3em]">
            <a href="#hero" className="hover:text-[#1f2a1c] transition-colors">
              Home
            </a>
            <a href="#product" className="hover:text-[#1f2a1c] transition-colors">
              Products
            </a>
            <a href="#why" className="hover:text-[#1f2a1c] transition-colors">
              Why ShackMounts
            </a>
            <a href="#specs" className="hover:text-[#1f2a1c] transition-colors">
              Specs
            </a>
            <a href="#contact" className="hover:text-[#1f2a1c] transition-colors">
              Contact
            </a>
          </div>
          <div className="text-sm text-[#4f4b3b]">
            <p className="mb-2">Lifetime Toughness Warranty</p>
            <p className="text-xs">
              Not affiliated with Starlink or SpaceX. ShackMounts hardware is designed for the Starlink Mini.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-[#4f4b3b] tracking-[0.4em] uppercase">
          © {currentYear} ShackMounts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
