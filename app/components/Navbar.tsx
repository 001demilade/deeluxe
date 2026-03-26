"use client";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link"; // Import Link
import { usePathname } from "next/navigation"; // To detect current page

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Define links with their paths
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Wigs', path: '/wigs' },
    { name: 'Extensions', path: '/extensions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 border border-white/10 rounded-full flex items-center justify-center font-serif text-white shadow-lg group-hover:border-[#D1A2B5]/50 transition-colors">D</div>
            <span className="text-xl font-light tracking-[0.3em] text-white hidden sm:block">DEELUXE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className={`transition-colors duration-300 ${
                  pathname === link.path ? 'text-[#D1A2B5]' : 'text-white/70 hover:text-[#D1A2B5]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-white hover:text-[#D1A2B5] transition-colors">
              <ShoppingBag size={20} />
            </button>
            
            <button className="hidden sm:block bg-[#D1A2B5] text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-pink-900/10">
              Buy Now
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-1 hover:text-[#D1A2B5] transition-colors z-[110]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE DRAWER --- */}
      <div 
        className={`fixed inset-0 z-[90] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D1A2B5]/10 blur-[100px] rounded-full" />

        <div className="relative flex flex-col items-center justify-center h-full space-y-12 px-6 z-10">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-extralight tracking-[0.5em] uppercase transition-all duration-500 ${
                pathname === link.path ? 'text-[#D1A2B5]' : 'text-white hover:text-[#D1A2B5]'
              } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: isOpen ? `${i * 100}ms` : '0ms' }}
            >
              {link.name}
            </Link>
          ))}
          
          <Link href="/wigs" onClick={() => setIsOpen(false)}>
            <button className="bg-[#D1A2B5] text-white px-12 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mt-8 hover:bg-[#b08095] transition-all active:scale-95 shadow-xl shadow-pink-900/20">
              Shop Collection
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}