"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, Share2, Download, Maximize2, X, Film } from "lucide-react";
import { videos } from "@/data/mock";

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [isBuffering, setIsBuffering] = useState(true);

  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-banana/20 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-banana/10 text-yellow-700 text-xs font-bold uppercase tracking-widest border border-banana/20">
            <Film size={14} /> AI Motion Lab
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-tight tracking-tight">
            Cinematic <span className="text-yellow-600">Motion</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-medium">
            Explore the future of storytelling. High-fidelity AI generated video sequences, from hyper-realism to pure abstract fantasy.
          </p>
        </header>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-50 rounded-[48px] overflow-hidden border border-black/5 hover:border-banana/50 transition-all duration-700 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-banana rounded-full flex items-center justify-center text-gray-900 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Play fill="currentColor" size={32} />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-[10px] font-black tracking-widest uppercase">
                  {video.duration} SEC
                </div>
              </div>

              <div className="p-10 space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-yellow-700">
                  <span className="bg-banana/20 px-3 py-1 rounded-full">{video.category}</span>
                  <span className="w-1 h-1 bg-yellow-700 rounded-full" />
                  <span>4K RESOLUTION</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 group-hover:text-yellow-600 transition-colors tracking-tight">
                  {video.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-32 p-16 bg-gray-900 rounded-[56px] text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-banana/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight relative z-10">Want to generate your own?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto relative z-10">
            Our Video AI masterclass covers everything from prompting frameworks to multi-scene consistency.
          </p>
          <button className="px-12 py-5 bg-banana text-gray-900 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl relative z-10">
            Start Video Mastery
          </button>
        </div>
      </div>

      {/* Video Player Modal (Mock) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-gray-950/98 backdrop-blur-3xl flex items-center justify-center p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-black rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                <video
                  key={selectedVideo.videoUrl}
                  autoPlay
                  muted
                  playsInline
                  loop
                  controls
                  className="w-full h-full object-cover"
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Controls UI Mock (Overlaid on top of real controls or replacing them) */}
                <div className="absolute top-6 left-6 pointer-events-none">
                  <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> LIVE 4K STREAM
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8 px-6">
                <div className="text-white text-center md:text-left">
                  <h2 className="text-4xl font-black mb-3 tracking-tight">{selectedVideo.title}</h2>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <span className="px-5 py-1.5 bg-banana text-gray-900 rounded-full text-xs font-black uppercase tracking-widest">
                      {selectedVideo.category}
                    </span>
                    <span className="text-gray-500 text-sm font-medium">Generated via Nano Banana Lab</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <button className="px-10 py-5 bg-white text-gray-900 rounded-full font-black text-sm uppercase tracking-widest hover:bg-banana transition-all shadow-xl active:scale-95">
                    Download 4K
                  </button>
                  <button
                    onClick={() => setSelectedVideo(null)}
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
