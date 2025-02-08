"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type NewsItem = {
  id: number;
  title: string;
  summary: string;
  date: string;
  url: string;
  imageUrl?: string;
  source: string;
  category?: string;
};

export default function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const cardWidth = 300;
  const cardGap = 16;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        setNews(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const containerStyles = {
    maxWidth: `${(cardWidth + cardGap) * itemsToShow - cardGap}px`,
    margin: "0 auto",
  };

  const maxIndex = Math.max(0, news.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxIndex;

  if (loading) {
    return (
      <div style={containerStyles} className="flex gap-4 min-h-[450px]">
        {Array.from({ length: itemsToShow }).map((_, i) => (
          <div
            key={i}
            style={{ width: `${cardWidth}px` }}
            className="flex-none animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (!news.length) {
    return (
      <div className="flex items-center justify-center min-h-[450px]">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          No news articles available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="relative" style={containerStyles}>
      {news.length > itemsToShow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}

      <div className="overflow-hidden min-h-[450px]">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`,
          }}
        >
          {news.map((item) => (
            <article
              key={item.id}
              style={{ width: `${cardWidth}px` }}
              className="flex-none bg-white dark:bg-zinc-900 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <div className="h-40 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.parentElement!.className =
                        "h-40 w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center";
                      e.currentTarget.remove();
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center">
                    <span className="text-zinc-400 dark:text-zinc-600">
                      Sudan News
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-background text-xs">
                    {item.category || "News"}
                  </Badge>
                  <span className="text-xs text-zinc-500">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 line-clamp-2 min-h-[2.75rem]">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {item.summary}
                </p>

                <div className="flex justify-between items-center pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    {item.source}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sudan-red hover:text-sudan-green font-medium text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    Read more
                    <ChevronRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {news.length > itemsToShow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
