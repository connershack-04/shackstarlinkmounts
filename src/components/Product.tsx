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
      'A durable, weather-sealed Starlink Mini mount for teams and individuals. Keeps the dish secure, protected, and low-profile on vehicles or fixed installations.',
    longDescription: '',
    features: [
      'Weather-sealed case keeps your Starlink Mini protected',
      'Low-profile maintains reliable signal without adding bulk',
      'Secure mounting system keeps the dish locked in place during travel',
      'Impact-resistant shell stands up to harsh conditions',
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
      'Reliable Starlink Mini connectivity for remote workers, first responders, and military. Durable hardware engineered to perform when communication is critical.',
    longDescription: '',
    features: [
      'Starlink Mini, roof mount, and full hardware included',
      'Fits vans, trailers, boats, and service vehicles',
      'Cable organization for a clean, professional setup',
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
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4 uppercase tracking-tight">
            Products
          </h2>
        </div>

        {products.map((product) => (
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
                <a
                  href={product.buttonHref}
                  className="w-full inline-flex justify-center px-8 py-4 bg-orange-600 hover:bg-orange-500 text-black font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
                  data-product={product.id}
                >
                  {product.buttonLabel}
                </a>
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
