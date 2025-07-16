import Image from "next/image"

export default function PreviewSection() {
  return (
    <section className="py-16 border-t border-gray-100">
      <h2 className="text-2xl md:text-3xl mb-8">see what it looks like</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h3 className="text-lg">desktop view</h3>
          <div className="border border-gray-200 overflow-hidden bg-white">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Desktop digest preview"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg">mobile view</h3>
          <div className="border border-gray-200 overflow-hidden bg-white max-w-[280px] mx-auto">
            <Image
              src="/placeholder.svg?height=500&width=280"
              width={280}
              height={500}
              alt="Mobile digest preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border border-gray-200">
        <div className="space-y-4">
          <div className="text-xs text-gray-500 uppercase tracking-wide">from your tech digest – july 16, 2025</div>
          <h3 className="text-xl font-normal">ai developments this week</h3>
          <p className="text-gray-700 leading-relaxed">
            openai announced a new model focused on long-form content summarization, specifically designed for academic
            papers and technical documentation. the model can process documents up to 300 pages and create summaries at
            various detail levels. meanwhile, anthropic released claude 3.5, showing significant improvements in
            reasoning tasks.
          </p>
          <div className="text-sm text-gray-500 pt-2 border-t border-gray-100">
            summarized from 3 sources • 4 min read
          </div>
        </div>
      </div>
    </section>
  )
}
