"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ContactDialog } from "@/components/shared/ContactDialog";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavigationItem {
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
];

const MotionLink = motion(Link);

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 20);
    };

    setMounted(true);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const headerVariants = {
    top: {
      backgroundColor:
        theme === "light"
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(24, 24, 27, 0.8)",
      backdropFilter: "blur(12px)",
    },
    scrolled: {
      backgroundColor:
        theme === "light"
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(24, 24, 27, 0.98)",
      backdropFilter: "blur(0px)",
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={headerVariants}
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.a
          href="/"
          className="flex items-center space-x-3 focus:outline-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/logo.png"
            alt="SAWP Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <motion.span
            className="font-bold text-zinc-900 dark:text-zinc-50"
            layout
          >
            <span className="hidden lg:inline text-xl">
              Sudanese Against War and its Parties
            </span>
            <span className="lg:hidden inline text-lg">SAWP</span>
          </motion.span>
        </motion.a>

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {navigationItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 hover:text-sudan-red dark:text-zinc-300 dark:hover:text-sudan-red transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (i + 1) }}
              // whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}

          <motion.button
            onClick={() => setContactOpen(true)}
            className="text-sm font-medium text-zinc-600 hover:text-sudan-red dark:text-zinc-300 dark:hover:text-sudan-red transition-colors"
            // whileHover={{ y: -2 }}
          >
            Contact Us
          </motion.button>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button
              className="bg-sudan-red hover:bg-sudan-red/90 text-white transition-all"
              onClick={() => (window.location.href = "/get-involved")}
            >
              Get Involved
            </Button>

            <motion.button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "light" ? (
                    <BsSun size={18} />
                  ) : (
                    <BsMoon size={18} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </motion.nav>

        <motion.div
          className="flex md:hidden items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={() => {
              window.location.href = "/get-involved";
              setMobileOpen(false);
            }}
            className="block w-full bg-sudan-red hover:bg-sudan-red/90 text-white py-2 px-4 rounded-md transition-colors"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Get Involved
          </motion.button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <motion.nav
                className="flex flex-col h-full bg-white dark:bg-zinc-900 p-6"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-6">
                  {navigationItems.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="block text-base font-medium text-zinc-600 hover:text-sudan-red dark:text-zinc-300 dark:hover:text-sudan-red transition-colors"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (i + 1) }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.button
                    onClick={() => {
                      setContactOpen(true);
                      setMobileOpen(false);
                    }}
                    className="block text-base font-medium text-zinc-600 hover:text-sudan-red dark:text-zinc-300 dark:hover:text-sudan-red transition-colors"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Contact Us
                  </motion.button>
                </div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={theme}
                        initial={{ opacity: 0, rotate: -30 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 30 }}
                        transition={{ duration: 0.2 }}
                      >
                        {theme === "light" ? (
                          <BsSun size={18} />
                        ) : (
                          <BsMoon size={18} />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </motion.nav>
            </SheetContent>
          </Sheet>
        </motion.div>

        <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      </div>
    </motion.header>
  );
}
