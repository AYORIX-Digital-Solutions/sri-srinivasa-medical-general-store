import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight, Cross } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Categories", href: "#categories", id: "categories" },
  { label: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
  { label: "Contact", href: "#contact", id: "contact" },
  { label: "Location", href: "#location", id: "location" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.2, 0.5, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[999]">
        <nav className="border-b border-[#DCE4DE]/80 bg-[#F7F9F6]/90 backdrop-blur-xl">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
            {/* Brand */}
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="group flex items-center gap-3 text-left"
              aria-label="Go to homepage"
            >
             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#294033] text-white transition-transform duration-300 group-hover:scale-105">
  <Cross size={21} strokeWidth={2.4} />
</span>

              <span className="text-[13px] font-semibold leading-tight tracking-[-0.01em] text-[#17231B] sm:text-sm">
                Sri Srinivasa Medical
                <span className="block text-[#5D6C62]">
                  & General Store
                </span>
              </span>
            </button>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-[#294033]"
                        : "text-[#69756D] hover:text-[#294033]"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#31543D]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop Call button */}
            <a
              href="tel:9440539893"
              className="hidden items-center gap-2 rounded-full bg-[#294033] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20342A] hover:shadow-lg hover:shadow-[#294033]/15 lg:flex"
            >
              <Phone size={14} strokeWidth={2} />
              Call Now
              <ArrowUpRight size={13} strokeWidth={2} />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6DED8] text-[#294033] transition-all duration-300 hover:bg-[#EEF3EF] lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="border-b border-[#DCE4DE] bg-[#F7F9F6] px-5 pb-5 pt-3 shadow-lg shadow-black/[0.04] lg:hidden"
            >
              <div className="mx-auto max-w-md">
                <div className="space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.035,
                          duration: 0.25,
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[#EAF1EB] text-[#294033]"
                            : "text-[#59665D] hover:bg-[#EEF3EF] hover:text-[#294033]"
                        }`}
                      >
                        <span>{item.label}</span>

                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#31543D]" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-4 border-t border-[#DCE4DE] pt-4">
                  <a
                    href="tel:9440539893"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#294033] px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 active:scale-[0.98]"
                  >
                    <Phone size={16} />
                    Call the Store
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;