"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({ navItems, onNavClick, className }) => {
  const { scrollY } = useScroll();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);

  let lastScroll = 0;

  useMotionValueEvent(scrollY, "change", (current) => {
    const scrollDown = current > lastScroll;
    if (scrollDown && current > 50) {
      setIsNavbarVisible(false); // Hide desktop navbar when scrolling down
      setIsHamburgerVisible(false); // Hide hamburger menu when scrolling down
    } else {
      setIsNavbarVisible(true); // Show desktop navbar when scrolling up
      setIsHamburgerVisible(true); // Show hamburger menu when scrolling up
    }
    lastScroll = current;
  });

  return (
    <>
      {/* Desktop Navbar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: isNavbarVisible ? 0 : -100,
            opacity: isNavbarVisible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)", // Desktop navbar background
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem, idx) => (
            <button
              key={`link=${idx}`}
              onClick={() => onNavClick(navItem.link)} // Handle click with passed function
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-white hover:text-neutral-500"
              )}
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </button>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Mobile Hamburger Menu */}
      <AnimatePresence>
        {isHamburgerVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[5000] top-5 left-5 md:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-neutral-300 rounded-md"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-6 z-[4999]"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)", // Matches desktop navbar background
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            {navItems.map((navItem, idx) => (
              <button
                key={`mobile-link=${idx}`}
                onClick={() => {
                  onNavClick(navItem.link);
                  setIsMobileMenuOpen(false); // Close menu after click
                }}
                className="text-lg text-white"
              >
                {navItem.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
