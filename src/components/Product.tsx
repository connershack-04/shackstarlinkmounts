import { Check } from 'lucide-react';

const contactEmail = 'hello@shackmounts.com';

const products = [
  {
    id: 'mount-starlink-mini',
    badge: 'Flagship Product',
    title: ['Starlink Mini', 'Mount'],
    priceLabel: '$149',
    priceNote: '/ preorder',
    description:
      'Military-grade Starlink Mini mount engineered for harsh deployments. Waterproof, impact-resistant, and ready for vehicles, dirt, or marine surfaces.',
    longDescription:
      'Built from rugged polymers with recessed hardware and sealed seams, the Mini Mount shrugs off storms, dust, or being driven over. Lightweight design keeps drag low while keeping the dish protected and interference-free.',
    features: [
      'Military-grade plastic shell survives wind, drops, and impacts',
      'Weatherproof seals stand up to storms, sand, and salt spray',
      'Low-profile shape keeps signal clear while reducing drag',
      'Installs on rooftops, dirt, sand, or marine surfaces',
      'Lightweight and portable for vans, packs, or emergency rigs',
      'Simple assembly with hardware pattern matched to Starlink Mini',
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
    priceLabel: '$399',
    description:
      'The Shack Field Kit combines the Starlink Mini with our low-profile roof mount to deliver reliable connectivity anywhere. Designed for vanlifers, remote workers, and emergency responders, this setup provides durable protection and simple installation for field use.',
    longDescription:
      'Each kit ships with the Starlink Mini, ShackMounts rugged Mini Mount, dedicated wiring routing accessories, and the full mounting hardware set so deployments stay fast and standardized.',
    features: [
      'Includes Starlink Mini, Shack roof mount, and full mounting hardware',
      'Compatible with roofs on vans, campers, and service vehicles',
      'Simple field-ready installation with bundled wiring routing',
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
