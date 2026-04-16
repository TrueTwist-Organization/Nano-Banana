"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import PromptCard from "@/components/ui/PromptCard";
import { prompts } from "@/data/mock";

const categories = ["All", "Sci-Fi", "Fantasy", "Architecture", "Abstract", "Portrait", "Nature"];
const styles = ["Photorealistic", "Anime", "3D Render", "Oil Painting", "Vector"];

export default function PromptsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
            Prompt <span className="text-yellow-600">Library</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            The largest collection of professional AI prompts. Carefully curated for designers, engineers, and creative artists.
          </p>
        </header>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {prompts.map((prompt, index) => (
            <motion.div
              key={`${prompt.id}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <PromptCard {...prompt} />
            </motion.div>
          ))}
        </div>




        {/* Load More Mock */}
        <div className="mt-20 flex justify-center">
           <button className="px-12 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-banana hover:text-gray-900 transition-all shadow-xl">
             Load More Prompts
           </button>
        </div>
      </div>
    </div>
  );
}


// Utility for class merging
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
