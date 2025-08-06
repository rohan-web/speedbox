export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 border-t border-zinc-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Brand */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-cyan-400">Boom Couriers</h3>
          <p className="text-sm text-zinc-400">Fast same-day delivery across London</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex gap-4 text-sm">
          <a href="/services" className="hover:underline hover:text-cyan-400">Services</a>
          <a href="/about" className="hover:underline hover:text-cyan-400">About</a>
          <a href="/contact" className="hover:underline hover:text-cyan-400">Contact</a>
        </div>

        {/* Right: WhatsApp / Contact */}
        <div className="text-center sm:text-right text-sm">
          <a
            href="https://wa.me/447553406580"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
          <p className="text-zinc-500">© {new Date().getFullYear()} SoloShip</p>
        </div>
      </div>
    </footer>
  );
}
