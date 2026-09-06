import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DCE9DE]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#557060]"
        >
          Get in Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 45, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-[#17231B] sm:text-4xl lg:text-5xl"
        >
          Your local store,
          <span className="block text-[#52715D]">
            just a message away.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#68736C] sm:text-base"
        >
          Connect directly with Sri Srinivasa Medical and General Store for
          store-related information.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            href="tel:9440539893"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#17231B] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(23,35,27,0.12)] transition-colors hover:bg-[#294033] sm:w-auto"
          >
            <Phone size={17} strokeWidth={1.8} />
            Call the Store
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>

          <motion.a
            href="https://wa.me/919440539893"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#D6E1D8] bg-[#F7F9F6] px-6 py-3.5 text-sm font-medium text-[#294033] transition-colors hover:bg-[#EEF4EF] sm:w-auto"
          >
            <MessageCircle size={17} strokeWidth={1.8} />
            WhatsApp
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </motion.div>

        {/* Bottom detail */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mx-auto mt-14 h-px max-w-md origin-center bg-[#DDE5DF]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-xs tracking-wide text-[#8A958E]"
        >
          Shankarampally & surrounding villages
        </motion.p>
      </div>
    </section>
  );
}

export default CTA;