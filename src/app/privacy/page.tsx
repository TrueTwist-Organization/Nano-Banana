"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-all font-black text-xs uppercase tracking-widest mb-12 group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <header className="mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">Privacy <span className="text-yellow-600">Policy</span></h1>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Last Updated: April 14, 2026</p>
        </header>

        <div className="prose prose-xl prose-gray max-w-none space-y-12 text-gray-600 font-medium leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight border-b-2 border-banana inline-block pb-2">1. Information We Collect</h2>
            <p>We collect minimal information necessary to provide you with our services and community features. This includes:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Email addresses for newsletter subscriptions.</li>
              <li>Account information if you choose to join our community.</li>
              <li>Usage data to help us improve the platform's performance and design.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight border-b-2 border-banana inline-block pb-2">2. How We Use Your Data</h2>
            <p>Your data is used solely to enhance your experience on our platform. We never sell your personal information to third parties. Our usage includes:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Personalizing your prompt discovery experience.</li>
              <li>Sending periodic updates about new tutorials and features.</li>
              <li>Analyzing traffic patterns to optimize layout and accessibility.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight border-b-2 border-banana inline-block pb-2">3. Cookies and Analytics</h2>
            <p>We use standard cookies to remember your preferences and analyze how you interact with our content. This helps us ensure that the most popular segments of Nano Banana are always high-performing.</p>
          </section>

          <section className="space-y-6 border-t border-black/5 pt-12 mt-20">
            <p className="text-sm text-gray-400 italic">For any questions regarding your privacy, please reach out via our contact page at <span className="text-yellow-600 font-bold">your-email@example.com</span></p>
          </section>
        </div>
      </div>
    </div>
  );
}
