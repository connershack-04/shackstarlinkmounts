import { Check } from 'lucide-react';

const contactEmail = 'hello@shackmounts.com';

const products = [
  {
    id: 'mount-starlink-mini',
    badge: 'Flagship Product',
    title: ['Starlink Mini', 'Mount'],
    priceLabel: '$149',
    priceNote: '/ intro pricing',
    description:
      'The perfect mount for your van life. Secure, aerodynamic, and built to handle life on the road—keep your connection stable in any conditions.',
    longDescription: '',
    features: [
      'Compatible with Starlink Mini dish',
      'Optimized for vans, trailers, and trucks',
      'Aerodynamic design reduces wind noise and drag',
      'Heavy-duty steel with weather-resistant coating',
      'Simple DIY install with basic tools',
      'Stays steady even at highway speeds',
    ],
    buttonLabel: 'Preorder Mount',
    buttonHref: `mailto:${contactEmail}?subject=${encodeURIComponent(
      'Starlink Mini Mount Inquiry'
    )}`,
    footnote: '*Preorder only — first production run coming soon.',
  },
  {
    id: 'bundle-starlink-mini-mount',
    badge: 'New Bundle',
    title: ['Shack Field Kit', 'Starlink Mini + Roof Mount'],
    priceLabel: '$699',
    description:
      'The Shack Field Kit combines the Starlink Mini with our low-profile roof mount to deliver reliable connectivity anywhere. Designed for vanlifers, remote workers, and emergency responders, this setup provides durable protection and simple installation for field use.',
    longDescription:
      'Everything ships as a cohesive package so you can focus on the mission: protected hardware, low-profile mounting, and matched hardware pattern for quick installs or removals.',
    features: [
      'Includes Starlink Mini, Shack roof mount, and full mounting hardware',
      'Compatible with roofs on vans, campers, and service vehicles',
      'Simple field-ready installation',
    ],
    buttonLabel: 'Order Bundle',
    buttonHref: `mailto:${contactEmail}?subject=${encodeURIComponent(
      'Shack Field Kit – Starlink Mini + Roof Mount Inquiry'
    )}`,
    footnote: '*Includes official Starlink Mini hardware plus Shack roof mount.',
  },
];

export function Product() {
  return (
    <section id="product" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="space-y-8"
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 border border-orange-500/50 bg-orange-500/10">
                <span className="text-xs tracking-[0.25em] text-orange-400 font-bold uppercase">
                  {product.badge}
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4 uppercase tracking-tight">
                {product.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              {product.longDescription ? (
                <p className="text-zinc-500 mb-6 leading-relaxed">
                  {product.longDescription}
                </p>
              ) : null}

              <div className="mb-8">
                <div className="text-4xl font-bold text-zinc-100 mb-2">
                  {product.priceLabel}{' '}
                  {product.priceNote ? (
                    <span className="text-lg font-normal text-zinc-500">
                      {product.priceNote}
                    </span>
                  ) : null}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="text-orange-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={product.buttonHref}
                className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-orange-600 hover:bg-orange-500 text-black font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
                data-product={product.id}
              >
                {product.buttonLabel}
              </a>

              {product.footnote ? (
                <p className="text-xs text-zinc-600 mt-4">{product.footnote}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
