'use client';
import CountUp from 'react-countup';

const stats = [
  { label: 'Parcels Delivered', value: 3400 },
  { label: 'Happy Customers', value: 1200 },
  { label: 'London Zones Covered', value: 20 },
  { label: 'Avg. Delivery Time', value: '2h' }, // This one can be static
];

export default function StatsSection() {
  return (
    <section className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-blue-900 text-white py-24 px-6 text-center">
      {/* Top Divider */}
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted by Londoners
        </h2>
        <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
          Our reputation is built on speed, trust, and reliability — across all 20 London Zones.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md px-4 py-8 rounded-2xl border border-white/10 shadow-lg"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {typeof stat.value === 'number' ? (
                  <CountUp end={stat.value} duration={2} separator="," />
                ) : (
                  stat.value
                )}
              </h3>
              <p className="text-sm mt-2 text-zinc-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
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
