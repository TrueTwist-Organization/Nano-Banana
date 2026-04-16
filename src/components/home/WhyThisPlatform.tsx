"use client";

import React from "react";
import { motion } from "framer-motion";
import { Library, BookOpen, Camera, Users } from "lucide-react";

const features = [
  {
    icon: <Library className="text-purple" size={32} />,
    title: "Prompt Library",
    description: "Access thousands of curated high-quality prompts categorized by style and purpose.",
    color: "purple",
  },
  {
    icon: <BookOpen className="text-blue" size={32} />,
    title: "Step-By-Step Tutorials",
    description: "Learn the art of prompting from experts with our detailed guides and learning paths.",
    color: "blue",
  },
  {
    icon: <Camera className="text-pink" size={32} />,
    title: "Visual Inspiration",
    description: "Browse curated galleries of AI-generated art to spark your next big creative project.",
    color: "pink",
  },
  {
    icon: <Users className="text-banana" size={32} />,
    title: "Artist Community",
    description: "Connect with thousands of AI artists and creators from all around the world.",
    color: "banana",
  },
];

export default function WhyThisPlatform() {
  return (
    <section className="py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Built for the <span className="text-gradient">Next Gen</span> of Artists
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to master AI art and stay ahead in the rapidly evolving world of prompt engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-[40px] border border-black/5 hover:border-banana/50 transition-all duration-300 relative group shadow-sm bg-white"
            >
              <div className="mb-6 p-4 rounded-2xl bg-banana/10 inline-block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

