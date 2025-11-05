import type { Metadata } from 'next';
import './globals.css';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' });
const body = Manrope({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Zia Diamonds ? Timeless Luxury Jewelry',
  description: 'Zia Diamonds crafts timeless luxury diamond jewelry with unparalleled craftsmanship and ethical sourcing.',
  keywords: ['diamond', 'jewelry', 'engagement rings', 'luxury', 'ethical diamonds', 'Zia Diamonds'],
  openGraph: {
    title: 'Zia Diamonds ? Timeless Luxury Jewelry',
    description: 'Discover our masterpieces: engagement rings, necklaces, and bespoke creations.',
    url: 'https://agentic-4eaae2f7.vercel.app',
    siteName: 'Zia Diamonds',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1617038260897-3e69be2d3cf2?q=80&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 900,
        alt: 'Zia Diamonds'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
