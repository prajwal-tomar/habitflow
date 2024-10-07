"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { format } from "date-fns";
import { CalendarIcon, LogOut, BarChart2 } from "lucide-react";
import { HabitFlowLogo } from "@/components/habit-flow-logo";
import { Header } from "@/components/header";
import { useTheme } from "next-themes";

// Mock data
const overviewData = {
  totalHabits: 5,
  averageCompletion: 78,
  longestStreak: 21,
};

const streakData = [
  { date: "2023-01-01", streak: 5 },
  { date: "2023-02-01", streak: 10 },
  { date: "2023-03-01", streak: 15 },
  { date: "2023-04-01", streak: 7 },
  { date: "2023-05-01", streak: 21 },
];

const habitData = [
  { habit: "Meditation", completed: 22, total: 30 },
  { habit: "Exercise", completed: 18, total: 30 },
  { habit: "Reading", completed: 25, total: 30 },
  { habit: "Journaling", completed: 20, total: 30 },
];

const calendarData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2023, 4, i + 1),
  status: Math.random() > 0.3 ? "completed" : "missed",
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AnalyticsScreenComponent() {
  const { theme } = useTheme();
  const [selectedHabit, setSelectedHabit] = useState("All");
  const [dateRange, setDateRange] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#E0E8FF] to-[#F0F4FF] dark:from-[#112D4E] dark:to-[#1A3A5C] text-[#112D4E] dark:text-[#F9F7F7]">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
            Understand Your Progress
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="bg-white dark:bg-[#1A3A5C]">
            <CardHeader>
              <CardTitle className="text-[#112D4E] dark:text-[#F9F7F7]">
                Total Habits Tracked
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
                {overviewData.totalHabits}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-[#1A3A5C]">
            <CardHeader>
              <CardTitle className="text-[#112D4E] dark:text-[#F9F7F7]">
                Average Completion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
                {overviewData.averageCompletion}%
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-[#1A3A5C]">
            <CardHeader>
              <CardTitle className="text-[#112D4E] dark:text-[#F9F7F7]">
                Longest Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
                {overviewData.longestStreak} days
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="bg-white dark:bg-[#1A3A5C]">
              <CardHeader>
                <CardTitle className="text-[#112D4E] dark:text-[#F9F7F7]">
                  Streak Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    streak: {
                      label: "Streak",
                      color:
                        theme === "dark"
                          ? "hsl(210, 100%, 70%)"
                          : "hsl(210, 100%, 50%)",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={streakData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={theme === "dark" ? "#4a5568" : "#ccc"}
                      />
                      <XAxis
                        dataKey="date"
                        stroke={theme === "dark" ? "#F9F7F7" : "#112D4E"}
                      />
                      <YAxis
                        stroke={theme === "dark" ? "#F9F7F7" : "#112D4E"}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="streak"
                        stroke={
                          theme === "dark"
                            ? "hsl(210, 100%, 70%)"
                            : "hsl(210, 100%, 50%)"
                        }
                        strokeWidth={2}
                        dot={{
                          fill:
                            theme === "dark"
                              ? "hsl(210, 100%, 70%)"
                              : "hsl(210, 100%, 50%)",
                          r: 4,
                        }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-[#1A3A5C]">
              <CardHeader>
                <CardTitle className="text-[#112D4E] dark:text-[#F9F7F7]">
                  Habit Completion Rates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    completed: {
                      label: "Completed",
                      color:
                        theme === "dark"
                          ? "hsl(32, 100%, 60%)"
                          : "hsl(32, 100%, 50%)",
                    },
                    total: {
                      label: "Total",
                      color:
                        theme === "dark"
                          ? "hsl(174, 100%, 39%)"
                          : "hsl(174, 100%, 29%)",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={habitData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={theme === "dark" ? "#4a5568" : "#ccc"}
                      />
                      <XAxis
                        dataKey="habit"
                        stroke={theme === "dark" ? "#F9F7F7" : "#112D4E"}
                      />
                      <YAxis
                        stroke={theme === "dark" ? "#F9F7F7" : "#112D4E"}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar
                        dataKey="completed"
                        fill={
                          theme === "dark"
                            ? "hsl(32, 100%, 60%)"
                            : "hsl(32, 100%, 50%)"
                        }
                      />
                      <Bar
                        dataKey="total"
                        fill={
                          theme === "dark"
                            ? "hsl(174, 100%, 39%)"
                            : "hsl(174, 100%, 29%)"
                        }
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-8"
          >
            <Card className="bg-white dark:bg-[#1A3A5C]">
              <CardHeader>
                <CardTitle className="text-[#112D4E] dark:text-[#F9F7F7]">
                  Calendar View
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={dateRange}
                  onSelect={setDateRange}
                  className="rounded-md border dark:border-gray-700"
                  modifiers={{
                    completed: (date) =>
                      calendarData.some(
                        (d) =>
                          d.date.toDateString() === date.toDateString() &&
                          d.status === "completed"
                      ),
                    missed: (date) =>
                      calendarData.some(
                        (d) =>
                          d.date.toDateString() === date.toDateString() &&
                          d.status === "missed"
                      ),
                  }}
                  modifiersStyles={{
                    completed: {
                      backgroundColor: theme === "dark" ? "#22c55e" : "#4ade80",
                    },
                    missed: {
                      backgroundColor: theme === "dark" ? "#ef4444" : "#f87171",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-[#1A3A5C]">
              <CardHeader>
                <CardTitle className="text-[#112D4E] dark:text-[#F9F7F7]">
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={selectedHabit} onValueChange={setSelectedHabit}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select habit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Habits</SelectItem>
                    <SelectItem value="Meditation">Meditation</SelectItem>
                    <SelectItem value="Exercise">Exercise</SelectItem>
                    <SelectItem value="Reading">Reading</SelectItem>
                    <SelectItem value="Journaling">Journaling</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="w-full">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange ? (
                    format(dateRange, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
                <Button className="w-full bg-[#3F72AF] text-white hover:bg-[#112D4E] dark:bg-[#DBE2EF] dark:text-[#112D4E] dark:hover:bg-[#F9F7F7]">
                  <BarChart2 className="mr-2 h-4 w-4" /> Generate Report
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <footer className="bg-white dark:bg-[#112D4E] border-t border-gray-200 dark:border-[#1A3A5C] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-[#3F72AF] dark:text-[#DBE2EF]">
          © 2024 HabitFlow. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
