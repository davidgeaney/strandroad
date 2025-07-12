import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("STARTERS");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, isHovering: false });
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
        image: "public/images/menu2/starters/fullirish.jpg"
      },
      {
        id: "cornetto-senape",
        name: "Sticky Korean Fried Chicken",
        image: "public/images/menu2/starters/fullirish.jpg"
      },
      {
        id: "salt-chicken",
        name: "Strand Road Salt & Chilli Chicken",
        image: "public/images/menu2/starters/fullirish.jpg"
      },
      {
        id: "soup-bread",
        name: "Soup of the Day & Brown Bread",
        image: "public/images/menu2/starters/fullirish.jpg"
      },
      {
        id: "king-prawns",
        name: "King Prawns",
        image: "public/images/menu2/starters/fullirish.jpg"
      },
      {
        id: "beef-nachos",
        name: "Chilli Beef Nachos",
        image: "public/images/menu2/starters/fullirish.jpg"
      },
      {
        id: "cauliflower-wings",
        name: "Crispy Tempura Buffalo Cauliflower Wings",
        image: "public/images/menu2/starters/fullirish.jpg"
      },
      {
        id: "cheesy-garlic-bread",
        name: "Cheesy Garlic Bread",
        image: "public/images/menu2/starters/fullirish.jpg"
      },
      {
        id: "strand-road-tacos",
        name: "Strand Road Tacos",
        image: "public/images/menu2/starters/fullirish.jpg"
      },
    ],
    MAINS: [
      {
        id: "margherita",
        name: "Surf & Turf",
        image: "public/images/menu2/mains/10oz-steak.webp"
      },
      {
        id: "quattro-stagioni",
        name: "10oz Irish Nature Sirloin Steak",
        image: "public/images/menu2/mains/10oz-steak.webp"
      },
      {
        id: "diavola",
        name: "Pan Fried Chicken Supreme",
        image: "public/images/menu2/mains/10oz-steak.webp"
      },
      {
        id: "capricciosa",
        name: "Beef Batter Killybegs Cod Fillet",
        image: "public/images/menu2/mains/10oz-steak.webp"
      },
      {
        id: "marinara",
        name: "Strand Road Seafood Linguine",
        image: "public/images/menu2/mains/10oz-steak.webp"
      },
    ],
    'FROM THE GARDEN': [
      {
        id: "garden-salad-1",
        name: "Superfood Salad",
        image: "public/images/menu2/fromthegarden/fromthegarden1.jpg"
      },
      {
        id: "garden-salad-2",
        name: "Chicken or King Prawn Caesar Salad",
        image: "public/images/menu2/fromthegarden/fromthegarden1.jpg"
      },
      {
        id: "garden-salad-3",
        name: "Couscous Salad",
        image: "public/images/menu2/fromthegarden/fromthegarden1.jpg"
      },
    ],
    BURGERS: [
      {
        id: "classic-burger",
        name: "Strand Road Loaded 8oz Irish Beef Burger",
        image: "public/images/menu2/burgers/burger1.jpg"
      },
      {
        id: "veggie-burger",
        name: "Plain Jane",
        image: "public/images/menu2/burgers/burger1.jpg"
      },
      {
        id: "sloppy-joe-burger",
        name: "Sloppy Joe",
        image: "public/images/menu2/burgers/burger1.jpg"
      },
      {
        id: "buffalo-chicken-burger",
        name: "Crispy Buffalo Fried Chicken Burger",
        image: "public/images/menu2/burgers/burger1.jpg"
      },
      {
        id: "southern-chicken-burger",
        name: "Southern Fried Chicken Burger",
        image: "public/images/menu2/burgers/burger1.jpg"
      },
      {
        id: "grilled-chicken-burger",
        name: "Plain Grilled Chicken Burger",
        image: "public/images/menu2/burgers/burger1.jpg"
      },
    ],
    SIDES: [
      {
        id: "garlic-fries",
        name: "Skinny Fries",
        image: "public/images/menu2/sides/skinnyfries.jpg"
      },
      {
        id: "onion-rings",
        name: "Garlic Potatoes",
        image: "public/images/menu2/sides/skinnyfries.jpg"
      },
      {
        id: "mash-potatoes",
        name: "Mash",
        image: "public/images/menu2/sides/skinnyfries.jpg"
      },
      {
        id: "chunky-chips",
        name: "Chunky Chips",
        image: "public/images/menu2/sides/skinnyfries.jpg"
      },
      {
        id: "house-salad",
        name: "House Salad",
        image: "public/images/menu2/sides/skinnyfries.jpg"
      },
      {
        id: "coleslaw-side",
        name: "Coleslaw",
        image: "public/images/menu2/sides/skinnyfries.jpg"
      },
      {
        id: "onion-rings-side",
        name: "Onion Rings",
        image: "public/images/menu2/sides/skinnyfries.jpg"
      },
    ],
    SWEETS: [
      {
        id: "chocolate-lava",
        name: "Strand Road Chocolate Fantasy",
        image: "public/images/menu2/sweets/sweets1.jpg"
      },
      {
        id: "cheesecake",
        name: "Cheesecake of the Day",
        image: "public/images/menu2/sweets/sweets1.jpg"
      },
      {
        id: "double-chocolate-brownie",
        name: "Double Chocolate Brownie",
        image: "public/images/menu2/sweets/sweets1.jpg"
      },
      {
        id: "sticky-toffee-pudding",
        name: "Sticky Toffee Pudding",
        image: "public/images/menu2/sweets/sweets1.jpg"
      },
      {
        id: "apple-crumble",
        name: "Apple Crumble",
        image: "public/images/menu2/sweets/sweets1.jpg"
      },
      {
        id: "baileys-brownie",
        name: "Baileys Over Brownie",
        image: "public/images/menu2/sweets/sweets1.jpg"
      },
      {
        id: "ice-cream-selection",
        name: "Selection of Ice Cream",
        image: "public/images/menu2/sweets/sweets1.jpg"
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
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "aperol-spritz",
        name: "Herbal Tea",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "bellini",
        name: "Americano",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "espresso-martini",
        name: "Cappuccino",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "limoncello",
        name: "Latte",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "flat-white-coffee",
        name: "Flat White",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "espresso-coffee",
        name: "Espresso",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "espresso-doppio",
        name: "Espresso Doppio",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "hot-chocolate",
        name: "Hot Chocolate",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "hot-chocolate-marshmallows",
        name: "Hot Chocolate & Marshmallows",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "irish-coffee",
        name: "Irish Coffee",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "french-coffee",
        name: "French Coffee",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "baileys-coffee",
        name: "Baileys Coffee",
        image: "public/images/menu2/drinks/drinks1.jpg"
      },
      {
        id: "chianti-classico",
        name: "Hot Whiskey",
        image: "public/images/menu2/drinks/drinks1.jpg"
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
    <section id="menu" ref={menuRef} className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 md:px-8 relative" style={{ backgroundColor: '#191102' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Filter Tags - Responsive */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-10 md:mb-14 relative z-50">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`min-w-[100px] sm:min-w-[120px] px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-inter font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-yellow-400 text-black border border-yellow-400'
                  : 'bg-transparent border border-[#FEFCFB] hover:bg-[#FEFCFB]/10 hover:border-yellow-400 hover:text-yellow-400'
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
                      className="w-full border-t-2 border-[#FEFCFB]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    />
                  )}
                  <div
                    className="py-3 sm:py-4 md:py-5 lg:py-6 cursor-pointer relative group"
                    onMouseMove={(e) => {
                      if (!isMobile) {
                        setHoveredItem(item.id);
                        setCursorPosition({
                          x: e.clientX,
                          y: e.clientY,
                          isHovering: true
                        });
                      }
                    }}
                    onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
                    onMouseLeave={() => {
                      if (!isMobile) {
                        setHoveredItem(null);
                        setCursorPosition(prev => ({ ...prev, isHovering: false }));
                      }
                    }}
                    onClick={() => !isAnimating && handleItemClick(item.id)}
                  >
                    <h3 
                      className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight uppercase transition-colors duration-300 ${
                        hoveredItem === item.id ? 'text-yellow-400' : 'text-[#EDEDF4]'
                      } ${hoveredItem && hoveredItem !== item.id ? 'opacity-70' : 'opacity-100'}`} 
                      style={{ fontFamily: 'TAN PEARL, serif' }}
                    >
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Preview Image - Desktop Only - Follows Cursor */}
          {!isMobile && hoveredItem && (
            <motion.div 
              className="fixed z-50 pointer-events-none"
              style={{
                left: `${cursorPosition.x + 20}px`,
                top: `${cursorPosition.y}px`,
                width: 'min(80vw, 300px)',
                height: 'min(90vh, 400px)',
                transform: 'none',
                transformOrigin: 'top left',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  type: 'spring',
                  damping: 25,
                  stiffness: 300
                }
              }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="relative w-full h-full">
                <motion.img
                  src={currentItems.find(item => item.id === hoveredItem)?.image}
                  alt="Food preview"
                  className="w-full h-full object-cover shadow-2xl rounded-lg"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                    borderRadius: '8px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                    transition: { 
                      duration: 0.15,
                      ease: 'easeOut'
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                />
              </div>
            </motion.div>
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
                className="absolute top-4 right-4 z-10 bg-[#FEFCFB]/20 hover:bg-[#FEFCFB]/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                style={{ color: '#EDEDF4' }}
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
