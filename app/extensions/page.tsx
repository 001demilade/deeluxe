// app/extensions/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function ExtensionsPage() {
  const extensionProducts = [
    { name: "Raw Virgin Bundles", price: "300.00", image: "/image/natural black.jpeg" },
    { name: "Wavy Hair Bundle", price: "105.00", image: "/image/close-up of a hand holding a bundle of wavy dark… (1).jpeg" },
    { name: "10 Inches Vietnamese Bone Straight", price: "155.00", image: "/image/10 inches Vietnamese bone straight.jpeg" },
    { name: "Deep Wave Human Hair Bundles", price: "150.00", image: "/image/Deep Wave Human Hair Bundles Natural Color - 16 16 16.jpeg" },
    { name: "Big Curls, Bigger Attitude (Pixie Curls)", price: "220.00", image: "/image/Big curls, bigger attitude_ These 10A Brazilian….jpeg" },
    { name: "Bouncy Extension", price: "200.00", image: "/image/🌟 Want hair that’s full of life and personality_….jpeg" },
    { name: "Straight Hair Bundle", price: "145.00", image: "/image/🌿Get the premium quality human hair which you….jpeg" },
    { name: "Brazilian Loose Wave Bundle", price: "165.00", image: "/image/Brazilian Loose Wave Bundle Deals - 12_14_16.jpeg" },
    { name: "Vietnam Hair Bundle", price: "170.00", image: "/image/Vietnam.jpeg" },
    { name: "Premium Human Hair Extensions", price: "285.00", image: "/image/We are confident in the quality of our products….jpeg" },
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