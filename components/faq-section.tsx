"use client"

import { useState } from "react"

export default function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "do i need to log in?",
      answer: "nope — just your email and content preferences"
    },
    {
      question: "is this free?",
      answer: "yep — totally free for now"
    },
    {
      question: "can i add my own stuff?",
      answer: "yes — paste links to any newsletter or podcast"
    },
    {
      question: "how is this different?",
      answer: "we summarize what you already follow, not recommend new stuff"
    }
  ]

  return (
    <section className="py-20 opacity-0 animate-slide-up relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#23272A] transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#23272A] transform -rotate-6"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 border border-[#23272A] transform rotate-45"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl mb-12 font-normal lowercase tracking-wide text-[#23272A] group">
          some quick answers
          <span className="inline-block ml-3 text-sm text-gray-500 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group card-hover p-6 rounded-lg border border-gray-200 relative overflow-hidden cursor-pointer transition-all duration-500"
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-normal lowercase tracking-wide transition-all duration-300 group-hover:tracking-wider">
                    {faq.question}
                  </h3>
                  <span className={`text-gray-400 transition-transform duration-300 ${
                    expandedFaq === index ? 'rotate-45' : 'rotate-0'
                  }`}>
                    ✦
                  </span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedFaq === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-sm text-gray-600 lowercase leading-relaxed pb-2">
                    {faq.answer}
                  </p>
                </div>
                
                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-[#23272A] transition-all duration-500 ${
                  expandedFaq === index ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-2 h-2 bg-[#23272A] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-[#23272A] opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  )
}
