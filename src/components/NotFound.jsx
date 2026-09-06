import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F9F6] px-5">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#294033] text-2xl font-semibold text-white">
          +
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#718078]">
          Page not found
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-[#17231B]">
          404
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#68756D]">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#294033] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20342A]"
          >
            <Home size={16} />
            Back Home
          </a>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4DDD6] bg-white px-5 py-3 text-sm font-semibold text-[#294033] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EEF3EF]"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        <p className="mt-10 text-xs text-[#8A968F]">
          Sri Srinivasa Medical and General Store
        </p>
      </motion.div>
    </main>
  );
}

export default NotFound;