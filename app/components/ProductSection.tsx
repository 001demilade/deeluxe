// components/ProductGrid.tsx
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  
  const newArrivals = [
  { 
    name: "Body Wave Bundle", 
    price: "150,000.00", 
    image: "/image/Elevate your look with our Raw Vietnamese Body….jpeg" 
  },
  { 
    name: "Deep Wave Lace", 
    price: "185,000.00", 
    image: "/image/tropicaldeepwave.jpeg" 
  },
  { 
    name: "Straight Silk Frontal", 
    price: "120,000.00", 
    image: "/image/silk.jpeg" 
  },
  { 
    name: "Kinky Curly Closure", 
    price: "25,000.00", 
    image: "/image/afrokinky.jpeg" 
  },
  { 
    name: "Blonde Bombshell Wig", 
    price: "710,000.00", 
    image: "/image/soft.jpeg" 
  },
];

const bestSellers = [
  { 
    name: "Luxe Shine Serum", 
    price: "25,000.00", 
    image: "/image/shinecream.jpeg" 
  },
  { 
    name: "Edge Control Gel", 
    price: "15,000.00", 
    image: "/image/Strong Hold- Thick Edges - Edge Control.jpeg" 
  },
  { 
    name: "Silk Bonnet Set", 
    price: "35,000.00", 
    image: "/image/Minimalist Black Silk Sleep Collection _ Gold Accent Beauty Set.jpeg" 
  },
  { 
    name: "Detangling Brush", 
    price: "12,000.00", 
    image: "/image/Ultimative Entwirrungsbürste für lockiges und Coily Haar _ Nass & Trocken Verwendung _ Haarwerkzeug für 1A-4C Texturen _ BillioNoire Schönheit.jpeg" 
  },
  { 
    name: "Heat Protectant", 
    price: "22,000.00", 
    image: "/image/Little Joys in Daily Care…Heat Protection Hair Spray.jpeg" 
  },
];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* New Collection Section */}
        <div>
          <h2 className="text-white text-center text-2xl md:text-3xl font-light mb-12 tracking-wide">
            New Collection
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
            {newArrivals.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>

        {/* Best Sellers Section */}
        <div>
          <h2 className="text-white text-center text-2xl md:text-3xl font-light mb-12 tracking-wide">
            Best Sellers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
            {bestSellers.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <button className="bg-gradient-to-r from-[#D1A2B5] to-[#B08095] text-white px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              View All
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}