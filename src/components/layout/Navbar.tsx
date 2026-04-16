"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Prompts", href: "/prompts" },
  { name: "Tutorials", href: "/tutorials" },
  { name: "Gallery", href: "/gallery" },
  { name: "Video", href: "/video" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass border-b border-black/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-banana rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(250,205,18,0.3)] group-hover:scale-110 transition-transform">
            <span className="text-gray-900 font-bold text-xl">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Nano <span className="text-yellow-600">Banana</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-banana transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Sun size={20} />
          </button>
          <Link
            href="/prompts"
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full font-semibold text-sm hover:bg-banana hover:text-gray-900 transition-all hover:shadow-[0_0_20px_rgba(250,205,18,0.5)] active:scale-95"
          >
            Explore <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-b border-black/5 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-700 hover:text-yellow-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-px bg-black/5 my-2" />
            <Link
              href="/prompts"
              className="w-full py-4 bg-banana text-gray-900 rounded-xl font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              Explore Prompts
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

