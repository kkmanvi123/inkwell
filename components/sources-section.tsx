export default function SourcesSection() {
  return (
    <section className="py-16 border-t border-gray-100">
      <h2 className="text-2xl md:text-3xl mb-8">what we include</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        {["substack", "spotify podcasts", "techcrunch", "nyt", "rss feeds"].map((source) => (
          <div key={source} className="px-4 py-2 bg-[#F7F6F3] border border-gray-200 text-sm">
            {source}
          </div>
        ))}
      </div>

      <p className="text-gray-600">plus many more sources — we're constantly expanding</p>
    </section>
  )
}
