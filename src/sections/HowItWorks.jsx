'use client';
import { FaBox, FaMapMarkedAlt, FaSmileBeam } from 'react-icons/fa';

const steps = [
  {
    icon: <FaBox className="text-cyan-400 text-4xl mb-4" />,
    title: '1. Book Online',
    description: 'Fill out our quick booking form with pickup and drop-off details.',
  },
  {
    icon: <FaMapMarkedAlt className="text-cyan-400 text-4xl mb-4" />,
    title: '2. We Pick Up',
    description: 'Our courier collects your package directly from your doorstep.',
  },
  {
    icon: <FaSmileBeam className="text-cyan-400 text-4xl mb-4" />,
    title: '3. Same-Day Delivery',
    description: 'We deliver your item safely and promptly across London.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-br from-black via-zinc-900 to-[#020617] text-white overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
          <path d="M1200 0L0 0 0 46.29C150 70 350 90 600 90s450-20 600-46.29V0z" fill="currentColor" className="text-zinc-100/5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">How It Works</h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
            Booking and receiving your parcel is simple — just follow these three quick steps.
          </p>
        </div>

       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
  {steps.map((step, index) => (
    <div
      key={index}
      className="bg-white/5 backdrop-blur-md px-6 py-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-500/10 transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="text-cyan-400 text-4xl mb-4">{step.icon}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-zinc-300 text-sm leading-relaxed">{step.description}</p>
    </div>
  ))}
</div>

      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
          <path d="M1200 0L0 0 0 46.29C150 70 350 90 600 90s450-20 600-46.29V0z" fill="currentColor" className="text-zinc-100/5" />
        </svg>
      </div>
    </section>
  );
}
