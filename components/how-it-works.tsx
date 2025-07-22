"use client"

import { useState } from "react"

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      number: "01",
      title: "tell us what you like",
      description: "share your interests and content sources",
      detail: "add newsletters, podcasts, or websites you already follow",
      icon: "✦"
    },
    {
      number: "02", 
      title: "we fetch and summarize it",
      description: "our ai creates simple, thoughtful recaps",
      detail: "we read through everything and extract the key insights",
      icon: "✧"
    },
    {
      number: "03",
      title: "you get a personal digest", 
      description: "delivered to your inbox",
      detail: "3-5 concise summaries every day, no information overload",
      icon: "✦"
    }
  ]

  return (
    <section className="py-20 opacity-0 animate-slide-up relative">
      {/* Connecting line between steps */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-y-1/2 z-0"></div>
      
      <h2 className="text-3xl mb-8 font-normal lowercase tracking-wide text-[#23272A] relative">
        how it works
        <span className="inline-block ml-3 text-sm text-gray-500 animate-pulse">→</span>
      </h2>
      
      <p className="text-lg text-gray-600 lowercase leading-relaxed mb-12 max-w-2xl">
        we take the content you already care about and make it easier to consume. no new sources, just better summaries.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group space-y-4 hover-lift p-6 rounded-lg border border-gray-200 relative transition-all duration-500"
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            
            {/* Step number with animation */}
            <div className="relative z-10">
              <div className="text-2xl font-light text-gray-500 transition-all duration-300 group-hover:text-[#23272A] group-hover:scale-110">
                {step.number}
              </div>
              <div className="text-lg text-gray-400 transition-all duration-300 group-hover:text-[#23272A] group-hover:translate-x-1">
                {step.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 space-y-2">
              <h3 className="text-lg font-normal lowercase tracking-wide transition-all duration-300 group-hover:tracking-wider">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 lowercase leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                {step.description}
              </p>
              <p className="text-xs text-gray-500 lowercase leading-relaxed">
                {step.detail}
              </p>
            </div>
            
            {/* Hover indicator */}
            <div className={`absolute bottom-0 left-0 h-1 bg-[#23272A] transition-all duration-500 ${
              hoveredStep === index ? 'w-full' : 'w-0'
            }`}></div>
          </div>
        ))}
      </div>
      
      {/* Value proposition */}
      <div className="mt-16 p-8 bg-[#F7F6F3] border border-gray-200 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-50"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-normal lowercase tracking-wide text-[#23272A] mb-4">
            why this works better
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-[#23272A]">✦</span>
                <span className="text-sm lowercase text-gray-700">no new sources to discover</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#23272A]">✦</span>
                <span className="text-sm lowercase text-gray-700">summaries instead of full articles</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-[#23272A]">✦</span>
                <span className="text-sm lowercase text-gray-700">delivered at your preferred frequency</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#23272A]">✦</span>
                <span className="text-sm lowercase text-gray-700">easy to unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-[#23272A] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-[#23272A] opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  )
}
