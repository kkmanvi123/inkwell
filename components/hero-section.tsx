import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal">your personal digest</h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700">
          summaries of the stuff you already care about — from newsletters to podcasts to tech news.
        </p>
        <div className="pt-4">
          <Link
            href="#form-section"
            className="inline-flex h-10 items-center border border-gray-400 px-6 py-2 text-sm transition-colors hover:bg-gray-100"
          >
            start your digest →
          </Link>
        </div>
      </div>
    </section>
  )
}
