"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentFrequency, setCurrentFrequency] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const frequencies = ["daily", "weekly", "monthly"]

  useEffect(() => {
    const typeWriter = async () => {
      setIsTyping(true)
      const currentFreq = frequencies[currentFrequency]
      setDisplayText("")
      
      for (let i = 0; i < currentFreq.length; i++) {
        setDisplayText(currentFreq.slice(0, i + 1))
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      
      setIsTyping(false)
    }

    typeWriter()
  }, [currentFrequency])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrequency((prev) => (prev + 1) % frequencies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-32 opacity-0 animate-fade-in relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#23272A] transform rotate-12 transition-transform duration-1000 hover:rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#23272A] transform -rotate-6 transition-transform duration-1000 hover:rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#23272A] transform rotate-45 transition-transform duration-1000 hover:-rotate-45"></div>
      </div>
      
      <div className="space-y-8 relative z-10">
        <div className="group">
          <h1 
            className="text-5xl md:text-6xl font-normal lowercase tracking-wide text-[#23272A] leading-tight transition-all duration-500 group-hover:tracking-wider"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            your personal digest
            <span className={`inline-block ml-2 transition-all duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`}>
              ✦
            </span>
          </h1>
        </div>
        
        <div className="space-y-4">
          <p className="text-lg max-w-2xl text-gray-700 lowercase leading-relaxed animate-slide-up">
            a curated newsletter with all the stuff you care about that arrives to your inbox{" "}
            <span className="inline-block min-w-[120px] font-medium text-[#23272A] relative">
              {displayText}
              <span className={`inline-block w-0.5 h-5 bg-[#23272A] ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
            </span>
          </p>
        </div>
        
        <div className="pt-6 animate-slide-up space-y-4">
          <Link
            href="#form-section"
            className="group inline-flex h-12 items-center border-2 border-[#23272A] px-8 py-3 text-sm font-medium transition-all duration-500 hover:bg-[#23272A] hover:text-[#FAF9F6] focus-ring lowercase relative overflow-hidden"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              customize your first digest →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#23272A] to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500 lowercase">
            <div className="flex items-center space-x-2">
              <span>✦</span>
              <span>free forever</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✦</span>
              <span>no login required</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✦</span>
              <span>unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
