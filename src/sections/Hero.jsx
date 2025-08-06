'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({
  title = 'Boom Couriers — London Delivery Template',
  subtitle = 'A modern courier website template built with Next.js 14, Tailwind CSS, and Framer Motion — perfect for startups and solo delivery services.',
  showCTA = true,
  ctaText = 'Book a Delivery',
  ctaLink = '/booking',
  backgroundImage = '/hero/heroo.png',
}) {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt="Boom Couriers Hero"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/22 via-black/30 to-black/22" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-xl text-white/80"
          >
            {subtitle}
          </motion.p>
        )}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8"
          >
            <Link
              href={ctaLink}
              className="inline-block rounded-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 font-medium transition"
            >
              {ctaText}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
