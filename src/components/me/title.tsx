"use client";
import React, { useState, useEffect } from "react";

export const Title = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <div
        className={`text-center transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-4">
          <span className="text-lg text-foreground dark:text-background font-medium tracking-wide">
            Hi, I'm
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6 tracking-tight">
          Grace Karin
        </h1>
      </div>
    </section>
  );
};
