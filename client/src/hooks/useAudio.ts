import { useState, useEffect } from "react";

export function useAudio(url: string) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Create audio element
    const audioElement = new Audio(url);
    audioElement.loop = false; // Don't loop birthday song
    audioElement.volume = 0.7; // Slightly reduce volume
    audioElement.preload = 'auto'; // Preload audio
    audioElement.crossOrigin = 'anonymous'; // Handle CORS
    setAudio(audioElement);
    
    // Add event listeners
    const handleEnded = () => {
      setPlaying(false);
    };
    
    const handleCanPlay = () => {
      console.log('Audio can play');
    };
    
    const handleError = (e: Event) => {
      console.log('Audio error:', e);
      setPlaying(false);
    };
    
    audioElement.addEventListener('ended', handleEnded);
    audioElement.addEventListener('canplay', handleCanPlay);
    audioElement.addEventListener('error', handleError);

    // Clean up
    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleEnded);
        audioElement.removeEventListener('canplay', handleCanPlay);
        audioElement.removeEventListener('error', handleError);
        audioElement.pause();
        audioElement.src = "";
      }
    };
  }, [url]);

  const toggle = () => {
    if (!audio) {
      console.log('No audio element available');
      return;
    }
    
    if (playing) {
      audio.pause();
      setPlaying(false);
      console.log('Audio paused');
    } else {
      // Reset audio to beginning if it already played
      if (audio.currentTime > 0) {
        audio.currentTime = 0;
      }
      
      console.log('Attempting to play audio...');
      
      // Force play the audio
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlaying(true);
            console.log('Audio started playing successfully');
          })
          .catch(e => {
            console.log('Audio play failed:', e);
            console.log('Audio ready state:', audio.readyState);
            console.log('Audio network state:', audio.networkState);
            setPlaying(false);
            
            // Try alternative approach - create new audio element
            try {
              const newAudio = new Audio(audio.src);
              newAudio.volume = 0.7;
              newAudio.play()
                .then(() => {
                  console.log('Fallback audio play successful');
                  setPlaying(true);
                })
                .catch(err => console.log('Fallback audio failed:', err));
            } catch (err) {
              console.log('Fallback creation failed:', err);
            }
          });
      }
    }
  };

  return { playing, toggle };
}
