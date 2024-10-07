"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Book,
  Dumbbell,
  Music,
  Paintbrush,
  Utensils,
  X,
  Calendar as CalendarIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

interface CreateHabitModalComponentProps {
  onClose: () => void;
}

const iconOptions = [
  { icon: Book, label: "Read" },
  { icon: Dumbbell, label: "Exercise" },
  { icon: Music, label: "Practice Music" },
  { icon: Paintbrush, label: "Create Art" },
  { icon: Utensils, label: "Cook" },
];

const colorOptions = [
  "#4ade80",
  "#a78bfa",
  "#f87171",
  "#fbbf24",
  "#60a5fa",
  "#34d399",
];

export function CreateHabitModalComponent({
  onClose,
}: CreateHabitModalComponentProps) {
  const { theme } = useTheme();
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [goalCount, setGoalCount] = useState(3);
  const [selectedColor, setSelectedColor] = useState("#4ade80");
  const [selectedIcon, setSelectedIcon] = useState(iconOptions[0]);
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState<Date | undefined>(
    new Date()
  );

  const handleSave = () => {
    console.log({
      name: habitName,
      frequency,
      goalCount,
      color: selectedColor,
      icon: selectedIcon.label,
      reminder: reminderEnabled ? reminderTime : null,
    });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1A3A5C] rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-[#F9F7F7]">
            New Habit, New You
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-gray-800 dark:text-[#F9F7F7]" />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="habit-name"
              className="block text-sm font-medium text-gray-700 dark:text-[#DBE2EF]"
            >
              Habit Name
            </label>
            <input
              id="habit-name"
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-[#112D4E] dark:text-[#F9F7F7]"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="Enter habit name"
            />
          </div>

          <div>
            <label
              htmlFor="frequency"
              className="block text-sm font-medium text-gray-700 dark:text-[#DBE2EF]"
            >
              Frequency
            </label>
            <select
              id="frequency"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-[#112D4E] dark:text-[#F9F7F7]"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-[#DBE2EF]">
              Goal (times per {frequency})
            </label>
            <input
              type="range"
              min="1"
              max="7"
              value={goalCount}
              onChange={(e) => setGoalCount(parseInt(e.target.value))}
              className="mt-1 block w-full"
            />
            <div className="text-sm text-gray-500 dark:text-[#DBE2EF] mt-1">
              Complete this habit at least {goalCount} times per{" "}
              {frequency.slice(0, -2)}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-[#DBE2EF]">
              Color
            </label>
            <div className="flex space-x-2 mt-2">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2 ring-blue-500 dark:ring-blue-400"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-[#DBE2EF]">
              Icon
            </label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {iconOptions.map((option) => (
                <button
                  key={option.label}
                  className={`p-2 rounded-md flex flex-col items-center ${
                    selectedIcon.label === option.label
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setSelectedIcon(option)}
                >
                  <option.icon className="h-6 w-6 mb-1" />
                  <span className="text-xs">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="reminder"
              checked={reminderEnabled}
              onChange={(e) => setReminderEnabled(e.target.checked)}
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-[#112D4E]"
            />
            <label
              htmlFor="reminder"
              className="text-sm font-medium text-gray-700 dark:text-[#DBE2EF]"
            >
              Enable Reminder
            </label>
          </div>

          {reminderEnabled && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-[#DBE2EF]">
                Reminder Time
              </label>
              <input
                type="datetime-local"
                value={reminderTime?.toISOString().slice(0, 16)}
                onChange={(e) => setReminderTime(new Date(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-[#112D4E] dark:text-[#F9F7F7]"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="dark:border-[#DBE2EF] dark:text-[#DBE2EF]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-[#3F72AF] text-white hover:bg-[#112D4E] dark:bg-[#DBE2EF] dark:text-[#112D4E] dark:hover:bg-[#F9F7F7]"
          >
            Save Habit
          </Button>
        </div>
      </div>
    </div>
  );
}
