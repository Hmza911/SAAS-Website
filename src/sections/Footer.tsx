"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 bg-black">
      <div className="container mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Logo */}
        <Image
          src="/icons/Logosaas.png"
          alt="Logo"
          width={120}
          height={60}
          className="h-12 w-auto object-contain"
        />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300 font-medium">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Customers</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Help</a>
          <a href="#" className="hover:text-white transition">Careers</a>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-4">
          © {new Date().getFullYear()} StreamLine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
