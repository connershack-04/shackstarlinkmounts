import { Check } from 'lucide-react';
import mountProduct from '../assets/mount-product.svg';

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
    imageSrc: mountProduct,
    imageAlt: 'Shack Mounts Starlink Mini Mount',
    buttonLabel: 'Preorder Mount',
    buttonHref: `mailto:${contactEmail}?subject=${encodeURIComponent(
      'Starlink Mini Mount Inquiry'
    )}`,
    footnote: '*Preorder only — first production run coming soon.',
  },
  {
    id: 'bundle-starlink-mini-mount',
    badge: 'New Bundle',
    title: ['Shack Field Kit –', 'Starlink Mini + Roof Mount'],
    priceLabel: '$699',
    description:
      'Complete field-ready kit with Starlink Mini plus low-profile roof mount so you can work from the mountains, desert, or back roads.',
    longDescription:
      'The Shack Field Kit is a plug-and-play package that includes the Starlink Mini and a purpose-built low-profile roof mount. The mount acts like an OtterBox-style case for your dish, adding protection and a clean, 1-inch standoff from the roof for drainage and cable routing. Designed for vans, trucks, and overland rigs, this bundle keeps your Starlink locked in place on washboard roads while still remaining easy to remove when you break camp.',
    features: [
      'Includes official Starlink Mini plus Shack roof mount',
      'Low-profile, 1-inch standoff from the roof',
      'Rugged housing protects edges and corners of the dish',
      'Compatible with flat roofs on vans, campers, and shells',
      'Simple install using the same hardware pattern as the mount',
      'Matte black, military-inspired aesthetic to match Shack Mounts styling',
    ],
    imageSrc: '/images/starlink-mini-bundle.jpg',
    imageAlt: 'Starlink Mini bundle with Shack roof mount',
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div
              className={`relative aspect-square bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-sm border border-zinc-800 flex items-center justify-center overflow-hidden ${
                index % 2 === 1 ? 'order-2 md:order-1' : ''
              }`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="relative w-full h-full object-contain p-4"
              />
            </div>

            <div className={index % 2 === 1 ? 'order-1 md:order-2' : ''}>
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
