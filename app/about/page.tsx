"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Heart, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactDialog } from "@/components/shared/ContactDialog";
import DonateButton from "@/components/shared/Donate";

interface ImpactStat {
  number: string;
  title: string;
  description: string;
}

const impactStats: ImpactStat[] = [
  {
    number: "50K+",
    title: "Supporters Worldwide",
    description: "Active participants in our global movement for democracy",
  },
  {
    number: "100+",
    title: "Events Organized",
    description: "Peaceful demonstrations and awareness campaigns",
  },
  {
    number: "30+",
    title: "Partner Organizations",
    description: "Collaborating for a democratic Sudan",
  },
];

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[70vh] lg:h-[80vh] relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/protests/protest1.jpg"
              alt="Sudan protest in Stockholm"
              className="w-full h-full object-cover brightness-[0.35] scale-105 transform"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
                  Fighting for a Free and Democratic Sudan
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-200 max-w-3xl leading-relaxed">
                  We are sons and daughters of Sudan, united in our commitment
                  to the principles of the December Revolution, honoring the
                  sacrifices of our martyrs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 lg:py-32  bg-white dark:bg-sudan-black relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mt-2">
                  Our Purpose
                </h2>
                <Separator className="w-20 bg-sudan-red h-1 mt-4" />
              </div>
              <div className="space-y-6">
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  We have pledged to strive and struggle to realize our dream of
                  establishing our civil state of freedom, peace, and justice.
                  We stand united against the corruption that threatens our
                  nation's future.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  We are not neutral; we stand alongside our heroic people who
                  have rejected conflict and seek peaceful resolution. The
                  strength of our unity is our greatest weapon for change.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mt-2">
                  Our Goal
                </h2>
                <Separator className="w-20 bg-sudan-green h-1 mt-4" />
              </div>
              <div className="space-y-6">
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  We envision a Sudan where democracy thrives and civil society
                  flourishes. Our commitment extends to:
                </p>
                <ul className="grid gap-6 text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-sudan-green shrink-0" />
                    <span className="text-lg leading-relaxed">
                      Supporting peaceful protests and civil resistance
                      movements across Sudan and worldwide
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-sudan-green shrink-0" />
                    <span className="text-lg leading-relaxed">
                      Documenting and reporting human rights violations to
                      ensure accountability and justice
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-sudan-green shrink-0" />
                    <span className="text-lg leading-relaxed">
                      Building international solidarity networks to amplify
                      Sudanese voices
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-sudan-green shrink-0" />
                    <span className="text-lg leading-relaxed">
                      Advocating for democratic transition and comprehensive
                      reform in governance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-sudan-white dark:bg-sudan-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mt-2 mb-6">
              What Drives Us
            </h2>
            <Separator className="w-20 bg-sudan-red h-1 mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              These fundamental principles guide our actions and decisions in
              pursuit of a better Sudan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="card">
              <CardContent className="p-8 text-center">
                <div className="w-8 h-8 rounded-full bg-black dark:bg-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Peace
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  We champion peaceful resistance and constructive dialogue as
                  the foundation for lasting change in our society.
                </p>
              </CardContent>
            </Card>

            <Card className="card">
              <CardContent className="p-8 text-center">
                <div className="w-8 h-8 rounded-full bg-sudan-red mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Justice
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  We stand firm in our pursuit of equal rights and opportunities
                  for all Sudanese people, without discrimination.
                </p>
              </CardContent>
            </Card>

            <Card className="card">
              <CardContent className="p-8 text-center">
                <div className="w-8 h-8 rounded-full bg-sudan-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Democracy
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  We are committed to building a democratic civil state that
                  truly represents and serves all its citizens.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-sudan-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mt-2 mb-6">
              Meet Our Team
            </h2>
            <Separator className="w-20 bg-sudan-red h-1 mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our diverse team of volunteers is dedicated to the cause of a
              democratic Sudan. We come from all walks of life, united by our
              shared vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="card">
              <AspectRatio ratio={1}>
                <img
                  src="/team/team1.jpg"
                  alt="Team member 1"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Adila Salih Elobeid
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  Adila is a human rights advocate and lawyer, working to ensure
                  justice for victims of violence and oppression.
                </p>
              </CardContent>
            </Card>

            <Card className="card">
              <AspectRatio ratio={1}>
                <img
                  src="/team/team2.jpg"
                  alt="Team member 2"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Rabab Khalil Alkarib
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  Rabab is a journalist and activist, dedicated to raising
                  awareness of
                  <br />
                  human rights abuses in Sudan.
                </p>
              </CardContent>
            </Card>

            <Card className="card">
              <AspectRatio ratio={1}>
                <img
                  src="/team/team3.jpg"
                  alt="Team member 3"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Malik Mohamed Ibrahim
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  Malik is a community organizer and educator, empowering
                  Sudanese youth to create positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-sudan-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Our Impact Together
            </h2>
            <Separator className="w-20 bg-sudan-green h-1 mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Through collective action, we are making real change happen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                className="card transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-sudan-red mb-4">
                    {stat.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    {stat.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sudan-red py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Join Us in the Fight
          </h2>
          <p className="text-lg md:text-xl text-white mb-8">
            Together, we can build a better future for Sudan. Join us in our
            mission to create a free and democratic society.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setContactOpen(true)}
              size="lg"
              className="w-full md:w-auto border-2 text-sudan-white dark:border-sudan-white dark:hover:bg-sudan-white dark:hover:text-sudan-black transition-colors group"
            >
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <DonateButton />
          </div>
        </div>
      </section>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}
