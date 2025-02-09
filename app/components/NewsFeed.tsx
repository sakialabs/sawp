"use client";

import React from "react";
import { ScrollingGallery } from "@/components/shared/ScollingGallery";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  url: string;
  imageUrl?: string;
  source: string;
  category?: string;
}

interface NewsFeedProps {
  className?: string;
  itemsPerView?: number;
  cardWidth?: number;
  cardHeight?: number;
}

export default function NewsFeed({
  className,
  itemsPerView = 3,
  cardWidth = 300,
  cardHeight = 450,
}: NewsFeedProps) {
  const [news, setNews] = React.useState<NewsItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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

  if (loading) {
    return (
      <div
        className={cn("mx-auto", className)}
        style={{ maxWidth: cardWidth * itemsPerView + (itemsPerView - 1) * 16 }}
      >
        <div className="flex gap-4">
          {Array.from({ length: itemsPerView }).map((_, i) => (
            <NewsCardSkeleton key={i} width={cardWidth} height={cardHeight} />
          ))}
        </div>
      </div>
    );
  }

  if (!news.length) {
    return (
      <div
        className={cn(
          "flex items-center justify-center min-h-[450px]",
          className
        )}
      >
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          No news articles available at the moment.
        </p>
      </div>
    );
  }

  const newsCards = news.map((item) => <NewsCard key={item.id} item={item} />);

  return (
    <div className={className}>
      <ScrollingGallery
        items={newsCards}
        itemWidth={`${cardWidth}px`}
        itemHeight={`${cardHeight}px`}
        className="min-h-[450px]"
        gap={16}
      />
    </div>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="h-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden">
      <div className="h-40 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.currentTarget;
              const parent = target.parentElement;
              if (parent) {
                parent.className = cn(
                  "h-40 w-full bg-gradient-to-br",
                  "from-zinc-100 to-zinc-200",
                  "dark:from-zinc-800 dark:to-zinc-700",
                  "flex items-center justify-center"
                );
                target.remove();
              }
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center">
            <span className="text-zinc-400 dark:text-zinc-600">Sudan News</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-background text-xs">
            {item.category || "News"}
          </Badge>
          <time dateTime={item.date} className="text-xs text-zinc-500">
            {new Date(item.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </time>
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
  );
}

function NewsCardSkeleton({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <div
      className="flex-none bg-white dark:bg-zinc-900 rounded-xl overflow-hidden"
      style={{ width, height }}
    >
      <Skeleton className="h-40 w-full" />
      <div className="p-4 space-y-4">
        <div className="flex justify-between">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-20 w-full" />
        <div className="flex justify-between items-center pt-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}
