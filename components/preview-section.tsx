"use client"

import Image from "next/image"
import { useState } from "react"

export default function PreviewSection() {
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop')
  const [isHovered, setIsHovered] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(0)

  const sampleArticles = [
    {
      title: "ai developments this week",
      summary: "openai announced a new model focused on long-form content summarization, specifically designed for academic papers and technical documentation. the model can process documents up to 300 pages and create summaries at various detail levels.",
      sources: ["techcrunch", "the verge", "wired"],
      readTime: "4 min read",
      date: "july 16, 2025"
    },
    {
      title: "startup funding roundup",
      summary: "several ai startups secured significant funding this week, with focus on enterprise applications and developer tools. notable rounds include a $50m series b for an mlops platform and a $30m series a for a code generation tool.",
      sources: ["crunchbase", "techcrunch", "pitchbook"],
      readTime: "3 min read", 
      date: "july 15, 2025"
    },
    {
      title: "productivity tools update",
      summary: "major updates to popular productivity tools including notion's new ai features, figma's collaboration improvements, and linear's enhanced project management capabilities.",
      sources: ["product hunt", "techcrunch", "the verge"],
      readTime: "5 min read",
      date: "july 14, 2025"
    }
  ]

  const popularSources = [
    "techcrunch", "the verge", "wired", "product hunt", "crunchbase", 
    "pitchbook", "hacker news", "indie hackers", "makers", "dev.to"
  ]

  return (
    <section className="py-20 opacity-0 animate-slide-up relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 right-20 w-40 h-40 border border-[#23272A] transform rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-[#23272A] transform -rotate-6"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl mb-8 font-normal lowercase tracking-wide text-[#23272A] group">
          your digest, delivered
          <span className="inline-block ml-3 text-sm text-gray-500 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </h2>
        
        <p className="text-lg text-gray-600 lowercase leading-relaxed mb-12 max-w-2xl">
          here's what your personalized digest looks like. we summarize your favorite sources into clean, thoughtful recaps.
        </p>
        
        {/* Article selector */}
        <div className="flex flex-wrap gap-3 mb-8">
          {sampleArticles.map((article, index) => (
            <button
              key={index}
              onClick={() => setSelectedArticle(index)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 lowercase border rounded-lg ${
                selectedArticle === index
                  ? 'bg-[#23272A] text-[#FAF9F6] border-[#23272A]'
                  : 'text-gray-600 border-gray-300 hover:border-[#23272A] hover:text-[#23272A]'
              }`}
            >
              {article.title}
            </button>
          ))}
        </div>
        
        {/* Main preview card */}
        <div 
          className="max-w-2xl mx-auto bg-white border border-gray-300 rounded-lg p-8 relative overflow-hidden group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wide">
              <span>from your tech digest – {sampleArticles[selectedArticle].date}</span>
              <span className="text-gray-400">✦</span>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-normal lowercase tracking-wide transition-all duration-300 group-hover:tracking-wider">
              {sampleArticles[selectedArticle].title}
            </h3>
            
            {/* Content */}
            <p className="text-sm text-gray-700 leading-relaxed lowercase transition-all duration-300 group-hover:text-gray-800">
              {sampleArticles[selectedArticle].summary}
            </p>
            
            {/* Sources */}
            <div className="flex flex-wrap gap-2 pt-2">
              {sampleArticles[selectedArticle].sources.map((source, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full lowercase transition-all duration-300 hover:bg-[#23272A] hover:text-[#FAF9F6]"
                >
                  {source}
                </span>
              ))}
            </div>
            
            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
              <span>summarized from {sampleArticles[selectedArticle].sources.length} sources • {sampleArticles[selectedArticle].readTime}</span>
              <span className="text-gray-400">→</span>
            </div>
          </div>
          
          {/* Hover indicator */}
          <div className={`absolute bottom-0 left-0 h-1 bg-[#23272A] transition-all duration-500 ${
            isHovered ? 'w-full' : 'w-0'
          }`}></div>
        </div>
        
        {/* Contextual info */}
        <div className="mt-8 text-center mb-16">
          <p className="text-sm text-gray-500 lowercase">
            this is just one article from your daily digest. you'll get 3-5 summaries like this every day.
          </p>
        </div>

        {/* Sources section */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-2xl mb-8 font-normal lowercase tracking-wide text-[#23272A] text-center">
            popular sources we summarize
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {popularSources.map((source, index) => (
              <div
                key={index}
                className="group p-4 border border-gray-200 rounded-lg text-center hover-lift relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-sm font-medium lowercase text-gray-700 group-hover:text-[#23272A] transition-colors duration-300">
                    {source}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">newsletter</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 lowercase">
              and many more. you can add any newsletter, podcast, or website you follow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
