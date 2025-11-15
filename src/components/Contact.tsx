import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6 uppercase tracking-tight">
          Let's Build Together
        </h2>

        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
          Ready to get started? Reach out and we'll tailor a plan for your
          setup.
        </p>

        <a
          href="mailto:hello@shackmounts.com"
          className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold tracking-[0.2em] uppercase text-sm transition-all hover:scale-105"
        >
          <Mail size={20} />
          Contact Us
        </a>
      </div>
    </section>
  );
}
