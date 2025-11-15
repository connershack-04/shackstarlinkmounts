import { Mountain, Tent, Wrench, Wind, Trees } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      icon: Mountain,
      title: 'Freedom to work from anywhere',
      description:
        'Our mounts keep your Starlink connection stable no matter where your day takes you—so the mountains can be your office.',
    },
    {
      icon: Tent,
      title: 'Built for remote setups',
      description:
        'Designed for vans, trucks, and off-grid worksites so you can stay online without giving up the outdoors.',
    },
    {
      icon: Wrench,
      title: 'Simple DIY installation',
      description:
        'No complicated tools or tech required. Set it up once and focus on what matters—getting outside.',
    },
    {
      icon: Wind,
      title: 'Stable in rugged conditions',
      description:
        'Engineered for wind, weather, and rough terrain so your signal stays locked in wherever you adventure.',
    },
    {
      icon: Trees,
      title: 'More time outside, less time inside',
      description:
        'With dependable connectivity anywhere, you can break free from the office and be closer to nature every single day.',
    },
  ];

  return (
    <section id="why" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6 uppercase tracking-tight">
          Why Choose Shack Mounts
        </h2>

        <p className="text-xl text-zinc-400 mb-12 max-w-3xl leading-relaxed">
          We believe people do their best work when they're closer to the
          outdoors. Shack Mounts makes that possible by helping you stay
          connected anywhere—whether that's in the mountains or near the coast.
        </p>

        <div className="grid gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex gap-6 p-6 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 border border-orange-500/30">
                    <Icon className="text-orange-500" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-2 uppercase tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
