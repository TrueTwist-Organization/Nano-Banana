"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

const latestPosts = [
  {
    id: 1,
    title: "The Rise of Generative AI in Professional Design",
    excerpt: "How studios are integrating AI into high-end design workflows without sacrificing control.",
    author: "Alex Rivera",
    date: "Apr 14, 2026",
    thumbnail: "/images/blog/design_trend.png",
    category: "Industry"
  },
  {
    id: 2,
    title: "Mastering Multi-Modal Prompting",
    excerpt: "Combine image prompts with text to achieve hyper-consistent results like the pros.",
    author: "Sarah Chen",
    date: "Apr 12, 2026",
    thumbnail: "/images/blog/prompt_mastery.png",
    category: "Tutorial"
  },
  {
    id: 3,
    title: "The Future of 3D Workflows",
    excerpt: "Generating PBR textures and meshes is getting a major boost from generative AI.",
    author: "Marcus Volkov",
    date: "Apr 10, 2026",
    thumbnail: "/images/blog/3d_art.png",
    category: "3D Art"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-32 px-6 bg-gray-50 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-banana/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-banana/10 text-yellow-700 text-[10px] font-black uppercase tracking-widest border border-banana/20"
            >
              Latest Insights
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
              From the <span className="text-yellow-600">Lab</span>
            </h2>
          </div>
          <Link href="/blog" className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-gray-900 hover:text-yellow-600 transition-colors">
            View All Articles <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-6 rounded-[40px] border border-black/5 hover:border-banana/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-video rounded-[24px] overflow-hidden mb-8">
                <img 
                  src={post.thumbnail} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900">
                  {post.category}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-4 flex items-center gap-2 text-yellow-700 text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
