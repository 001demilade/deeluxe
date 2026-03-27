// app/about/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
           <img src="/image/13x6 Hd Lace Front Wig Bone Straight 13x4 Lace Frontal Human Hair Wig Black Wig Pre Plucked.jpeg" className="object-cover w-full h-full" alt="Our Story" />
        </div>
        <div className="space-y-8">
          <h2 className="text-white text-5xl font-light italic text-[#D1A2B5]">Our Story</h2>
          <p className="text-gray-400 leading-relaxed font-light">
            DEELUXE was founded with a singular mission: to provide high-performance, 
            luxury hair solutions for the modern woman. We specialize in glueless HD lace 
            that mimics the natural hairline perfectly.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-white font-bold">100% Raw Hair</h4>
              <p className="text-xs text-gray-500 mt-2">Ethically sourced, chemical-free.</p>
            </div>
            <div>
              <h4 className="text-white font-bold">Fast Shipping</h4>
              <p className="text-xs text-gray-500 mt-2">Global delivery in 3-5 days.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}