import { motion } from "framer-motion";
import {
  MapPin,
  Layers3,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: MapPin,
    title: "Conveniently Local",
    text: "A convenient local store for people in Shankarampally and nearby villages.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Everyday Essentials",
    text: "Medicines, personal care products and general essentials in one place.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Easy to Reach",
    text: "Get in touch directly when you need information about the store or its products.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#F7F9F6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Floating background element */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 12, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#CFE2D3]/30 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#E1ECE3]/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#557060]"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl font-semibold leading-[1.08] tracking-tight text-[#17231B] sm:text-4xl lg:text-5xl"
          >
            Simple, local and
            <motion.span
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-[#52715D]"
            >
              easy to reach.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-6 max-w-xl text-sm leading-7 text-[#68736C] sm:text-base"
          >
            A straightforward local store experience for everyday healthcare
            and general essentials across Shankarampally and surrounding
            villages.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                variants={card}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#DCE5DE] bg-white p-6 shadow-[0_12px_40px_rgba(23,35,27,0.05)] sm:p-8"
              >
                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                  }}
                  className="text-xs font-semibold tracking-[0.2em] text-[#9AA69D]"
                >
                  {reason.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    rotate: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                  }}
                  className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4EF] text-[#466451]"
                >
                  <Icon size={21} strokeWidth={1.7} />
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.5,
                  }}
                  className="mt-7 text-xl font-semibold tracking-tight text-[#17231B]"
                >
                  {reason.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.58,
                  }}
                  className="mt-3 text-sm leading-6 text-[#707A73]"
                >
                  {reason.text}
                </motion.p>

                {/* Animated line */}
                <div className="mt-8 h-px w-full overflow-hidden bg-[#E7ECE8]">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full w-1/3 bg-[#71917B]"
                  />
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -12,
                    y: 8,
                  }}
                  whileHover={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-7 right-7 text-[#52715D]"
                >
                  <ArrowUpRight size={19} strokeWidth={1.8} />
                </motion.div>

                {/* Hover accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35 }}
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#52715D]"
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-12 border-t border-[#DDE5DF] pt-7"
        >
          <p className="text-sm text-[#68736C]">
            Serving{" "}
            <span className="font-medium text-[#344C3C]">
              Shankarampally & surrounding villages
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;