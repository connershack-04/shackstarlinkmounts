import { Hammer, Tent, Shield, Wrench, ShieldCheck } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      icon: Hammer,
      title: 'Built for real work',
      description:
        'ShackMounts delivers reliable hardware for teams that need connectivity to survive weather, travel, and harsh environments.',
    },
    {
      icon: Tent,
      title: 'Proven in the field',
      description:
        'Developed for remote workers, military, and first responder units.',
    },
    {
      icon: Wrench,
      title: 'Made for harsh environments',
      description:
        'Materials withstand storms, salt, vibration, and rough roads on vehicles and boats.',
    },
    {
      icon: Shield,
      title: 'Fast installs',
      description:
        'Rugged hardware and clean cable organization make installs quick and easy.',
    },
    {
      icon: ShieldCheck,
      title: 'Lifetime toughness guarantee',
      description:
        'Backed by our Lifetime Toughness Warranty—our products are built to last.',
    },
  ];

  return (
    <section id="why" className="py-24 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 uppercase tracking-tight">
          Why Choose Shack Mounts
        </h2>

        <div className="grid gap-6 mt-12">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex gap-6 p-6 bg-white border border-stone-200 hover:border-emerald-300 transition-colors shadow-sm"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 border border-emerald-200">
                    <Icon className="text-emerald-700" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2 uppercase tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
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
