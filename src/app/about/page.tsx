"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Leaf, Sparkles } from "lucide-react";

const sections = [
  {
    icon: <Rocket className="text-yellow-600" size={40} />,
    title: "Our Mission",
    description: "To bridge the gap between human intuition and artificial intelligence, providing the world with the most advanced creative tools to unlock the next era of artistic expression.",
  },
  {
    icon: <Target className="text-yellow-600" size={40} />,
    title: "Our Vision",
    description: "To lead the global creative revolution by establishing a sustainable, ethical, and high-performance AI ecosystem where every dreamer can become a digital master.",
  },
];

const values = [
  {
    icon: <Sparkles className="text-yellow-600" />,
    title: "Unmatched Quality",
    description: "Every prompt and image in our library undergoes a rigorous selection process to ensure only the best make it to you.",
  },
  {
    icon: <Leaf className="text-yellow-600" />,
    title: "Ethical AI",
    description: "We believe in the responsible use of AI, respecting artistic integrity and encouraging ethical creative practices.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-banana/10 blur-[200px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-banana/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <section className="mb-32 space-y-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-24 h-24 bg-banana rounded-3xl mx-auto flex items-center justify-center shadow-2xl relative"
          >
             <span className="text-gray-900 font-extrabold text-4xl">N</span>
             <div className="absolute inset-0 bg-white/20 blur-xl -z-10 rounded-full" />
          </motion.div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-tight tracking-tight">
              We are <span className="text-yellow-600">Nano Banana</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Started as a community project, Nano Banana has grown into the leading platform for AI prompting, offering a bridge between complex algorithms and pure human imagination.
            </p>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-48">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-12 rounded-[48px] border border-black/5 space-y-8 group hover:border-banana/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
               <div className="p-6 bg-white rounded-3xl inline-block group-hover:scale-110 transition-transform shadow-sm border border-black/5">
                 {section.icon}
               </div>
               <h2 className="text-4xl font-black text-gray-900 tracking-tight">{section.title}</h2>
               <p className="text-gray-500 text-lg leading-relaxed font-medium">
                 {section.description}
               </p>
            </motion.div>
          ))}
        </section>

        {/* Core Values */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-black text-gray-900 leading-tight tracking-tight">What sets us apart?</h2>
            <p className="text-gray-500 leading-relaxed font-medium">
              We don't just provide prompts; we provide the knowledge behind them. Our commitment to quality and education is what makes us unique.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 p-10 rounded-[40px] border border-black/5 border-l-banana border-l-4 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  {v.icon}
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">{v.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
