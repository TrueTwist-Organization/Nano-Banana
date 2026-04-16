import React from "react";
import Link from "next/link";
import { Send, Code, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pb-12 pt-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Brand */}
        <div className="max-w-xs space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-banana rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Nano Banana</span>
          </Link>
          <p className="text-gray-500 leading-relaxed text-sm">
            Curating the finest AI prompts for image generation, high-end 3D art, and cinematic masterpieces.
          </p>
          <div className="flex items-center gap-4 text-gray-400 pt-4">
            <Link href="#" className="hover:text-yellow-600 transition-colors"><Send size={20} /></Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors"><Code size={20} /></Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors"><Globe size={20} /></Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors"><MessageCircle size={20} /></Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="space-y-6">
            <h4 className="text-gray-900 font-semibold text-base uppercase tracking-widest">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/prompts" className="hover:text-yellow-600">Prompts</Link></li>
              <li><Link href="/gallery" className="hover:text-yellow-600">Gallery</Link></li>
              <li><Link href="/tutorials" className="hover:text-yellow-600">Tutorials</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-gray-900 font-semibold text-base uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-yellow-600">About</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-600">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-600">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-6 hidden sm:block">
            <h4 className="text-gray-900 font-semibold text-base uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-yellow-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-yellow-600">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-yellow-600">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">
          © 2026 Nano Banana Prompt. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Built with Next.js, Framer Motion, and AI expertise.
        </p>
      </div>
    </footer>
  );
}

