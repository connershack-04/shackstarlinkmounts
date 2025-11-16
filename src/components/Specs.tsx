import { Shield, Zap, Package } from 'lucide-react';

export function Specs() {
  const features = [
    {
      icon: Shield,
      title: 'Military-grade build',
      description:
        'Waterproof polymer shrugs off drops, wind, and vehicle abuse while guarding the Starlink Mini.',
    },
    {
      icon: Zap,
      title: 'All-environment deployment',
      description:
        'Installs on rooftops, dirt, sand, or marine decks without affecting signal or adding drag.',
    },
    {
      icon: Package,
      title: 'Combo kit contents',
      description:
        'Starlink Mini, Shack Rugged Mini Mount, wiring routing accessories, and full hardware kit for $399.',
    },
  ];

  return (
    <section id="specs" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-12 uppercase tracking-tight">
          What You Get
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 bg-black border border-zinc-800 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-orange-500/10 border border-orange-500/30">
                  <Icon className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
