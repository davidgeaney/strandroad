import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MenuSectionProps {
  title: string;
  images: Array<{ src: string; caption: string }>;
  isActive: boolean;
  backgroundColor: string;
  onScroll: (progress: number) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  images,
  isActive,
  backgroundColor,
  onScroll,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Calculate staggered offsets for images
  const getColumnOffset = (columnIndex: number, itemIndex: number) => {
    return columnIndex === 0 ? 0 : 80; // 80px offset for right column
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate visibility percentage (0 to 1)
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visiblePercentage = visibleHeight / rect.height;
      
      // Only trigger scroll updates when section is visible
      if (visiblePercentage > 0) {
        const scrollProgress = Math.min(Math.max(0, -rect.top / (rect.height - windowHeight)), 1);
        onScroll(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);

  // Split images into left and right columns
  const leftColumn = images.filter((_, i) => i % 2 === 0);
  const rightColumn = images.filter((_, i) => i % 2 === 1);

  return (
    <div 
      ref={sectionRef}
      className="relative w-full min-h-screen transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor }}
      data-menu-section
    >
      <div className="h-[250px] w-full"></div>
      
      <div className="relative">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-80 max-w-7xl mx-auto px-4 md:px-12 pb-16 md:pb-32">
          {/* Single column on mobile, two columns on desktop */}
          <div className="space-y-16 md:space-y-80">
            {leftColumn.map((image, index) => (
              <div 
                key={index * 2}
                className="transition-opacity duration-500 max-w-md mx-auto md:max-w-none md:mx-0"
                style={{
                  transform: `translateY(${isMobile ? 0 : getColumnOffset(0, index)}px)`,
                  transition: 'transform 0.3s ease-out',
                  opacity: isActive ? 1 : 0.5
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 md:mt-8 text-sm font-medium text-foreground text-center md:text-left" style={{ fontFamily: 'TAN PEARL, serif' }}>
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
          
          {/* Right Column - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block space-y-80 pt-80">
            {rightColumn.map((image, index) => (
              <div 
                key={index * 2 + 1}
                className="transition-opacity duration-500"
                style={{
                  transform: `translateY(${getColumnOffset(1, index)}px)`,
                  transition: 'transform 0.3s ease-out',
                  opacity: isActive ? 1 : 0.5
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-8 text-sm font-medium text-foreground text-left" style={{ fontFamily: 'TAN PEARL, serif' }}>
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuPreview = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [prevSection, setPrevSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [hasAnimatedIn, setHasAnimatedIn] = useState([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout>();
  
  const sections = [
    {
      title: "BREAKFAST",
      images: [
        {
          src: "/images/menu/breakfast/strandbreakfast1.jpg",
          caption: "IL NOSTRO CAPPUCCINO"
        },
        {
          src: "/images/menu/breakfast/strandbreakfast2.jpg",
          caption: "BRIOCHE SFOGLIATA"
        },
        {
          src: "/images/menu/breakfast/strandbreakfast3.jpg",
          caption: "YOGHURT CON FRUTTA"
        },
        {
          src: "/images/menu/breakfast/strandbreakfast4.jpg",
          caption: "UOVA IN COCOTTA"
        }
      ],
      backgroundColor: "#ECE5D6"
    },
    {
      title: "LUNCH",
      images: [
        {
          src: "/images/menu/lunch/strandlunch1.jpg",
          caption: "TARTARE DI SALMONE"
        },
        {
          src: "/images/menu/lunch/strandlunch2.jpg",
          caption: "INSALATA DI POLPO"
        },
        {
          src: "/images/menu/lunch/strandlunch3.jpg",
          caption: "TAGLIOLINI AL TARTUFO"
        },
        {
          src: "/images/menu/lunch/strandlunch4.jpg",
          caption: "BRESAOLA RUCOLA"
        }
      ],
      backgroundColor: "rgba(189, 232, 220, 0.35)"
    },
    {
      title: "DINNER",
      images: [
        {
          src: "/images/menu/dinner/stranddinner1.jpg",
          caption: "CARPACCIO DI MANZO"
        },
        {
          src: "/images/menu/dinner/stranddinner2.jpg",
          caption: "BRESAOLA RUCOLA"
        },
        {
          src: "/images/menu/dinner/stranddinner3.jpg",
          caption: "RISOTTO AI FUNGHI"
        },
        {
          src: "/images/menu/dinner/stranddinner4.jpg",
          caption: "TIRAMISU"
        }
      ],
      backgroundColor: "rgba(200, 150, 130, 0.4)"
    }
  ];

  const handleSectionScroll = (sectionIndex: number, progress: number) => {
    // Handle flip-in animations for each section
    if (progress > -0.3 && !hasAnimatedIn[sectionIndex]) {
      const newHasAnimatedIn = [...hasAnimatedIn];
      newHasAnimatedIn[sectionIndex] = true;
      setHasAnimatedIn(newHasAnimatedIn);
    }
    
    // Handle section transitions in the space between sections
    // Progress will be between -1 (section is above viewport) and 1 (section is below viewport)
    // We want to trigger the transition when we're in the middle of the space between sections
    if (progress > -0.5 && progress < 0.5) {
      // Only trigger transition if we're moving to a new section
      if (currentSection !== sectionIndex && !isAnimating) {
        setIsAnimating(true);
        setPrevSection(currentSection);
        setCurrentSection(sectionIndex);
        
        // Reset animation after it completes
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
        }
        
        animationTimeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
        }, 800); // Match this with the CSS animation duration
      }
      
      // Update background color based on scroll progress
      if (sectionIndex < sections.length - 1) {
        const nextSection = sectionIndex + 1;
        const currentColor = sections[sectionIndex].backgroundColor;
        const nextColor = sections[nextSection].backgroundColor;
        
        // Calculate blend ratio based on progress
        const blendRatio = Math.min(Math.max((progress + 0.5), 0), 1); // Convert -0.5 to 0.5 range to 0-1
        
        setBackgroundStyle({
          background: `linear-gradient(to bottom, ${currentColor} 0%, ${nextColor} 100%)`,
          transition: 'background 0.5s ease-in-out'
        });
      }
      
      // Calculate background color transition
      const nextSection = Math.min(sectionIndex + 1, sections.length - 1);
      const currentColor = sections[sectionIndex].backgroundColor;
      const nextColor = sections[nextSection].backgroundColor;
      
      setBackgroundStyle({
        background: `linear-gradient(to bottom, ${currentColor} 0%, ${nextColor} 100%)`,
        transition: 'background 1s ease-in-out'
      });
    }
  };

  const [headingOpacity, setHeadingOpacity] = useState(1); // Start with heading visible
  const [lastScrollY, setLastScrollY] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);
  const hasAnimatedInRef = useRef(false);

  // Track viewport width for responsive behavior
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    // Set initial viewport width
    setViewportWidth(window.innerWidth);
    
    // Handle viewport resize
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Set initial animation state
    hasAnimatedInRef.current = true;

    const handleScroll = () => {
      if (!headingRef.current) return;
      
      const currentScrollY = window.scrollY;
      const rect = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate opacity based on scroll position
      let opacity = 1;
      
      // Get the menu section element
      const menuSection = document.getElementById('menu');
      
      if (menuSection) {
        const menuRect = menuSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isMobile = viewportWidth < 768; // Assuming 768px as the breakpoint for mobile
        
        // Adjust fade out behavior based on device type
        if (isMobile) {
          // For mobile, start fading out when the heading is about to leave the viewport
          const fadeStart = rect.top + window.scrollY - viewportHeight * 0.8; // Start fading when 0.8 viewport from top
          const fadeEnd = rect.top + window.scrollY + viewportHeight * 0.2;   // Complete fade when 0.2 viewport from top
          
          if (currentScrollY > fadeStart) {
            const scrollProgress = Math.min(1, Math.max(0, (currentScrollY - fadeStart) / (fadeEnd - fadeStart)));
            opacity = 1 - scrollProgress;
          }
        } else {
          // Original behavior for desktop
          const fadeStart = menuRect.top + window.scrollY - 300; // Start fading 300px before menu
          const fadeEnd = menuRect.top + window.scrollY - 100;   // Fully faded out 100px before menu
          
          if (currentScrollY > fadeStart) {
            const scrollProgress = Math.min(1, Math.max(0, (currentScrollY - fadeStart) / (fadeEnd - fadeStart)));
            opacity = 1 - scrollProgress;
          }
        }
      }
      
      // Only update if we've done the initial fade in
      if (hasAnimatedInRef.current) {
        setHeadingOpacity(Math.max(0, Math.min(1, opacity)));
      }
      
      // Track scroll position for next update
      setLastScrollY(currentScrollY);
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with debounce
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative" style={backgroundStyle}>

      {/* Add significant space at the start */}
      <div className="h-[100vh] w-full" />
      <div className="h-[100vh] w-full" />
      
      {/* Animated heading container */}
      <div 
        ref={headingRef}
        className="sticky top-1/2 left-0 right-0 z-10 h-0 pointer-events-none transition-opacity duration-500 ease-in-out"
        style={{ 
          opacity: headingOpacity,
          transform: `translateY(${Math.max(0, (1 - headingOpacity) * 20)}px)`,
          transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
        }}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center perspective-1000">
          <div className="relative w-full h-32 md:h-48 lg:h-64 xl:h-80">
            {/* Animated section title */}
            <div className={`absolute inset-0 flex items-center justify-center ${isAnimating ? 'animate-flip' : ''} ${!hasAnimatedIn[currentSection] ? 'opacity-0' : ''}`}>
              <h2 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground uppercase tracking-wider transition-opacity duration-300 ${hasAnimatedIn[currentSection] ? 'animate-flip-in' : ''}`} style={{ fontFamily: 'TAN PEARL, serif' }}>
                {sections[isAnimating ? prevSection : currentSection].title}
              </h2>
            </div>
            
            {/* Next section title (shown after flip) */}
            {isAnimating && (
              <div className="absolute inset-0 flex items-center justify-center animate-flip-next">
                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground uppercase tracking-wider transition-opacity duration-300" style={{ fontFamily: 'TAN PEARL, serif' }}>
                  {sections[currentSection].title}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes flip {
            0% { transform: rotateX(0deg); opacity: 1; }
            50% { transform: rotateX(90deg); opacity: 0; }
            100% { transform: rotateX(90deg); opacity: 0; }
          }
          @keyframes flipNext {
            0% { transform: rotateX(-90deg); opacity: 0; }
            50% { transform: rotateX(-90deg); opacity: 0; }
            100% { transform: rotateX(0deg); opacity: 1; }
          }
          @keyframes flipIn {
            0% { transform: rotateX(-90deg); opacity: 0; }
            100% { transform: rotateX(0deg); opacity: 1; }
          }
          .animate-flip-in {
            animation: flipIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .animate-flip {
            animation: flip 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .animate-flip-next {
            animation: flipNext 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
        `
      }} />
      
      <div className="relative z-0 py-64">
        {/* Add extra space before the first section */}
        <div className="h-[50vh] w-full" />
        
        {sections.map((section, index) => (
          <div key={`section-${index}`}>
            <MenuSection
              title={section.title}
              images={section.images}
              isActive={currentSection === index}
              backgroundColor="transparent"
              onScroll={(progress) => handleSectionScroll(index, progress)}
            />
            {/* Add generous space between sections */}
            {index < sections.length - 1 && (
              <div className="h-[80vh] w-full" />
            )}
          </div>
        ))}
        
        {/* Gradient transition to menu section */}
        <div className="relative h-[100vh] w-full">
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#ece6db] to-transparent z-10" />
          <div className="h-full w-full bg-[#ece6db]" />
        </div>
      </div>
    </div>
  );
};

export default MenuPreview;
