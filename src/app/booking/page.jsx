'use client';
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "@/sections/Hero";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function BookingPage() {
  const [formData, setFormData] = useState({
    pickupHouse: "",
    pickupRoad: "",
    pickupTown: "",
    pickupPostcode: "",
    dropHouse: "",
    dropRoad: "",
    dropTown: "",
    dropCity: "",
    phone: "",
    parcelSize: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Enter valid UK phone number");
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("✅ Thank you! We'll confirm your order via WhatsApp or Email.");
        setFormData({
          pickupHouse: "",
          pickupRoad: "",
          pickupTown: "",
          pickupPostcode: "",
          dropHouse: "",
          dropRoad: "",
          dropTown: "",
          dropCity: "",
          phone: "",
          parcelSize: "",
        });
        setTimeout(() => {
          router.push("/");
        }, 4000);
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("❌ Network error. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        title="Book a Delivery Now"
        subtitle="Fast pickups from Stratford. Secure deliveries across London Zones TW1–TW20."
        showCTA={true}
        ctaText="Start Booking"
        ctaLink="/booking"
      />

      {/* Booking Section */}
      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-blue-950 text-white py-24 px-4 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0">
          <svg className="relative block w-[calc(100%+1.3px)] h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
            <path d="M1200 0L0 0 0 46.29C150 70 350 90 600 90s450-20 600-46.29V0z" fill="currentColor" className="text-zinc-100/5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8">
          <motion.h2 className="text-3xl font-semibold mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            📦 Book Your Delivery
          </motion.h2>
          <motion.p className="text-sm text-gray-300 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            📍 <strong>Picking up parcels from London Zones TW1 to TW20</strong> — Delivering all across London.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Pickup Address */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={1}>
              <h3 className="text-lg font-semibold mb-3">Pickup Address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["pickupHouse", "pickupRoad", "pickupTown", "pickupPostcode"].map((field, i) => (
                  <motion.input
                    key={field}
                    type="text"
                    name={field}
                    placeholder={field.replace("pickup", "").replace(/([A-Z])/g, " $1")}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full bg-white/10 backdrop-blur-md text-white placeholder-gray-400 p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    variants={fadeInUp}
                    custom={i + 2}
                    required
                  />
                ))}
              </div>
            </motion.div>

            {/* Parcel Size */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={6}>
              <h3 className="text-lg font-semibold mb-3">Parcel Details</h3>
              <p className="text-sm text-gray-400 mb-4">
                ✏️ Length must not exceed <strong>14" x 14"</strong>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Envelope", "Small (up to 3kg)", "Medium (up to 4kg)", "Large (up to 6kg)"].map((label, index) => (
                  <label
                    key={index}
                    className={`cursor-pointer border border-white/20 p-4 rounded-xl text-sm flex items-center gap-3 transition hover:bg-white/10 ${
                      formData.parcelSize === label ? "bg-cyan-500/20 border-cyan-400" : ""
                    }`}
                  >
                    <input type="radio" name="parcelSize" value={label} checked={formData.parcelSize === label} onChange={handleChange} className="accent-cyan-500" />
                    {label}
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Dropoff */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={7}>
              <h3 className="text-lg font-semibold mb-3">Drop-off Address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["dropHouse", "dropRoad", "dropTown", "dropCity"].map((field, i) => (
                  <motion.input
                    key={field}
                    type="text"
                    name={field}
                    placeholder={field.replace("drop", "").replace(/([A-Z])/g, " $1")}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full bg-white/10 backdrop-blur-md text-white placeholder-gray-400 p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    variants={fadeInUp}
                    custom={i + 8}
                    required
                  />
                ))}
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={12}>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/10 backdrop-blur-md text-white placeholder-gray-400 p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                required
              />
            </motion.div>

            {/* Submit */}
            <motion.div className="text-center" variants={fadeInUp} initial="hidden" animate="visible" custom={13}>
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-500 transition text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/30"
              >
                Submit Booking
              </button>
            </motion.div>
          </form>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
          <svg className="relative block w-[calc(100%+1.3px)] h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
            <path d="M1200 0L0 0 0 46.29C150 70 350 90 600 90s450-20 600-46.29V0z" fill="currentColor" className="text-zinc-100/5" />
          </svg>
        </div>
      </section>
      <Footer />
    </>
  );
}
