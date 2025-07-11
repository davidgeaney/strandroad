import { Star, Play, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="relative" style={{ backgroundColor: '#ece6db' }}>
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black"></div>
      
      {/* Main content section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-black">
          {/* Column 1 - Menu */}
          <div className="px-12 py-12">
            <h3 className="text-xs font-semibold tracking-widest text-gray-600 mb-6 uppercase">MENU</h3>
            <div className="flex flex-col space-y-4">
              <div className="group relative inline-block">
                <Link to="/menu" className="relative inline-block pb-1">
                  <h4 className="text-4xl font-serif text-gray-800 leading-tight hover:text-gray-900 transition-colors duration-200">
                    Menu
                  </h4>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              </div>
              <div className="group relative inline-block">
                <Link to="/drinks" className="relative inline-block pb-1">
                  <h4 className="text-4xl font-serif text-gray-800 leading-tight hover:text-gray-900 transition-colors duration-200">
                    Drinks menu
                  </h4>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              </div>
              <div className="group relative inline-block">
                <Link to="/wine" className="relative inline-block pb-1">
                  <h4 className="text-4xl font-serif text-gray-800 leading-tight hover:text-gray-900 transition-colors duration-200">
                    Wine list
                  </h4>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2 - Reserve & Joy of Sharing */}
          <div className="px-12 py-12 space-y-8">
            {/* Reserve */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-gray-600 mb-4 uppercase">RESERVE</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-800 hover:text-gray-600">
                  Reserve online
                </a>
                <a href="#" className="block text-gray-800 hover:text-gray-600">
                  Group reservation
                </a>
              </div>
            </div>

            {/* Joy of Sharing */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-gray-600 mb-4 uppercase">JOY OF SHARING</h3>
              <a href="#" className="block text-gray-800 hover:text-gray-600">
                Online gift voucher
              </a>
            </div>

            {/* Audio Player */}
            <div className="bg-black rounded-lg p-4 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-600 to-amber-800"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">Strand Road Lounge</h4>
                  <p className="text-sm text-gray-300">Coastal Evenings • 42 songs</p>
                </div>
                <a 
                  href="https://open.spotify.com/playlist/37i9dQZF1DX9XIFQuFvzM4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Play className="w-5 h-5 text-black fill-current ml-0.5" />
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-gray-300">Stream on</span>
                <span className="text-white font-semibold">Spotify</span>
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Column 3 - Contact & Hours */}
          <div className="px-12 py-12">
            <h3 className="text-xs font-semibold tracking-widest text-gray-600 mb-6 uppercase">CONTACT & HOURS</h3>
            <div className="space-y-6">
              {/* Contact Info */}
              <div>
                <p className="text-gray-800">Strand Road, Ballyconnell</p>
                <p className="text-gray-800">Co. Donegal, F92 VXT2</p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-800">T: (074) 913 5907</p>
                <p className="text-gray-800">E: strandroadfalcarragh@gmail.com</p>
              </div>

              {/* Opening Hours */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-600 mb-3 uppercase">OPENING HOURS</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span>1:00 PM – 11:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday</span>
                    <span>1:00 PM – 11:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday</span>
                    <span>1:00 PM – 11:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday</span>
                    <span>1:00 PM – 11:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>10:00 AM – 11:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>12:00 PM – 11:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM – 11:30 PM</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <Star className="w-3 h-3 text-gray-400" />
                  <span>Last food orders at 9:00 PM daily</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom aligned rectangles section */}
      <div className="border-t border-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-black">
            {/* Reviews */}
            <div className="px-12 py-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-700">4.6 / 264 Google reviews</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="px-12 py-4">
              <div className="text-start">
                <span className="text-sm font-mono tracking-wider text-gray-700">
                  ©2025 STRAND ROAD. ALL RIGHTS RESERVED.
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="px-12 py-4">
              <div className="flex justify-start gap-6">
                <a href="https://www.instagram.com/thestrandroadbarandkitchen/?hl=en" className="text-gray-700 hover:text-gray-900">
                  Instagram
                </a>
                <a href="https://www.facebook.com/thestrandroad/" className="text-gray-700 hover:text-gray-900">
                  Facebook
                </a>
                <a href="https://www.tiktok.com/@strandroad" className="text-gray-700 hover:text-gray-900">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom banner with restaurant image and overlay */}
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('/images/strandheroimg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
          <button className="bg-white border border-black text-black hover:bg-black hover:text-white px-10 py-2 text-sm font-inter font-medium border border-gray-300 hover:border-black rounded transition-all duration-200 h-12 flex items-center">
            RESERVE
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="flex items-center gap-4">
                <span className="text-white font-mono text-sm tracking-wider">
                  ©2025 STRAND ROAD. ALL RIGHTS RESERVED.
                </span>
              </div>
              <div className="text-center">
                <div className="space-x-2">
                  <a href="https://www.instagram.com/thestrandroadbarandkitchen/?hl=en" className="text-white hover:text-gray-300 font-mono text-sm tracking-wider">INSTAGRAM</a>
                  <span className="text-white">, </span>
                  <a href="https://www.facebook.com/thestrandroad/" className="text-white hover:text-gray-300 font-mono text-sm tracking-wider">FACEBOOK</a>
                  <span className="text-white">, </span>
                  <a href="https://www.tiktok.com/@strandroad" className="text-white hover:text-gray-300 font-mono text-sm tracking-wider">TIKTOK</a>
                </div>
              </div>
              <div className="text-right">
                <span className="text-white font-mono text-sm tracking-wider">MADE BY GEANEY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
