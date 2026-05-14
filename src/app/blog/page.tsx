"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Calendar, User, ArrowRight, X, Mail, Github, MessageSquare, CheckCircle2, ChevronLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Generative AI in Professional Design",
    excerpt: "From Midjourney to Stable Diffusion, we explore how professional studios are integrating AI into their high-end design workflows without sacrificing creative control. Discover how 'Nano Banana' techniques are setting new industry standards.",
    author: "Alex Rivera",
    date: "April 14, 2026",
    thumbnail: "/images/blog/design_trend.png",
    readTime: "12 MIN READ",
    category: "Industry",
    content: `
      <p>The landscape of professional design is undergoing its most significant transformation since the invention of the digital tablet. Generative AI is no longer just a toy for hobbyists; it has become a cornerstone of high-end studio workflows. At Nano Banana, we've seen first-hand how top-tier creative agencies are utilizing these tools to push the boundaries of what's possible.</p>
      
      <h3>The Concept Phase Revolution</h3>
      <p>Traditionally, moodboarding and initial concept sketches could take days or even weeks. Today, AI allows designers to iterate through hundreds of visual directions in hours. This doesn't replace the designer's eye; rather, it amplifies it, allowing for a broader exploration of "what if" scenarios before a single pixel is manually polished.</p>
      
      <h3>Maintaining Creative Control</h3>
      <p>The biggest challenge for pros is control. We explore how techniques like ControlNet and IP-Adapter are giving designers pixel-perfect authority over AI outputs. It's not about letting the machine decide; it's about using the machine as a hyper-intelligent brush.</p>
      
      <p>As we move further into 2026, the distinction between "AI art" and "design" will continue to blur, leaving us with a new era of hybrid creativity that is more efficient, more ambitious, and more accessible than ever before.</p>
    `
  },
  {
    id: 2,
    title: "Mastering the Art of Multi-Modal Prompting",
    excerpt: "Learn how to combine image prompts with complex text descriptions to achieve hyper-consistent results. We dive deep into the specific syntax that the pros use to maintain character and style across thousands of generations.",
    author: "Sarah Chen",
    date: "April 12, 2026",
    thumbnail: "/images/blog/prompt_mastery.png",
    readTime: "10 MIN READ",
    category: "Tutorial",
    content: `
      <p>Prompting is often called "the language of the new era." But to truly master AI generation, you must go beyond simple text strings. Multi-modal prompting—the art of combining text, images, and parameters—is the key to professional-grade consistency.</p>
      
      <h3>The Power of Image Weighting</h3>
      <p>Most beginners only use text. Pros use image references to ground the AI's "imagination." By adjusting image weights (--iw), you can decide exactly how much influence a reference photo has on the final output. We break down the math and the aesthetic logic behind these settings.</p>
      
      <h3>Character References (CREF)</h3>
      <p>Consistency has always been AI's Achilles' heel. With the introduction of advanced character reference tools, we can now maintain the same protagonist across an entire graphic novel or advertising campaign. Learn the 'Nano Banana' secret to perfect character persistence.</p>
      
      <p>This guide provides a step-by-step masterclass in building complex, layered prompts that deliver predictable, high-quality results every single time.</p>
    `
  },
  {
    id: 3,
    title: "The Future of 3D Workflows: AI as a Collaborator",
    excerpt: "Generating PBR textures and complex 3D meshes is getting a major boost from generative AI. We look at how 'Nano Banana' methods are helping 3D artists speed up their production times by over 400% through smart automation.",
    author: "Marcus Volkov",
    date: "April 10, 2026",
    thumbnail: "/images/blog/3d_art.png",
    readTime: "8 MIN READ",
    category: "3D Art",
    content: `
      <p>3D art has always been a labor-intensive discipline. From modeling meshes to painting textures, the "grind" is real. However, a new wave of AI-native 3D tools is changing the game, turning the artist from a manual laborer into a high-level curator.</p>
      
      <h3>AI-Driven PBR Texturing</h3>
      <p>Generating physically-based rendering (PBR) textures—normal maps, roughness, and displacement—used to require expensive software and hours of work. Now, AI can generate seamless, high-resolution textures from a single text prompt or reference image, instantly ready for your favorite 3D engine.</p>
      
      <h3>From 2D to 3D Mesh</h3>
      <p>We're on the cusp of "Text-to-Mesh" becoming a production reality. While we're not quite at Pixar levels yet, the ability to generate complex base meshes for background assets is already saving studios thousands of man-hours. Marcus Volkov explains how he integrated these tools into his latest cinematic project.</p>
      
      <p>The future of 3D isn't about the machine doing the work; it's about the machine doing the boring parts, so artists can focus on storytelling and composition.</p>
    `
  },
  {
    id: 4,
    title: "Navigating the Ethics of Artificial Imagination",
    excerpt: "As AI art enters the mainstream, understanding copyright, attribution, and the ethical implications for traditional human artists is more crucial than ever. Our guide explores the path toward a balanced creative future.",
    author: "Elena Martinez",
    date: "April 08, 2026",
    thumbnail: "/images/blog/ethics.png",
    readTime: "15 MIN READ",
    category: "Ethics",
    content: `
      <p>As we stand at the crossroads of technology and tradition, the ethical questions surrounding AI art have never been more pressing. Who owns an AI-generated image? How do we protect the livelihoods of traditional artists while embracing innovation?</p>
      
      <h3>The Ownership Debate</h3>
      <p>The legal landscape is still catching up to the technology. We look at current copyright rulings in the US and EU and what they mean for commercial creators using AI tools. Understanding where you stand legally is essential for any professional creator today.</p>
      
      <h3>Artistic Integrity and Attribution</h3>
      <p>At Nano Banana, we advocate for "Ethical AI." This means being transparent about the use of AI tools and ensuring that the data used to train these models is sourced responsibly. Elena Martinez discusses the concept of "Opt-in" training and how the industry is moving towards more respectable practices.</p>
      
      <p>A balanced future is possible, where AI serves as a partner to human creativity rather than a threat. This article outlines the roadmap for that collaboration.</p>
    `
  },
];

export default function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setIsModalOpen(false);
        setEmail("");
      }, 3000);
    }
  };

  const openBlog = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen px-6 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-banana/10 blur-[150px] -z-10 rounded-full animate-pulse" />
      
      {/* Reading Progress Bar */}
      {selectedPost && (
        <motion.div
           className="fixed top-0 left-0 right-0 h-1.5 bg-banana z-[150] origin-left"
           style={{ scaleX }}
        />
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-24 space-y-6 text-center">
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-tight tracking-tight">
            Creative <span className="text-yellow-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Latest news, deep dives into AI technology, and masterclasses from the creators at Nano Banana.
          </p>
        </header>

        {/* Featured Post (Big) */}
        {!selectedPost && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onClick={() => openBlog(blogPosts[0])}
            className="mb-24 bg-gray-50 rounded-[56px] overflow-hidden group border border-black/5 hover:border-banana/50 hover:shadow-2xl transition-all duration-700 cursor-pointer shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-square overflow-hidden">
                 <img 
                   src={blogPosts[0].thumbnail} 
                   alt={blogPosts[0].title} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:hidden" />
              </div>
              <div className="p-10 lg:p-20 flex flex-col justify-center space-y-8">
                 <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-yellow-700">
                   <span className="px-5 py-1.5 bg-banana rounded-full border border-banana shadow-sm">Featured</span>
                   <span>{blogPosts[0].readTime}</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight tracking-tight">
                   {blogPosts[0].title}
                 </h2>
                 <p className="text-gray-500 text-lg leading-relaxed line-clamp-3 font-medium">
                   {blogPosts[0].excerpt}
                 </p>
                 <div className="flex items-center gap-6 pt-10 border-t border-black/5 text-sm font-bold text-gray-400">
                    <div className="flex items-center gap-2 uppercase tracking-widest"><User size={16} /> {blogPosts[0].author}</div>
                    <div className="flex items-center gap-2 uppercase tracking-widest"><Calendar size={16} /> {blogPosts[0].date}</div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Full Blog Content View */}
        <AnimatePresence mode="wait">
          {selectedPost && (
            <motion.div
              key="full-blog"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mb-32 max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-all font-black text-xs uppercase tracking-widest mb-12 group"
              >
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to insights
              </button>

              <div className="space-y-12">
                <img 
                  src={selectedPost.thumbnail} 
                  className="w-full rounded-[48px] shadow-2xl border border-black/5" 
                  alt={selectedPost.title}
                />
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-yellow-700">
                    <span className="px-5 py-1.5 bg-banana rounded-full border border-banana shadow-sm">{selectedPost.category}</span>
                    <span>{selectedPost.readTime}</span>
                    <span className="ml-auto flex gap-4 text-gray-400">
                       <Share2 size={16} className="cursor-pointer hover:text-gray-900 transition-colors" />
                       <Bookmark size={16} className="cursor-pointer hover:text-gray-900 transition-colors" />
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                    {selectedPost.title}
                  </h1>

                  <div className="flex items-center gap-6 pt-8 border-t border-black/5 text-xs font-black text-gray-400 uppercase tracking-widest">
                    <div className="flex items-center gap-2 text-gray-900"><div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"><User size={14} /></div> {selectedPost.author}</div>
                    <div className="flex items-center gap-2"><Calendar size={16} /> {selectedPost.date}</div>
                  </div>

                  <div 
                    className="prose prose-xl prose-gray max-w-none pt-12 space-y-8 text-gray-600 font-medium leading-relaxed blog-content"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                </div>
              </div>

              {/* Related Posts Seaction */}
              <div className="mt-32 pt-24 border-t border-black/5">
                 <h4 className="text-3xl font-black text-gray-900 mb-12 tracking-tight">More from the Lab</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.filter(p => p.id !== selectedPost.id).slice(0, 2).map((post) => (
                       <div 
                         key={post.id} 
                         onClick={() => openBlog(post)}
                         className="group cursor-pointer space-y-4"
                       >
                          <div className="relative aspect-video rounded-3xl overflow-hidden border border-black/5">
                             <img src={post.thumbnail} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                          </div>
                          <div className="space-y-2 px-2">
                             <span className="text-[10px] font-black text-yellow-700 uppercase tracking-widest">{post.category}</span>
                             <h5 className="text-xl font-black text-gray-900 group-hover:text-yellow-600 transition-colors line-clamp-1">{post.title}</h5>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="mt-24 pt-16 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-black text-gray-900">Did you enjoy this piece?</h4>
                  <p className="text-gray-500 font-medium">Join 50k+ creators who receive our weekly deep-dives.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-12 py-5 bg-gray-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-banana hover:text-gray-900 transition-all shadow-xl"
                >
                  Join the Masterclass
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid for other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.filter(p => !selectedPost || p.id !== selectedPost.id).slice(0, selectedPost ? 2 : undefined).map((post, index) => (
             <motion.div
               key={post.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               onClick={() => openBlog(post)}
               className="group bg-gray-50 p-8 rounded-[40px] border border-black/5 hover:border-banana/50 hover:shadow-2xl transition-all duration-500 flex flex-col h-full shadow-sm cursor-pointer"
             >
               <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-10">
                 <img 
                   src={post.thumbnail} 
                   alt={post.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
               </div>
               <div className="space-y-6 flex-grow flex flex-col px-4">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-yellow-700">
                    <span className="bg-banana/20 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="w-1 h-1 bg-yellow-700 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed line-clamp-3 flex-grow font-medium">
                    {post.excerpt}
                  </p>
                  <div className="pt-10 flex items-center justify-between border-t border-black/5">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{post.date}</span>
                     <div className="flex items-center gap-2 text-yellow-700 font-black text-[10px] tracking-widest group/btn">
                        READ MORE <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                     </div>
                  </div>
               </div>
             </motion.div>
          ))}
        </div>

        {/* Action Button */}
        {!selectedPost && (
          <div className="mt-32 text-center">
             <button 
               onClick={() => setIsModalOpen(true)}
               className="px-12 py-5 bg-gray-900 text-white text-sm uppercase tracking-widest rounded-full font-black hover:bg-banana hover:text-gray-900 transition-all shadow-2xl active:scale-95"
             >
               Explore All Conversations
             </button>
          </div>
        )}
      </div>

      {/* Community Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-950/80 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[48px] overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
              >
                <X size={24} />
              </button>

              <div className="p-12 md:p-16 text-center space-y-10">
                {!isSubscribed ? (
                  <>
                    <div className="space-y-4">
                      <div className="w-20 h-20 bg-banana rounded-3xl mx-auto flex items-center justify-center text-gray-900 mb-8 shadow-xl">
                        <MessageSquare size={36} />
                      </div>
                      <h2 className="text-4xl font-black text-gray-900 tracking-tight">Join the Inner Circle</h2>
                      <p className="text-gray-500 font-medium">
                        Get exclusive early access to prompt engineering masterclasses and our community Discord.
                      </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                          type="email" 
                          placeholder="Your professional email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full pl-16 pr-6 py-5 bg-gray-50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-banana/50 transition-all font-medium"
                        />
                      </div>
                      <button className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-banana hover:text-gray-900 transition-all shadow-xl">
                        Claim Invite
                      </button>
                    </form>

                    <div className="flex items-center justify-center gap-6 pt-4">
                      <button className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-bold text-xs uppercase tracking-widest">
                        <Github size={18} /> GitHub
                      </button>
                      <div className="w-1 h-1 bg-gray-200 rounded-full" />
                      <button className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-bold text-xs uppercase tracking-widest">
                        <MessageSquare size={18} /> Discord
                      </button>
                    </div>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 space-y-8"
                  >
                    <div className="w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white shadow-2xl">
                      <CheckCircle2 size={48} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-black text-gray-900">You're on the list!</h2>
                      <p className="text-gray-500 mt-4 font-medium">Check your inbox for the secret invite link.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h3 {
          font-size: 2rem;
          font-weight: 900;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
        }
        .blog-content p {
          color: #4b5563;
          line-height: 2;
        }
      ` }} />
    </div>
  );
}
