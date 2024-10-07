import { HabitFlowLogo } from "@/components/habit-flow-logo";
import { LogOut, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

export function Header() {
  return (
    <header className="bg-white dark:bg-[#112D4E] shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <HabitFlowLogo className="h-8 w-8 text-[#3F72AF] dark:text-[#DBE2EF]" />
          <h1 className="ml-2 text-2xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
            HabitFlow
          </h1>
        </div>
        <nav className="flex items-center space-x-4">
          {[
            { name: "Dashboard", href: "/dashboard" },
            { name: "Analytics", href: "/analytics" },
            { name: "Create Habit", href: "/create-habit" },
            { name: "Profile", href: "/profile" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#3F72AF] dark:text-[#DBE2EF] hover:text-[#112D4E] dark:hover:text-[#F9F7F7] px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <button className="text-[#3F72AF] dark:text-[#DBE2EF] hover:text-[#112D4E] dark:hover:text-[#F9F7F7] px-3 py-2 rounded-md text-sm font-medium">
            <LogOut className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
