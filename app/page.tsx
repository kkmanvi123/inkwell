import TopNav from "@/components/top-nav"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import FormSection from "@/components/form-section"
import PreviewSection from "@/components/preview-section"
import SourcesSection from "@/components/sources-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] font-mono text-gray-800">
      <TopNav />
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 lg:px-8">
        <HeroSection />
        <HowItWorks />
        <FormSection />
        <PreviewSection />
        <SourcesSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  )
}
