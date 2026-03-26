// components/ImageStrip.tsx
export default function ImageStrip() {

  const images = [
    "/image/emmanuel-black-oit6br0iFro-unsplash.jpg", 
    "/image/christian-agbede-4_eCQb1GA7I-unsplash.jpg", 
    "/image/shedrack-salami-ecjx-h3aVAc-unsplash.jpg", 
    "/image/sunber-hair-51QIf24SvIY-unsplash.jpg", 
    "/image/obi-PvZDXRiEQ3g-unsplash.jpg", 
    "/image/sammy-swae-Stk-y3V7ck0-unsplash.jpg"
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