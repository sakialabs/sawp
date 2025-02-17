"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  ChevronRight,
  Share,
  Globe,
  Heart,
  Calendar,
  Users,
  Languages,
} from "lucide-react";
import { ContactDialog } from "@/components/shared/ContactDialog";
import DonateButton from "@/components/shared/Donate";
import { ScrollingGallery } from "@/components/shared/ScollingGallery";

export default function GetInvolvedPage() {
  const [contactOpen, setContactOpen] = useState(false);

  const protestImages = [1, 2, 3, 4, 5].map((i) => (
    <img
      key={i}
      src={`/protests/protest${(i % 3) + 1}.jpg`}
      alt={`Gallery image ${i}`}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      draggable="false"
    />
  ));

  const protestGridImages = [1, 2, 3, 4, 5].map((i) => (
    <div
      key={i}
      className={`${
        i === 1 ? "col-span-2 row-span-2 h-[500px]" : "h-[240px]"
      } relative overflow-hidden rounded-xl`}
    >
      <img
        src={`/protests/protest${(i % 3) + 1}.jpg`}
        alt={`Protest ${i}`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">
            {i === 1
              ? "United Voices"
              : i === 2
              ? "Peace March"
              : i === 3
              ? "Youth Rally"
              : "Global Unity"}
          </h3>
          <p className="text-sm opacity-80">
            {i === 1
              ? "London, 2025"
              : i === 2
              ? "New York, 2025"
              : i === 3
              ? "Paris, 2025"
              : "Berlin, 2025"}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[70vh] lg:h-[80vh] relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/protests/protest3.jpg"
              alt="People united for Sudan"
              className="w-full h-full object-cover brightness-[0.35] scale-105 transform"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
                  Take Action Today
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-200 max-w-3xl leading-relaxed">
                  Join our movement for peace and democracy in Sudan. Every
                  action counts. Together, we can make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Gallery */}
      <section className="py-16 bg-white dark:bg-sudan-black">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Visual Journey
            </h2>
            <Separator className="w-20 bg-sudan-red h-1 mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Witness the power of peaceful resistance through our visual
              documentation.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 p-4">
            {protestGridImages}
          </div>
        </div>
      </section>

      {/* Scrolling Gallery */}
      <ScrollingGallery
        items={protestImages}
        itemWidth="80vw"
        itemHeight="60vh"
        className="h-screen bg-zinc-50 dark:bg-zinc-950"
        containerClassName="h-full"
      />

      {/* Main Content */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-sudan-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Ways to Get Involved
            </h2>
            <Separator className="w-20 bg-sudan-green h-1 mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              From volunteering to organizing events, there are many ways you
              can contribute to the movement.
            </p>
          </div>

          <Tabs defaultValue="volunteer" className="w-full">
            <TabsList className="grid w-full md:w-[600px] grid-cols-3 mx-auto mb-12">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="organize">Organize</TabsTrigger>
              <TabsTrigger value="donate">Donate</TabsTrigger>
            </TabsList>

            <TabsContent value="volunteer">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteerRoles.map((role, index) => (
                  <Card
                    key={index}
                    className="card transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                          <role.icon className="h-6 w-6 text-sudan-red" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                        {role.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6">
                        {role.description}
                      </p>
                      <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 mb-6">
                        {role.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className="w-2 h-2 mt-2.5 rounded-full bg-sudan-red shrink-0" />
                            <span className="text-lg leading-relaxed">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        onClick={() => setContactOpen(true)}
                        className="w-full bg-sudan-red hover:bg-sudan-red/90 text-white"
                      >
                        Apply Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="organize">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizeOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="card transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                          <option.icon className="h-6 w-6 text-sudan-green" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                        {option.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6">
                        {option.description}
                      </p>
                      <Button
                        onClick={() => setContactOpen(true)}
                        className="w-full bg-sudan-green hover:bg-sudan-green/90 text-white"
                      >
                        Get Started
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="donate">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donationOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="card transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                          <Heart className="h-6 w-6 text-sudan-red" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                        {option.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6">
                        {option.description}
                      </p>
                      <DonateButton />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}

const volunteerRoles = [
  {
    title: "Social Media Activist",
    description: "Amplify Sudanese voices through digital advocacy.",
    icon: Share,
    responsibilities: [
      "Create and share content",
      "Engage with online communities",
      "Monitor social media trends",
      "Report on developments",
    ],
  },
  {
    title: "Event Coordinator",
    description: "Organize peaceful demonstrations and events.",
    icon: Calendar,
    responsibilities: [
      "Plan and coordinate protests",
      "Manage logistics",
      "Liaise with authorities",
      "Ensure safety protocols",
    ],
  },
  {
    title: "Community Liaison",
    description: "Bridge communities and facilitate support networks.",
    icon: Users,
    responsibilities: [
      "Connect with local groups",
      "Coordinate resources",
      "Facilitate communications",
      "Build partnerships",
    ],
  },
  {
    title: "Translation Support",
    description: "Help break down language barriers.",
    icon: Languages,
    responsibilities: [
      "Translate documents",
      "Interpret at events",
      "Support communications",
      "Review materials",
    ],
  },
  {
    title: "Digital Support",
    description: "Provide technical expertise and support.",
    icon: Globe,
    responsibilities: [
      "Website maintenance",
      "Technical documentation",
      "Digital security",
      "Platform management",
    ],
  },
];

const organizeOptions = [
  {
    title: "Peaceful Protests",
    description:
      "Organize and coordinate peaceful demonstrations in your area.",
    icon: Users,
  },
  {
    title: "Awareness Campaigns",
    description: "Create and run educational campaigns about Sudan.",
    icon: Share,
  },
  {
    title: "Community Events",
    description: "Build local support through community gatherings.",
    icon: Calendar,
  },
];

const donationOptions = [
  {
    title: "One-Time Donation",
    description: "Make an immediate impact with a single contribution.",
    link: "/donate",
    icon: Heart,
  },
  {
    title: "Monthly Support",
    description: "Provide sustained support through regular donations.",
    link: "/donate-monthly",
    icon: Heart,
    info: true,
    infoLink: "/impact",
  },
  {
    title: "Corporate Giving",
    description: "Partner with us through corporate donations and matching.",
    link: "/corporate",
    icon: Heart,
    info: true,
    infoLink: "/corporate-partnership",
  },
];
