"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-banana/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center space-y-6">
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tight">
            Get in <span className="text-yellow-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Have a question about a prompt? Want to collaborate on a cinematic project? We're here to help.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            {[
              { icon: <Mail />, title: "Email Us", detail: "hello@nanobanana.com", desc: "For general inquiries and support." },
              { icon: <MessageSquare />, title: "Community", detail: "@nanobanana_ai", desc: "Join our discord or follow us on socials." },
              { icon: <MapPin />, title: "Studio", detail: "Remote First", desc: "Based globally, creating anywhere." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-14 h-14 bg-banana rounded-2xl flex items-center justify-center text-gray-900 shadow-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight">{item.title}</h3>
                  <p className="text-yellow-600 font-bold mb-1">{item.detail}</p>
                  <p className="text-gray-400 text-sm font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 p-10 md:p-16 rounded-[48px] border border-black/5 shadow-sm relative overflow-hidden"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-banana/50 transition-all font-medium" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-banana/50 transition-all font-medium" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Message</label>
                    <textarea 
                      rows={6}
                      required
                      placeholder="Tell us about your project..."
                      className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-banana/50 transition-all font-medium resize-none" 
                    />
                  </div>
                  <button className="flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-banana hover:text-gray-900 transition-all shadow-xl active:scale-95">
                    Send Message <Send size={18} />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-6"
                >
                   <div className="w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white shadow-2xl mb-8">
                     <CheckCircle2 size={48} />
                   </div>
                   <h2 className="text-4xl font-black text-gray-900">Message Received!</h2>
                   <p className="text-gray-500 font-medium max-w-sm mx-auto leading-relaxed">
                     Thanks for reaching out! Our team of curators will get back to you within 24 hours.
                   </p>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="text-yellow-600 font-black text-sm uppercase tracking-widest hover:underline"
                   >
                     Send another message
                   </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
