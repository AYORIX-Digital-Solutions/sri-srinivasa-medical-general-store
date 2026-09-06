import { motion } from "framer-motion";
import { HeartPulse, Package, Sparkles, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: HeartPulse,
    number: "01",
    title: "Medicines",
    description: "Everyday medicines and healthcare essentials.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Personal Care",
    description: "Useful products for everyday personal care.",
  },
  {
    icon: Package,
    number: "03",
    title: "General Essentials",
    description: "Practical essentials for your everyday needs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Highlights() {
  return (
    <section className="relative overflow-hidden border-y border-[#DDE5DE] bg-white">
      {/* Ambient background */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#E8F0E9] opacity-50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="grid gap-px overflow-hidden rounded-2xl border border-[#DDE5DE] bg-[#DDE5DE] md:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative overflow-hidden bg-[#F9FBF9] px-5 py-7 transition-colors duration-500 hover:bg-white sm:px-7 sm:py-8"
              >
                {/* Hover light */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#E5EFE6] blur-2xl"
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between">

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D8E3D9] bg-[#E8F0E9]"
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      className="text-[#1E4A2B]"
                    />
                  </motion.div>

                  {/* Number */}
                  <motion.span
                    initial={{ opacity: 0.5 }}
                    whileHover={{
                      opacity: 1,
                      x: -3,
                    }}
                    className="text-[10px] font-medium tracking-[0.18em] text-[#9CA89F]"
                  >
                    {item.number}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-[#17231B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[280px] text-[12px] leading-5 text-[#6B766E]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom arrow */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -5,
                  }}
                  whileHover={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-6 right-6 flex h-7 w-7 items-center justify-center rounded-full border border-[#D6E1D7] bg-white text-[#1E4A2B]"
                >
                  <ArrowUpRight size={13} />
                </motion.div>

                {/* Bottom line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#1E4A2B]"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Highlights;