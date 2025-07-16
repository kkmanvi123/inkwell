export default function HowItWorks() {
  return (
    <section className="py-16 border-t border-gray-100">
      <h2 className="text-2xl md:text-3xl mb-12">how it works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="text-2xl font-light text-gray-500">01</div>
          <h3 className="text-lg">tell us what you like</h3>
          <p className="text-gray-600">share your interests and content sources</p>
        </div>

        <div className="space-y-4">
          <div className="text-2xl font-light text-gray-500">02</div>
          <h3 className="text-lg">we fetch and summarize it</h3>
          <p className="text-gray-600">our ai creates simple, thoughtful recaps</p>
        </div>

        <div className="space-y-4">
          <div className="text-2xl font-light text-gray-500">03</div>
          <h3 className="text-lg">you get a personal digest</h3>
          <p className="text-gray-600">delivered to your inbox</p>
        </div>
      </div>
    </section>
  )
}
