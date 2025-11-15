import { Check } from 'lucide-react';

export function Product() {
  return (
    <section id="product" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-sm border border-zinc-800 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative text-center p-8">
              <div className="text-6xl mb-4">📡</div>
              <div className="text-zinc-600 text-sm tracking-[0.2em] uppercase">
                Product Image
              </div>
              <div className="text-zinc-700 text-xs mt-2">Starlink Mini Mount</div>
            </div>
          </div>

          <div>
            <div className="inline-block mb-4 px-3 py-1 border border-orange-500/50 bg-orange-500/10">
              <span className="text-xs tracking-[0.25em] text-orange-400 font-bold uppercase">
                Flagship Product
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4 uppercase tracking-tight">
              Starlink Mini
              <br />
              Van Mount
            </h2>

            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              The perfect mount for your van life. Secure, aerodynamic, and built
              to handle life on the road—keep your connection stable in any conditions.
            </p>

            <div className="mb-8">
              <div className="text-4xl font-bold text-zinc-100 mb-2">
                $149{' '}
                <span className="text-lg font-normal text-zinc-500">
                  / intro pricing
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Compatible with Starlink Mini dish',
                'Optimized for vans, trailers, and trucks',
                'Aerodynamic design reduces wind noise and drag',
                'Heavy-duty steel with weather-resistant coating',
                'Simple DIY install with basic tools',
                'Stays steady even at highway speeds',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-black font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105">
              Preorder Now
            </button>

            <p className="text-xs text-zinc-600 mt-4">
              *Preorder only — first production run coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
