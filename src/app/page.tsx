import Hero from "@/components/home/Hero";
import FeaturedPrompts from "@/components/home/FeaturedPrompts";
import WhyThisPlatform from "@/components/home/WhyThisPlatform";
import ComparisonSection from "@/components/home/ComparisonSection";
import TutorialPreview from "@/components/home/TutorialPreview";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedPrompts />
      <WhyThisPlatform />
      <ComparisonSection />
      <TutorialPreview />
      <GalleryPreview />
      
      {/* Community / Showcase Section (Inline for now) */}
      <section className="py-24 px-6 bg-[#030712] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 underline decoration-banana decoration-4 underline-offset-8">
            <h2 className="text-3xl font-bold text-white">Loved by Creators Worldwide</h2>
          </div>
          
          <div className="flex gap-8 animate-infinite-scroll">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="min-w-[300px] glass p-6 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-400 italic mb-4">
                  "Nano Banana has completely changed my workflow. The prompts are top-notch and the community is incredible!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple to-pink rounded-full" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Artist {i}</h4>
                    <p className="text-xs text-gray-500">AI Creator</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
