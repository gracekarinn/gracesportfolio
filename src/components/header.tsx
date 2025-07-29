"use client";

import React from "react";
import { useTheme } from "./theme-switch";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="container py-3">
        <div className="flex w-screen justify-end">
          <div className="flex">
            <button
              className="p-3 mx-3 rounded-full bg-background dark:bg-foreground hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500 shadow-md hover:shadow-lg hover:scale-110"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-400" />
              ) : (
                <Sun className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
