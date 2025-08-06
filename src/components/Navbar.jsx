'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' }, // Optional
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#0b0b0f] text-white px-6 py-4 shadow-lg fixed w-full z-50 border-b border-white/5 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-cyan-400 hover:text-white transition cursor-pointer"
          >
            BoomCouriers
          </motion.div>
        </Link>

        {/* Nav Links */}
        <motion.div
          className="hidden md:flex space-x-6 text-sm font-medium"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link href={link.href}>
                <span
                  className={`hover:text-cyan-400 transition ${
                    pathname === link.href ? "text-cyan-400" : "text-white/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          {isHome ? (
            <a
              href="#book"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-full transition"
            >
              Book Delivery
            </a>
          ) : (
            <Link href="/booking" passHref>
              <div className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                Book Delivery
              </div>
            </Link>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
}
