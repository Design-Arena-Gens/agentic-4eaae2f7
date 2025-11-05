export default function Craftsmanship() {
  return (
    <section id="craft" className="section bg-gradient-to-b from-white/[0.03] to-transparent">
      <div className="container-lux grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="section-heading">Craftsmanship Without Compromise</h2>
          <p className="section-subtitle">
            Each Zia piece is hand-finished by master artisans. From the first sketch to the final polish, every step is executed with precision to maximize brilliance and longevity.
          </p>
          <ul className="mt-8 space-y-4 text-lux-slate">
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-lux-gold" />Excellent cut proportions for maximum light performance</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-lux-gold" />Premium alloys for lasting luster and strength</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-lux-gold" />Lifetime care: resizing, cleaning, and inspections</li>
          </ul>
        </div>
        <div className="card p-6 md:p-8">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-4xl font-display text-lux-gold">GIA</p>
              <p className="text-sm text-lux-slate">Certified Diamonds</p>
            </div>
            <div>
              <p className="text-4xl font-display"><span className="text-lux-gold">10x</span></p>
              <p className="text-sm text-lux-slate">Quality Inspections</p>
            </div>
            <div>
              <p className="text-4xl font-display">Bespoke</p>
              <p className="text-sm text-lux-slate">Custom Studio</p>
            </div>
            <div>
              <p className="text-4xl font-display">Ethical</p>
              <p className="text-sm text-lux-slate">Sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
