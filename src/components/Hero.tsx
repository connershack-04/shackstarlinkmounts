import { ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#f4eddf]"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(63,78,58,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(63,78,58,0.08)_1px,transparent_1px)] bg-[size:46px_46px]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f4ea]/80 via-transparent to-[#e8dcc0]/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-4 mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1f2a1c] uppercase leading-tight">
            ShackMounts Field Kit
          </h1>
          <p className="text-lg sm:text-xl text-[#3f5a2a] tracking-[0.35em] uppercase">
            Starlink Mini · Rugged Roof Mount · Hardware
          </p>
        </div>

        <p className="text-xl sm:text-2xl text-[#3f3a2c] mb-8 max-w-3xl mx-auto leading-relaxed">
          Reliable Starlink Mini connectivity for remote workers, first responders, and military.
          Durable hardware engineered to perform when communication is critical.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@shackmounts.com?subject=ShackMounts%20Field%20Kit%20Preorder"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3f5a2a] hover:bg-[#2f4a1f] text-[#f4f0e6] font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105 shadow-lg shadow-[#2f4a1f]/15"
          >
            Preorder Combo Kit
            <ChevronRight size={18} />
          </a>
          <button
            onClick={scrollToProduct}
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#8c7b56] text-[#2b3125] bg-white/70 hover:bg-[#e8ddc4] font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
          >
            View Products
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4eddf] to-transparent" />
    </section>
  );
}
