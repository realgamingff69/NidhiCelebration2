import { useState, useCallback } from "react";

export function useAudio(url?: string) {
  const [playing, setPlaying] = useState(false);

  const playMelody = useCallback(() => {
    // Create a simple audio context with a generated birthday tune
    const createAudioContext = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        return audioContext;
      } catch (e) {
        console.log('Web Audio API not supported');
        return null;
      }
    };

    // Simple birthday melody frequencies (Happy Birthday)
    const melodyNotes = [
      261.63, 261.63, 293.66, 261.63, 349.23, 329.63, // Happy Birthday to you
      261.63, 261.63, 293.66, 261.63, 392.00, 349.23, // Happy Birthday to you
      261.63, 261.63, 523.25, 440.00, 349.23, 329.63, 293.66, // Happy Birthday dear...
      466.16, 466.16, 440.00, 349.23, 392.00, 349.23 // Happy Birthday to you
    ];

    const audioContext = createAudioContext();
    if (!audioContext) return;

    const noteLength = 0.5; // Duration of each note in seconds

    const playNote = (frequency: number, duration: number, delay: number) => {
      setTimeout(() => {
        if (audioContext.state === 'closed') return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      }, delay);
    };

    melodyNotes.forEach((note, index) => {
      playNote(note, noteLength, index * noteLength * 1000);
    });

    // Set playing to false when melody ends
    setTimeout(() => {
      setPlaying(false);
    }, melodyNotes.length * noteLength * 1000);
  }, []);

  const toggle = useCallback(() => {
    if (!playing) {
      setPlaying(true);
      playMelody();
    } else {
      setPlaying(false);
    }
  }, [playing, playMelody]);

  return { playing, toggle };
}
