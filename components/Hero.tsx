import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section overflow-hidden bg-lux-radial">
      <div className="container-lux relative">
        <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-lux-gradient blur-3xl" />
        </div>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl md:text-6xl leading-tight">
              Timeless <span className="text-lux-gold">Elegance</span>,
              Crafted to Perfection
            </h1>
            <p className="section-subtitle">
              Zia Diamonds creates heirloom pieces with ethically sourced diamonds and meticulous craftsmanship. Discover collections that celebrate life?s most radiant moments.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#collections" className="btn-gold">Explore Collections</a>
              <a href="#contact" className="btn border border-white/10 bg-white/5 hover:bg-white/10">Bespoke Inquiry</a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-xs text-lux-slate">
              <div>
                <p className="text-lux-ivory">Ethically Sourced</p>
                <p>Conflict-free, certified diamonds</p>
              </div>
              <div>
                <p className="text-lux-ivory">Lifetime Care</p>
                <p>Complimentary cleaning & inspection</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto h-[520px] w-[520px] max-w-full">
              <Image
                src="https://images.unsplash.com/photo-1616577201253-0b4fd2ff86d7?q=80&w=1200&auto=format&fit=crop"
                alt="Diamond Ring"
                fill
                className="rounded-3xl object-cover shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
