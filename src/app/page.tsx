export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Welcome to your beautiful Next.js application
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            This is a simple Hello World app built with Next.js, TypeScript, and Tailwind CSS. 
            It features modern design patterns, responsive layout, and clean typography.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">⚡ Fast</h3>
            <p className="text-gray-600">
              Built with Next.js for optimal performance and lightning-fast loading times.
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📱 Responsive</h3>
            <p className="text-gray-600">
              Designed to work beautifully on all devices, from mobile to desktop.
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🎨 Modern</h3>
            <p className="text-gray-600">
              Clean, modern design with beautiful gradients and smooth animations.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200/50">
          <p className="text-gray-500 text-sm">
            Ready to build something amazing? This is your starting point.
          </p>
        </div>
      </div>
    </div>
  )
}