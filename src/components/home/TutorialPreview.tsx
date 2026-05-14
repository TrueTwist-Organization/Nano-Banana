"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { tutorials } from "@/data/mock";

export default function TutorialPreview() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
             <h2 className="text-4xl font-bold text-gray-900">Latest <span className="text-yellow-600">Guides</span></h2>
             <p className="text-gray-500 max-w-lg">Level up your skills with our top-tier tutorial series.</p>
          </div>
          <Link href="/tutorials" className="text-gray-500 hover:text-gray-900 flex items-center gap-2 group transition-colors">
            See all tutorials <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
             <motion.div
               key={tutorial.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group cursor-pointer"
             >
               <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-md">
                 <img 
                   src={tutorial.thumbnail} 
                   alt={tutorial.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                       <Play size={28} fill="white" />
                    </div>
                 </div>
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-banana text-[10px] font-bold text-gray-900 uppercase rounded-full tracking-widest shadow-lg">
                     {tutorial.level}
                   </span>
                 </div>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                 {tutorial.title}
               </h3>
               <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                 {tutorial.description}
               </p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

