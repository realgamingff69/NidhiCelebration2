import { useState, useEffect } from "react";

export function useAudio(url: string) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Create audio element
    const audioElement = new Audio(url);
    audioElement.loop = false; // Don't loop birthday song
    audioElement.volume = 0.7; // Slightly reduce volume
    setAudio(audioElement);
    
    // Add ended event listener to update playing state
    const handleEnded = () => {
      setPlaying(false);
    };
    
    audioElement.addEventListener('ended', handleEnded);

    // Clean up
    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleEnded);
        audioElement.pause();
        audioElement.src = "";
      }
    };
  }, [url]);

  const toggle = () => {
    if (!audio) return;
    
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      // Reset audio to beginning if it already played
      if (audio.currentTime > 0) {
        audio.currentTime = 0;
      }
      
      // Try to play with better error handling
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlaying(true);
            console.log('Audio started playing successfully');
          })
          .catch(e => {
            console.log('Audio play failed:', e);
            setPlaying(false);
          });
      }
    }
  };

  return { playing, toggle };
}
