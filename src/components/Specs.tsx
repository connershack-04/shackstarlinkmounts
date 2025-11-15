import { Shield, Zap, Package } from 'lucide-react';

export function Specs() {
  const features = [
    {
      icon: Shield,
      title: 'Built for the elements',
      description:
        'Heavy-duty materials designed to handle wind, rain, and rough conditions. Field-tested in extreme environments.',
    },
    {
      icon: Zap,
      title: 'Clean install',
      description:
        'Mount your Starlink with a simple, tidy setup that looks good on any rig. No complicated wiring or tools.',
    },
    {
      icon: Package,
      title: 'Road-trip ready',
      description:
        'Perfect for trucks, vans, trailers and remote setups where reliable internet matters most.',
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
