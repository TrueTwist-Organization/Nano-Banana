"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PromptCard from "@/components/ui/PromptCard";
import { prompts } from "@/data/mock";

export default function FeaturedPrompts() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Featured <span className="text-yellow-600">Prompts</span>
            </h2>
            <p className="text-gray-500 max-w-xl text-lg">
              Hand-picked prompt masterpieces from our top creators. Explore the limits of what's possible with AI.
            </p>
          </div>
          <Link 
            href="/prompts" 
            className="flex items-center gap-2 text-gray-900 font-bold group hover:text-yellow-600 transition-colors"
          >
            Explore Library <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Grid - Fixed 1 Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {prompts.slice(0, 4).map((prompt, index) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PromptCard {...prompt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

