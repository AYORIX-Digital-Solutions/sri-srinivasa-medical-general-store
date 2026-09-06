import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowUpRight } from "lucide-react";

const address =
  "Sri Srinivasa Medical and General Store, Shankarampally, Kataram Mandal, Jayashankar Bhupalpally District, Telangana";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Sri+Srinivasa+Medical+and+General+Store+Shankarampally+Kataram+Telangana";

const ease = [0.22, 1, 0.36, 1];

function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#F7F9F6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Floating background glow */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#D8E7DB]/50 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#E8F0E9]/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease }}
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#557060]"
          >
            Find Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease }}
            className="text-3xl font-semibold leading-[1.08] tracking-tight text-[#17231B] sm:text-4xl lg:text-5xl"
          >
            Visit your local
            <motion.span
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="block text-[#52715D]"
            >
              medical store.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-6 max-w-xl text-sm leading-7 text-[#68736C] sm:text-base"
          >
            Located in Shankarampally, serving customers from the local area
            and surrounding villages.
          </motion.p>
        </div>

        {/* Main Location Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease,
          }}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.35,
              ease: "easeOut",
            },
          }}
          className="mt-12 overflow-hidden rounded-3xl border border-[#DCE5DE] bg-white shadow-[0_18px_60px_rgba(23,35,27,0.06)] lg:mt-16"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* Animated Visual */}
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                ease,
              }}
              className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#17231B] p-8 sm:min-h-[360px]"
            >
              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.18, 1],
                  opacity: [0.12, 0.25, 0.12],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-64 w-64 rounded-full bg-[#9BBEA4] blur-3xl"
              />

              {/* Outer pulse */}
              <motion.div
                animate={{
                  scale: [0.8, 1.35],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute h-24 w-24 rounded-full border border-[#A5C2AC]"
              />

              {/* Middle pulse */}
              <motion.div
                animate={{
                  scale: [0.85, 1.2],
                  opacity: [0.35, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.8,
                  ease: "easeOut",
                }}
                className="absolute h-36 w-36 rounded-full border border-[#8FAA96]/60"
              />

              {/* Static ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                  ease,
                }}
                className="absolute h-44 w-44 rounded-full border border-[#91B19A]/30"
              />

              {/* Pin */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.3,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                  type: "spring",
                  stiffness: 140,
                  damping: 12,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#F1F5F1] text-[#41604C] shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
              >
                <MapPin size={34} strokeWidth={1.7} />
              </motion.div>

              {/* Bottom label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                  ease,
                }}
                className="absolute bottom-8 left-8 text-[10px] font-medium uppercase tracking-[0.25em] text-[#9EB4A4]"
              >
                Shankarampally · Telangana
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

              <motion.div
                initial={{ opacity: 0, x: -25, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.4,
                  ease,
                }}
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4EF] text-[#466451]"
              >
                <MapPin size={21} strokeWidth={1.7} />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.48,
                  ease,
                }}
                className="mt-7 text-2xl font-semibold tracking-tight text-[#17231B]"
              >
                Sri Srinivasa Medical and General Store
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.58,
                  ease,
                }}
                className="mt-4 max-w-lg text-sm leading-7 text-[#707A73]"
              >
                {address}
              </motion.p>

              {/* Direction Button */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.68,
                  ease,
                }}
                className="mt-8"
              >
                <motion.a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#17231B] px-5 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#294033]"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Navigation size={17} strokeWidth={1.8} />
                  </motion.span>

                  Get Directions

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Location;