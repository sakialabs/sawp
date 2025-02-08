"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const images = [
    { src: "/protests/protest1.jpg", alt: "Sudan protest in Stockholm" },
    { src: "/protests/protest2.jpg", alt: "Sudan solidarity march in Toronto" },
    { src: "/protests/protest3.jpg", alt: "Peace demonstration in Milan" },
    {
      src: "/protests/protest4.jpg",
      alt: "Sudanese Community gathering for peace in Uppsala",
    },
    {
      src: "/protests/protest5.jpg",
      alt: "Sudanese Youth advocates for change in New York",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const nextIndex = (currentIndex + 1) % images.length;
        const scrollWidth =
          scrollContainerRef.current.scrollWidth / images.length;
        scrollContainerRef.current.scrollTo({
          left: scrollWidth * nextIndex,
          behavior: "smooth",
        });
        setCurrentIndex(nextIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling, images.length]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPos = scrollContainerRef.current.scrollLeft;
      const itemWidth = scrollContainerRef.current.scrollWidth / images.length;
      const newIndex = Math.round(scrollPos / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-white dark:bg-sudan-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-16 md:py-24">
          {/* Mobile/Tablet Content */}
          <div className="w-full xl:hidden flex flex-col items-center text-center space-y-8">
            {/* Enhanced Carousel */}
            <div className="w-full max-w-2xl mx-auto mt-8 relative">
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                }}
                onScroll={handleScroll}
                onTouchStart={() => setIsAutoScrolling(false)}
                onTouchEnd={() => setIsAutoScrolling(true)}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full flex-none snap-center">
                    <div className="relative aspect-video mx-2">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Updated Scroll Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.div
              className="mt-8 max-w-2xl px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-sudan-white leading-tight">
                United for Peace in Sudan
              </h1>
              <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                When they silence voices, you can amplify the call for peace.
                Join our global movement for change.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/get-involved"
                  className="btn bg-sudan-red hover:bg-sudan-red/90 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  Get Involved
                </Link>
                <Link
                  href="/about"
                  className="btn border-2 border-sudan-black dark:border-sudan-white text-sudan-black dark:text-sudan-white hover:bg-sudan-black hover:text-white dark:hover:bg-sudan-white dark:hover:text-sudan-black px-6 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center justify-between w-full gap-12">
            <motion.div
              className="w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-bold text-black dark:text-sudan-white leading-tight">
                United for Peace in Sudan
              </h1>
              <p className="mt-6 text-xl text-gray-700 dark:text-gray-300">
                When they silence voices, you can amplify the call for peace.
                Join our global movement for change.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/get-involved"
                  className="btn bg-sudan-red hover:bg-sudan-red/90 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors"
                >
                  Get Involved
                </Link>
                <Link
                  href="/about"
                  className="btn border-2 border-sudan-black dark:border-sudan-white text-sudan-black dark:text-sudan-white hover:bg-sudan-black hover:text-white dark:hover:bg-sudan-white dark:hover:text-sudan-black px-8 py-4 rounded-md text-lg font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <div className="w-1/2 h-[600px]">
              <div className="grid grid-cols-2 gap-4 h-full">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`relative ${
                      index === 0 ? "col-span-2" : ""
                    } rounded-lg overflow-hidden`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-sudan-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sudan-green/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
