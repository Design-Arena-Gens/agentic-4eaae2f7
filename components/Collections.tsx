import Image from 'next/image';

const items = [
  {
    title: 'Eternal Radiance',
    subtitle: 'Engagement Rings',
    img: 'https://images.unsplash.com/photo-1617038260897-3e69be2d3cf2?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Celestial Grace',
    subtitle: 'Necklaces',
    img: 'https://images.unsplash.com/photo-1615208429550-c1f9b3995d74?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Luminous Echo',
    subtitle: 'Earrings',
    img: 'https://images.unsplash.com/photo-1611591437288-32000b9b49e9?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function Collections() {
  return (
    <section id="collections" className="section">
      <div className="container-lux">
        <div className="mb-12 md:mb-16">
          <h2 className="section-heading">Signature Collections</h2>
          <p className="section-subtitle">Hand-selected diamonds, artfully set to reveal their inner fire.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="card group overflow-hidden">
              <div className="relative h-80">
                <Image src={it.img} alt={it.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-lux-slate">{it.subtitle}</p>
                  <h3 className="font-display text-xl">{it.title}</h3>
                </div>
                <a href="#contact" className="btn border border-white/10 bg-white/5 hover:bg-white/10">Enquire</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
