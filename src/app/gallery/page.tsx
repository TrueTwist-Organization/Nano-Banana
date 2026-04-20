"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Download, Share2 } from "lucide-react";

const galleryItems = [
  { src: "/images/home_gallery/art_1.png", title: "Silk Flow", category: "Abstract" },
  { src: "/images/home_gallery/art_2.png", title: "Golden Arches", category: "Architecture" },
  { src: "/images/home_gallery/art_3.png", title: "Aura Kicks", category: "Gen-Z" },
  { src: "/images/home_gallery/art_4.png", title: "Solar Portrait", category: "Photorealistic" },
  { src: "/images/gallery/y2k.png", title: "Y2K Style", category: "Gen-Z" },
  { src: "/images/gallery/sneakers.png", title: "Cyber Kicks", category: "Gen-Z" },
  { src: "/images/gallery/bento.png", title: "Bento Room", category: "3D" },
  { src: "/images/gallery/studio.png", title: "Virtual Studio", category: "3D" },
  { src: "/images/gallery/android.png", title: "Cyber Mind", category: "3D" },
  { src: "/images/gallery/portrait.png", title: "Golden Essence", category: "Photorealistic" },
  { src: "/images/gallery/samurai.png", title: "Neon Ronin", category: "Anime" },
  { src: "/images/gallery/abstract.png", title: "Neon Waves", category: "Abstract" },
  { src: "/images/gallery/landscape.png", title: "Dreamy Clouds", category: "Fantasy" },
];


export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden px-6 bg-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-banana/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-24 space-y-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-banana/10 text-yellow-700 text-[10px] font-black uppercase tracking-widest mb-2 border border-banana/20">
            Aesthetic Archive
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-[0.9] tracking-tighter">
            Infinite <span className="text-yellow-600">Inspiration</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore our curated exhibit of breathtaking AI art pieces, showcasing the boundless potential of human-AI collaboration.
          </p>
        </header>

        {/* Gallery Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedImage(item)}
                className="relative group cursor-pointer overflow-hidden rounded-[48px] shadow-sm hover:shadow-2xl transition-all duration-700 bg-gray-50 border border-black/5 aspect-[4/5]"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end text-white p-8 text-center pb-12">
                   <div className="w-14 h-14 bg-banana rounded-full mb-6 text-gray-900 scale-0 group-hover:scale-100 transition-transform duration-500 flex items-center justify-center shadow-2xl">
                      <Maximize2 size={28} />
                   </div>
                   <h3 className="text-2xl font-black translate-y-4 group-hover:translate-y-0 transition-transform duration-500 leading-tight">{item.title}</h3>
                   <p className="text-xs text-banana font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 mt-2">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>


      {/* Lightbox / Preview Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-gray-950/98 backdrop-blur-3xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.8, opacity: 0 }}
               className="relative max-w-5xl w-full group"
               onClick={(e) => e.stopPropagation()}
             >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="w-full h-auto max-h-[75vh] object-contain rounded-[40px] shadow-2xl border border-white/5"
                />
                
                <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8 px-6">
                  <div className="text-white text-center md:text-left">
                    <h2 className="text-4xl font-black mb-3 tracking-tight">{selectedImage.title}</h2>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <span className="px-5 py-1.5 bg-banana text-gray-900 rounded-full text-xs font-black uppercase tracking-widest">
                        {selectedImage.category}
                      </span>
                      <span className="text-gray-500 text-sm font-medium">Curated by Nano Banana</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <button className="px-10 py-5 bg-white text-gray-900 rounded-full font-black text-sm uppercase tracking-widest hover:bg-banana transition-all shadow-xl active:scale-95">
                       Download art
                    </button>
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="p-5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/10"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



// Utility
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
