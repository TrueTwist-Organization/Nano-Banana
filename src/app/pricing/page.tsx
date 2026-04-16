"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Star } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    icon: <Star className="text-gray-400" size={24} />,
    price: "$0",
    description: "Perfect for hobbyists and explorers.",
    features: [
      "Access to public prompt library",
      "5 daily high-res downloads",
      "Community Discord access",
      "Standard quality images"
    ],
    buttonText: "Start Exploring",
    highlight: false
  },
  {
    name: "Pro",
    icon: <Zap className="text-yellow-600" size={24} />,
    price: "$29",
    description: "For professionals building the future.",
    features: [
      "Unlimited prompt access",
      "100+ Pro-only masterclasses",
      "Commercial usage license",
      "8K Ultra-HD downloads",
      "Priority AI rendering"
    ],
    buttonText: "Go Pro",
    highlight: true
  },
  {
    name: "Studio",
    icon: <Crown className="text-purple-600" size={24} />,
    price: "$99",
    description: "Custom solutions for creative agencies.",
    features: [
      "Everything in Pro",
      "API access for workflows",
      "Custom style training",
      "Dedicated account manager",
      "Early access to new models"
    ],
    buttonText: "Contact Sales",
    highlight: false
  }
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-banana/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-banana/10 text-yellow-700 text-xs font-black uppercase tracking-widest border border-banana/20 mb-4"
          >
            Flexible Plans
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-tight tracking-tight">
            Creative <span className="text-yellow-600">Freedom</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Choose the perfect plan for your creative journey. Simple pricing, no hidden fees, and infinite possibilities.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[56px] border ${
                plan.highlight 
                ? "bg-gray-950 text-white border-yellow-500/50 shadow-2xl scale-105 z-10" 
                : "bg-gray-50 text-gray-900 border-black/5"
              } flex flex-col h-full group`}
            >
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-yellow-500 text-gray-900 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                  Most Loved
                </div>
              )}
              
              <div className="mb-8 space-y-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plan.highlight ? "bg-white/10" : "bg-white"} shadow-sm`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight">{plan.name}</h3>
                  <p className={`${plan.highlight ? "text-gray-400" : "text-gray-500"} font-medium mt-2`}>{plan.description}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`${plan.highlight ? "text-gray-500" : "text-gray-400"} text-sm font-bold uppercase tracking-widest`}>/ Month</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? "bg-yellow-500 text-gray-900" : "bg-banana text-gray-900"}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className={`text-sm font-medium ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={plan.name === "Studio" ? "/contact" : "/prompts"}
                className={`w-full py-5 rounded-3xl font-black text-sm uppercase tracking-widest text-center transition-all ${
                  plan.highlight
                  ? "bg-yellow-500 text-gray-900 hover:bg-white hover:scale-105"
                  : "bg-gray-900 text-white hover:bg-banana hover:text-gray-900"
                } shadow-xl active:scale-95`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section Preview */}
        <div className="mt-32 p-16 bg-gray-50 rounded-[48px] border border-black/5 text-center space-y-8">
           <h2 className="text-3xl font-black text-gray-900 tracking-tight">Still have questions?</h2>
           <p className="text-gray-500 font-medium max-w-xl mx-auto">
             Our team is always happy to help you find the right setup for your team. From custom enterprise licensing to one-on-one strategy sessions.
           </p>
           <button className="px-10 py-4 bg-white text-gray-900 rounded-full font-black text-xs uppercase tracking-widest hover:bg-banana transition-all border border-black/5 shadow-sm">
             Chat with an Expert
           </button>
        </div>
      </div>
    </div>
  );
}
