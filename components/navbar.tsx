"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardPaste } from "lucide-react";
import Postable from "./postable";
import Logo from "./logo";

export default function Navbar() {
  const [showInput, setShowInput] = useState(false);

  const handleScroll = () => {
    setShowInput(window.scrollY > window.outerHeight * .7 );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarVariants = {
    initial: { width: "auto" },
    expanded: { 
      width: "fit-content", 
      transition: { duration: 0.5, ease: "easeInOut" } 
    },
  };

  const logoVariants = {
    visible: { opacity: 1, width: "44px", x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    hidden: { opacity: 0, width: 0, x: -20, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const inputVariants = {
    hidden: { opacity: 0, width: 0, x: 20, transition: { duration: 0.5, ease: "easeInOut" } },
    visible: { opacity: 1, width: "auto", x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.nav
      className={`fixed left-1/2 top-8 z-20 flex -translate-x-1/2 items-center justify-between rounded-3xl bg-[#262525] pl-6 pr-[10px] shadow-2xl`}
      variants={navbarVariants}
      initial="initial"
      animate={showInput ? "expanded" : "initial"}
    >
      <AnimatePresence>
        {!showInput && (
          <motion.div
            className="relative overflow-hidden mr-4 text-2xl font-bold text-white"
            variants={logoVariants}
            initial="visible"
            animate="visible"
            exit="hidden"
            layout
          >
            <Logo />
          </motion.div>
        )}
      </AnimatePresence>

      <span className="py-8">
        <Postable />
      </span>

      <AnimatePresence>
        {showInput ? (
          <motion.div
            className="relative my-2 overflow-hidden" 
            style={{ width: '503.852px', willChange: 'auto' }}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            layout
          >
            <div className="hidden min-w-fit items-center gap-2 rounded-xl border border-transparent bg-zinc-700 py-2 pe-2 ps-4 transition-colors focus-within:border-white/10 hover:bg-neutral-600 md:flex">
              <input
                placeholder="Paste tweet link here..."
                className="w-32 bg-transparent py-2 text-sm text-neutral-10 focus-visible:bg-transparent focus-visible:outline-none active:bg-transparent md:w-80 lg:w-96"
              />
              <button className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-white/10 px-4 text-white transition-colors hover:bg-white/20">
                <span className="text-sm font-medium">Paste</span>
                <ClipboardPaste size={16} />
              </button>
            </div>
            <div className="flex h-10 md:hidden"></div>
          </motion.div>
        ) : (
          <motion.div
            className="text-sm text-gray-400 overflow-hidden max-w-[300px] whitespace-nowrap overflow-ellipsis" 
            variants={inputVariants}
            initial="visible"
            animate="hidden"
            exit="hidden"
          >
            Paste tweet link here...
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
