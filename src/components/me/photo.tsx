"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Photo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex items-center justify-center my-4">
      <div
        className={`relative group transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
          <Image
            src="/diri-sendiri.jpg"
            fill
            alt="Grace Karin"
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
      </div>
    </section>
  );
};
