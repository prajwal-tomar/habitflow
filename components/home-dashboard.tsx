"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BarChart2, PlusCircle, Bell, Edit } from "lucide-react";
import { CreateHabitModalComponent } from "@/components/create-habit-modal";
import { Header } from "@/components/header";
import { useTheme } from "next-themes";

// Mock data for habits
const habits = [
  {
    id: 1,
    name: "Walk around the block",
    color: "#4ade80",
    data: Array(90)
      .fill(0)
      .map(() => Math.random() > 0.3),
  },
  {
    id: 2,
    name: "Learn Norwegian",
    color: "#a78bfa",
    data: Array(90)
      .fill(0)
      .map(() => Math.random() > 0.3),
  },
  {
    id: 3,
    name: "Eat a piece of fruit",
    color: "#f87171",
    data: Array(90)
      .fill(0)
      .map(() => Math.random() > 0.3),
  },
  {
    id: 4,
    name: "Stretch for 5 minutes",
    color: "#fbbf24",
    data: Array(90)
      .fill(0)
      .map(() => Math.random() > 0.3),
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HomeDashboard() {
  const { theme } = useTheme();
  const [selectedHabit, setSelectedHabit] = useState<null | {
    id: number;
    name: string;
    color: string;
    data: boolean[];
  }>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const renderHabitGrid = (habit: {
    id: number;
    name: string;
    color: string;
    data: boolean[];
  }) => {
    const gridItems = habit.data
      .slice(0, 90)
      .map((completed, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-sm ${
            completed ? "opacity-100" : "opacity-30"
          }`}
          style={{ backgroundColor: habit.color }}
        />
      ));

    return (
      <div className="grid grid-cols-[repeat(30,minmax(0,1fr))] gap-1 mt-2">
        {gridItems}
      </div>
    );
  };

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
            Your Habits, At a Glance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-2 bg-white dark:bg-[#1A3A5C] rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-end mb-6">
              <Button
                className="bg-[#3F72AF] text-white hover:bg-[#112D4E] dark:bg-[#DBE2EF] dark:text-[#112D4E] dark:hover:bg-[#F9F7F7]"
                onClick={() => setIsCreateModalOpen(true)}
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Habit
              </Button>
            </div>

            <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  className="bg-white dark:bg-[#1A3A5C] border border-black/10 dark:border-white/10 rounded-lg p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: habit.color }}
                      ></div>
                      <h3 className="text-lg font-semibold text-[#112D4E] dark:text-[#F9F7F7]">
                        {habit.name}
                      </h3>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-[#3F72AF] hover:text-[#112D4E] dark:text-[#DBE2EF] dark:hover:text-[#F9F7F7]"
                      onClick={() => setSelectedHabit(habit)}
                    >
                      <PlusCircle className="h-5 w-5" />
                    </Button>
                  </div>
                  {renderHabitGrid(habit)}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-[#1A3A5C] rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#112D4E] dark:text-[#F9F7F7] mb-4">
                Streak Tracker
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#3F72AF] dark:text-[#DBE2EF]">
                    Current Streak
                  </span>
                  <span className="text-2xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
                    7 days
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#3F72AF] dark:text-[#DBE2EF]">
                    Longest Streak
                  </span>
                  <span className="text-2xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
                    21 days
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#3F72AF] dark:text-[#DBE2EF]">
                    Consistency
                  </span>
                  <span className="text-2xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
                    85%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A3A5C] rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#112D4E] dark:text-[#F9F7F7] mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-[#3F72AF] dark:text-[#DBE2EF] dark:border-[#DBE2EF] dark:hover:bg-[#112D4E]"
                >
                  <BarChart2 className="mr-2 h-4 w-4" /> View Analytics
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-[#3F72AF] dark:text-[#DBE2EF] dark:border-[#DBE2EF] dark:hover:bg-[#112D4E]"
                >
                  <Bell className="mr-2 h-4 w-4" /> Set Reminder
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-[#3F72AF] dark:text-[#DBE2EF] dark:border-[#DBE2EF] dark:hover:bg-[#112D4E]"
                >
                  <Edit className="mr-2 h-4 w-4" /> Edit Profile
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-white dark:bg-[#112D4E] border-t border-gray-200 dark:border-[#1A3A5C] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-[#3F72AF] dark:text-[#DBE2EF]">
          © 2024 HabitFlow. All rights reserved.
        </div>
      </footer>

      {isCreateModalOpen && (
        <CreateHabitModalComponent
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </div>
  );
}
