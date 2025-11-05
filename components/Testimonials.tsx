export default function Testimonials() {
  const items = [
    {
      quote: 'The brilliance is breathtaking. Zia made our engagement unforgettable.',
      name: 'Amara & Idris'
    },
    {
      quote: 'Impeccable service and craftsmanship?my necklace is a masterpiece.',
      name: 'Sofia R.'
    },
    {
      quote: 'Ethical, elegant, and enduring. Everything luxury should be.',
      name: 'Lina M.'
    }
  ];

  return (
    <section className="section">
      <div className="container-lux">
        <div className="mb-12 md:mb-16">
          <h2 className="section-heading">Whispers of Delight</h2>
          <p className="section-subtitle">Stories from those who chose radiance.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="card p-6">
              <blockquote className="text-lux-ivory/90">?{t.quote}?</blockquote>
              <figcaption className="mt-4 text-sm text-lux-slate">? {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
