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
    <section id="specs" className="py-24 bg-[#f9f4ea]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1f2a1c] mb-12 uppercase tracking-tight">
          What You Get
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 bg-white/80 border border-[#d6c8ad] hover:border-[#3f5a2a] transition-all hover:shadow-xl hover:shadow-[#2f4a1f]/10"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#f7e7cb] border border-[#d6c8ad]">
                  <Icon className="text-[#8d6428]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2b3125] mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[#3f3a2c] leading-relaxed">
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
