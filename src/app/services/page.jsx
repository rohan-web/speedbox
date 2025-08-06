'use client';
import { FaTruck, FaClock, FaCalendarAlt, FaStar, FaShieldAlt, FaSmile } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "@/sections/Hero";

const services = [
  {
    title: "Same-Day Delivery",
    icon: <FaTruck className="text-3xl text-cyan-400" />,
    description: "Guaranteed delivery within the same day for urgent packages. Ideal for important documents, medical items, or last-minute needs.",
  },
  {
    title: "Next-Day Delivery",
    icon: <FaClock className="text-3xl text-cyan-400" />,
    description: "Affordable and fast delivery on the next working day. Perfect for planned shipments that need timely arrival.",
  },
  {
    title: "Scheduled Delivery",
    icon: <FaCalendarAlt className="text-3xl text-cyan-400" />,
    description: "Book your delivery in advance with flexible time slots. Designed for businesses and recurring logistics needs.",
  },
];

const comparisonData = [
  { feature: "Delivery Speed", sameDay: "Fastest", nextDay: "Fast", scheduled: "Custom" },
  { feature: "Ideal For", sameDay: "Urgent items", nextDay: "Standard deliveries", scheduled: "Planned logistics" },
  { feature: "Availability", sameDay: "Limited hours", nextDay: "All day", scheduled: "Flexible slots" },
  { feature: "Pricing", sameDay: "Premium", nextDay: "Affordable", scheduled: "Custom" },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "BoomCouriers delivered my package across London in just a few hours. Absolutely impressed with the speed and care!",
  },
  {
    name: "James L.",
    text: "Reliable and professional service. I use BoomCouriers weekly for my bakery's deliveries.",
  },
  {
    name: "Amir R.",
    text: "Customer support is top-notch, and the delivery tracking works flawlessly. Highly recommend.",
  },
];

const benefits = [
  {
    title: "Trusted & Secure",
    icon: <FaShieldAlt className="text-3xl text-cyan-400" />,
    text: "We ensure every parcel is handled with care and confidentiality.",
  },
  {
    title: "Real-Time Tracking",
    icon: <FaStar className="text-3xl text-cyan-400" />,
    text: "Track your deliveries in real-time with instant status updates.",
  },
  {
    title: "Customer Satisfaction",
    icon: <FaSmile className="text-3xl text-cyan-400" />,
    text: "Thousands of happy customers trust us for smooth deliveries.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <Hero
        title="Our Delivery Services"
        subtitle="Explore our range of delivery solutions — fast, secure, and tailored for London businesses and individuals."
        ctaText="Get Started"
        ctaLink="/booking"
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0f1c] to-black text-white pt-28 pb-20 px-4 md:px-10 space-y-24">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Our Courier Services
          </h1>
          <p className="text-gray-400 text-lg">Speed. Reliability. Affordability.</p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">Service Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-white/10 rounded-lg overflow-hidden backdrop-blur-md bg-white/5">
              <thead className="bg-cyan-500/10 text-cyan-300">
                <tr>
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3">Same-Day</th>
                  <th className="px-4 py-3">Next-Day</th>
                  <th className="px-4 py-3">Scheduled</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-300 divide-y divide-white/10">
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3">{row.feature}</td>
                    <td className="px-4 py-3 text-center">{row.sameDay}</td>
                    <td className="px-4 py-3 text-center">{row.nextDay}</td>
                    <td className="px-4 py-3 text-center">{row.scheduled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-cyan-500/20"
              >
                <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                <h4 className="text-cyan-400 font-semibold">— {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-white">Why Choose BoomCouriers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-cyan-500/20"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl p-10 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to Send Your Parcel?</h3>
          <p className="text-gray-400 mb-6">
            Experience fast, reliable courier services with BoomCouriers.
          </p>
          <a
            href="/booking"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Book a Delivery
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
