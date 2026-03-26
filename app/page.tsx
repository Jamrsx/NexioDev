import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
        
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Digital Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We provide comprehensive digital solutions to help your business grow and succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
                <a href="/about" className="text-gray-White hover:text-white transition-colors">Learn More</a>
              </button>
     
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
              <Image
                src="/images/Graphic/pclaptop.png"
                alt="PC Laptop"
                width={900}
                height={450}
                className="object-contain"
              />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
