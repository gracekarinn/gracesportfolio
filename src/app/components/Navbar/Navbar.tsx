"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_LINKS } from "./constant";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <ul className="flex flex-col space-y-4">
          {NAVBAR_LINKS.map((link) => {
            const IconComponent = link.icon;
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center justify-center w-8 h-8 backdrop-blur-sm rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ${
                    isActive
                      ? "bg-white text-black shadow-blue-500/25 shadow-2xl"
                      : "bg-white/50 text-black hover:text-white hover:bg-gray-700/80 hover:shadow-xl"
                  }`}
                >
                  <IconComponent
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? "scale-110" : ""
                    }`}
                  />
                </Link>

                <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-gray-700/50 transform translate-x-2 group-hover:translate-x-0">
                  {link.label}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/95 rotate-45 border-l border-b border-gray-700/50"></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md border-t border-gray-700/50">
        <ul className="flex justify-around items-center px-4 py-3">
          {NAVBAR_LINKS.map((link) => {
            const IconComponent = link.icon;
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-white transform scale-105"
                      : "text-gray-400 hover:text-white active:scale-95"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-white text-black shadow-blue-500/25 shadow-2xl"
                        : "bg-white/50 text-black hover:text-white hover:bg-gray-700/80 hover:shadow-xl"
                    }`}
                  >
                    <IconComponent
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? "scale-110" : ""
                      }`}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
