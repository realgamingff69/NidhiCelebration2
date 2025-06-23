import { useState, useEffect, useRef } from "react";
import CardFront from "@/components/CardFront";
import CardBack from "@/components/CardBack";
import SpecialEffects from "@/components/SpecialEffects";
import { useAudio } from "@/hooks/useAudio";
import { Music, VolumeX, Heart } from "lucide-react";

export default function Home() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [sparklesActive, setSparklesActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Generated birthday melody
  const { playing, toggle } = useAudio();

  // Auto-play sparkles animation when card is opened
  useEffect(() => {
    if (isCardOpen) {
      setSparklesActive(true);
      
      // Reset sparkles after animation completes
      const timer = setTimeout(() => {
        setSparklesActive(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isCardOpen]);
  
  // Handle card click with animation
  const handleCardClick = () => {
    console.log("Card clicked, current state:", isCardOpen);
    
    // Only open the card if it's closed and not animating
    if (!isCardOpen && !isAnimating) {
      setIsAnimating(true);
      
      // Immediately try to start audio on user click
      if (!playing) {
        toggle();
      }
      
      // Set a delay before changing the state (to allow animation)
      setTimeout(() => {
        setIsCardOpen(true);
        setIsAnimating(false);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-gradient-to-br from-[#0a1929] to-[#172554] text-white">
      {/* Night sky background with stars */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Audio control */}
      <div className="fixed top-4 right-4 z-20">
        <button 
          onClick={toggle}
          className="bg-[#1e40af]/50 backdrop-blur-sm hover:bg-[#1e40af]/80 p-3 rounded-full shadow-md transition-all duration-300"
        >
          {playing ? <Music className="text-[#60a5fa] text-xl" /> : <VolumeX className="text-[#60a5fa] text-xl" />}
        </button>
      </div>
      
      {/* Page title - visible before opening */}
      {!isCardOpen && (
        <div className="mb-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-dancing font-bold text-[#60a5fa] mb-2">
            A Special Gift
          </h1>
          <p className="text-[#e0f2fe]/90 font-montserrat">
            Touch the card to open
          </p>
        </div>
      )}
      
      {/* Birthday Card Component with different behavior based on open state */}
      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Card wrapper - only clickable when card is closed */}
        <div 
          ref={cardRef}
          onClick={isCardOpen ? undefined : handleCardClick}
          className={`transition-all duration-500 ${isCardOpen ? '' : 'cursor-pointer hover:scale-[1.02]'} w-full max-w-4xl mx-auto relative`}
          style={{ 
            transform: isAnimating ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: isAnimating ? 'transform 0.8s ease-out' : 'transform 0.3s ease-out'
          }}
        >
          {/* Heart decoration */}
          <div className="absolute -top-4 -right-4 z-10 bg-[#3b82f6] text-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <Heart className="w-5 h-5" />
          </div>
          
          {/* Card content with conditional rendering - using mobile-optimized height */}
          <div className="w-full max-w-4xl mx-auto my-4 md:my-8">
            {isCardOpen ? (
              <div className="w-full h-[80vh] max-h-[700px] shadow-[0_0_25px_rgba(59,130,246,0.5)] rounded-xl overflow-hidden">
                <CardBack />
              </div>
            ) : (
              <div className="w-full h-[80vh] max-h-[700px] shadow-[0_0_25px_rgba(59,130,246,0.5)] rounded-xl overflow-hidden">
                <CardFront />
              </div>
            )}
          </div>
        </div>
        
        {/* Close button - only visible when card is open */}
        {isCardOpen && (
          <button 
            onClick={() => setIsCardOpen(false)}
            className="absolute -top-5 -right-5 z-30 bg-[#1e40af] text-white hover:bg-[#3b82f6] p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Footer with love note */}
      <div className="mt-12 text-center relative z-10">
        <p className="font-dancing text-[#60a5fa] text-2xl animate-float">Forever & Always with Love</p>
      </div>
      
      {/* Special Effects */}
      <SpecialEffects 
        showSparkles={sparklesActive}
        showConfetti={false}
      />
    </div>
  );
}
