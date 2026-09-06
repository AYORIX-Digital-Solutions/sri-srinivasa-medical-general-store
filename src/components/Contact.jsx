import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#17231B] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.22, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#8DB79A] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A9C3AF]"
            >
              Easy Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-tight text-[#F4F7F3] sm:text-4xl lg:text-5xl"
            >
              Need to get in touch?
              <span className="block text-[#B7CFBD]">
                Reach the store directly.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-sm leading-7 text-[#B0BCB3] sm:text-base"
            >
              For store-related information, you can contact Sri Srinivasa
              Medical and General Store directly.
            </motion.p>
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {/* Call */}
            <motion.a
              href="tel:9440539893"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between rounded-2xl border border-[#52675A] bg-[#203027] p-5 transition-colors hover:bg-[#26382D]"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F0EA] text-[#365642]"
                >
                  <Phone size={20} strokeWidth={1.8} />
                </motion.div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#91A398]">
                    Call the Store
                  </p>
                  <p className="mt-1 text-base font-medium text-[#F1F5F1]">
                    94405 39893
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={19}
                className="text-[#9DB5A3] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919440539893"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between rounded-2xl border border-[#52675A] bg-[#203027] p-5 transition-colors hover:bg-[#26382D]"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F0EA] text-[#365642]"
                >
                  <MessageCircle size={20} strokeWidth={1.8} />
                </motion.div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#91A398]">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-base font-medium text-[#F1F5F1]">
                    Message the Store
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={19}
                className="text-[#9DB5A3] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-16 h-px origin-left bg-[#52675A]"
        />
      </div>
    </section>
  );
}

export default Contact;