// components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section className="bg-[#FDFBF9] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Overlapping Image Container */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#D1A2B5]/10 rounded-full blur-3xl" />
          <div className="relative z-10 border-[15px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="/image/praise-judah-Gz6z5NDnYfI-unsplash.jpg" 
              alt="About Deeluxe" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-[#D1A2B5] text-4xl md:text-5xl font-serif italic">
            About Deeluxe Luxe <span className="block text-black font-bold not-italic mt-2">Collection</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide premium glueless HD lace wigs designed for the modern woman who values 
            elegance and ease. Our collection is curated to ensure a seamless, natural finish 
            every single time.
          </p>
          <button className="bg-gradient-to-r from-[#D1A2B5] to-[#B08095] text-white px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-pink-200 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}