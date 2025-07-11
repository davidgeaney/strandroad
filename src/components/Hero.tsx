
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

// Star icon component
const StarIcon = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`w-4 h-4 ${className}`}
  >
    <path 
      fillRule="evenodd" 
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
      clipRule="evenodd" 
    />
  </svg>
);

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return; // Don't hide/show nav when menu is open
      
      const currentScrollY = window.scrollY;
      
      // Always show nav when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } 
      // Hide nav when scrolling down and not at top
      else if (currentScrollY > 100) {
        setIsVisible(false);
      }
      
      // Always show nav at top of page
      if (currentScrollY === 0) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const scrollToTop = () => {
    if (isMenuOpen) return; // Prevent scrolling when menu is open
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <section id="hero" className="relative w-full" style={{ backgroundColor: '#ece6db' }}>
      {/* Navigation */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-4 md:p-6 transition-all duration-300 ${
          isVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="flex items-center gap-8">
          {/* Hamburger Menu - Always visible, changes to X when open */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-12 h-12 cursor-pointer group"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-black" />
            ) : (
              <Menu className="w-7 h-7 text-black group-hover:opacity-80 transition-opacity" />
            )}
          </button>

          {/* Star Button - Visible on mobile */}
          <button 
            onClick={scrollToTop}
            className="md:hidden flex items-center justify-center w-10 h-10 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <StarIcon className="text-black" />
          </button>
        </div>
        
        <div className="flex items-center">
          {/* Reserve Button */}
          <button className="bg-black text-white px-6 py-2 rounded">
            Reserve
          </button>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Large Heading with Custom Typewriter Animation */}
        <div className="text-center mb-8 md:mb-12 relative py-6 -mt-6">
          <div className="font-tanpearl text-5xl sm:text-6xl md:text-[120px] leading-[0.95] text-[#222222] font-normal tracking-tight relative z-10" style={{ fontFamily: 'TAN PEARL, serif' }}>
            {'STRAND ROAD'.split('').map((char, i) => (
              <motion.span
                key={i}
                className="inline-block relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    damping: 15,
                    stiffness: 200,
                    delay: 0.8 + (i * 0.05),
                    duration: 0.8
                  }
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          {/* Invisible spacer to prevent layout shift */}
          <div className="invisible h-0 md:h-0">STRAND ROAD</div>
        </div>
        
        {/* Hero Image with Unique Animation */}
        <motion.div 
          className="w-full relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3
            }
          }}
        >
          <motion.div 
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: '56.25%' }}
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5
              }
            }}
          >
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{
                scale: 1,
                transition: {
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.7
                }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src="/images/strandheroimg.jpg"
                alt="Gold Restaurant Interior"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </section>
  );
};

export default Hero;
