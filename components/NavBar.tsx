"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : ''}`}>
      <div className="container-lux flex h-16 items-center justify-between">
        <Link href="#" className="group inline-flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-gradient-to-br from-lux-gold/90 to-yellow-500/70 shadow-glow" />
          <span className="font-display text-xl tracking-wide">Zia <span className="text-lux-gold">Diamonds</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-lux-slate">
          <a href="#collections" className="hover:text-lux-ivory">Collections</a>
          <a href="#craft" className="hover:text-lux-ivory">Craftsmanship</a>
          <a href="#about" className="hover:text-lux-ivory">About</a>
          <a href="#contact" className="hover:text-lux-ivory">Contact</a>
        </nav>
        <a href="#contact" className="btn-gold hidden md:inline-flex">Book a Consultation</a>
      </div>
    </div>
  );
}
