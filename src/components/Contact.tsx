import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6 uppercase tracking-tight">
          Let's Build Together
        </h2>

        <div className="space-y-6 text-zinc-400 mb-10">
          <p className="text-base">
            Preorders are limited to the first 100 units. Request procurement packets, pricing schedules,
            or technical details and we will respond with a tailored plan for your department or team.
          </p>
          <p className="tracking-[0.4em] uppercase text-xs text-zinc-500">
            contact@shackmounts.com
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:contact@shackmounts.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
          >
            <Mail size={20} />
            Contact Sales
          </a>
          <a
            href="mailto:contact@shackmounts.com?subject=ShackMounts%20Combo%20Kit%20Preorder"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-black font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
          >
            <Mail size={20} />
            Preorder Combo Kit
          </a>
        </div>
      </div>
    </section>
  );
}
