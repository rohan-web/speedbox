'use client';

export default function BookingCTA() {
  return (
    <section  id="book" className="relative bg-gradient-to-br from-blue-900 via-zinc-900 to-zinc-950 text-white py-24 px-6 text-center">
      {/* Top SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 0 46.29C150 70 350 90 600 90s450-20 600-46.29V0z"
            fill="currentColor"
            className="text-zinc-100/5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Ready to Deliver Across London?
        </h2>
        <p className="text-lg text-zinc-300 mb-10">
          Book now and get your package collected and delivered — same day across London.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/booking"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Book a Delivery
          </a>
          <a
            href="https://wa.me/447123456789"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 0 46.29C150 70 350 90 600 90s450-20 600-46.29V0z"
            fill="currentColor"
            className="text-zinc-100/5"
          />
        </svg>
      </div>
    </section>
  );
}
