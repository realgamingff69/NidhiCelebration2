import { motion } from "framer-motion";
import { Gift } from "lucide-react";

interface CardFrontProps {
  onOpen: () => void;
}

export default function CardFront({ onOpen }: CardFrontProps) {
  return (
    <div className="card-front bg-white rounded-xl overflow-hidden flex flex-col md:flex-row">
      {/* Left side (image) */}
      <div 
        className="w-full md:w-1/2 h-48 md:h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600')" }}
      >
        <div className="h-full w-full bg-gradient-to-r from-black/50 to-transparent flex items-center justify-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-dancing font-bold text-center px-6 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Happy Birthday<br/>Nidhi!
          </motion.h1>
        </div>
      </div>
      
      {/* Right side (text) */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center justify-center">
        <div className="ribbon hidden md:block">
          <span className="ribbon-content">Special!</span>
        </div>
        
        <motion.p 
          className="text-center text-2xl font-playfair italic text-dark mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A special birthday card for a special person...
        </motion.p>
        
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
            className="w-24 h-24 object-cover rounded-full border-4 border-primary shadow-lg" 
            alt="Birthday Gift" 
          />
        </motion.div>
        
        <motion.button 
          onClick={onOpen}
          className="bg-primary hover:bg-primary/90 text-white font-montserrat font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span>Open Your Gift</span>
          <Gift className="ml-2 h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
}
