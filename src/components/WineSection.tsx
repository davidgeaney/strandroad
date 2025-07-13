
import { useState } from "react";

const WineSection = () => {
  const [hoveredWine, setHoveredWine] = useState<string | null>(null);

  const wines = [
    {
      id: "mcdaids",
      title: "McDaids Football Special",
      subtitle: "A refreshing blend of fruity flavors",
      image: "/images/wine/strandwineimg1.jpg"
    },
    {
      id: "jackrabbit",
      title: "Jackrabbit Ginger Beer",
      subtitle: "Spicy & crisp craft ginger beer",
      image: "/images/wine/strandwineimg2.jpg"
    }
  ];

  // Removed click handlers as items are not clickable

  return (
    <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#001514' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {wines.map((wine, index) => (
            <div
              key={wine.id}
              className="relative group overflow-hidden"
              onMouseEnter={() => setHoveredWine(wine.id)}
              onMouseLeave={() => setHoveredWine(null)}
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

        {/* Large Image Below */}
        <div className="mt-16 md:mt-24">
          <div
            className="relative group overflow-hidden"
            onMouseEnter={() => setHoveredWine('large-wine')}
            onMouseLeave={() => setHoveredWine(null)}
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-100">
              <img
                src="/images/wine/strandwineimg3.jpg"
                alt="Drinks Collection"
                className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                  hoveredWine === 'large-wine' ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineSection;
