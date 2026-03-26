// app/extensions/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function ExtensionsPage() {
  const extensionProducts = [
    { name: "Raw Virgin Bundles", price: "120.00", image: "/image/body-wave.jpg" },
    { name: "HD Lace Frontal", price: "95.00", image: "/image/silk.jpeg" },
    { name: "613 Blonde Extensions", price: "155.00", image: "/image/soft.jpeg" },
  ];

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-black to-[#120D1A]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white uppercase tracking-tighter">
            The <span className="text-[#D1A2B5] italic">Extensions</span>
          </h1>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {extensionProducts.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
      </section>
      <Footer />
    </main>
  );
}