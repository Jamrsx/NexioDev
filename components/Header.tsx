import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
              <Image
                src="/images/Logos/NDW.png"
                alt="Nexio Dev Logo"
                width={240}
                height={240}
              />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-blue-400 hover:text-white px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">About</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
