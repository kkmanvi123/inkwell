import Link from "next/link"

export default function TopNav() {
  return (
    <nav className="w-full border-b border-gray-100 bg-[#FAF9F6]">
      <div className="mx-auto max-w-4xl px-4 py-4 md:px-6 lg:px-8">
        <Link href="https://inkwell.com" className="text-lg font-normal hover:text-gray-600 transition-colors">
          inkwell
        </Link>
      </div>
    </nav>
  )
}
