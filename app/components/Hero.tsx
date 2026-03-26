// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative pt-32 pb-10 px-6 bg-black overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D1A2B5]/10 blur-[120px] rounded-full -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 z-10">
          <h1 className="text-6xl md:text-8xl font-light text-white leading-[1.1] tracking-tight">
            DeeLuxe <br />
            <span className="text-[#D1A2B5] italic">Collection</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-light">
            Experience the pinnacle of luxury hair. Our glueless HD lace wigs 
            provide a seamless, natural finish for the modern woman.
          </p>
         
          <button className="bg-gradient-to-r from-[#D1A2B5] to-[#B08095] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-xl shadow-pink-900/20 hover:scale-105 transition-transform">
            Explore Collection
          </button>
        </div>

        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
          <img 
            src="/image/emmanuel-black-k67WeAaMZAE-unsplash.jpg" 
            alt="Veloura Model" 
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </div>
    </section>
  );
}