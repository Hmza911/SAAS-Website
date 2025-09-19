"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Black Bar */}
      <div className="flex items-center justify-center w-full h-20 bg-black text-white gap-3">
        <p className="text-white/60 hidden md:block">
          StreamLine your workflow and boost your productivity.
        </p>
        <p className="text-lg font-medium">Get Started For Free</p>
        <Image
          src="/icons/right-arrow1.jpg"
          alt="Arrow Right"
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Navbar */}
      <div
        className={`mx-auto mt-2 px-6 py-4 flex justify-between items-center font-medium 
          bg-gradient-to-r from-white/80 via-gray-100/70 to-white/80 
          backdrop-blur-md transition-all duration-300
          ${scrolled ? "rounded-2xl shadow-lg max-w-6xl" : "rounded-none max-w-full"}
        `}
      >
        {/* Logo */}
        <Image
          src="/icons/logosaas.png"
          alt="SaaS Logo"
          width={60}
          height={60}
          className="sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl object-contain"
        />

        {/* Navigation with dropdowns */}
        <nav className="hidden md:flex gap-8 items-center relative">
          {[
            { label: "About", items: ["Company", "Team", "Careers", "Contact"] },
            { label: "Features", items: ["Productivity", "Integrations", "Analytics", "Security"] },
            { label: "Customers", items: ["Case Studies", "Testimonials", "Industries"] },
            { label: "Updates", items: ["Blog", "Release Notes", "Roadmap"] },
            { label: "Help", items: ["Docs", "Support", "Community"] },
          ].map((menu, idx) => (
            <div key={idx} className="group relative">
              <a
                href="#"
                className="hover:text-blue-700 transition-colors duration-200"
              >
                {menu.label}
              </a>
              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block w-48 bg-white shadow-lg rounded-xl border border-gray-100 p-3 transition-all">
                <ul className="flex flex-col gap-2">
                  {menu.items.map((item, subIdx) => (
                    <li key={subIdx}>
                      <a
                        href="#"
                        className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <button className="bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition">
            Get for free
          </button>
        </nav>
      </div>
    </header>
  );
}
