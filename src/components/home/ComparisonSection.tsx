"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, MoveHorizontal } from "lucide-react";

export default function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-10 order-2 lg:order-1">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-banana/10 text-yellow-700 text-xs font-black uppercase tracking-[0.2em] border border-banana/20"
            >
              <Sparkles size={14} /> The Nano Banana Edge
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight"
            >
              Why settle for <span className="text-gray-400">Average?</span>
            </motion.h2>
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl"
            >
              Most tools give you generic, blurry results. Nano Banana brings 8K clarity, hyper-realistic textures, and soul into every pixel. It's not just AI — it's Art.
            </motion.p>
            
            <ul className="space-y-6">
               {[
                 "Industry-leading 8K native resolution",
                 "Exclusive 'Banana Texture' algorithms",
                 "10x more detail than standard generic models",
                 "Crystal clear edges and perfect lighting"
               ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-gray-900 font-bold"
                  >
                    <div className="w-6 h-6 rounded-full bg-banana flex items-center justify-center text-[10px] font-black">✓</div>
                    {item}
                  </motion.li>
               ))}
            </ul>

            <button className="px-10 py-5 bg-gray-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-banana hover:text-gray-900 transition-all shadow-xl">
               See the Difference
            </button>
          </div>

          {/* Slider Container */}
          <div className="order-1 lg:order-2">
            <div 
              ref={containerRef}
              className="relative aspect-square md:aspect-[4/5] lg:aspect-[3/4] rounded-[56px] overflow-hidden cursor-ew-resize border-4 border-gray-50 shadow-2xl group"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
              {/* Nano Banana Image (Target) */}
              <div className="absolute inset-0">
                <img 
                  src="/images/comparison/nano.png" 
                  className="w-full h-full object-cover" 
                  alt="Nano Banana Quality"
                />
                <div className="absolute top-10 right-10 px-6 py-2 bg-banana rounded-full text-gray-900 text-[10px] font-black tracking-widest uppercase shadow-xl z-20">
                  NANO BANANA
                </div>
              </div>

              {/* Generic AI Image (Source) */}
              <div 
                className="absolute inset-0 z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img 
                  src="/images/comparison/generic.png" 
                  className="w-full h-full object-cover grayscale-[0.5]" 
                  alt="Generic AI Quality"
                />
                <div className="absolute top-10 left-10 px-6 py-2 bg-gray-800 text-white rounded-full text-[10px] font-black tracking-widest uppercase shadow-xl">
                  OTHER TOOLS
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                 <div className="w-12 h-12 bg-white rounded-full border-4 border-banana flex items-center justify-center shadow-2xl group-active:scale-95 transition-transform">
                    <MoveHorizontal size={24} className="text-gray-900" />
                 </div>
              </div>

              {/* Instructions Overlay */}
              <div className="absolute inset-x-0 bottom-10 flex justify-center z-30 pointer-events-none">
                 <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full text-white text-[10px] font-black tracking-widest uppercase border border-white/10 animate-bounce">
                    Drag to Compare
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
