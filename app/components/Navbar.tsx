// components/Navbar.tsx
"use client";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Wigs', 'Extensions', 'About', 'Contact'];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-veloura-dark/80 backdrop-blur-md border-b border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-veloura-dark border border-white/10 rounded-full flex items-center justify-center font-serif text-white shadow-lg">D</div>
            <span className="text-xl font-light tracking-[0.3em] text-white hidden sm:block">DEELUXE</span>
          </div>

          {/* Desktop Navigation (Hidden on mobile) */}
          <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-veloura-pink transition-colors">{link}</a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-white hover:text-veloura-pink transition-colors">
              <ShoppingBag size={20} />
            </button>
            
            {/* Desktop-only Buy Button */}
            <button className="hidden sm:block bg-veloura-gold text-veloura-dark px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
              Buy Now
            </button>

            {/* Mobile Menu Toggle (Hamburger) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-1 hover:text-veloura-pink transition-colors z-[110]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE DRAWER --- */}
      {/* --- PREMIUM GLASSMOBILE DRAWER --- */}
      <div 
        className={`fixed inset-0 z-[90] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* The Glass Overlay */}
        <div className="absolute inset-0 bg-veloura-dark/60 backdrop-blur-2xl" />

        {/* Decorative Glow inside the menu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-veloura-pink/20 blur-[100px] rounded-full" />

        <div className="relative flex flex-col items-center justify-center h-full space-y-12 px-6 z-10">
          {navLinks.map((link, i) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-extralight tracking-[0.5em] text-white uppercase hover:text-veloura-pink transition-all duration-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isOpen ? `${i * 100}ms` : '0ms',
                fontFamily: 'var(--font-serif)' 
              }}
            >
              {link}
            </a>
          ))}
          
          <button className="bg-veloura-gold text-veloura-dark px-12 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mt-8 hover:scale-105 transition-transform shadow-2xl shadow-veloura-gold/20">
            Shop Collection
          </button>
        </div>
      </div>
    </>
  );
}