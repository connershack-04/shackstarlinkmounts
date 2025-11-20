import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Product } from './components/Product';
import { WhyUs } from './components/WhyUs';
import { Specs } from './components/Specs';
import { Contact } from './components/Contact';
import { Warranty } from './components/Warranty';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f4ea] via-[#f4ecdf] to-[#e7ddc8] text-[#1f2a1c]">
      <Header />
      <main>
        <Hero />
        <Product />
        <WhyUs />
        <Specs />
        <Contact />
        <Warranty />
      </main>
      <Footer />
    </div>
  );
}

export default App;
