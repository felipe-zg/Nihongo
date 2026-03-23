import { Button, HStack } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = ({ level, fileName, path }: { level?: 'N2' | 'N3'; fileName?: string; path?: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPaused, setIsPaused] = useState(true);

  const playAudio = () => {
    audioRef.current?.play();
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
  };

  const restartAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    playAudio();
  };

  const handleAudioPause = () => {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement as HTMLElement)?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

      if (e.code === 'Enter') {
        e.preventDefault();
        restartAudio();
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleAudioPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HStack>
      <audio 
        ref={audioRef} src={path ? `/audio/${path}` : `/audio/ministory/${level}/${fileName}`} />
      <Button 
        variant="outline" 
        colorScheme={isPaused ? "primary" : "secondary"} 
        onPress={restartAudio}
      >
        ⏸▶︎ •၊၊||၊|။|||| |
      </Button>
      <Button 
        variant="outline" 
        colorScheme={"primary"} 
        onPress={handleAudioPause}
        ml={2}
      >
        {isPaused ? '▶︎' : '⏸'}
      </Button>
    </HStack>
  );
};

export default AudioPlayer;
