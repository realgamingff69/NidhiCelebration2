import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SpecialEffectsProps {
  showSparkles: boolean;
  showConfetti: boolean;
}

export default function SpecialEffects({ showSparkles, showConfetti }: SpecialEffectsProps) {
  const sparklesRef = useRef<HTMLDivElement>(null);
  const confettiRef = useRef<HTMLDivElement>(null);
  
  // Colors for confetti
  const colors = ['#FF5E85', '#8A4FFF', '#FFD700', '#FF9A3C', '#A1FCDF'];
  
  // Create sparkles
  useEffect(() => {
    if (!showSparkles || !sparklesRef.current) return;
    
    const sparklesContainer = sparklesRef.current;
    const createSparkles = () => {
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const sparkle = document.createElement('div');
          sparkle.className = 'absolute w-3 h-3 animate-sparkle';
          sparkle.style.top = `${Math.random() * 100}vh`;
          sparkle.style.left = `${Math.random() * 100}vw`;
          sparkle.style.opacity = '0';
          sparkle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          `;
          
          sparklesContainer.appendChild(sparkle);
          
          setTimeout(() => {
            sparkle.style.opacity = '1';
          }, 10);
          
          setTimeout(() => {
            sparkle.style.opacity = '0';
            setTimeout(() => {
              sparkle.remove();
            }, 500);
          }, 2000);
        }, i * 200);
      }
    };
    
    createSparkles();
    
    return () => {
      // Cleanup any remaining sparkles
      while (sparklesContainer.firstChild) {
        sparklesContainer.removeChild(sparklesContainer.firstChild);
      }
    };
  }, [showSparkles]);
  
  // Create confetti
  useEffect(() => {
    if (!showConfetti || !confettiRef.current) return;
    
    const confettiContainer = confettiRef.current;
    
    // Clear any existing confetti
    while (confettiContainer.firstChild) {
      confettiContainer.removeChild(confettiContainer.firstChild);
    }
    
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        const shape = Math.random() > 0.5 ? '50%' : '0';
        
        confetti.style.position = 'absolute';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '-20px';
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = shape;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 0.5;
        
        confetti.style.animation = `confetti ${duration}s ease-in ${delay}s forwards`;
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, (duration + delay) * 1000);
      }, i * 20);
    }
  }, [showConfetti]);
  
  return (
    <>
      {/* Sparkle container */}
      <div 
        ref={sparklesRef}
        className="fixed inset-0 pointer-events-none z-10"
      />
      
      {/* Confetti container */}
      <div
        ref={confettiRef}
        className="fixed inset-0 pointer-events-none z-50"
      />
    </>
  );
}
