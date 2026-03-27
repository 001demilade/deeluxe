// app/wigs/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function WigsPage() {
  // We only want to show the hair products here, not the accessories
  const wigProducts = [
    { 
      name: "5by5 Closure 10 inches SDD Vietnamese Bone Straight", 
      price: "150,000.00", 
      image: "/image/SDD Vietnam bone straight  Fitting_ 5by5 closure….jpeg" 
    },
    {
      name:  "5by5 Closure 24 inches SDD Pixie Curls (Burgundy)", 
      price: "245,000.00", 
      image: "/image/24_ Super Double Drawn Pixie Curls Wig with 5x5 Swiss Lace Closure -  Voluminous Luxury Hair.jpeg" 
    },
    { 
      name: "13x4 HD Lace Frontal 30 Inches Bone Straight (Burgundy)", 
      price: "850,000.00", 
      image: "/image/Burgundy Lace Front Wigs Human Hair 99j Lace Front Wig 13x4 Straight Glueless.jpeg" 
    },
    { 
      name: "13x4 HD Lace Frontal 30 Inches Body wave Ombre (Balayage)", 
      price: "750,000.00", 
      image: "/image/30 Inch Body Wave Ombre Lace Front Wig Human Hair PB_30 Colored Highlight 13x4 HD Lace Frontal Wig BalayageHuman Hair for Women - AliExpress 200165144.jpeg" 
    },
    { 
      name: "26 Raw Single Donor Layered Wavy Wig - 13×6 HD Frontal, 400g Full Density Human Hair", 
      price: "960,000.00", 
      image: "/image/26_ Raw Single Donor Layered Wavy Wig - 13×6 HD Frontal, 400g Full Density Human Hair.jpeg" 
    },
    { 
      name: "13x6 HD 99J Lace Frontal Deep Wave Wig", 
      price: "990,000.00", 
      image: "/image/13x6 HD 99J Lace Frontal Deep Wave Wig.jpeg" 
    },
    { 
      name: "28 SDD Virgin Burmese Curly Wig 6×6 HD Closure _ 300g Premium Human Hair", 
      price: "810,000.00", 
      image: "/image/28_ Super Double Drawn Virgin Burmese Curly Wig _ 6×6 HD Closure _ 300g Premium Human Hair.jpeg" 
    },
    { 
      name: "5by5 Brown Closure SDD Tiwa Wig", 
      price: "65,000.00", 
      image: "/image/5by5 brown closure sdd tiwa.jpeg" 
    },
    { 
      name: "16” layered bouncy wig available 📌", 
      price: "165,000.00", 
      image: "/image/16” layered bouncy wig available 📌.jpeg" 
    },
    { 
      name: "13_4 HD Frontal Exclusive Lagos Hairline Bob Wig", 
      price: "200,000.00", 
      image: "/image/13_4 HD Frontal Exclusive Lagos Hairline Bob Wig.jpeg"
    },
    { 
      name: "Kiki’s unit in jet black", 
      price: "175,000.00",
      image: "/image/Kiki’s unit in jet black 😍😍  If you’re looking….jpeg" 
    },
    { 
      name: "Ash Blond Custom Glueless Wig", 
      price: "1,000,000.00", 
      image: "/image/Ash Blond Custom Glueless Wig.jpeg" 
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