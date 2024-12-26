"use client";

import { ArrowUp, ArrowUpIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "./use-scroll";

export function ScrollToTopButton() {
  const show = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-[20px] right-0 p-1 bg-[#2f9114] hover:bg-[#2f9114]/30 text-white shadow-lg transition-colors z-[9999] rounded-l-full pr-3"
          aria-label="Scroll to top"
        >
          <div className="flex items-center justify-center size-9 bg-white rounded-full duration-1000">
            <ArrowUpIcon className="h-6 w-6 text-[#2f9114]" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
