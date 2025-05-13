import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
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
  
  const nextImage = () => showImage(currentIndex + 1);
  const prevImage = () => showImage(currentIndex - 1);
  
  // Auto-advance gallery
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextImage();
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
      nextImage();
    }, 5000);
  };
  
  return (
    <div 
      id="imageGallery" 
      className="h-full overflow-hidden"
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
              className="w-full h-full object-cover" 
              alt={image.caption} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <p className="text-white font-dancing text-xl p-4">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gallery controls */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
        <motion.button 
          onClick={prevImage}
          className="bg-white/70 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft />
        </motion.button>
        <motion.button 
          onClick={nextImage}
          className="bg-white/70 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight />
        </motion.button>
      </div>
      
      {/* Image indicators */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {galleryImages.map((_, index) => (
          <span 
            key={index}
            onClick={() => showImage(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-white/70' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
