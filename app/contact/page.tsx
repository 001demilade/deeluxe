"use client"; // Required for useState
import { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2 } from "lucide-react"; // Nice success icon

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send data to an API here
    setIsSubmitted(true);
    
    // Optional: Reset after 5 seconds to show the form again
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-light mb-12 text-center">
          Contact <span className="text-[#D1A2B5] italic">Us</span>
        </h1>

        <div className="relative min-h-[400px] flex items-center justify-center">
          {!isSubmitted ? (
            /* --- THE FORM --- */
            <form onSubmit={handleSubmit} className="w-full space-y-6 animate-in fade-in duration-700">
              <div className="grid md:grid-cols-2 gap-6">
                <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:border-[#D1A2B5] outline-none transition-all placeholder:text-gray-600" />
                <input required type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:border-[#D1A2B5] outline-none transition-all placeholder:text-gray-600" />
              </div>
              <textarea required placeholder="Your Message" rows={6} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:border-[#D1A2B5] outline-none transition-all placeholder:text-gray-600" />
              <button type="submit" className="w-full bg-[#D1A2B5] text-white py-5 uppercase font-bold tracking-[0.3em] hover:bg-[#b08095] transition-all active:scale-[0.98]">
                Send Message
              </button>
            </form>
          ) : (
            /* --- THE SUCCESS MESSAGE --- */
            <div className="text-center space-y-4 animate-in zoom-in duration-500">
              <div className="flex justify-center">
                <CheckCircle2 size={64} className="text-[#D1A2B5] animate-bounce" />
              </div>
              <h2 className="text-3xl font-light tracking-tight">Message Received</h2>
              <p className="text-gray-400 font-light">
                Thank you for reaching out. A DEELUXE representative <br /> will contact you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-[#D1A2B5] text-xs uppercase tracking-widest pt-4 hover:underline"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}