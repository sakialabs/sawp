"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-sudan-white dark:bg-sudan-black">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[50vh] lg:h-[60vh] relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/protests/protest1.jpg"
              alt="Sudan protest in Stockholm"
              className="w-full h-full object-cover brightness-[0.35] scale-105 transform"
            />
          </div>

          {/* Text overlay */}
          <div className="absolute inset-0">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-4xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                  Privacy Policy
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-200 max-w-3xl leading-relaxed">
                  We respect your privacy and are committed to protecting your
                  personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 sm:py-24 lg:py-32 bg-sudan-white dark:bg-sudan-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12 lg:gap-24">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                  Our Privacy Commitment
                </h2>
                <Separator className="w-20 bg-sudan-red h-1 mt-4" />
              </div>
              <div className="space-y-6">
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  We collect only the necessary information to provide and
                  improve our services. Your data is never shared with third
                  parties without your consent.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  We use cookies to enhance your experience on our website. You
                  can manage your cookie preferences at any time.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  If you have any questions about our privacy practices, please
                  contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
