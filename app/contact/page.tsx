"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Check, Loader2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formState.subject.trim()) newErrors.subject = "Subject is required";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });

        if (!response.ok) throw new Error("Failed to send email");

        setSubmitStatus("success");
        setTimeout(() => {
          setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setSubmitStatus(null);
        }, 1500);
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[40vh] lg:h-[50vh] relative overflow-hidden">
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
                  Contact Us
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-200 max-w-3xl leading-relaxed">
                  We're here to help and answer any questions you might have.
                  Reach out to us and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-sudan-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <Separator className="w-20 bg-sudan-red h-1 mx-auto mb-6" />
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Fill out the form below, and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center py-8 space-y-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      delay: 0.2,
                    }}
                    className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center"
                  >
                    <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 300,
                  }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {submitStatus === "error" && (
                    <Alert variant="destructive">
                      <AlertDescription>
                        There was an error sending your message. Please try
                        again.
                      </AlertDescription>
                    </Alert>
                  )}

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500">{errors.name}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">{errors.email}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={`bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 ${
                        errors.subject ? "border-red-500" : ""
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500">{errors.subject}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className={`min-h-[150px] bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500">{errors.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-end pt-4"
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-sudan-red hover:bg-sudan-red/90 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
