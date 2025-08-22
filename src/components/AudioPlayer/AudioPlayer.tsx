import { Button } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = ({ level, fileName }: { level: 'N2' | 'N3'; fileName: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPaused, setIsPaused] = useState(true);

  const playAudio = () => {
    audioRef.current?.play();
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
  };

  const handleAudioPress = () => {
    if (audioRef.current?.paused) {
      playAudio();
    } else {
      pauseAudio();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={`/audio/ministory/${level}/${fileName}`} />
      <Button 
        variant="outline" 
        colorScheme={isPaused ? "primary" : "secondary"} 
        onPress={handleAudioPress}
      >
        ⏸▶︎ •၊၊||၊|။|||| |
      </Button>
    </div>
  );
};

export default AudioPlayer;
