"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "@/sections/Hero";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <Hero
        title="About Boom Couriers"
        subtitle="Your trusted courier partner across London — reliable, fast, and future-ready."
        ctaText="Book a Delivery"
        ctaLink="/booking"
      />

      <main className="bg-gradient-to-br from-black via-[#0b0b0b] to-gray-900 text-white px-6 md:px-16 py-24">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section Card */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              Who We Are
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Boom Couriers is a forward-thinking delivery company based in London. 
              We specialize in fast, secure, and reliable courier services tailored for 
              individuals and small businesses. Whether it's an urgent parcel or a scheduled pickup, 
              we ensure every delivery arrives with precision and care.
            </p>
          </motion.section>

          {/* Divider */}
          <div className="h-[1px] bg-white/10 w-full" />

          {/* Section Card */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              Our Mission
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              We aim to revolutionize local delivery with tech-powered logistics that are simple, efficient, 
              and trustworthy. Boom Couriers is committed to offering transparent services, responsive support, 
              and consistent speed — all at fair prices. We believe in empowering senders through seamless experiences.
            </p>
          </motion.section>

          {/* Divider */}
          <div className="h-[1px] bg-white/10 w-full" />

          {/* Section Card */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              Why Choose Boom Couriers
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              With hundreds of successful deliveries and a growing customer base, 
              Boom Couriers stands out for its reliability and professionalism. We treat every parcel 
              like it matters — because it does. From real-time updates to responsive service, 
              our clients trust us to deliver — every single time.
            </p>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
}
