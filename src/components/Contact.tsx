import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-10 uppercase tracking-tight">
          Contact Us
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:contact@shackmounts.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900 font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
          >
            <Mail size={20} />
            Contact Sales
          </a>
          <a
            href="mailto:contact@shackmounts.com?subject=ShackMounts%20Combo%20Kit%20Preorder"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
          >
            <Mail size={20} />
            Preorder Combo Kit
          </a>
        </div>
      </div>
    </section>
  );
}
