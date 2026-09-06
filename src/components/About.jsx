import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F9F6] py-20 sm:py-24 lg:py-32"
    >
      {/* Ambient background */}
      <motion.div
        animate={{
          rotate: [0, 8, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full border border-[#D9E4DA] opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#1E4A2B]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B786F]">
              About the store
            </span>
          </div>

          <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#17231B] sm:text-[3rem]">
            A simple place for
            <span className="text-[#1E4A2B]">
              {" "}everyday essentials.
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">

          {/* REAL STORE PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D7E1D8] bg-[#EAF1EB] p-2 shadow-[0_25px_60px_rgba(30,74,43,0.08)] sm:rounded-[2rem] sm:p-3">

              {/* Image */}
              <div className="relative overflow-hidden rounded-[1.15rem] sm:rounded-[1.5rem]">
                <motion.img
                  src="/images/store-board.png"
                  alt="Sri Srinivasa Medical and General Store"
                  loading="lazy"
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="block aspect-[4/3] w-full object-cover"
                />

                {/* Subtle overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60" />
              </div>

              {/* Image label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute bottom-6 left-6 rounded-xl border border-white/70 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7"
              >
                <p className="text-[8px] uppercase tracking-[0.16em] text-[#7A857D]">
                  Our Store
                </p>

                <p className="mt-0.5 text-xs font-semibold text-[#26352B]">
                  Shankarampally
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-[15px] leading-7 text-[#536057] sm:text-base sm:leading-8">
              Sri Srinivasa Medical and General Store is a local store serving
              Shankarampally and the surrounding villages with medicines,
              personal care products and everyday general essentials.
            </p>

            <p className="mt-5 text-[14px] leading-7 text-[#748077]">
              Whether you need everyday healthcare essentials or general
              products, the store provides a convenient local place to find
              what you need and get in touch directly when required.
            </p>

            {/* Location */}
            <div className="mt-8 flex items-center gap-3 border-t border-[#DCE5DD] pt-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5EEE6]">
                <MapPin size={15} className="text-[#1E4A2B]" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#8A958C]">
                  Serving
                </p>

                <p className="mt-1 text-xs font-medium text-[#354239]">
                  Shankarampally & surrounding villages
                </p>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#categories"
              whileHover={{ x: 4 }}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1E4A2B]"
            >
              Explore what we offer

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;