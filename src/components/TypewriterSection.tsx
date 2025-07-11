import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Typewriter component
const TypewriterText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }
      }, 30 + (delay * 1000)); // 30ms between characters plus initial delay

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, inView, text, delay]);

  // Reset animation when text changes
  useEffect(() => {
    if (inView) {
      setDisplayText("");
      setCurrentIndex(0);
    }
  }, [inView]);

  return (
    <motion.span 
      ref={ref}
      className={`font-tanpearl ${className}`}
      style={{ fontFamily: 'TAN PEARL, serif' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </motion.span>
  );
};

// Animation variants for the text
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo curve
    }
  }
} as const;

const AboutOurRestaurant = () => {
  return (
    <>
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ece6db' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 lg:w-2/5"
          >
            <div className="font-tanpearl text-3xl md:text-5xl lg:text-6xl leading-none text-[#222222] tracking-tight">
              <TypewriterText 
                text={"ABOUT OUR\nRESTAURANT"}
                className="block text-left"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px" }}
            variants={textVariants}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.2rem",
              color: "#222222",
              width: '100%',
              maxWidth: '550px',
              lineHeight: 1.7,
              padding: '0.25rem 0 0 0',
              marginLeft: 'auto',
            }}
          >
            Strand Road Bar & Kitchen was established in 2021 in the heart of Falcarragh by local chef Michael McClafferty. Known for his passion for fresh, quality ingredients and bold flavours, Michael brought a modern touch to classic Irish and international dishes. His vision was to create a welcoming space where great food, drink, and atmosphere come together for an unforgettable dining experience.
          </motion.div>
        </div>
      </section>
      <div
        style={{
          width: "100%",
          background: "#ece6db",
          display: "flex",
          justifyContent: "center",
          padding: "0 0 48px 0"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "77.25rem", /* 1236px - matches hero image width */
            aspectRatio: "16/9",
            background: "#ece6db", // Match page background color
            borderRadius: 0,
            overflow: "hidden",
            position: "relative"
          }}
        >
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ 
              x: 0, 
              opacity: 1,
              transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
                delay: 0.2
              }
            }}
            viewport={{ once: true, margin: "-100px 0px" }}
            style={{ 
              width: '100%', 
              height: '100%',
              backgroundColor: '#ece6db', // Match page background color
              position: 'relative',
              zIndex: 1,
              transform: 'translate3d(0,0,0)' // Force hardware acceleration for smoother animation
            }}
          >
            <img
              src="/images/strandaboutimg1.jpg"
              alt="Gold Restaurant Interior"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block"
              }}
            />
          </motion.div>
        </div>
      </div>
      {/* ABOUT OUR VALUES Section */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ece6db' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 lg:w-2/5"
          >
            <div className="font-tanpearl text-3xl md:text-5xl lg:text-6xl leading-none text-[#222222] tracking-tight">
              <TypewriterText 
                text={"ABOUT OUR\nVALUES"}
                className="block text-left"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px" }}
            variants={textVariants}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.2rem",
              color: "#222222",
              width: '100%',
              maxWidth: '550px',
              lineHeight: 1.7,
              padding: '0.25rem 0 0 0',
              marginLeft: 'auto',
            }}
          >
            We value food for bringing people together. By focusing on local ingredients and bold, honest flavours, our chefs craft dishes that reflect both tradition and creativity.
            <br /><br />
            Our seasonal menus and warm setting create a relaxed yet memorable dining experience, where classic favourites meet fresh, modern ideas.
          </motion.div>
        </div>
        {/* Two side-by-side images */}
        {/* Responsive two-image layout matching About.tsx and aligning with hero image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto mt-12">
          {/* First Image - Opens from top */}
          <motion.div 
            className="relative overflow-hidden"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ 
              clipPath: 'inset(0% 0 0 0)',
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2
              }
            }}
            viewport={{ once: true, margin: "-50px 0px" }}
          >
            <img
              src="/images/strandourvaluesimg1.jpg"
              alt="Italian Restaurant Window"
              className="w-full h-[300px] md:h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
          
          {/* Second Image - Opens from bottom */}
          <motion.div 
            className="relative overflow-hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ 
              clipPath: 'inset(0 0 0% 0)',
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4
              }
            }}
            viewport={{ once: true, margin: "-50px 0px" }}
          >
            <img
              src="/images/strandourvaluesimg2.jpg"
              alt="Italian Restaurant Exterior"
              className="w-full h-[300px] md:h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>

      </section>
    </>
  );
};

export default AboutOurRestaurant;
