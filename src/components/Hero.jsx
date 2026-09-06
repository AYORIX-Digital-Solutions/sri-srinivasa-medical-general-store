import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F7F9F6]"
    >
      {/* Ambient background */}
      <motion.div
        animate={{
          x: [0, 18, 0],
          y: [0, -14, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[#DCE9DE] opacity-50 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -14, 0],
          y: [0, 12, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#E8EFE9] opacity-60 blur-3xl"
      />

      {/* Main container */}
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-20 lg:grid lg:min-h-[calc(100vh-72px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-20 lg:pt-28">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.45,
            ease,
          }}
        >
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6E0D7] bg-white px-3 py-2 shadow-sm"
          >
            <MapPin size={13} className="text-[#1E4A2B]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#68756C] sm:text-[10px]">
              Shankarampally, Telangana
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="max-w-[720px] text-[2.35rem] font-semibold leading-[1.03] tracking-[-0.045em] text-[#17231B] sm:text-[3.5rem] lg:text-[4.8rem]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 2.58, ease }}
              className="block"
            >
              Your local
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 2.7, ease }}
              className="block text-[#1E4A2B]"
            >
              medical store,
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 2.82, ease }}
              className="block"
            >
              made simple.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.95, ease }}
            className="mt-6 max-w-[540px] text-[14px] leading-6 text-[#5E6A62] sm:text-[15px] sm:leading-7"
          >
            Sri Srinivasa Medical and General Store is your convenient local
            destination for medicines, personal care products and everyday
            general essentials.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.08, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="tel:9440539893"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#1E4A2B] px-6 text-sm font-medium text-white shadow-[0_8px_25px_rgba(30,74,43,0.12)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(30,74,43,0.2)]"
            >
              <Phone size={15} />

              Call Now

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Sri+Srinivasa+Medical+and+General+Store+Shankarampally+Kataram+Telangana"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#C9D5CB] bg-white px-6 text-sm font-medium text-[#26352B] transition-all duration-300 hover:border-[#1E4A2B] hover:bg-[#F1F5F1]"
            >
              <MapPin size={15} />
              Get Directions
            </motion.a>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 3.2 }}
            className="mt-7 flex items-center gap-3"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E5EEE6]">
              <ShieldCheck size={15} className="text-[#1E4A2B]" />
            </div>

            <p className="text-[11px] leading-5 text-[#68756C] sm:text-xs">
              A convenient local store for everyday
              <br />
              healthcare and general essentials.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2.65,
            ease,
          }}
          className="mx-auto mt-14 w-full max-w-[380px] lg:mt-0 lg:max-w-[480px]"
        >
          {/* Floating visual */}
          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-[#D7E1D8] bg-[#EAF1EB] p-4 shadow-[0_25px_70px_rgba(30,74,43,0.08)] sm:rounded-[2rem] sm:p-6">

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#B9CCBC]"
              />

              <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-[#C9D8CB]" />

              {/* Inner */}
              <div className="absolute inset-4 flex items-center justify-center rounded-[1.2rem] border border-[#D4E0D5] bg-[#F7F9F6] sm:inset-6 sm:rounded-[1.5rem]">

                {/* Cross */}
                <motion.div
                  animate={{
                    scale: [1, 1.025, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#B9CCBC] bg-white shadow-[0_15px_40px_rgba(30,74,43,0.08)] sm:h-36 sm:w-36"
                >
                  <div className="absolute h-14 w-5 rounded-md bg-[#1E4A2B] sm:h-[72px] sm:w-6" />
                  <div className="absolute h-5 w-14 rounded-md bg-[#1E4A2B] sm:h-6 sm:w-[72px]" />

                  <div className="absolute -inset-4 rounded-full border border-[#D2DED3]" />
                </motion.div>

                {/* Floating card 1 */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-3 top-5 rounded-lg border border-[#D5E0D6] bg-white px-2.5 py-2 shadow-sm sm:left-6 sm:top-7 sm:px-3 sm:py-2.5"
                >
                  <p className="text-[8px] uppercase tracking-[0.14em] text-[#7A857D]">
                    Medical
                  </p>

                  <p className="mt-0.5 text-[10px] font-semibold text-[#26352B] sm:text-xs">
                    Essentials
                  </p>
                </motion.div>

                {/* Floating card 2 */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-5 right-3 rounded-lg border border-[#D5E0D6] bg-white px-2.5 py-2 shadow-sm sm:bottom-7 sm:right-6 sm:px-3 sm:py-2.5"
                >
                  <p className="text-[8px] uppercase tracking-[0.14em] text-[#7A857D]">
                    General
                  </p>

                  <p className="mt-0.5 text-[10px] font-semibold text-[#26352B] sm:text-xs">
                    Products
                  </p>
                </motion.div>

                {/* Decorative dots */}
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full bg-[#1E4A2B]"
                />

                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-[#7A9B81]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#849087] lg:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">
          Explore
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;