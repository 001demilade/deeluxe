// app/contact/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <section className="pt-40 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-light mb-12 text-center">Contact <span className="text-[#D1A2B5] italic">Us</span></h1>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:border-[#D1A2B5] outline-none transition-all" />
            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:border-[#D1A2B5] outline-none transition-all" />
          </div>
          <textarea placeholder="Your Message" rows={6} className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:border-[#D1A2B5] outline-none transition-all" />
          <button className="w-full bg-[#D1A2B5] text-white py-5 uppercase font-bold tracking-[0.3em] hover:bg-[#b08095] transition-all">
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}