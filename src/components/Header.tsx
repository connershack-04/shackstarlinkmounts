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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4eddf]/90 backdrop-blur-sm border-b border-[#d6c8ad] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold tracking-[0.3em] text-[#2b3125] hover:text-[#6a5b33] transition-colors uppercase"
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
                className="px-6 py-2 text-sm tracking-[0.2em] text-[#4f4b3b] hover:text-[#1f2a1c] hover:bg-[#e8ddc4] transition-all border-r border-[#d6c8ad] last:border-r-0"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#575442] hover:text-[#2b3125]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#d6c8ad] bg-[#f9f4ea]">
            {[
              { label: 'PRODUCT', id: 'product' },
              { label: 'WHY US', id: 'why' },
              { label: 'SPECS', id: 'specs' },
              { label: 'CONTACT', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm tracking-[0.2em] text-[#4f4b3b] hover:text-[#1f2a1c] hover:bg-[#e8ddc4] transition-all"
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
