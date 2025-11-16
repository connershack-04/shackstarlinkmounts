import { Check } from 'lucide-react';

const contactEmail = 'hello@shackmounts.com';

const products = [
  {
    id: 'mount-starlink-mini',
    badge: 'Flagship Product',
    title: ['Starlink Mini', 'Mount'],
    priceLabel: '$129',
    priceNote: '',
    description:
      'Rugged, waterproof Starlink Mini housing built for vans, rigs, and field deployments. Lightweight and impact-resistant with sealed seams.',
    longDescription: '',
    features: [
      'Military-grade polymer resists wind, drops, and impacts',
      'Weatherproof seals lock out storms, sand, and salt spray',
      'Mount on rooftops, dirt, sand, or marine decks without interference',
      'Lightweight design packs easily for vans, kits, or emergency response',
      'Hardware pattern matches Starlink Mini for fast installs',
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
      'Starlink Mini plus Shack roof mount and hardware for plug-and-play deployments. One case, one mount, ready for vans, campers, or service vehicles.',
    longDescription: '',
    features: [
      'Includes Starlink Mini, Shack roof mount, wiring routing, and full hardware',
      'Fits flat roofs on vans, campers, marine decks, and service vehicles',
      'Simple field-ready install with matched hardware and cable routing',
      'Best option for first responders and remote teams needing a turnkey kit',
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.35em] text-orange-500 uppercase mb-4">
            Products
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4 uppercase tracking-tight">
            Field hardware built for real deployments
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            ShackMounts builds rugged Starlink Mini hardware for remote workers, vanlifers, and
            mission-driven teams. Choose the combo kit to get everything in one shipment or grab the
            mount alone to retrofit your existing dish.
          </p>
        </div>

        {products.map((product, index) => (
          <div
            key={product.id}
            className="grid lg:grid-cols-2 gap-10 items-start bg-gradient-to-br from-zinc-950 via-black to-zinc-950 border border-zinc-800 p-8"
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

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-orange-400">
                  {product.priceLabel}
                </span>
                {product.priceNote ? (
                  <span className="text-sm uppercase tracking-[0.4em] text-zinc-500">
                    {product.priceNote}
                  </span>
                ) : null}
              </div>

              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base">
                    <Check
                      className="text-orange-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="p-6 border border-zinc-800 bg-black/40">
                <h3 className="text-lg font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-4">
                  Deployment Notes
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {index === 0
                    ? 'Ideal for existing Starlink Mini owners who need a stronger, waterproof housing that bolts directly to vans, trucks, or marine decks.'
                    : 'Best choice when you need a turnkey kit: Starlink Mini, ShackMounts roof mount, wiring routing accessories, and hardware ready for install.'}
                </p>
                <a
                  href={product.buttonHref}
                  className="w-full inline-flex justify-center px-8 py-4 bg-orange-600 hover:bg-orange-500 text-black font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
                  data-product={product.id}
                >
                  {product.buttonLabel}
                </a>
                {product.footnote ? (
                  <p className="text-xs text-zinc-600 mt-4">{product.footnote}</p>
                ) : null}
              </div>
            </div>
          </div>
        ))}

        <div className="grid lg:grid-cols-2 gap-8 border border-zinc-800 p-8 bg-zinc-950">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-zinc-100 mb-3">
              Lifetime Toughness Warranty
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              If a ShackMounts product fails under normal use, we replace it. No drama.
              Built for people who cannot afford downtime.
            </p>
          </div>
          <div className="text-sm text-zinc-500">
            Not affiliated with Starlink or SpaceX. ShackMounts hardware is designed to work with official
            Starlink Mini equipment and has been field tested with remote workers, vanlifers, fire departments,
            and tactical users.
          </div>
        </div>
      </div>
    </section>
  );
}
