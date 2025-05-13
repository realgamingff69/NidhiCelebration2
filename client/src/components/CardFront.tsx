import { motion } from "framer-motion";

export default function CardFront() {
  return (
    <div className="card-front bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl overflow-hidden flex flex-col">
      <div className="w-full h-full relative">
        {/* Card fold effect */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/50 to-white/10"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]"></div>
        </div>
        
        {/* Card content */}
        <div className="relative h-full w-full flex flex-col items-center justify-center p-8 text-center">
          <div className="ribbon hidden md:block">
            <span className="ribbon-content">Special!</span>
          </div>
          
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <svg className="w-40 h-40 md:w-52 md:h-52 mx-auto" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 384c-97.2 0-176-78.8-176-176S158.8 80 256 80s176 78.8 176 176-78.8 176-176 176z" fill="#FF5E85"/>
              <path d="M256 144c-61.8 0-112 50.2-112 112s50.2 112 112 112 112-50.2 112-112-50.2-112-112-112zm0 192c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" fill="#8A4FFF"/>
              <path d="M256 240c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" fill="#FFD700"/>
              <path d="M256 128v32M256 352v32M128 256h32M352 256h32" stroke="#FF5E85" strokeWidth="16" strokeLinecap="round"/>
              <path d="M181.3 181.3l22.6 22.6M308.1 308.1l22.6 22.6M181.3 330.7l22.6-22.6M308.1 203.9l22.6-22.6" stroke="#8A4FFF" strokeWidth="16" strokeLinecap="round"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="my-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-dancing font-bold text-primary drop-shadow-sm mb-3">
              Happy Birthday
            </h1>
            <h2 className="text-4xl md:text-5xl font-dancing font-bold text-secondary mb-6">
              Nidhi!
            </h2>
            <p className="font-montserrat text-lg text-dark/80">
              Touch to open your special card
            </p>
          </motion.div>
          
          <motion.div
            className="mt-auto animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <svg className="w-10 h-10 text-secondary/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21L21 12M12 21L3 12M12 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
