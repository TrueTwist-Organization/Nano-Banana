"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PromptCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  text: string;
}

export default function PromptCard({ id, title, category, image, text }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-[40px] overflow-hidden group flex flex-col h-full border border-black/5 hover:border-banana/50 transition-all duration-500 bg-white shadow-sm"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-white/90">
            {category}
          </span>
        </div>

        {/* Action Buttons (Overlay) */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
           <button
             onClick={handleCopy}
             className="p-4 bg-gray-900 text-white rounded-full hover:bg-banana hover:text-gray-900 transition-colors shadow-2xl"
           >
             {copied ? <Check size={20} /> : <Copy size={20} />}
           </button>
           <Link 
             href={`/generate?promptId=${id}`}
             className="p-4 bg-gray-900/40 backdrop-blur-md text-white rounded-full hover:bg-gray-900 transition-colors shadow-2xl"
           >
             <ExternalLink size={20} />
           </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed flex-grow">
          {text}
        </p>
        <div className="pt-4 flex items-center justify-between border-t border-gray-100">
           <Link 
             href={`/generate?promptId=${id}`}
             className="text-xs font-black text-gray-900 hover:text-yellow-600 transition-colors uppercase tracking-widest"
           >
             Use Prompt
           </Link>
           <button 
             onClick={handleCopy}
             className="text-xs font-bold text-yellow-600 hover:text-gray-900 hover:underline flex items-center gap-1 transition-colors"
           >
             {copied ? "COPIED!" : "COPY PROMPT"}
           </button>
        </div>
      </div>
    </motion.div>

  );
}
