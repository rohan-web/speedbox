'use client';
import React from 'react';
import { FaClock, FaUserShield, FaSmile, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaClock />,
    title: 'Same-Day Speed',
    description: 'We deliver parcels across London in hours — not days. No hubs, no hold-ups.',
  },
  {
    icon: <FaUserShield />,
    title: 'Reliable & Safe',
    description: 'Handled with care by a trusted solo courier. No lost parcels or confusion.',
  },
  {
    icon: <FaSmile />,
    title: 'Friendly Service',
    description: 'You’ll always talk to a human — updates via WhatsApp or call when needed.',
  },
  {
    icon: <FaBolt />,
    title: 'Instant Booking',
    description: 'Book within seconds online — no need to call or download an app.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-br from-black via-zinc-900 to-blue-900 text-white py-24 px-6">
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

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Why Choose Us?
        </h2>
        <p className="text-zinc-400 mb-12 text-lg max-w-xl mx-auto">
          Trusted by Londoners who want fast, human, reliable delivery — without the usual hassle.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md px-6 py-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-center mb-4 text-cyan-400 text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {feature.description}
              </p>
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
