import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold tracking-[0.3em] text-zinc-100 hover:text-orange-500 transition-colors uppercase"
          >
            SHACK MOUNTS
          </button>

          <nav className="hidden md:flex items-center space-x-1">
            {[
              { label: 'PRODUCT', id: 'product' },
              { label: 'WHY US', id: 'why' },
              { label: 'SPECS', id: 'specs' },
              { label: 'CONTACT', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-6 py-2 text-sm tracking-[0.2em] text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all border-r border-zinc-800 last:border-r-0"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-zinc-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-zinc-800">
            {[
              { label: 'PRODUCT', id: 'product' },
              { label: 'WHY US', id: 'why' },
              { label: 'SPECS', id: 'specs' },
              { label: 'CONTACT', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm tracking-[0.2em] text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
