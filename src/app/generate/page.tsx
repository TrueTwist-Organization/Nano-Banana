"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Download, Share2, RefreshCw, Send, Zap } from "lucide-react";
import { prompts } from "@/data/mock";
import { cn } from "@/lib/utils";

function GenerateContent() {
  const searchParams = useSearchParams();
  const promptId = searchParams.get("promptId");
  
  const [promptText, setPromptText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (promptId) {
      const selectedPrompt = prompts.find(p => p.id === Number(promptId));
      if (selectedPrompt) {
        setPromptText(selectedPrompt.text);
      }
    }
  }, [promptId]);

  const handleGenerate = () => {
    if (!promptText.trim()) return;
    
    setIsGenerating(true);
    setGeneratedImage(null);
    setProgress(0);

    // Simulate generation process
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    setTimeout(() => {
      // Find matching prompt in mock data to show the correct image
      const matchingPrompt = prompts.find(p => p.text === promptText || p.id === Number(promptId));
      setGeneratedImage(matchingPrompt ? matchingPrompt.image : "/images/gallery/abstract.png");
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Input Controls */}
        <div className="lg:col-span-5 space-y-8">
          <header className="space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-banana/10 text-yellow-700 text-[10px] font-black uppercase tracking-widest border border-banana/20">
               <Zap size={12} fill="currentColor" /> Nano Banana Lab
             </div>
             <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
               Create <br /> <span className="text-yellow-600">Masterpieces</span>
             </h1>
          </header>

          <div className="glass p-8 rounded-[40px] border border-black/5 space-y-6 shadow-sm">
             <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Reference Image (Optional)</label>
                <div className="w-full h-32 border-2 border-dashed border-gray-100 rounded-[32px] flex flex-col items-center justify-center gap-2 hover:border-banana/50 transition-colors cursor-pointer bg-gray-50/50 group">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 group-hover:text-yellow-600 transition-colors shadow-sm">
                      <Download size={20} className="rotate-180" />
                   </div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">Drag your face here</p>
                </div>
             </div>

             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Text Prompt</label>
                <textarea 
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Describe your vision..."
                  className="w-full h-48 p-6 bg-gray-50 border border-black/5 rounded-[32px] focus:outline-none focus:ring-2 focus:ring-banana/50 transition-all font-medium text-sm leading-relaxed"
                />
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Aspect Ratio</label>
                   <select className="w-full p-4 bg-gray-50 border border-black/5 rounded-2xl font-bold text-xs appearance-none cursor-pointer">
                      <option>16:9 Cinematic</option>
                      <option>9:16 Vertical</option>
                      <option>1:1 Square</option>
                      <option>4:5 Portrait</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Model Version</label>
                   <select className="w-full p-4 bg-gray-50 border border-black/5 rounded-2xl font-bold text-xs appearance-none cursor-pointer">
                      <option>Nano Banana v4.0</option>
                      <option>Banana Turbo (Fast)</option>
                      <option>Legacy v3.2</option>
                   </select>
                </div>
             </div>

             <button 
               onClick={handleGenerate}
               disabled={isGenerating || !promptText}
               className={cn(
                 "w-full py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl",
                 isGenerating || !promptText 
                 ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                 : "bg-gray-900 text-white hover:bg-banana hover:text-gray-900 active:scale-95"
               )}
             >
               {isGenerating ? (
                 <>
                   <RefreshCw size={20} className="animate-spin" />
                   Generating... {progress}%
                 </>
               ) : (
                 <>
                   <Sparkles size={20} />
                   Ignite Generation
                 </>
               )}
             </button>
          </div>
          
          <div className="p-6 rounded-[32px] bg-yellow-50 border border-banana/20">
             <p className="text-xs text-yellow-800 font-medium leading-relaxed">
               <span className="font-black underline mr-2">PRO TIP:</span> 
               Adding keywords like "Octane Render" or "Unreal Engine 5" helps in achieving hyper-realistic lighting.
             </p>
          </div>
        </div>

        {/* Right Side: Output Display */}
        <div className="lg:col-span-7">
          <div className={cn(
            "relative aspect-square md:aspect-[4/5] rounded-[56px] overflow-hidden border-4 border-gray-50 shadow-2xl transition-all duration-700",
            isGenerating ? "scale-[0.98] blur-sm grayscale-[0.5]" : "scale-100"
          )}>
            {/* Background Placeholder */}
            <div className="absolute inset-0 bg-gray-50 flex items-center justify-center -z-10">
               <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center text-gray-200 border border-black/5 shadow-inner">
                     <Sparkles size={40} />
                  </div>
                  <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Awaiting Your Spark</p>
               </div>
            </div>

            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 backdrop-blur-[2px]"
                >
                  <div className="w-full h-full relative">
                     {/* Scanning Line Effect */}
                     <motion.div 
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-banana to-transparent z-20 shadow-[0_0_20px_#FFE242]"
                     />
                     {/* Random Noise/Static Glimmers */}
                     <div className="absolute inset-0 overflow-hidden opacity-20">
                        {[...Array(20)].map((_, i) => (
                           <motion.div 
                             key={i}
                             initial={{ opacity: 0 }}
                             animate={{ 
                               opacity: [0, 1, 0],
                               x: Math.random() * 100 + "%",
                               y: Math.random() * 100 + "%"
                             }}
                             transition={{ duration: 0.5, repeat: Infinity, delay: Math.random() * 2 }}
                             className="w-1 h-1 bg-white rounded-full absolute"
                           />
                        ))}
                     </div>
                  </div>
                </motion.div>
              ) : generatedImage ? (
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img 
                    src={generatedImage} 
                    className="w-full h-full object-cover" 
                    alt="Generated Art"
                  />
                  
                  {/* Controls Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
                     <div className="flex gap-3">
                        <button className="p-4 bg-white text-gray-900 rounded-full hover:bg-banana transition-colors shadow-2xl">
                           <Download size={20} />
                        </button>
                        <button className="p-4 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors border border-white/10 shadow-2xl">
                           <Share2 size={20} />
                        </button>
                     </div>
                     <span className="text-[10px] font-black text-white uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        8K Ultra HD · Nano Banana Lab
                     </span>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          
          <div className="mt-8 flex justify-center gap-12 text-gray-400">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-widest">Servers Online</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest">Speed: 2.1s</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest">Quality: Studio Grade</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function GeneratePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateContent />
    </Suspense>
  );
}
