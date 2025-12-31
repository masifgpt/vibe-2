"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-white text-xl font-semibold">
          M Asif
        </h1>

        {/* Links */}
        <ul className="flex gap-8 text-gray-300 font-medium">
          <li>
            <Link href="#home" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-white transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
