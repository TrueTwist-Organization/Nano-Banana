"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import PromptCard from "@/components/ui/PromptCard";
import { prompts } from "@/data/mock";

export default function PromptsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-banana/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-banana/10 text-yellow-700 text-[10px] font-black uppercase tracking-widest border border-banana/20">
             Prompt Archive
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">
            The <span className="text-yellow-600">Prompt</span> <br />
            Library
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-medium">
            Over 10,000+ curated prompts for Midjourney, DALL-E, and Stable Diffusion. Professional quality, guaranteed results.
          </p>
        </header>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {prompts.map((prompt) => (
              <motion.div
                key={prompt.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PromptCard {...prompt} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {prompts.length > 8 && (
          <div className="mt-24 flex justify-center">
             <button className="px-12 py-5 bg-gray-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-banana hover:text-gray-900 transition-all shadow-2xl active:scale-95">
               Uncover More Secrets
             </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Utility
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
