import { useState, useEffect } from "react";
import CardFront from "@/components/CardFront";
import CardBack from "@/components/CardBack";
import SpecialEffects from "@/components/SpecialEffects";
import { useAudio } from "@/hooks/useAudio";
import { Music, VolumeX, Heart } from "lucide-react";

export default function Home() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [sparklesActive, setSparklesActive] = useState(false);
  const { playing, toggle } = useAudio("https://assets.mixkit.co/sfx/preview/mixkit-sweet-happy-slow-piano-melody-726.mp3");

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
  
  // Handle card click - only allow opening, not closing
  const handleCardClick = () => {
    console.log("Card clicked, current state:", isCardOpen);
    
    // Only open the card if it's closed, don't allow closing by clicking
    if (!isCardOpen) {
      setIsCardOpen(true);
      
      // Auto-play the birthday song when card is opened
      if (!playing) {
        toggle();
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-gradient-to-br from-[#FAFAFA] to-primary/10">
      {/* Audio control */}
      <div className="fixed top-4 right-4 z-20">
        <button 
          onClick={toggle}
          className="bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-md transition-all duration-300"
        >
          {playing ? <Music className="text-secondary text-xl" /> : <VolumeX className="text-secondary text-xl" />}
        </button>
      </div>
      
      {/* Page title - visible before opening */}
      {!isCardOpen && (
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-dancing font-bold text-primary mb-2">
            A Special Gift
          </h1>
          <p className="text-dark/70 font-montserrat">
            Touch the card to open
          </p>
        </div>
      )}
      
      {/* Birthday Card Component with different behavior based on open state */}
      <div className="w-full max-w-4xl mx-auto relative">
        {/* Card wrapper - only clickable when card is closed */}
        <div 
          onClick={isCardOpen ? undefined : handleCardClick}
          className={`transition-transform duration-300 ${isCardOpen ? '' : 'cursor-pointer hover:scale-[1.02]'} w-full max-w-4xl mx-auto relative`}
        >
          {/* Heart decoration */}
          <div className="absolute -top-4 -right-4 z-10 bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <Heart className="w-5 h-5" />
          </div>
          
          {/* Card content with conditional rendering */}
          <div className="w-full max-w-4xl mx-auto my-8">
            {isCardOpen ? (
              <div className="w-full h-[600px] md:h-[500px] shadow-2xl rounded-xl overflow-hidden">
                <CardBack />
              </div>
            ) : (
              <div className="w-full h-[600px] md:h-[500px] shadow-2xl rounded-xl overflow-hidden">
                <CardFront />
              </div>
            )}
          </div>
        </div>
        
        {/* Close button - only visible when card is open */}
        {isCardOpen && (
          <button 
            onClick={() => setIsCardOpen(false)}
            className="absolute -top-5 -right-5 z-30 bg-white text-primary hover:bg-primary hover:text-white p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Footer with love note */}
      <div className="mt-12 text-center">
        <p className="font-dancing text-primary text-2xl animate-float">Forever & Always with Love</p>
      </div>
      
      {/* Special Effects */}
      <SpecialEffects 
        showSparkles={sparklesActive}
        showConfetti={false}
      />
    </div>
  );
}
