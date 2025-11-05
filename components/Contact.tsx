"use client";
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section bg-gradient-to-b from-transparent to-white/[0.03]">
      <div className="container-lux grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="section-heading">Book a Private Consultation</h2>
          <p className="section-subtitle">Allow us to guide you to the perfect expression of your story.</p>
          <div className="mt-6 text-sm text-lux-slate">
            <p>Studio Hours: Mon?Sat, 10:00?18:00</p>
            <p>Email: concierge@ziadiamonds.com</p>
            <p>Phone: +1 (555) 201-0199</p>
          </div>
        </div>
        <div className="card p-6 md:p-8">
          {submitted ? (
            <div className="text-center">
              <h3 className="font-display text-2xl text-lux-gold">Thank you</h3>
              <p className="mt-2 text-lux-slate">Our concierge will be in touch shortly.</p>
              <button className="btn mt-6 border border-white/10 bg-white/5 hover:bg-white/10" onClick={() => setSubmitted(false)}>Send another inquiry</button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-4"
            >
              <div>
                <label className="mb-2 block text-sm text-lux-slate">Full Name</label>
                <input required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-lux-gold/40 focus:ring" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-lux-slate">Email</label>
                <input type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-lux-gold/40 focus:ring" placeholder="you@example.com" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-lux-slate">Phone</label>
                  <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-lux-gold/40 focus:ring" placeholder="Optional" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-lux-slate">Service</label>
                  <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-lux-gold/40 focus:ring">
                    <option>Engagement Ring</option>
                    <option>Necklace</option>
                    <option>Earrings</option>
                    <option>Custom / Bespoke</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-lux-slate">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-lux-gold/40 focus:ring" placeholder="Tell us about your vision" />
              </div>
              <button className="btn-gold w-full">Request Consultation</button>
              <p className="text-center text-xs text-lux-slate">By submitting, you agree to our privacy policy.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
