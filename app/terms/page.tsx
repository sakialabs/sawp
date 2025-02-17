"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
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
                  Terms of Service
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-200 max-w-3xl leading-relaxed">
                  By using our website, you agree to these terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 sm:py-24 lg:py-32 bg-sudan-white dark:bg-sudan-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12 lg:gap-24">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                  Terms and Conditions
                </h2>
                <Separator className="w-20 bg-sudan-red h-1 mt-4" />
              </div>
              <div className="space-y-6">
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  You agree to use our website for lawful purposes only. Any
                  misuse or unauthorized access is prohibited.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  We reserve the right to modify or terminate our services at
                  any time without prior notice.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  All content on this website is protected by copyright and may
                  not be reproduced without permission.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  If you have any questions about these terms, please contact
                  us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
