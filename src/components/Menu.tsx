import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("STARTERS");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const filters = ["STARTERS", "MAINS", "FROM THE GARDEN", "BURGERS", "SIDES", "SWEETS", "DRINKS"];

  const menuItems = {
    STARTERS: [
      {
        id: "frutta-mista",
        name: "Crispy Chicken Wings",
        image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=270&h=332&fit=crop"
      },
      {
        id: "cornetto-senape",
        name: "Sticky Korean Fried Chicken",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=270&h=332&fit=crop"
      },
      {
        id: "brioche-sfoglia",
        name: "Strand Road Salt & Chilli Chicken",
        image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=270&h=332&fit=crop"
      },
      {
        id: "cruffin",
        name: "Soup of the Day & Brown Bread",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=270&h=332&fit=crop"
      },
      {
        id: "cappuccino",
        name: "King Prawns",
        image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=270&h=332&fit=crop"
      },
      {
        id: "cappuccino",
        name: "Chilli Beef Nachos",
        image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=270&h=332&fit=crop"
      },
      {
        id: "cappuccino",
        name: "Crispy Tempura Buffalo Cauliflower Wings",
        image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=270&h=332&fit=crop"
      },
      {
        id: "cappuccino",
        name: "Cheesy Garlic Bread",
        image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=270&h=332&fit=crop"
      },
      {
        id: "cappuccino",
        name: "Strand Road Tacos",
        image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=270&h=332&fit=crop"
      },
    ],
    MAINS: [
      {
        id: "margherita",
        name: "Surf & Turf",
        image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=270&h=332&fit=crop"
      },
      {
        id: "quattro-stagioni",
        name: "10oz Irish Nature Sirloin Steak",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=270&h=332&fit=crop"
      },
      {
        id: "diavola",
        name: "Pan Fried Chicken Supreme",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=270&h=332&fit=crop"
      },
      {
        id: "capricciosa",
        name: "Beef Batter Killybegs Cod Fillet",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
      {
        id: "marinara",
        name: "Strand Road Seafood Linguine",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=270&h=332&fit=crop"
      },
    ],
    'FROM THE GARDEN': [
      {
        id: "garden-salad-1",
        name: "Superfood Salad",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=270&h=332&fit=crop"
      },
      {
        id: "garden-salad-2",
        name: "Chicken or King Prawn Caesar Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=270&h=332&fit=crop"
      },
      {
        id: "garden-salad-3",
        name: "Couscous Salad",
        image: "https://images.unsplash.com/photo-1540420773422-0e1dd266d807?w=270&h=332&fit=crop"
      },
    ],
    BURGERS: [
      {
        id: "classic-burger",
        name: "Strand Road Loaded 8oz Irish Beef Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=270&h=332&fit=crop"
      },
      {
        id: "veggie-burger",
        name: "Plain Jane",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=270&h=332&fit=crop"
      },
      {
        id: "chicken-burger",
        name: "Sloppy Joe",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=270&h=332&fit=crop"
      },
      {
        id: "chicken-burger",
        name: "Crispy Buffalo Fried Chicken Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=270&h=332&fit=crop"
      },
      {
        id: "chicken-burger",
        name: "Southern Fried Chicken Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=270&h=332&fit=crop"
      },
      {
        id: "chicken-burger",
        name: "Plain Grilled Chicken Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=270&h=332&fit=crop"
      },
    ],
    SIDES: [
      {
        id: "garlic-fries",
        name: "Skinny Fries",
        image: "https://images.unsplash.com/photo-1526230427044-d092040d48dc?w=270&h=332&fit=crop"
      },
      {
        id: "onion-rings",
        name: "Garlic Potatoes",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=270&h=332&fit=crop"
      },
      {
        id: "sweet-potato",
        name: "Mash",
        image: "https://images.unsplash.com/photo-1604909053584-1d6f6e2c3f1e?w=270&h=332&fit=crop"
      },
      {
        id: "sweet-potato",
        name: "Chunky Chips",
        image: "https://images.unsplash.com/photo-1604909053584-1d6f6e2c3f1e?w=270&h=332&fit=crop"
      },
      {
        id: "sweet-potato",
        name: "House Salad",
        image: "https://images.unsplash.com/photo-1604909053584-1d6f6e2c3f1e?w=270&h=332&fit=crop"
      },
      {
        id: "sweet-potato",
        name: "Coleslaw",
        image: "https://images.unsplash.com/photo-1604909053584-1d6f6e2c3f1e?w=270&h=332&fit=crop"
      },
      {
        id: "sweet-potato",
        name: "Onion Rings",
        image: "https://images.unsplash.com/photo-1604909053584-1d6f6e2c3f1e?w=270&h=332&fit=crop"
      },
    ],
    SWEETS: [
      {
        id: "chocolate-lava",
        name: "Strand Road Chocolate Fantasy",
        image: "https://images.unsplash.com/photo-1571115173804-db7ac6f5ed9e?w=270&h=332&fit=crop"
      },
      {
        id: "cheesecake",
        name: "Cheesecake of the Day",
        image: "https://images.unsplash.com/photo-1571115173804-db7ac6f5ed9e?w=270&h=332&fit=crop"
      },
      {
        id: "tiramisu",
        name: "Double Chocolate Brownie",
        image: "https://images.unsplash.com/photo-1571115173804-db7ac6f5ed9e?w=270&h=332&fit=crop"
      },
      {
        id: "tiramisu",
        name: "Sticky Toffee Pudding",
        image: "https://images.unsplash.com/photo-1571115173804-db7ac6f5ed9e?w=270&h=332&fit=crop"
      },
      {
        id: "tiramisu",
        name: "Apple Crumble",
        image: "https://images.unsplash.com/photo-1571115173804-db7ac6f5ed9e?w=270&h=332&fit=crop"
      },
      {
        id: "tiramisu",
        name: "Baileys Over Brownie",
        image: "https://images.unsplash.com/photo-1571115173804-db7ac6f5ed9e?w=270&h=332&fit=crop"
      },
      {
        id: "tiramisu",
        name: "Selection of Ice Cream",
        image: "https://images.unsplash.com/photo-1571115173804-db7ac6f5ed9e?w=270&h=332&fit=crop"
      },
    ],
    DESSERTS: [
      {
        id: "bistecca-fiorentina",
        name: "Superfood Salad",
        image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=270&h=332&fit=crop"
      },
      {
        id: "salmone-scottato",
        name: "Chicken or King Prawn Caesar Salad",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=270&h=332&fit=crop"
      },
      {
        id: "branzino",
        name: "Couscous Salad",
        image: "https://images.unsplash.com/photo-1615937691194-471e9f7b6514?w=270&h=332&fit=crop"
      },
    ],
    DRINKS: [
      {
        id: "negroni",
        name: "Tea",
        image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=270&h=332&fit=crop"
      },
      {
        id: "aperol-spritz",
        name: "Herbal Tea",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=270&h=332&fit=crop"
      },
      {
        id: "bellini",
        name: "Americano",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=270&h=332&fit=crop"
      },
      {
        id: "espresso-martini",
        name: "Cappuccino",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=270&h=332&fit=crop"
      },
      {
        id: "limoncello",
        name: "Latte",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=270&h=332&fit=crop"
      },
      {
        id: "chianti-classico",
        name: "Flat White",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
      {
        id: "chianti-classico",
        name: "Espresso",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
      {
        id: "chianti-classico",
        name: "Espresso Doppio",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
      {
        id: "chianti-classico",
        name: "Hot Chocolate",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
      {
        id: "chianti-classico",
        name: "Hot Chocolate & Marshmallows",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
      {
        id: "chianti-classico",
        name: "Irish Coffee",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
      {
        id: "chianti-classico",
        name: "French Coffee",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
      {
        id: "chianti-classico",
        name: "Baileys Coffee",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
      {
        id: "chianti-classico",
        name: "Hot Whiskey",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=270&h=332&fit=crop"
      },
    ]
  };

  const currentItems = menuItems[activeFilter as keyof typeof menuItems] || [];

  const handleFilterChange = (filter: string) => {
    setIsAnimating(true);
    setActiveFilter(filter);
    // Reset hover and selected states when filter changes
    setHoveredItem(null);
    setSelectedItem(null);
  };

  const handleItemClick = (itemId: string) => {
    if (isMobile) {
      setSelectedItem(itemId);
    }
  };

  // Animation variants for the menu items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const
      }
    } as const),
    exit: { opacity: 0, y: -20 }
  };

  const closePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedItem(null);
  };

  return (
    <section id="menu" ref={menuRef} className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 md:px-8 relative" style={{ backgroundColor: '#ece6db' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Filter Tags - Responsive */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-10 md:mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`min-w-[100px] sm:min-w-[120px] px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-inter font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-black text-white border border-black'
                  : 'bg-transparent text-black border border-black hover:bg-black/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Menu Container with relative positioning */}
        <div className="relative">
          {/* Menu Items Column */}
          <div className="w-full overflow-visible">
            <AnimatePresence mode="wait">
              {currentItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  className="relative"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={itemVariants}
                  onAnimationComplete={() => index === currentItems.length - 1 && setIsAnimating(false)}
                >
                  {index > 0 && (
                    <motion.div 
                      className="w-full border-t-2 border-black"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    />
                  )}
                  <div
                    className="py-3 sm:py-4 md:py-5 lg:py-6 cursor-pointer relative"
                    onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                    onClick={() => !isAnimating && handleItemClick(item.id)}
                  >
                    <h3 className="font-tanpearl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight text-[#222222] uppercase" style={{ fontFamily: 'TAN PEARL, serif' }}>
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Preview Image - Desktop Only */}
          {!isMobile && hoveredItem && (
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
              <div className="relative">
                <img
                  src={currentItems.find(item => item.id === hoveredItem)?.image}
                  alt="Food preview"
                  className="w-[240px] h-[320px] sm:w-[280px] sm:h-[360px] md:w-[300px] md:h-[400px] object-cover shadow-2xl"
                  style={{
                    filter: 'brightness(1.2) contrast(1.2) saturate(1.3)',
                    borderRadius: '4px',
                    transition: 'opacity 0.3s ease-in-out',
                    opacity: hoveredItem ? 1 : 0
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Image Popup - Single instance */}
      <AnimatePresence>
        {selectedItem && isMobile && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <motion.div 
              className="relative bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden w-full max-w-[280px] shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.16, 1, 0.3, 1] as const,
                opacity: { duration: 0.2 }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200"
                aria-label="Close"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
              <div className="w-full p-3">
                <div className="relative w-full max-w-[220px] mx-auto">
                  <motion.img
                    src={currentItems.find(item => item.id === selectedItem)?.image}
                    alt="Food preview"
                    className="w-full h-auto rounded-lg shadow-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      delay: 0.1,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1] as const
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;
