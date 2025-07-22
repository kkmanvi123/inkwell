"use client"

import React, { useState, useEffect } from "react"

export default function FormSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('form-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="form-section" className="py-20 opacity-0 animate-slide-up relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 right-10 w-24 h-24 border border-[#23272A] transform rotate-45 transition-transform duration-1000 hover:rotate-90"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border border-[#23272A] transform -rotate-12 transition-transform duration-1000 hover:rotate-12"></div>
        <div className="absolute top-1/3 left-1/2 w-8 h-8 border border-[#23272A] transform rotate-90 transition-transform duration-1000 hover:-rotate-90"></div>
      </div>
      
      <div className="relative z-10">
        <div className="space-y-8 mb-12">
          <div className="group">
            <h2 className="text-3xl font-normal lowercase tracking-wide text-[#23272A] transition-all duration-500 group-hover:tracking-wider">
              customize your first digest
              <span className="inline-block ml-3 text-sm text-gray-500 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </h2>
          </div>
          
          <div className="relative">
            <p className="text-lg text-gray-600 lowercase leading-relaxed transition-all duration-300">
              you'll receive an email confirming your signup and start receiving newsletters tomorrow.
            </p>
            {/* Animated underline */}
            <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#23272A] transition-all duration-700 ease-out group-hover:w-full"></div>
          </div>
        </div>
        
        <div 
          className="bg-[#F7F6F3] p-8 rounded-lg card-hover border border-gray-200 relative overflow-hidden group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#23272A] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#23272A] opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="relative z-10">
            <iframe
              src="https://tally.so/r/nGOrxp"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Inkwell Signup Form"
              className="rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Hover indicator */}
          <div className={`absolute bottom-0 left-0 h-1 bg-[#23272A] transition-all duration-500 ${
            isHovered ? 'w-full' : 'w-0'
          }`}></div>
        </div>
        
        {/* Success message animation */}
        {isVisible && (
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="flex items-center space-x-2 text-green-800">
              <span className="text-sm">✦</span>
              <span className="text-sm lowercase">form loaded successfully</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
