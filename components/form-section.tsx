"use client"

import { useState } from "react"

export default function FormSection() {
  const [followsContent, setFollowsContent] = useState<string>("")

  return (
    <section id="form-section" className="py-16 border-t border-gray-100">
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl md:text-3xl">create your first digest</h2>
        <p className="text-lg text-gray-600">we'll ask a few quick questions to personalize what you get</p>
      </div>

      <div className="bg-[#F7F6F3] p-8 border border-gray-200">
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm">
              your name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-[#FAF9F6] border border-gray-300 font-mono text-sm"
              placeholder="e.g. alex"
            />
            <p className="text-xs text-gray-500">we'll use this to personalize your digest</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-[#FAF9F6] border border-gray-300 font-mono text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm">what topics interest you most?</label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["technology", "science", "business", "culture", "design", "politics"].map((topic) => (
                <label key={topic} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="border-gray-300" />
                  <span className="text-sm">{topic}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm">do you already follow any newsletters or podcasts?</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="follows-content"
                  value="yes"
                  onChange={(e) => setFollowsContent(e.target.value)}
                  className="border-gray-300"
                />
                <span className="text-sm">yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="follows-content"
                  value="no"
                  onChange={(e) => setFollowsContent(e.target.value)}
                  className="border-gray-300"
                />
                <span className="text-sm">no</span>
              </label>
            </div>
          </div>

          {followsContent === "yes" && (
            <div className="space-y-2">
              <label className="block text-sm">paste any links (substack, spotify, rss, etc)</label>
              <textarea
                className="w-full p-3 bg-[#FAF9F6] border border-gray-300 font-mono text-sm h-24"
                placeholder="https://example.substack.com&#10;https://open.spotify.com/show/..."
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm">how often would you like to receive your digest?</label>
            <select className="w-full p-3 bg-[#FAF9F6] border border-gray-300 font-mono text-sm">
              <option>daily</option>
              <option>3x per week</option>
              <option>weekly</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full h-12 border border-gray-400 px-6 py-2 text-sm transition-colors hover:bg-gray-100"
          >
            create my digest
          </button>
        </form>
      </div>
    </section>
  )
}
