export default function FaqSection() {
  return (
    <section className="py-16 border-t border-gray-100">
      <h2 className="text-2xl md:text-3xl mb-8">some quick answers</h2>

      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg">do i need to log in?</h3>
          <p className="text-gray-600">nope — just your email and content preferences</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg">is this free?</h3>
          <p className="text-gray-600">yep — totally free for now</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg">can i add my own stuff?</h3>
          <p className="text-gray-600">yes — paste links to any newsletter or podcast</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg">how is this different?</h3>
          <p className="text-gray-600">we summarize what you already follow, not recommend new stuff</p>
        </div>
      </div>
    </section>
  )
}
