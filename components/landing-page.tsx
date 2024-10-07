"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircle,
  Leaf,
  Infinity,
  Eye,
  Star,
  ArrowRight,
  ChevronDown,
  Menu,
  Zap,
  TrendingUp,
  Award,
  Moon,
  Sun,
} from "lucide-react";
import { HabitFlowLogo } from "@/components/habit-flow-logo";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-[#3F72AF] dark:text-[#DBE2EF] hover:text-[#112D4E] dark:hover:text-[#F9F7F7] p-2 rounded-md"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerControls = useAnimation();
  const { theme } = useTheme();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 50) {
        headerControls.start({
          backgroundColor:
            theme === "dark"
              ? "rgba(17, 45, 78, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        });
      } else {
        headerControls.start({
          backgroundColor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(0px)",
          boxShadow: "none",
        });
      }
    });
  }, [scrollY, headerControls, theme]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#112D4E] text-[#112D4E] dark:text-[#F9F7F7]">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 xl:h-20 flex items-center"
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
        animate={headerControls}
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <HabitFlowLogo className="h-10 w-10 text-[#3F72AF] dark:text-[#DBE2EF]" />
            </motion.div>
            <span className="ml-2 text-2xl font-bold text-[#112D4E] dark:text-white">
              HabitFlow
            </span>
          </a>
          <nav className="hidden md:flex gap-6 items-center">
            {["Features", "How It Works", "Testimonials", "Pricing"].map(
              (item) => (
                <motion.a
                  key={item}
                  className="text-base font-medium text-[#3F72AF] dark:text-[#DBE2EF] hover:text-[#112D4E] dark:hover:text-[#F9F7F7] relative"
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F72AF] dark:bg-[#DBE2EF]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              )
            )}
            <ThemeToggle />
          </nav>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-[#3F72AF] dark:text-[#DBE2EF]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </motion.header>

      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed top-16 left-0 right-0 bg-white p-4 z-40 shadow-md border-b border-[#1865c3]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col gap-4">
            {["Features", "How It Works", "Testimonials", "Pricing"].map(
              (item) => (
                <a
                  key={item}
                  className="text-base font-medium hover:text-[#3F72AF]"
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </motion.div>
      )}

      <main className="flex-1 pt-16 xl:pt-20">
        <motion.section
          className="w-full py-20 md:py-28 lg:py-36 xl:py-44 relative overflow-hidden bg-gradient-to-br from-[#E0E8FF] to-[#F0F4FF] dark:from-[#112D4E] dark:to-[#1A3A5C]"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#3F72AF] via-[#DBE2EF] to-[#F9F7F7] opacity-10"
              style={{ scale }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                backgroundSize: "60px 60px",
                opacity: 0.5,
              }}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <motion.div className="space-y-4" variants={fadeInUp}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1d4a82] dark:text-white">
                  Transform Your Life,
                  <br />
                  One Habit at a Time
                </h1>
                <p className="mx-auto max-w-[700px] text-[#3F72AF] dark:text-[#DBE2EF] text-xl md:text-2xl font-light">
                  Achieve consistency and unlock your potential with HabitFlow's
                  powerful habit-tracking tools
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <Button className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white hover:from-[#112D4E] hover:to-[#3F72AF] text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Start for Free
                </Button>
                <Button
                  variant="outline"
                  className="text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-10 h-10 text-[#3F72AF]" />
          </motion.div>
        </motion.section>

        <section
          id="features"
          className="w-full py-20 md:py-28 lg:py-36 bg-white dark:bg-[#112D4E]"
        >
          <div className="max-w-7xl px-4 md:px-6 mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d4a82] dark:text-white mb-4">
                Supercharge Your Habits
              </h2>
              <p className="mt-4 text-xl text-[#3F72AF] dark:text-[#DBE2EF] max-w-2xl mx-auto">
                Unlock your potential with our intuitive and powerful features
              </p>
            </motion.div>
            <motion.div
              className="grid gap-12 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                {
                  icon: <Zap className="h-10 w-10 text-white" />,
                  title: "Daily Momentum",
                  description:
                    "Build unstoppable momentum by tracking your habits every day",
                },
                {
                  icon: <Infinity className="h-10 w-10 text-white" />,
                  title: "Unbreakable Streaks",
                  description:
                    "Visualize your progress and maintain long streaks for motivation",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-white" />,
                  title: "Insightful Analytics",
                  description:
                    "Gain valuable insights into your habits with detailed charts and statistics",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-[#F0F4FF] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] p-4 rounded-full mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#112D4E]">
                    {feature.title}
                  </h3>
                  <p className="text-[#3F72AF]">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-[#3F72AF] to-[#112D4E] dark:from-[#1A3A5C] dark:to-[#112D4E] text-white"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Your Journey to Better Habits
            </motion.h2>
            <motion.div
              className="flex flex-col md:flex-row justify-between items-center gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                {
                  step: 1,
                  title: "Create Your Habits",
                  description:
                    "Define the habits you want to build or break. Customize frequency, reminders, and goals.",
                },
                {
                  step: 2,
                  title: "Track Daily Progress",
                  description:
                    "Log your habit completions daily. HabitFlow makes it quick and easy to stay on track.",
                },
                {
                  step: 3,
                  title: "Analyze and Improve",
                  description:
                    "Review your progress, identify patterns, and adjust your habits for continuous growth.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center flex-1 relative"
                  variants={fadeInUp}
                >
                  <div className="w-20 h-20 rounded-full bg-white text-[#3F72AF] flex items-center justify-center text-4xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-[#DBE2EF] max-w-xs">{item.description}</p>
                  {index < 2 && (
                    <motion.div
                      className="hidden md:block absolute top-10 -right-16 text-white"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <ArrowRight className="w-12 h-12" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-20 md:py-28 lg:py-36 bg-[#F0F4FF] dark:bg-[#112D4E]"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#112D4E] dark:text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-[#3F72AF] dark:text-[#DBE2EF]">
                Real people, real results with HabitFlow
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                {
                  color: "#4CAF50",
                  quote:
                    "HabitFlow transformed my life! I've built a consistent meditation practice and feel more focused than ever.",
                  name: "Sarah K.",
                  achievement: "90-day meditation streak",
                },
                {
                  color: "#FFC107",
                  quote:
                    "The analytics feature helped me understand my habits better. I've improved my productivity significantly!",
                  name: "Michael R.",
                  achievement: "40% productivity boost",
                },
                {
                  color: "#2196F3",
                  quote:
                    "I finally stuck to my exercise routine thanks to HabitFlow. The streak feature is incredibly motivating!",
                  name: "Emily T.",
                  achievement: "Lost 15 lbs in 2 months",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-4"
                    style={{ backgroundColor: testimonial.color }}
                  />
                  <p className="text-[#112D4E] mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-[#3F72AF] font-bold">{testimonial.name}</p>
                  <p className="text-[#3F72AF] text-sm">
                    {testimonial.achievement}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-20 md:py-28 lg:py-36 bg-white dark:bg-[#1A3A5C]"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#112D4E] dark:text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-[#3F72AF] dark:text-[#DBE2EF]">
                Choose the plan that fits your needs
              </p>
            </motion.div>
            <motion.div
              className="grid gap-8 md:grid-cols-3 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                {
                  name: "Basic",
                  price: "Free",
                  features: [
                    "Track up to 3 habits",
                    "Basic analytics",
                    "7-day history",
                  ],
                  cta: "Get Started",
                  highlight: false,
                },
                {
                  name: "Pro",
                  price: "$9.99/mo",
                  features: [
                    "Unlimited habits",
                    "Advanced analytics",
                    "Unlimited history",
                    "Priority support",
                  ],
                  cta: "Upgrade to Pro",
                  highlight: true,
                },
                {
                  name: "Team",
                  price: "$29.99/mo",
                  features: [
                    "All Pro features",
                    "Team collaboration",
                    "Admin controls",
                    "API access",
                  ],
                  cta: "Contact Sales",
                  highlight: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col p-8 rounded-lg shadow-lg ${
                    plan.highlight
                      ? "bg-gradient-to-br from-[#3F72AF] to-[#112D4E] text-white"
                      : "bg-white"
                  }`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      plan.highlight ? "text-white" : "text-[#112D4E]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-4xl font-bold mb-6 ${
                      plan.highlight ? "text-white" : "text-[#3F72AF]"
                    }`}
                  >
                    {plan.price}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle
                          className={`h-5 w-5 ${
                            plan.highlight ? "text-white" : "text-[#3F72AF]"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-auto ${
                      plan.highlight
                        ? "bg-white text-[#3F72AF] hover:bg-[#DBE2EF]"
                        : "bg-[#3F72AF] text-white hover:bg-[#112D4E]"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <motion.section
          className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] dark:from-[#1A3A5C] dark:to-[#112D4E] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Start Your Journey Today
            </motion.h2>
            <motion.div
              className="w-full max-w-md space-y-4"
              variants={fadeInUp}
            >
              <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Input
                  className="flex-1 bg-white text-[#112D4E] rounded-full px-6 py-3"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  type="submit"
                  className="bg-[#112D4E] text-white hover:bg-[#DBE2EF] hover:text-[#112D4E] rounded-full px-8 py-3 transition-all duration-300"
                >
                  Get Started
                </Button>
              </form>
              <p className="text-xs text-[#DBE2EF]">
                By signing up, you agree to our Terms & Privacy Policy.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-white dark:bg-[#112D4E] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Product", "Company", "Resources", "Legal"].map((section) => (
              <div key={section}>
                <h3 className="text-lg font-semibold mb-4 text-[#112D4E] dark:text-white">
                  {section}
                </h3>
                <ul className="space-y-2">
                  {/* ... (footer links content) */}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#3F72AF] dark:text-[#DBE2EF]">
              © 2024 HabitFlow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-[#3F72AF] dark:text-[#DBE2EF] hover:text-[#112D4E] dark:hover:text-[#F9F7F7]"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#3F72AF] dark:text-[#DBE2EF] hover:text-[#112D4E] dark:hover:text-[#F9F7F7]"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#3F72AF] dark:text-[#DBE2EF] hover:text-[#112D4E] dark:hover:text-[#F9F7F7]"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#3F72AF] dark:text-[#DBE2EF] hover:text-[#112D4E] dark:hover:text-[#F9F7F7]"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
