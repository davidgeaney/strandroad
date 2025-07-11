
import { useIsMobile } from "@/hooks/use-mobile";

interface TimeIndicatorProps {
  currentSection: number;
  opacity: number;
}

const TimeIndicator = ({ currentSection, opacity }: TimeIndicatorProps) => {
  const isMobile = useIsMobile();
  
  const timeIndicators = [
    { time: "8 am", active: [0] },
    { time: "11 am", active: [0] },
    { time: "1 pm", active: [1] },
    { time: "4 pm", active: [1] },
    { time: "7 pm", active: [2] },
    { time: "10 pm", active: [2] }
  ];

  return (
    <div 
      className={`fixed ${isMobile ? 'right-8' : 'right-16'} top-1/2 transform -translate-y-1/2 z-30 transition-opacity duration-500`}
      style={{ opacity }}
    >
      <div className="relative h-full flex flex-col items-end justify-between py-4">
        {/* Sun Icon */}
        <div className="mb-6">
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
          </svg>
        </div>
        
        {/* Time Scale */}
        <div className="relative flex-1 flex flex-col justify-between my-2">
          {/* Vertical line */}
          <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-black/30"></div>
          
          {timeIndicators.map((indicator, index) => (
            <div key={indicator.time} className="relative flex items-center justify-end h-12">
              {/* Time label */}
              <span className={`text-xs font-bold font-sans tracking-wider pr-4 ${indicator.active.includes(currentSection) ? 'text-black' : 'text-black/40'}`}>
                {indicator.time}
              </span>
              
              {/* Horizontal line and dot */}
              <div className="relative h-0.5 w-6 bg-black/30">
                <div className={`absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${indicator.active.includes(currentSection) ? 'bg-black' : 'bg-black/40'}`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Moon Icon */}
        <div className="mt-6">
          <svg className="w-5 h-5 text-black/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TimeIndicator;
