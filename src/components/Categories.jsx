import { motion } from "framer-motion";
import {
  Baby,
  HeartPulse,
  Package,
  Sparkles,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Medicines",
    description: "Everyday medicines and healthcare essentials.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Personal Care",
    description: "Products for everyday personal care needs.",
  },
  {
    number: "03",
    icon: Baby,
    title: "Baby Care",
    description: "Everyday essentials for babies and families.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Health & Wellness",
    description: "Selected everyday health and wellness essentials.",
  },
  {
    number: "05",
    icon: Package,
    title: "General Essentials",
    description: "Useful products for everyday household needs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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

function Categories() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[#17231B] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Ambient circle */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#6F8D76]/20"
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#31583B]/20 blur-3xl"
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
            <span className="h-px w-8 bg-[#A8C2AD]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#AAB9AE]">
              What you can find
            </span>
          </div>

          <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[3rem]">
            Everyday essentials,
            <span className="block text-[#AFC8B4]">
              all in one place.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#AAB7AE] sm:text-[15px]">
            Explore the broad categories available at Sri Srinivasa Medical
            and General Store.
          </p>
        </motion.div>

        {/* Category grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.number}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.25 },
                }}
                className={`group relative overflow-hidden rounded-2xl border border-[#52695A]/40 bg-[#203229] p-5 transition-colors duration-300 hover:border-[#79917E]/60 hover:bg-[#263A2E] sm:p-6 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#6C8D74]/10 blur-2xl transition-opacity duration-300 group-hover:bg-[#8BA991]/15" />

                <div className="relative flex items-start justify-between">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#607766]/50 bg-[#2B4133]"
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.6}
                      className="text-[#C1D4C5]"
                    />
                  </motion.div>

                  <span className="text-[10px] tracking-[0.18em] text-[#809286]">
                    {category.number}
                  </span>
                </div>

                <div className="relative mt-12">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-[#F3F6F3]">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-[320px] text-xs leading-5 text-[#A7B5AA]">
                    {category.description}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#647B6B] bg-[#293D30] text-[#C1D4C5]"
                >
                  <ArrowUpRight size={14} />
                </motion.div>

                {/* Bottom line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#8EAD94]"
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Categories;