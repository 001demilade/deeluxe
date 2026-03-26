// app/wigs/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function WigsPage() {
  // We only want to show the hair products here, not the accessories
  const wigProducts = [
    { 
      name: "Body Wave Bundle", 
      price: "150.00", 
      image: "/image/Elevate your look with our Raw Vietnamese Body….jpeg" 
    },
    { 
      name: "Deep Wave Lace", 
      price: "185.00", 
      image: "/image/tropicaldeepwave.jpeg" 
    },
    { 
      name: "Straight Silk Frontal", 
      price: "120.00", 
      image: "/image/silk.jpeg" 
    },
    { 
      name: "Kinky Curly Closure", 
      price: "140.00", 
      image: "/image/afrokinky.jpeg" 
    },
    { 
      name: "Blonde Bombshell Wig", 
      price: "210.00", 
      image: "/image/soft.jpeg" 
    },
  ];

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter">
            Premium <span className="text-[#D1A2B5] italic">Wigs</span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our collection of HD lace and glueless units, meticulously 
            crafted for a natural look and effortless style.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
            {wigProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}