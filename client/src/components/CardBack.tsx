import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import PhotoGallery from "./PhotoGallery";

export default function CardBack() {
  return (
    <div className="card-back bg-white rounded-xl overflow-hidden">
      <div className="h-full w-full flex flex-col">
        {/* Header with decoration */}
        <motion.div 
          className="w-full bg-gradient-to-r from-primary/30 to-secondary/20 py-4 px-6 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Heart className="text-primary text-2xl animate-pulse mr-2" />
          <h2 className="text-3xl font-dancing text-primary">For My Dearest Nidhi</h2>
        </motion.div>
        
        {/* Message content */}
        <div className="flex flex-col md:flex-row h-[calc(100%-5rem)] overflow-hidden">
          {/* Left column: message */}
          <motion.div 
            className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Birthday Candle */}
            <div className="absolute -top-10 right-4 md:right-8 w-20 h-48 flex flex-col items-center justify-start pointer-events-none">
              <div className="w-4 h-32 bg-gradient-to-b from-[#FF9A3C] to-primary rounded-full shadow-lg relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-3 h-10 bg-gradient-to-t from-[#FFD700] to-[#FF9A3C] rounded-t-full"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FF9A3C]/50 rounded-full animate-pulse filter blur-sm"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-3 h-4 bg-accent rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-xl p-6 mb-6"
            >
              <p className="font-playfair italic text-lg text-dark/80 mb-2">On your special day...</p>
              
              <p className="font-dancing text-3xl mb-4 text-primary">Happy Birthday, Nidhi!</p>
              
              <p className="font-montserrat text-dark/90 mb-6">
                Today is all about celebrating the amazing person that you are. Your smile brightens every room, your kindness touches every heart, and your presence makes every moment special.
              </p>
              
              <p className="font-montserrat text-dark/90 mb-6">
                You are a very special girl, and you should smile and laugh always. Your happiness means the world to me, and seeing your beautiful smile lights up my day.
              </p>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-inner my-6 border-l-4 border-primary">
                <p className="font-dancing text-3xl text-primary mb-2">I love you</p>
                <p className="font-montserrat text-dark/90">
                  No matter what life brings, I want you to know that I'm always with you - through every situation, every smile, every tear, every dream, and every adventure. My love for you grows stronger with each passing day.
                </p>
              </div>
              
              <p className="font-dancing text-2xl text-primary mt-6">With all my heart,</p>
              <p className="font-playfair italic text-xl">Your Love</p>
            </motion.div>
          </motion.div>
          
          {/* Right column: photos */}
          <motion.div 
            className="w-full md:w-1/2 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative h-full">
              <PhotoGallery />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
