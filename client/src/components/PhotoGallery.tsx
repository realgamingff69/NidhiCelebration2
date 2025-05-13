import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/photos";

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const totalImages = galleryImages.length;
  
  const showImage = (index: number) => {
    let newIndex = index;
    if (newIndex < 0) newIndex = totalImages - 1;
    if (newIndex >= totalImages) newIndex = 0;
    
    setCurrentIndex(newIndex);
  };
  
  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    showImage(currentIndex + 1);
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    showImage(currentIndex - 1);
  };
  
  // Auto-advance gallery
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      showImage(currentIndex + 1);
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);
  
  // Pause auto-advance on hover
  const pauseAutoAdvance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  
  const resumeAutoAdvance = () => {
    intervalRef.current = setInterval(() => {
      showImage(currentIndex + 1);
    }, 5000);
  };
  
  return (
    <div 
      id="imageGallery" 
      className="h-[calc(100vh-16rem)] overflow-hidden relative max-w-full"
      onMouseEnter={pauseAutoAdvance}
      onMouseLeave={resumeAutoAdvance}
    >
      <div 
        className="image-gallery flex h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}
      >
        {galleryImages.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img 
              src={image.url} 
              className="w-full h-full object-contain" 
              alt={image.caption} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <p className="text-white font-dancing text-xl p-4 text-center w-full">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gallery controls - now with larger, more visible buttons */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between z-10 px-2">
        <button 
          onClick={prevImage}
          className="bg-white/70 hover:bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextImage}
          className="bg-white/70 hover:bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Image indicators */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-10">
        {galleryImages.map((_, index) => (
          <button 
            key={index}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              showImage(index);
            }}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
