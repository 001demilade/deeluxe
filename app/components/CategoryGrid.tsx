// components/CategoryGrid.tsx
const categories = [
  { title: "Ready To Go", img: "/image/Jay Light Yaki Human Hair Wig Face Framing Wavy Hair - Small 21_5in _ 16 _ Cappuccino.jpeg" },
  { title: "Glueless", img: "/image/emmanuel-black--Rca_idmbuI-unsplash.jpg" },
  { title: "HD Lace", img: "/image/STELLA Raw Hair HD Lace Wig - 16 inches _ M _ Closure 5x5.jpeg" },
  { title: "Hair Extension", img: "/image/Do you want hair that feels as good as it looks_….jpeg" },
  { title: "Short Wigs", img: "/image/Tu veux une perruque élégante, facile à porter et….jpeg" },
  { title: "Colored", img: "/image/Layered wavy 😍  unit available for immediate….jpeg" },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {categories.map((cat, i) => (
        <div key={i} className="group relative aspect-[3/4] overflow-hidden border-[0.5px] border-white/5">
          <img 
            src={cat.img} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            alt={cat.title} 
          />
          <div className="absolute inset-0 bg-veloura-dark/60 group-hover:bg-veloura-dark/20 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter text-center">
              {cat.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}