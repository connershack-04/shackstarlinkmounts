import { ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-4 mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-100 uppercase leading-tight">
            ShackMounts Field Kit
          </h1>
          <p className="text-lg sm:text-xl text-orange-400 tracking-[0.35em] uppercase">
            Starlink Mini · Rugged Roof Mount · Hardware
          </p>
        </div>

        <p className="text-xl sm:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Reliable Starlink Mini connectivity for remote workers, first responders, and military.
          Durable hardware engineered to perform when communication is critical.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@shackmounts.com?subject=ShackMounts%20Field%20Kit%20Preorder"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-black font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
          >
            Preorder Combo Kit
            <ChevronRight size={18} />
          </a>
          <button
            onClick={scrollToProduct}
            className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-200 hover:bg-zinc-900 font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
          >
            View Products
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}
