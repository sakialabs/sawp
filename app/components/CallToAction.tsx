"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DonateButton from "@/components/shared/Donate";
import { ChevronRight, Heart } from "lucide-react";

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("cta-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="cta-section" className="bg-sudan-red py-16 lg:py-24 px-4">
      <div
        className={`container mx-auto max-w-4xl text-center transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sudan-white mb-4">
          Make Your Voice Heard
        </h2>
        <p className="text-lg md:text-xl text-sudan-white mb-8">
          Join us in our mission for peace. Every action counts.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full md:w-auto border-2 text-sudan-white dark:border-sudan-white dark:hover:bg-sudan-white dark:hover:text-sudan-black transition-colors group"
          >
            <Link href="/get-involved">
              Get Involved
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <DonateButton />
        </div>
      </div>
    </section>
  );
}
