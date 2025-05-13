import { Heart } from "lucide-react";
import PhotoGallery from "./PhotoGallery";
import { useState } from "react";

export default function CardBack() {
  const [activeTab, setActiveTab] = useState<'message'|'photos'>('message');
  
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="h-full w-full flex flex-col">
        {/* Header with decoration */}
        <div 
          className="w-full bg-gradient-to-r from-primary/30 to-secondary/20 py-3 px-4 flex items-center justify-center"
        >
          <Heart className="text-primary text-2xl animate-pulse mr-2" />
          <h2 className="text-2xl md:text-3xl font-dancing text-primary">For My Dearest Nidhi</h2>
        </div>
        
        {/* Tabs for mobile view */}
        <div className="md:hidden flex border-b border-primary/20">
          <button 
            onClick={() => setActiveTab('message')}
            className={`flex-1 py-2 text-center font-medium ${activeTab === 'message' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
          >
            Message
          </button>
          <button 
            onClick={() => setActiveTab('photos')}
            className={`flex-1 py-2 text-center font-medium ${activeTab === 'photos' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
          >
            Photos
          </button>
        </div>
        
        {/* Message content with responsive layout */}
        <div className="flex flex-col md:flex-row h-[calc(100%-4rem)] md:h-[calc(100%-3.75rem)] overflow-hidden">
          {/* Message section - visible on desktop or when message tab is active on mobile */}
          <div 
            className={`w-full md:w-1/2 p-3 md:p-6 overflow-y-auto relative ${activeTab === 'message' ? 'block' : 'hidden md:block'}`}
          >
            {/* Birthday Candle */}
            <div className="absolute -top-6 right-2 md:right-6 w-16 md:w-20 h-40 flex flex-col items-center justify-start pointer-events-none">
              <div className="w-3 md:w-4 h-28 md:h-32 bg-gradient-to-b from-[#FF9A3C] to-primary rounded-full shadow-lg relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-2 md:w-3 h-8 md:h-10 bg-gradient-to-t from-[#FFD700] to-[#FF9A3C] rounded-t-full"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-[#FF9A3C]/50 rounded-full animate-pulse filter blur-sm"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-2 md:w-3 h-3 md:h-4 bg-accent rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Message content */}
            <div
              className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-xl p-4 md:p-6 mb-2 md:mb-6 text-sm md:text-base"
            >
              <p className="font-playfair italic text-base md:text-lg text-dark/80 mb-2">On your special day...</p>
              
              <p className="font-dancing text-2xl md:text-3xl mb-3 md:mb-4 text-primary">Happy Birthday, Nidhi!</p>
              
              <p className="font-montserrat text-dark/90 mb-4 md:mb-6">
                Today is all about celebrating the amazing person that you are. Your smile brightens every room, your kindness touches every heart, and your presence makes every moment special.
              </p>
              
              <p className="font-montserrat text-dark/90 mb-4 md:mb-6">
                You are a very special girl, and you should smile and laugh always. Your happiness means the world to me, and seeing your beautiful smile lights up my day.
              </p>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-inner my-4 md:my-6 border-l-4 border-primary">
                <p className="font-dancing text-xl md:text-3xl text-primary mb-1 md:mb-2">I love you</p>
                <p className="font-montserrat text-dark/90 text-sm md:text-base">
                  No matter what life brings, I want you to know that I'm always with you - through every situation, every smile, every tear, every dream, and every adventure. My love for you grows stronger with each passing day.
                </p>
              </div>
              
              <p className="font-dancing text-xl md:text-2xl text-primary mt-4 md:mt-6">With all my heart,</p>
              <p className="font-playfair italic text-lg md:text-xl">Your Love</p>
            </div>
          </div>
          
          {/* Photos section - visible on desktop or when photos tab is active on mobile */}
          <div 
            className={`w-full md:w-1/2 rounded-xl overflow-hidden h-full ${activeTab === 'photos' ? 'block' : 'hidden md:block'}`}
          >
            <div className="h-full">
              <PhotoGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
