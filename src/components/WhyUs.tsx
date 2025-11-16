import { Mountain, Tent, Wrench, Shield } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      icon: Mountain,
      title: 'Field-Proven Mission',
      description:
        'Remote workers, expedition crews, and responders operate closer to the mountains, ocean, and desert without losing bandwidth.',
    },
    {
      icon: Tent,
      title: 'Designed for harsh terrain',
      description:
        'Mission-grade materials shrug off storms, sand, and washboard roads. ShackMounts is engineered for rooftops, dirt, and marine surfaces.',
    },
    {
      icon: Wrench,
      title: 'Simple field install',
      description:
        'Matched hardware, cable routing, and lightweight components keep installs fast for vans, campers, or tactical command vehicles.',
    },
    {
      icon: Shield,
      title: 'Lifetime toughness warranty',
      description:
        'Every mount is backed by our Lifetime Toughness Warranty covering failures during normal use. Built to survive being driven over.',
    },
  ];

  return (
    <section id="why" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6 uppercase tracking-tight">
          Why Choose Shack Mounts
        </h2>

        <p className="text-xl text-zinc-400 mb-12 max-w-3xl leading-relaxed">
          ShackMounts delivers rugged connectivity hardware so teams can operate anywhere with confidence.
          Mission-grade design and simple installs keep you moving while modern commerce features stay on our roadmap.
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
