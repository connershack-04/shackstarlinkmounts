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
    <section id="product" className="py-24 bg-[#f7f1e4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1f2a1c] mb-4 uppercase tracking-tight">
            Products
          </h2>
        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className="grid lg:grid-cols-2 gap-10 items-start bg-white/80 border border-[#d6c8ad] p-8 shadow-lg shadow-[#2f4a1f]/5"
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 border border-[#c18c43]/50 bg-[#f7e7cb]">
                <span className="text-xs tracking-[0.25em] text-[#8d6428] font-bold uppercase">
                  {product.badge}
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-[#2b3125] mb-4 uppercase tracking-tight">
                {product.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-[#8d6428]">
                  {product.priceLabel}
                </span>
                {product.priceNote ? (
                  <span className="text-sm uppercase tracking-[0.4em] text-[#6b654f]">
                    {product.priceNote}
                  </span>
                ) : null}
              </div>

              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base">
                    <Check
                      className="text-[#3f5a2a] mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-[#3f3a2c]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="p-6 border border-[#d6c8ad] bg-[#f9f4ea]">
                <a
                  href={product.buttonHref}
                  className="w-full inline-flex justify-center px-8 py-4 bg-[#3f5a2a] hover:bg-[#2f4a1f] text-[#f4f0e6] font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105 shadow-md shadow-[#2f4a1f]/20"
                  data-product={product.id}
                >
                  {product.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
