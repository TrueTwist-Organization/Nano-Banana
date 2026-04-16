"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Clock, BookOpen, ExternalLink } from "lucide-react";
import { tutorials } from "@/data/mock";

export default function TutorialsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 space-y-6">
          <h1 className="text-5xl font-black text-gray-900">
            Learn AI <span className="text-yellow-600">Prompting</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed font-medium">
            From absolute beginner to professional prompt engineer. Our tutorials cover everything you need to know about Midjourney, Stable Diffusion, and beyond.
          </p>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button className="px-8 py-3 bg-banana text-gray-900 rounded-full font-black shadow-xl transition-all border border-banana">All Guides</button>
          <button className="px-8 py-3 bg-white text-gray-400 rounded-full font-bold hover:text-gray-900 transition-all border border-gray-100 hover:border-banana">Beginner</button>
          <button className="px-8 py-3 bg-white text-gray-400 rounded-full font-bold hover:text-gray-900 transition-all border border-gray-100 hover:border-banana">Advanced</button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {tutorials.map((tutorial, index) => (
             <motion.div
               key={tutorial.id}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group flex flex-col h-full bg-gray-50 border border-black/5 rounded-[40px] overflow-hidden hover:border-banana/50 hover:shadow-2xl transition-all duration-500"
             >
               <div className="relative aspect-video overflow-hidden">
                 <img 
                   src={tutorial.thumbnail} 
                   alt={tutorial.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <div className="w-14 h-14 bg-banana rounded-full flex items-center justify-center text-gray-900 shadow-xl">
                       <Play fill="currentColor" size={24} />
                    </div>
                 </div>
               </div>

               <div className="p-10 flex flex-col flex-grow">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="flex items-center gap-1.5 text-yellow-700 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-banana/20 rounded-full">
                     <Clock size={12} /> 15 MIN
                   </div>
                   <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                     <BookOpen size={12} /> {tutorial.level}
                   </div>
                 </div>
                 
                 <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors leading-tight tracking-tight">
                   {tutorial.title}
                 </h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                   {tutorial.description}
                 </p>
                 
                 <div className="pt-8 border-t border-black/5">
                   <button className="w-full py-4 bg-white text-gray-900 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 group/btn hover:bg-banana transition-all border border-gray-100 hover:border-banana shadow-sm">
                     Start Learning <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                   </button>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
