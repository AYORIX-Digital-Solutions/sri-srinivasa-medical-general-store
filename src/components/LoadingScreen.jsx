import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 2.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07100A]"
      style={{ pointerEvents: "none" }}
    >
      <div className="relative flex flex-col items-center text-center px-6">
        {/* Ambient glow */}
        <div className="absolute h-40 w-40 rounded-full bg-[#9BC5A5]/10 blur-3xl" />

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#AAB7AD]"
        >
          Your Local Medical Store
        </motion.p>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 18, letterSpacing: "0.08em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[330px] text-3xl font-semibold leading-tight tracking-tight text-[#F5F7F4] sm:text-4xl"
        >
          Sri Srinivasa
          <span className="block text-[#B8D1BD]">
            Medical & General Store
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 55, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.25 }}
          className="mt-7 h-px bg-[#AFC8B5]/70"
        />

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-5 text-xs tracking-[0.12em] text-[#8E9B91]"
        >
          SHANKARAMPALLY · TELANGANA
        </motion.p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;