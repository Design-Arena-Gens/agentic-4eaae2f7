import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import Craftsmanship from '@/components/Craftsmanship';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Collections />
      <Craftsmanship />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
