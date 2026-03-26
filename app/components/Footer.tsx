// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center font-serif text-white text-xl">D</div>
              <span className="text-2xl font-light tracking-widest text-white uppercase">Deeluxe</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Providing the highest quality hair solutions to empower confidence in every woman.
            </p>
            <button className="bg-gradient-to-r from-[#D1A2B5] to-[#B08095] text-white px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-pink-900/20 hover:opacity-90 transition-opacity">
              More Details
            </button>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[#D1A2B5] text-xs font-bold uppercase tracking-widest">Navigation</h4>
              <ul className="text-gray-400 text-xs space-y-3 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wigs</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#D1A2B5] text-xs font-bold uppercase tracking-widest">Shop</h4>
              <ul className="text-gray-400 text-xs space-y-3 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Extension & Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Statement */}
          <div className="space-y-4">
            <h4 className="text-[#D1A2B5] text-xs font-bold uppercase tracking-widest">Our Mission</h4>
            <p className="text-gray-400 text-xs leading-loose italic opacity-80">
              "We believe quality is greater than complexity. Our goal is to build something that works and lasts."
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © 2026 Deeluxe Luxe | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}