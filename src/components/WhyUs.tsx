import { Hammer, Tent, Shield, Wrench, ShieldCheck } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      icon: Hammer,
      title: 'Built for real work',
      description:
        'ShackMounts delivers reliable hardware for teams that need connectivity to survive weather, travel, and constant redeployment.',
    },
    {
      icon: Tent,
      title: 'Proven in the field',
      description:
        'Developed with remote workers, expedition teams, and public safety units operating far from infrastructure.',
    },
    {
      icon: Wrench,
      title: 'Made for harsh environments',
      description:
        'Materials withstand storms, salt, vibration, and rough roads on vehicles, vessels, and field sites.',
    },
    {
      icon: Shield,
      title: 'Fast, repeatable installs',
      description:
        'Matched hardware and clean cable routing make installs easy across fleets, trailers, and mobile units.',
    },
    {
      icon: ShieldCheck,
      title: 'Lifetime toughness guarantee',
      description:
        'Backed by our Lifetime Toughness Warranty—built to endure real-world conditions.',
    },
  ];

  return (
    <section id="why" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6 uppercase tracking-tight">
          Why Choose Shack Mounts
        </h2>

        <div className="grid gap-6 mt-12">
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
