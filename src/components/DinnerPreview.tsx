
import { useIsMobile } from "@/hooks/use-mobile";

interface DinnerPreviewProps {
  isActive: boolean;
  progress: number;
}

const DinnerPreview = ({ isActive, progress }: DinnerPreviewProps) => {
  const isMobile = useIsMobile();
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=600&fit=crop",
      caption: "APEROL SPRITZ"
    },
    {
      src: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=600&fit=crop",
      caption: "TAGLIERE DI SALUMI"
    },
    {
      src: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=600&fit=crop",
      caption: "BISTECCA ALLA FIORENTINA"
    },
    {
      src: "https://images.unsplash.com/photo-1615937691194-471e9f7b6514?w=400&h=600&fit=crop",
      caption: "SALMONE SCOTTATO"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Heading */}
        <div 
          className="text-center mb-24 transition-all duration-1000"
          style={{
            opacity: isActive ? 1 : 0,
            transform: `translateY(${isActive ? 0 : 50}px)`
          }}
        >
          <h2 className="font-tan-pearl text-6xl md:text-8xl lg:text-9xl text-foreground uppercase tracking-wider">
            DINNER
          </h2>
        </div>

        {/* Images Grid */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-16' : 'grid-cols-2 lg:grid-cols-4 gap-12'} items-start`}>
          {images.map((image, index) => {
            const imageProgress = Math.max(0, Math.min(1, (progress - 0.3 - index * 0.1) * 2));
            
            return (
              <div
                key={index}
                className="transition-all duration-700 ease-out"
                style={{
                  opacity: imageProgress,
                  transform: `translateY(${(1 - imageProgress) * 60}px)`
                }}
              >
                <div className="aspect-[2/3] overflow-hidden bg-gray-200 shadow-xl">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-tan-pearl text-lg text-foreground mt-6 tracking-wider uppercase text-center">
                  {image.caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DinnerPreview;
