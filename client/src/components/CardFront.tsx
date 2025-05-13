export default function CardFront() {
  return (
    <div className="bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl overflow-hidden flex flex-col">
      <div className="w-full h-full relative">
        {/* Card fold effect */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/50 to-white/10"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]"></div>
        </div>
        
        {/* Card content */}
        <div className="relative h-full w-full flex flex-col items-center justify-between p-4 md:p-8 text-center">
          {/* Ribbon - only on larger screens */}
          <div className="ribbon hidden md:block absolute -right-5 top-8 z-10">
            <span className="ribbon-content">Special!</span>
          </div>
          
          {/* Top section with photo */}
          <div className="mt-6 md:mt-8">
            <img 
              src="/images/nidhi/photo2.jpg" 
              alt="Nidhi" 
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-primary shadow-lg mx-auto"
            />
          </div>
          
          {/* Middle section with birthday message */}
          <div className="flex-1 flex flex-col items-center justify-center my-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-dancing font-bold text-primary drop-shadow-sm mb-2 md:mb-3">
              Happy Birthday
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-dancing font-bold text-secondary mb-4 md:mb-6">
              Nidhi!
            </h2>
            <p className="font-montserrat text-base md:text-lg text-dark/80 max-w-xs md:max-w-md">
              Touch to open your special card
            </p>
          </div>
          
          {/* Bottom section with arrow */}
          <div className="mb-6 md:mb-8 animate-bounce">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-secondary/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21L21 12M12 21L3 12M12 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
