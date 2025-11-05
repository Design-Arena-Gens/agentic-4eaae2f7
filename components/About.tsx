export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-lux grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="section-heading">The Zia Heritage</h2>
          <p className="section-subtitle">
            Born from a pursuit of purity and light, Zia Diamonds unites ethical sourcing with exceptional design. Our atelier partners with cutters and setters who share our devotion to excellence.
          </p>
        </div>
        <div className="card p-6 md:p-8">
          <p className="text-lux-slate">
            We believe luxury is a promise: to the wearer, to the craft, and to the world we share. Each creation is designed to accompany a lifetime of moments?quiet, bold, and everything in between.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="btn-gold">Visit Our Studio</a>
            <a href="#collections" className="btn border border-white/10 bg-white/5 hover:bg-white/10">View Collections</a>
          </div>
        </div>
      </div>
    </section>
  );
}
