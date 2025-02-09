"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollingGalleryProps {
  items: React.ReactNode[];
  itemWidth?: string;
  itemHeight?: string;
  gap?: number;
  showArrows?: boolean;
  className?: string;
  itemClassName?: string;
  containerClassName?: string;
}

export const ScrollingGallery = ({
  items,
  itemWidth = "80vw",
  itemHeight = "40vh",
  gap = 16,
  showArrows = true,
  className = "",
  itemClassName = "",
  containerClassName = "",
}: ScrollingGalleryProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseDown = (e: React.MouseEvent): void => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent): void => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right"): void => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -400 : 400;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent): void => {
      if (isHovering) {
        if (e.deltaX !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaX;
        } else if (e.deltaY !== 0 && e.shiftKey) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isHovering]);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-white dark:bg-sudan-black",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsDragging(false);
      }}
    >
      {showArrows && showLeftArrow && (
        <Button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          size="icon"
          variant="ghost"
        >
          <ChevronRight className="h-6 w-6 rotate-180" />
        </Button>
      )}
      {showArrows && showRightArrow && (
        <Button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          size="icon"
          variant="ghost"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}
      <div
        ref={scrollContainerRef}
        className={cn(
          "flex gap-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory items-center",
          containerClassName
        )}
        style={{
          scrollBehavior: "smooth",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          gap: `${gap}px`,
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "shrink-0 overflow-hidden rounded-xl snap-center",
              itemClassName
            )}
            style={{
              width: itemWidth,
              height: itemHeight,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
