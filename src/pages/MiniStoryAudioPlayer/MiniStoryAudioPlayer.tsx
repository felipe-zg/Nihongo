import React, { useRef, useState, useEffect } from "react";
import { Box, FlatList, Text, Button, HStack } from "native-base";

const NUMBER_OF_TRACKS = { N2: 452, N3: 371 };

export default function MiniStoryAudioPlayer({ level }: { level: 'N2' | 'N3' }) {
  const tracks = Array.from({ length: NUMBER_OF_TRACKS[level] }, (_, i) => `T${i + 1}.mp3`);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize audio element once
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;

    const handleEnded = () => {
      if (currentTrackIndex !== null && currentTrackIndex < tracks.length - 1) {
        const nextIndex = currentTrackIndex + 1;
        setCurrentTrackIndex(nextIndex);
        audio.src = `/audio/ministory/${level}/${tracks[nextIndex]}`;
        audio.play();
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackIndex]);

  const playTrack = (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentTrackIndex === index && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.src = `/audio/ministory/${level}/${tracks[index]}`; // path where mp3 files are hosted
      audio.play();
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  return (
    <Box p={4}>
      <Text mb={4} bold color={"pink.400"} alignSelf={"center"}>
        ミニストーリー {level}
      </Text>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <HStack
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderColor="gray.800"
          >
            <Text color={"pink.400"}>{item.replace(".mp3", "")}</Text>
            <Button
              size="xs"
              variant="outline" 
              colorScheme={currentTrackIndex === index && isPlaying ? "secondary" : "primary"}
              onPress={() => playTrack(index)}
              borderColor={"transparent"}
            >
              {currentTrackIndex === index && isPlaying ? '⏸' : '▶︎'}
            </Button>
          </HStack>
        )}
      />
    </Box>
  );
}
