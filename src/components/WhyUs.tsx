import { Mountain, Tent, Wrench, Wind, Trees } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      icon: Mountain,
      title: 'Stay connected on the road',
      description:
        'Work or stream reliably from your van, trailer, or truck. Your Starlink stays locked in, no matter where you travel.',
    },
    {
      icon: Tent,
      title: 'Built for van life',
      description:
        'Engineered specifically for vehicles on the move. Works perfectly on vans, trailers, and trucks of all sizes.',
    },
    {
      icon: Wrench,
      title: 'Simple DIY installation',
      description:
        'No complicated tools or tech required. Set it up once and focus on what matters—getting outside.',
    },
    {
      icon: Wind,
      title: 'Built for highway speeds',
      description:
        'Aerodynamic design handles highway winds and speeds. Your connection stays strong from city to backcountry.',
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
          Van life means freedom, and Shack Mounts keeps you connected while you
          travel. Whether you're working remotely or streaming content, we've got
          your internet covered from coast to coast.
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
