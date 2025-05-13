import { motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import PhotoGallery from "./PhotoGallery";

interface CardBackProps {
  onClose: () => void;
}

export default function CardBack({ onClose }: CardBackProps) {
  return (
    <div className="card-back bg-white rounded-xl overflow-hidden">
      <div className="h-full w-full p-6 md:p-8 flex flex-col">
        {/* Header with decoration */}
        <div className="flex justify-between items-center mb-6">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heart className="text-primary text-2xl animate-pulse mr-2" />
            <h2 className="text-3xl font-dancing text-primary">For My Dearest Nidhi</h2>
          </motion.div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="text-xl" />
          </button>
        </div>
        
        {/* Message content */}
        <div className="flex flex-col md:flex-row h-[calc(100%-6rem)] gap-6">
          {/* Left column: message */}
          <motion.div 
            className="w-full md:w-1/2 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 overflow-y-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-playfair italic text-lg text-dark/80 mb-6">On your special day...</p>
            
            <p className="font-dancing text-2xl mb-4 text-primary">Happy Birthday, Nidhi!</p>
            
            <p className="font-montserrat text-dark/90 mb-6">
              Today is all about celebrating the amazing person that you are. Your smile brightens every room, your kindness touches every heart, and your presence makes every moment special.
            </p>
            
            <p className="font-montserrat text-dark/90 mb-6">
              I want you to know that your birthday is a celebration of all the joy and love you bring into this world - especially into my life.
            </p>
            
            <p className="font-dancing text-3xl text-secondary mb-4">I love you</p>
            
            <p className="font-montserrat text-dark/90 mb-8">
              No matter what life brings, I want you to know that I'm always with you - through every smile, every tear, every dream, and every adventure. My love for you grows stronger with each passing day.
            </p>
            
            <p className="font-dancing text-2xl text-primary">With all my heart,</p>
            <p className="font-playfair italic text-xl">Your Love</p>
          </motion.div>
          
          {/* Right column: photos */}
          <motion.div 
            className="w-full md:w-1/2 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
