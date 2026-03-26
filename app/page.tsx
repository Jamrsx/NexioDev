import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
              We provide comprehensive digital solutions to help your startup grow and succeed in the modern marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
                Get Started
              </button>
              <button className="text-gray-300 hover:text-white px-8 py-3 rounded-md text-lg font-medium flex items-center gap-2">
                How It Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
              <span className="text-gray-400 text-lg">add later</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
