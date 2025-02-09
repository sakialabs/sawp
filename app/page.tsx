import dynamic from "next/dynamic";
import CallToAction from "@/app/components/CallToAction";
import HeroSection from "@/app/components/Hero";

const ProtestMap = dynamic(() => import("@/app/components/ProtestMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-zinc-100 dark:bg-zinc-800 rounded-lg animate-pulse flex items-center justify-center">
      <div className="text-zinc-500 dark:text-zinc-400">Loading map...</div>
    </div>
  ),
});

const LiveCounter = dynamic(() => import("@/app/components/LiveCounter"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-32 bg-zinc-100 dark:bg-zinc-800 rounded-lg animate-pulse flex items-center justify-center">
      <div className="text-zinc-500 dark:text-zinc-400">Loading counter...</div>
    </div>
  ),
});

const NewsFeed = dynamic(() => import("@/app/components/NewsFeed"), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-full h-40 bg-zinc-100 dark:bg-zinc-800 rounded-lg animate-pulse"
        />
      ))}
    </div>
  ),
});

export default function Home() {
  return (
    <main className="bg-sudan-white dark:bg-sudan-black min-h-screen">
      <HeroSection />

      <section className="py-16 md:py-24 relative z-0">
        <div className="container mx-auto px-4 md:px-6">
          <ProtestMap />
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12 text-center text-zinc-900 dark:text-zinc-50">
            Our Impact
          </h2>
          <LiveCounter />
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12 text-center text-zinc-900 dark:text-zinc-50">
            Latest News from Sudan
          </h2>
          <NewsFeed />
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
