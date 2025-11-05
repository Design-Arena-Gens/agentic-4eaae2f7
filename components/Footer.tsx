export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="container-lux py-10 text-sm text-lux-slate">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p>? {new Date().getFullYear()} Zia Diamonds. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-lux-ivory" href="#">Privacy</a>
            <a className="hover:text-lux-ivory" href="#">Terms</a>
            <a className="hover:text-lux-ivory" href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
