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
        <div className="inline-block mb-6 px-4 py-2 border border-orange-500/50 bg-orange-500/10">
          <span className="text-xs tracking-[0.3em] text-orange-400 font-bold uppercase">
            Field Tested
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-6 uppercase leading-tight">
          Starlink Mini
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
            Tactical Mount
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Work from the mountains with reliable Starlink access. Engineered for
          durability, built for adventure.
        </p>

        <button
          onClick={scrollToProduct}
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-black font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
        >
          View Specs
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}
