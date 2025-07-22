import Link from "next/link"

export default function TopNav() {
  return (
    <nav className="w-full bg-[#FAF9F6] py-6">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <Link href="/" className="text-lg font-medium hover:text-gray-600 transition-colors lowercase">
          inkwell
        </Link>
      </div>
    </nav>
  )
}
