import { Heart, Stars } from "lucide-react";
import PhotoGallery from "./PhotoGallery";

export default function CardBack() {
  return (
    <div className="bg-[#0a1929] rounded-xl overflow-hidden text-white">
      <div className="h-full w-full flex flex-col">
        {/* Header with decoration */}
        <div 
          className="w-full bg-gradient-to-r from-[#1a365d]/80 to-[#2c5282]/60 py-3 px-4 flex items-center justify-center border-b border-[#4299e1]/30"
        >
          <Heart className="text-[#4299e1] text-2xl animate-pulse mr-2" />
          <h2 className="text-2xl md:text-3xl font-dancing text-[#63b3ed]">For My Dearest Nidhi</h2>
        </div>
        
        {/* Stars in the background */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Content with scrollable view - single section for mobile */}
        <div className="h-[calc(100%-3.75rem)] overflow-y-auto relative z-10">
          {/* Message section */}
          <div className="w-full p-3 md:p-6 relative">
            {/* Birthday Candle */}
            <div className="absolute -top-6 right-2 md:right-6 w-16 md:w-20 h-40 flex flex-col items-center justify-start pointer-events-none">
              <div className="w-3 md:w-4 h-28 md:h-32 bg-gradient-to-b from-[#FF9A3C] to-[#f97316] rounded-full shadow-lg relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-2 md:w-3 h-8 md:h-10 bg-gradient-to-t from-[#FFD700] to-[#FF9A3C] rounded-t-full"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-[#FF9A3C]/50 rounded-full animate-pulse filter blur-sm"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-2 md:w-3 h-3 md:h-4 bg-[#f59e0b] rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Message content */}
            <div
              className="bg-gradient-to-br from-[#1e3a8a]/30 to-[#2563eb]/10 rounded-xl p-4 md:p-6 mb-4 text-sm md:text-base"
            >
              <p className="font-playfair italic text-base md:text-lg text-[#93c5fd] mb-2">On your special day...</p>
              
              <p className="font-dancing text-2xl md:text-3xl mb-3 md:mb-4 text-[#60a5fa]">Happy Birthday, Nidhi!</p>
              
              <p className="font-montserrat text-[#e0f2fe]/90 mb-4 md:mb-6">
                Today is all about celebrating the amazing person that you are. Your smile brightens every room, your kindness touches every heart, and your presence makes every moment special.
              </p>
              
              <p className="font-montserrat text-[#e0f2fe]/90 mb-4 md:mb-6">
                You are a very special girl, and you should smile and laugh always. Your happiness means the world to me, and seeing your beautiful smile lights up my day.
              </p>
              
              <div className="bg-[#1e40af]/30 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-inner my-4 md:my-6 border-l-4 border-[#3b82f6]">
                <p className="font-dancing text-2xl md:text-3xl text-[#60a5fa] mb-2 md:mb-3">I love you</p>
                <p className="font-montserrat text-[#e0f2fe]/90 text-sm md:text-base">
                  No matter what life brings, I want you to know that I'm always with you - through every situation, every smile, every tear, every dream, and every adventure. My love for you grows stronger with each passing day.
                </p>
              </div>
              
              <p className="font-dancing text-xl md:text-2xl text-[#60a5fa] mt-4 md:mt-6">With all my heart,</p>
              <p className="font-playfair italic text-lg md:text-xl text-[#93c5fd]">Your Love</p>
            </div>
          </div>
          
          {/* Photo gallery - below the message on mobile and desktop */}
          <div className="w-full h-[300px] md:h-[350px] overflow-hidden">
            <PhotoGallery />
          </div>
        </div>
      </div>
    </div>
  );
}
