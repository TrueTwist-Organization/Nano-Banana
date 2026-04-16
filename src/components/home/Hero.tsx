"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-banana/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-200/30 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-banana/10 text-yellow-700 text-xs font-bold uppercase tracking-wider mb-6 border border-banana/20">
              The Future of Prompting
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
              Discover the Power <br />
              <span className="text-gradient">Nano Banana AI</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Step into the next generation of creative expression. Curated libraries, pro-level tutorials, and a community of AI artists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="/prompts"
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-banana hover:text-gray-900 transition-all flex items-center justify-center gap-2 group"
            >
              Explore Prompts <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              href="/gallery"
              className="w-full sm:w-auto px-8 py-4 glass text-gray-900 rounded-full font-bold text-lg hover:bg-black/5 transition-all text-center"
            >
              View Gallery
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-8 flex items-center justify-center lg:justify-start gap-12 border-t border-black/5"
          >
            <div>
              <p className="text-3xl font-bold text-gray-900">10k+</p>
              <p className="text-sm text-gray-500">Prompts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">50k+</p>
              <p className="text-sm text-gray-500">Artists</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">100+</p>
              <p className="text-sm text-gray-500">Tutorials</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Floating Cards */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-10 right-0 w-80 h-96 glass rounded-[40px] p-5 rotate-3 hover:rotate-0 transition-all duration-500 cursor-pointer overflow-hidden group shadow-2xl border-white/40"
          >
            <div className="w-full h-full relative rounded-[28px] overflow-hidden mb-4">
               <img 
                 src="/images/gallery/samurai.png" 
                 alt="Neon Ronin" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold text-lg">Neon Ronin</p>
                  <p className="text-yellow-400 text-xs font-medium uppercase tracking-widest">Anime Style</p>
               </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-10 left-10 w-72 h-80 glass rounded-[40px] p-5 -rotate-6 hover:rotate-0 transition-all duration-500 cursor-pointer overflow-hidden group z-10 shadow-2xl border-white/40"
          >
             <div className="w-full h-full relative rounded-[28px] overflow-hidden">
                <img 
                  src="/images/gallery/bento.png" 
                  alt="Bento Universe" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold text-base">Mini Verse</p>
                  <p className="text-yellow-400 text-[10px] font-medium uppercase tracking-widest">3D Isometric</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

