import { motion } from "framer-motion";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

interface BirthdayCardProps {
  isOpen: boolean;
}

export default function BirthdayCard({ isOpen }: BirthdayCardProps) {
  return (
    <div className="card-outer w-full max-w-4xl mx-auto my-8">
      <motion.div 
        className={`card-inner relative w-full h-[600px] md:h-[500px] shadow-2xl rounded-xl ${isOpen ? 'card-open' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Card Front - shown when closed */}
        <CardFront />
        
        {/* Card Back - shown when open */}
        <CardBack />
      </motion.div>
    </div>
  );
}
