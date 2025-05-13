import { useState } from "react";
import BirthdayCard from "@/components/BirthdayCard";
import SpecialEffects from "@/components/SpecialEffects";
import { useAudio } from "@/hooks/useAudio";
import { Heart, Music, VolumeX } from "lucide-react";

export default function Home() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { playing, toggle } = useAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

  const triggerConfetti = () => {
    setConfettiActive(true);
    if (!isCardOpen) {
      setIsCardOpen(true);
    }
    setShowMessage(true);
    
    // Reset confetti after animation completes
    setTimeout(() => {
      setConfettiActive(false);
    }, 5000);
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
      
      {/* Birthday Card Component */}
      <BirthdayCard 
        isOpen={isCardOpen} 
        onOpen={() => setIsCardOpen(true)}
        onClose={() => setIsCardOpen(false)}
      />
      
      {/* Birthday wish button */}
      <button 
        onClick={triggerConfetti}
        className="mt-6 bg-secondary hover:bg-secondary/90 text-white font-montserrat font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
      >
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25H8.25C8.25 13.3211 9.92893 15 12 15Z" fill="currentColor"/>
            <path d="M18 8.25H16.5V7.5C16.5 6.25736 15.4926 5.25 14.25 5.25C13.0074 5.25 12 6.25736 12 7.5V8.25H6C4.75736 8.25 3.75 9.25736 3.75 10.5V16.5C3.75 17.7426 4.75736 18.75 6 18.75H18C19.2426 18.75 20.25 17.7426 20.25 16.5V10.5C20.25 9.25736 19.2426 8.25 18 8.25Z" fill="currentColor"/>
            <path d="M13.5 7.5C13.5 7.08579 13.8358 6.75 14.25 6.75C14.6642 6.75 15 7.08579 15 7.5V8.25H13.5V7.5Z" fill="currentColor"/>
          </svg>
          Send Birthday Wishes
        </span>
      </button>
      
      {/* Footer with love note */}
      <div className="mt-12 text-center">
        <p className="font-dancing text-primary text-2xl animate-float">Forever & Always with Love</p>
      </div>
      
      {/* Special Effects */}
      <SpecialEffects 
        showSparkles={isCardOpen}
        showConfetti={confettiActive}
      />
      
      {/* Success Message Modal */}
      {showMessage && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          onClick={() => setShowMessage(false)}
        >
          <div className="bg-white rounded-xl p-8 max-w-md text-center transform transition-all duration-500 scale-100">
            <h2 className="text-4xl font-dancing text-primary mb-4">Birthday Wishes Sent!</h2>
            <p className="font-montserrat mb-6">Your love and wishes have been delivered to Nidhi!</p>
            <button 
              onClick={() => setShowMessage(false)}
              className="bg-secondary text-white px-6 py-2 rounded-full"
            >
              <Heart className="inline-block mr-2 h-4 w-4" />
              Thank You
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
