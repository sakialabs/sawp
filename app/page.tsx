import Link from "next/link";
import ProtestMap from "@/app/components/ProtestMap";
import LiveCounter from "@/app/components/LiveCounter";
import NewsFeed from "@/app/components/NewsFeed";
import CallToAction from "@/app/components/CallToAction";
import HeroSection from "@/app/components/Hero";

export default function Home() {
  return (
    <main className="bg-zinc-50 dark:bg-zinc-950">
      <HeroSection />

      <section className="section relative z-0">
        <div className="container">
          <ProtestMap />
        </div>
      </section>

      <section className="section relative z-10">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-8 text-center text-zinc-900 dark:text-zinc-50">
            Our Impact
          </h2>
          <LiveCounter />
        </div>
      </section>

      <section className="section relative z-10">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-8 text-center text-zinc-900 dark:text-zinc-50">
            Latest News from Sudan
          </h2>
          <NewsFeed />
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
