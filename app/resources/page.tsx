"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  FileText,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Newspaper,
  Scale,
  HeartHandshake,
  GraduationCap,
  Users2,
  Heart,
  Share2,
  Globe,
  Building,
  LayoutGrid,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { ContactDialog } from "@/components/shared/ContactDialog";
import DonateButton from "@/app/components/Donate";

export default function ResourcesPage() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[70vh] lg:h-[80vh] relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/protests/protest1.jpg"
              alt="Sudan solidarity movement"
              className="w-full h-full object-cover brightness-[0.35] scale-105 transform"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
                  Knowledge Empowers Change
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-200 max-w-3xl leading-relaxed">
                  Access comprehensive resources and support materials to
                  understand and engage with Sudan's journey toward peace and
                  democracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-sudan-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Essential Resources
            </h2>
            <Separator className="w-20 bg-sudan-red h-1 mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Find the information and support you need to understand and
              advocate for Sudan.
            </p>
          </div>

          <Tabs defaultValue="learn" className="w-full">
            <TabsList className="grid w-full md:w-[800px] grid-cols-4 mx-auto mb-12">
              <TabsTrigger value="learn">Educational</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="organizations">Organizations</TabsTrigger>
            </TabsList>

            {/* Educational Resources Tab */}
            <TabsContent value="learn">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto">
                        <BookOpen className="h-6 w-6 text-sudan-red" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Essential
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Understanding Sudan
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Comprehensive overview of Sudan's history and current
                      situation.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="resources">
                        <AccordionTrigger>Available Resources</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/history.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Historical Context (PDF)
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/crisis.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Current Crisis Guide
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto">
                        <FileText className="h-6 w-6 text-sudan-green" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Guidelines
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Protest Guidelines
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Safety and organization guidelines for peaceful
                      demonstrations.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="resources">
                        <AccordionTrigger>Available Resources</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/safety.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Safety Guidelines
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/organize.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Organizer's Handbook
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mx-auto">
                        <Scale className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Legal
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Legal Resources
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Know your rights and access legal support information.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="resources">
                        <AccordionTrigger>Available Resources</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/rights.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Rights Guide
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/legal-aid">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Legal Aid Contacts
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Media Resources Tab */}
            <TabsContent value="media">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto">
                        <Newspaper className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <Badge className="mb-4">Updated Daily</Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Latest Updates
                    </h3>
                    <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                      <li className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          February 6, 2025
                        </span>
                        <h4 className="font-medium text-zinc-900 dark:text-white">
                          Peace Talks Resume in Khartoum
                        </h4>
                      </li>
                      <li className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          February 5, 2025
                        </span>
                        <h4 className="font-medium text-zinc-900 dark:text-white">
                          International Community Calls for Ceasefire
                        </h4>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/news">View All Updates</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center mx-auto">
                        <Video className="h-6 w-6 text-yellow-600" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Press Kit
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Media Resources
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Access official logos, images, and press materials.
                    </p>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/media-kit">
                          <Download className="mr-2 h-4 w-4" />
                          Download Media Kit
                        </Link>
                      </Button>
                      <Button
                        className="w-full bg-sudan-red hover:bg-sudan-red/90 text-white"
                        asChild
                      >
                        <Link href="/press">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Press Contact
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mx-auto">
                        <Globe className="h-6 w-6 text-pink-600" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Social
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Social Media Kit
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Share our message and amplify Sudanese voices.
                    </p>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/social-kit">
                          <Download className="mr-2 h-4 w-4" />
                          Download Graphics
                        </Link>
                      </Button>
                      <Button
                        className="w-full bg-sudan-green hover:bg-sudan-green/90 text-white"
                        asChild
                      >
                        <Link href="/social-guide">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share Guide
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Support Resources Tab */}
            <TabsContent value="support">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto">
                        <Heart className="h-6 w-6 text-sudan-red" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Support
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Mental Health Resources
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Access mental health support services and resources.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="resources">
                        <AccordionTrigger>Available Resources</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/mental-health.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Mental Health Guide
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/hotline.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Support Hotline
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto">
                        <HeartHandshake className="h-6 w-6 text-sudan-green" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Support
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Community Support
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Connect with local community organizations and support
                      groups.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="resources">
                        <AccordionTrigger>Available Resources</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/community.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Community Directory
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/support.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Support Groups
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mx-auto">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Education
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Educational Programs
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Enroll in educational programs and training opportunities.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="resources">
                        <AccordionTrigger>Available Resources</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/programs.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Program Catalog
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/training.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Training Courses
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Organizations Resources Tab */}
            <TabsContent value="organizations">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto">
                        <Users2 className="h-6 w-6 text-sudan-red" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Network
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Grassroots Organizations
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Connect with local organizations and community
                      initiatives.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="resources">
                        <AccordionTrigger>Available Resources</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/organizations.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Organization Directory
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/initiatives.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Community Initiatives
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto">
                        <Building className="h-6 w-6 text-sudan-green" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Support
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      International Partners
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Collaborate with global organizations and advocacy groups.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="resources">
                        <AccordionTrigger>Available Resources</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/partners.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Partners Directory
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/advocacy.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Advocacy Groups
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>

                <Card className="bg-white dark:bg-zinc-950">
                  <div className="p-8 text-center">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mx-auto">
                        <LayoutGrid className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      Community
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Community Projects
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                      Support local initiatives and community development
                      projects.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="resources">
                        <AccordionTrigger>Available Resources</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/projects.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Project Directory
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="/resources/development.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Development Programs
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Principles in Action
            </h2>
            <Separator className="w-20 bg-sudan-green h-1 mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Our resources are guided by these core principles to create
              meaningful change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="bg-white dark:bg-zinc-950">
              <CardContent className="p-8 text-center">
                <div className="w-8 h-8 rounded-full bg-sudan-red mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Knowledge Sharing
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  Empowering through education and transparent information
                  sharing to build informed solidarity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-zinc-950">
              <CardContent className="p-8 text-center">
                <div className="w-8 h-8 rounded-full bg-sudan-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Community Support
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  Building networks of mutual aid and support to strengthen our
                  collective impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-zinc-950">
              <CardContent className="p-8 text-center">
                <div className="w-8 h-8 rounded-full bg-black dark:bg-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Active Engagement
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  Providing practical tools and guidance for meaningful
                  participation in change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sudan-red py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stand for Justice
          </h2>
          <p className="text-lg md:text-xl text-white mb-8">
            Be a part of the movement for peace and freedom in Sudan. Your voice
            matters.
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
    </main>
  );
}
