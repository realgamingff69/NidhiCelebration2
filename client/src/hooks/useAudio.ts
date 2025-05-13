import { useState, useEffect } from "react";

export function useAudio(url: string) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Create audio element
    const audioElement = new Audio(url);
    audioElement.loop = true;
    setAudio(audioElement);

    // Clean up
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = "";
      }
    };
  }, [url]);

  const toggle = () => {
    if (!audio) return;
    
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
    
    setPlaying(!playing);
  };

  return { playing, toggle };
}
