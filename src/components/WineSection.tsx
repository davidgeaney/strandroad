
import { useState } from "react";

const WineSection = () => {
  const [hoveredWine, setHoveredWine] = useState<string | null>(null);

  const wines = [
    {
      id: "vita-lenta",
      title: "VITA LENTA",
      subtitle: "Olio Extra Vergine di Oliva",
      image: "/images/drinks/strandwineimg1.jpg"
    },
    {
      id: "chianti-classico",
      title: "CHIANTI CLASSICO",
      subtitle: "Vitalenta 2018",
      image: "/images/drinks/strandwineimg2.jpg"
    }
  ];

  const handleWineClick = (wineId: string) => {
    console.log(`Clicked on ${wineId}`);
    // Handle wine click logic here
  };

  const handleLargeImageClick = () => {
    console.log('Large wine image clicked');
    // Handle large image click logic here
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#ece6db' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {wines.map((wine, index) => (
            <div
              key={wine.id}
              className="relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredWine(wine.id)}
              onMouseLeave={() => setHoveredWine(null)}
              onClick={() => handleWineClick(wine.id)}
            >
              {/* Wine Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={wine.image}
                  alt={wine.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                    hoveredWine === wine.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                {/* Discover Overlay */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 ${
                  hoveredWine === wine.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white">
                    <div className="relative inline-block">
                      <span className="font-tan-pearl text-2xl md:text-3xl uppercase tracking-wider">
                        DISCOVER
                      </span>
                      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transition-transform duration-500 ${
                        hoveredWine === wine.id ? 'scale-x-100' : 'scale-x-0'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Wine Info */}
              <div className="mt-6 text-center">
                <h3 
                  className="text-xl md:text-2xl text-[#222222] uppercase tracking-wider"
                  style={{ fontFamily: 'TAN PEARL, serif' }}
                >
                  {wine.title}
                </h3>
                <p className="font-inter text-sm md:text-base text-[#222222] mt-2">
                  {wine.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Large Wine Image Below */}
        <div className="mt-16 md:mt-24">
          <div
            className="relative group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredWine('large-wine')}
            onMouseLeave={() => setHoveredWine(null)}
            onClick={handleLargeImageClick}
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-100">
              <img
                src="/images/drinks/strandwineimg3.jpg"
                alt="Wine Collection"
                className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                  hoveredWine === 'large-wine' ? 'scale-110' : 'scale-100'
                }`}
              />
              
              {/* Discover Overlay */}
              <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 ${
                hoveredWine === 'large-wine' ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-center text-white">
                  <div className="relative inline-block">
                    <span className="font-tan-pearl text-3xl md:text-4xl uppercase tracking-wider">
                      DISCOVER
                    </span>
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transition-transform duration-500 ${
                      hoveredWine === 'large-wine' ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineSection;
