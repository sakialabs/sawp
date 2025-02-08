"use client";

import { useState, useEffect, useRef } from "react";
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
import DonateButton from "@/app/components/Donate";

const BentoGallery = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 p-4">
      <div className="col-span-2 row-span-2 relative overflow-hidden rounded-xl h-[500px]">
        <img
          src="/protests/protest1.jpg"
          alt="Protest 1"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">United Voices</h3>
            <p className="text-sm opacity-80">London, 2025</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 relative overflow-hidden rounded-xl h-[240px]">
        <img
          src="/protests/protest2.jpg"
          alt="Protest 2"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">Peace March</h3>
            <p className="text-sm opacity-80">New York, 2025</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-xl h-[240px]">
        <img
          src="/protests/protest3.jpg"
          alt="Protest 3"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">Youth Rally</h3>
            <p className="text-sm opacity-80">Paris, 2025</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-xl h-[240px]">
        <img
          src="/protests/protest1.jpg"
          alt="Protest 4"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">Global Unity</h3>
            <p className="text-sm opacity-80">Berlin, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollingGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  interface MouseEvent {
    pageX: number;
  }

  interface ScrollContainer extends HTMLDivElement {
    offsetLeft: number;
    scrollLeft: number;
  }

  const handleMouseDown = (e: MouseEvent): void => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  interface MousePosition {
    pageX: number;
    preventDefault: () => void;
  }

  const handleMouseMove = (e: MousePosition): void => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x: number = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk: number = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  interface ScrollDirection {
    direction: "left" | "right";
  }

  const scroll = (direction: ScrollDirection["direction"]): void => {
    if (!scrollContainerRef.current) return;
    const scrollAmount: number = direction === "left" ? -400 : 400;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    interface WheelEvent {
      deltaX: number;
      deltaY: number;
      shiftKey: boolean;
      preventDefault: () => void;
    }

    const handleWheel = (e: WheelEvent): void => {
      // Only prevent default and handle horizontal scroll when hovering
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
      className="relative h-[50vh] md:h-screen overflow-hidden bg-white dark:bg-sudan-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsDragging(false);
      }}
    >
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6 rotate-180" />
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory h-full items-center"
        style={{
          scrollBehavior: "smooth",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="shrink-0 w-[80vw] md:w-[40vw] h-[40vh] md:h-[60vh] overflow-hidden rounded-xl snap-center"
          >
            <img
              src={`/protests/protest${(i % 3) + 1}.jpg`}
              alt={`Gallery image ${i}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              draggable="false"
            />
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

export default function GetInvolvedPage() {
  const [contactOpen, setContactOpen] = useState(false);

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
          <BentoGallery />
        </div>
      </section>

      {/* Scrolling Gallery */}
      <ScrollingGallery />

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
                      <Button
                        className="w-full bg-sudan-red hover:bg-sudan-red/90 text-white"
                        asChild
                      >
                        <Link href="https://sapa-usa.org/ramadan-for-sudan/">
                          Donate Now
                          <Heart className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Protests */}
      <section className="py-16 sm:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Join Upcoming Demonstrations
            </h2>
            <Separator className="w-20 bg-sudan-red h-1 mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Stand with us in peaceful demonstrations worldwide. Together, we
              can amplify the call for democratic change and social justice in
              Sudan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="card hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-lg overflow-hidden mx-auto mb-6">
                    <img
                      src={`/protests/protest${i}.jpg`}
                      alt={`Upcoming protest ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 mb-4">
                    Upcoming
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    London Peace Rally
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                    January {i + 24}, 2025
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-1">
                    Trafalgar Square, London
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    14:00 - 17:00
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
                    Unite with us in a peaceful demonstration supporting Sudan's
                    journey to democracy.
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      Participants: 230
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      •
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      Host: Sudan Solidarity UK
                    </span>
                  </div>
                  <Button
                    className="w-full bg-sudan-red hover:bg-sudan-red/90 text-white"
                    onClick={() => setContactOpen(true)}
                  >
                    Join the Movement
                  </Button>
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
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl text-white mb-8">
            Join our global community of activists and changemakers working
            towards peace in Sudan.
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

const impactStats = [
  {
    number: "5,000+",
    title: "Active Volunteers",
    description: "Working globally to support the cause",
  },
  {
    number: "150+",
    title: "Events Organized",
    description: "Peaceful demonstrations worldwide",
  },
  {
    number: "1M+",
    title: "People Reached",
    description: "Through our awareness campaigns",
  },
];
