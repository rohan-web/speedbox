'use client';
import Image from 'next/image';
import React from 'react';

const deliveryOptions = [
  {
    title: 'Same-Day Delivery',
    description: 'Urgent packages delivered across London within hours. Ideal for medical, legal, or priority items that can’t wait.',
    image: '/illustrations/same-day.svg',
  },
  {
    title: 'Next-Day Delivery',
    description: 'Reliable and affordable next-day delivery service, perfect for ecommerce businesses or scheduled deliveries.',
    image: '/illustrations/next-day.svg',
  },
  {
    title: 'Scheduled Deliveries',
    description: 'Book ahead and set your preferred pickup and drop-off times. Great for recurring deliveries or event logistics.',
    image: '/illustrations/scheduled.svg',
  },
];

export default function DeliverySection() {
  return (
    <section className="relative bg-gradient-to-br from-black via-zinc-900 to-[#020617] text-white overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
          <path d="M1200 0L0 0 0 46.29C150 70 350 90 600 90s450-20 600-46.29V0z" fill="currentColor" className="text-zinc-100/5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 space-y-28">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Fast, Flexible Delivery Options</h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
            Choose a service that aligns with your schedule and urgency — whether it’s today, tomorrow, or planned in advance.
          </p>
        </div>

        <div className="space-y-24">
          {deliveryOptions.map((option, index) => (
            <div key={index} className={`flex flex-col-reverse lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                <h3 className="text-3xl font-semibold text-cyan-400">{option.title}</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">{option.description}</p>
              </div>
              <div className="lg:w-1/2">
                <div className="w-full max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-6 backdrop-blur-md transition hover:scale-[1.03] hover:shadow-cyan-500/30">
                  <Image src={option.image} alt={option.title} width={400} height={400} className="mx-auto" />
                </div>
              </div>
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
