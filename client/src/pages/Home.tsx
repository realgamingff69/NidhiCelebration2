import { useState, useEffect } from "react";
import BirthdayCard from "@/components/BirthdayCard";
import SpecialEffects from "@/components/SpecialEffects";
import { useAudio } from "@/hooks/useAudio";
import { Music, VolumeX, Heart } from "lucide-react";

export default function Home() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [sparklesActive, setSparklesActive] = useState(false);
  const { playing, toggle } = useAudio("https://cdn.pixabay.com/download/audio/2022/03/23/audio_8f1585b80d.mp3");

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
  
  // Handle card click
  const handleCardClick = () => {
    console.log("Card clicked, current state:", isCardOpen);
    setIsCardOpen(!isCardOpen);
      
    // Auto-play the birthday song when card is opened
    if (!isCardOpen && !playing) {
      toggle();
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
      
      {/* Birthday Card Component */}
      <div 
        onClick={handleCardClick}
        className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] w-full max-w-4xl mx-auto relative"
      >
        <div className="absolute -top-4 -right-4 z-10 bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <Heart className="w-5 h-5" />
        </div>
        
        <BirthdayCard 
          isOpen={isCardOpen}
        />
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
