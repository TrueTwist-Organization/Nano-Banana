"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import Link from "next/link";

const images = [
  "/images/home_gallery/art_1.png",
  "/images/home_gallery/art_2.png",
  "/images/home_gallery/art_3.png",
  "/images/home_gallery/art_4.png",
];



export default function GalleryPreview() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
             <h2 className="text-4xl font-bold text-gray-900">Infinite <span className="text-yellow-600">Inspiration</span></h2>
             <p className="text-gray-500 max-w-lg">A community-driven gallery of artistic excellence.</p>
          </div>
          <Link href="/gallery" className="text-gray-500 hover:text-gray-900 flex items-center gap-2 group transition-colors">
            View full gallery <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid - 1 Row, 3 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.slice(0, 3).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/5 aspect-[4/5]"
            >
              <img 
                src={image} 
                alt={`Gallery Preview ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="p-3 bg-banana rounded-full w-fit mb-3 text-gray-900">
                    <Maximize2 size={24} />
                 </div>
                 <p className="text-white font-bold text-xl">View in Gallery</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
