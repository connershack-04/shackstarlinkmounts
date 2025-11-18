import { Shield, Zap, Package } from 'lucide-react';

export function Specs() {
  const features = [
    {
      icon: Shield,
      title: 'Built for the Outdoors',
      description:
        'Weather-sealed housing protects the Starlink through all conditions.',
    },
    {
      icon: Zap,
      title: 'Ready Anywhere',
      description:
        'Installs easily on vans, trailers, and boats with an outstanding internet connection.',
    },
    {
      icon: Package,
      title: 'Complete Kit',
      description:
        'Includes Starlink Mini, Shack Mount, hardware, and cable routing for a streamlined setup.',
    },
  ];

  return (
    <section id="specs" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-12 uppercase tracking-tight">
          What You Get
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 bg-stone-50 border border-stone-200 hover:border-emerald-300 transition-all hover:shadow-lg hover:shadow-emerald-200/40"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-amber-50 border border-amber-200">
                  <Icon className="text-amber-700" size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-stone-700 leading-relaxed">
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
