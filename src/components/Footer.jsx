import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Navigation,
  ArrowUp,
  ArrowUpRight,
  Cross,
} from "lucide-react";

const phoneNumber = "9440539893";

const whatsappUrl =
  "https://wa.me/919440539893?text=Hello%2C%20I%20found%20Sri%20Srinivasa%20Medical%20and%20General%20Store%20website.%20I%E2%80%99d%20like%20to%20get%20in%20touch%20with%20the%20store.";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Sri+Srinivasa+Medical+and+General+Store+Shankarampally+Kataram+Telangana";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
  { label: "Location", href: "#location" },
];

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Footer */}
      <footer className="bg-[#17231B] px-5 pb-32 pt-16 text-white sm:px-8 sm:pb-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-[#405247] pb-12 md:grid-cols-[1.3fr_0.7fr]">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF4EF] text-[#294033]">
  <span className="relative block h-5 w-5">
  <span className="absolute left-1/2 top-0 h-5 w-2 -translate-x-1/2 rounded-[2px] bg-[#294033]" />
  <span className="absolute left-0 top-1/2 h-2 w-5 -translate-y-1/2 rounded-[2px] bg-[#294033]" />
</span>
</div>

                <div className="text-sm font-semibold tracking-tight">
                  Sri Srinivasa Medical
                  <span className="block text-[#AFC2B4]">
                    & General Store
                  </span>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#B7C2BA]">
                A convenient local store serving Shankarampally and surrounding
                villages.
              </p>

              {/* Quick contact */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#526257] px-4 py-2.5 text-xs font-medium text-[#F3F6F3] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#829487] hover:bg-[#26372D]"
                >
                  <Phone size={14} />
                  Call Store
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#526257] px-4 py-2.5 text-xs font-medium text-[#F3F6F3] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#829487] hover:bg-[#26372D]"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>

            {/* Explore */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AFC2B4]">
                Explore
              </p>

              <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-1.5 text-sm text-[#C5CEC8] transition-colors duration-300 hover:text-white"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>

 {/* Bottom */}
<div className="flex flex-col gap-4 pt-7 text-xs text-[#89968D] sm:flex-row sm:items-center sm:justify-between">
  <p>
    © {new Date().getFullYear()} Sri Srinivasa Medical and General Store.
    All rights reserved.
  </p>

  <a
    href="https://ayorix.in"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-fit items-center gap-1.5 font-medium text-[#AFC2B4] transition-colors duration-300 hover:text-white"
  >
    Designed & Developed by AYORIX Digital Solutions
    <ArrowUpRight size={12} />
  </a>
</div>
        </div>
      </footer>

      {/* Mobile bottom actions */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[900] border-t border-[#D7E0D9] bg-white/95 px-3 pt-3 backdrop-blur-xl sm:hidden"
        style={{
          paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
        }}
      >
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <a
            href={`tel:${phoneNumber}`}
            className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl bg-[#EEF3EF] text-xs font-semibold text-[#294033] transition-all duration-200 active:scale-[0.97]"
          >
            <Phone size={16} />
            Call
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl bg-[#294033] text-xs font-semibold text-white transition-all duration-200 active:scale-[0.97]"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl bg-[#EEF3EF] text-xs font-semibold text-[#294033] transition-all duration-200 active:scale-[0.97]"
          >
            <Navigation size={16} />
            Directions
          </a>
        </div>
      </div>

      {/* Desktop / mobile back-to-top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollTop}
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 15 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed bottom-6 right-5 z-[850] hidden h-11 w-11 items-center justify-center rounded-full border border-[#D5DED7] bg-white text-[#294033] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex lg:right-8"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Footer;