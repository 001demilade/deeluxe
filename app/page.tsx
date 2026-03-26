import Hero from './components/Hero';
import Navbar from './components/Navbar'; 
import CategoryGrid from './components/CategoryGrid'; 
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import ImageStrip from './components/ImageStrip'; 
import Footer from './components/Footer';

export default function Page() {
  return (
    
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <ProductSection />
      <AboutSection />
      <Features />
      <ImageStrip />
      <Footer />
    </main>
  );
}