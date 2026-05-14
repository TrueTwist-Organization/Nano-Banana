"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-all font-black text-xs uppercase tracking-widest mb-12 group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <header className="mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">Legal <span className="text-yellow-600">Disclaimer</span></h1>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Last Updated: April 14, 2026</p>
        </header>

        <div className="prose prose-xl prose-gray max-w-none space-y-12 text-gray-600 font-medium leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight border-b-2 border-banana inline-block pb-2">Guidelines and Sourcing</h2>
            <p>This platform and its content are created following the official guidelines and prompt engineering frameworks provided by <strong>Nano Banana</strong>. The images and AI sequences shown are direct results of the Nano Banana creative lab methodologies.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight border-b-2 border-banana inline-block pb-2">Role of the Platform</h2>
            <p>We function solely as a showcase for Nano Banana tools. While we maintain this site, the underlying AI logic, prompt structures, and visual consistency are all part of the Nano Banana ecosystem. All liability regarding the AI outputs remains with the third-party providers as per Nano Banana's original terms.</p>
          </section>

          <section className="space-y-6 border-t border-black/5 pt-12 mt-20">
            <p className="text-sm text-gray-400 italic">This disclaimer clarifies that <strong>Nano Banana</strong> is the authoritative source of the creative knowledge presented here, and the platform is built to showcase their excellence.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
