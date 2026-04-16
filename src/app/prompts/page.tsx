"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import PromptCard from "@/components/ui/PromptCard";
import { prompts } from "@/data/mock";

const categories = ["All", "Sci-Fi", "Fantasy", "Architecture", "Abstract", "Portrait", "Nature"];
const styles = ["Photorealistic", "Anime", "3D Render", "Oil Painting", "Vector"];

export default function PromptsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         prompt.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || prompt.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 bg-gray-50 p-4 rounded-[32px] border border-black/5">
           <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                    activeCategory === cat 
                    ? "bg-gray-900 text-white shadow-xl scale-105" 
                    : "bg-white text-gray-400 hover:text-gray-900 border border-black/5"
                  )}
                >
                  {cat}
                </button>
              ))}
           </div>

           <div className="relative w-full md:w-96 group">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-600 transition-colors" size={20} />
             <input 
               type="text" 
               placeholder="Search by keyword or subject..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-16 pr-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-banana/50 transition-all font-medium text-sm shadow-sm"
             />
           </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrompts.length > 0 ? (
              filteredPrompts.map((prompt, index) => (
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
              ))
            ) : (
              <div className="col-span-full py-32 text-center space-y-4">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                   <Search size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-900">No prompts found</h3>
                <p className="text-gray-500 font-medium">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                  className="text-yellow-600 font-black text-sm uppercase tracking-widest hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Load More Button (Only if many results) */}
        {filteredPrompts.length > 7 && (
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
