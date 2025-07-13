
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu = ({ isOpen, onClose }: HamburgerMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Store the current scroll position
  const scrollY = useRef(0);

  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      scrollY.current = window.scrollY;
      // Lock the body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      setIsVisible(true);
    } else {
      // Re-enable scrolling and restore position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
    
    return () => {
      // Cleanup function
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY.current);
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'MENU', href: '#menu' },
    { name: 'SHOP', href: '#wine' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      // For internal page anchors
      onClose();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Close the menu after scroll
      const timer = setTimeout(() => {
        onClose();
      }, 300);
      
      return () => clearTimeout(timer);
    }
    // For React Router links, just close the menu
    // The actual navigation will be handled by the Link component
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Menu background with scale animation */}
          <motion.div 
            className="fixed inset-0"
            style={{ 
              backgroundColor: '#191102',
              zIndex: 50
            }}
            initial={{ clipPath: 'circle(0% at 0% 0%)' }}
            animate={{ 
              clipPath: isOpen ? 'circle(200% at 0% 0%)' : 'circle(0% at 0% 0%)',
              transitionEnd: { display: isOpen ? 'block' : 'none' }
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.83, 0, 0.17, 1]
            }}
          >
            <div className="h-screen w-full flex flex-col pl-12 pr-8 py-8" style={{ 
              backgroundColor: '#191102',
              position: 'relative',
              zIndex: 51
            }}>
              {/* Close Button with rotation animation */}
              <motion.button
                onClick={onClose}
                className="p-2 pl-10 hover:opacity-70 transition-opacity self-start cursor-pointer"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                aria-label="Close menu"
              >
                <X className="w-10 h-10 text-[#F9C704]" />
              </motion.button>
              
              {/* Menu Items with staggered animation */}
              <div className="flex-1 flex flex-col justify-center -mt-16">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="py-4 overflow-hidden"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ 
                      y: isOpen ? '0%' : '100%',
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ 
                      delay: isOpen ? 0.3 + (index * 0.1) : 0,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className="text-5xl md:text-7xl font-medium tracking-tight leading-none block pl-10"
                        style={{ 
                          fontFamily: 'TAN PEARL, serif',
                          color: '#FEFCFB',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#F9C704')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#FEFCFB')}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.href);
                        }}
                        className="text-5xl md:text-7xl font-medium tracking-tight leading-none block pl-10"
                        style={{ 
                          fontFamily: 'TAN PEARL, serif',
                          color: '#FEFCFB',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#F9C704')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#FEFCFB')}
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;
