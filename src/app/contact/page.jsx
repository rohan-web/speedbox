'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('This is a demo. Form submissions are disabled.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <Hero />

      <main className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-gray-900 px-4 py-24 text-white flex items-center justify-center">
        <div className="w-full max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold text-center mb-4 tracking-tight"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-white/70 mb-10"
          >
            Have a question, suggestion, or just want to say hello? Fill out the form below.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6 shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-white/80 font-medium mb-1">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 text-white border border-white/10 rounded-lg placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-white/80 font-medium mb-1">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 text-white border border-white/10 rounded-lg placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-white/80 font-medium mb-1">
                Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 text-white border border-white/10 rounded-lg placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition text-white font-semibold tracking-wide shadow-md"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </main>

      <Footer />
    </>
  );
}
