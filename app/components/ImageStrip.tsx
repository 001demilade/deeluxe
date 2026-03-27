// components/ImageStrip.tsx
export default function ImageStrip() {

  const images = [
    "/image/13b6.jpeg", 
    "/image/avail.jpeg", 
    "/image/gorg.jpeg", 
    "/image/Toffee Brown Mix Blonde Layered Cut Bob Glueless 5x5 Closure Lace Wig.jpeg", 
    "/image/choco.jpeg", 
    "/image/The perfect unit for autumn 🍂 simple yet classy….jpeg"
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 w-full border-t border-white/5">
      {images.map((src, i) => (
        <div key={i} className="aspect-[4/5] overflow-hidden">
          <img 
            src={src} 
            alt="Product Showcase" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-1000 cursor-pointer" 
          />
        </div>
      ))}
    </div>
  );
}