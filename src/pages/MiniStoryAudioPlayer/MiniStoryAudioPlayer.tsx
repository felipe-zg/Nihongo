import React, { useRef, useState, useEffect } from "react";
import { Box, FlatList, Text, HStack, Pressable } from "native-base";

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

  const updateMediaSession = (index: number) => {
    if ("mediaSession" in navigator) {
      const trackName = tracks[index].replace(".mp3", "");
      navigator.mediaSession.metadata = new MediaMetadata({
        title: trackName,
        artist: `MiniStory ${level}`,
        album: `Level ${level}`,
        artwork: [
          { src: "/images/ministory.png", sizes: "512x512", type: "image/png" }, // replace with your image
        ],
      });

      // Media control handlers
      navigator.mediaSession.setActionHandler("play", () => {
        audioRef.current?.play();
        setIsPlaying(true);
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        audioRef.current?.pause();
        setIsPlaying(false);
      });
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        if (index > 0) playTrack(index - 1);
      });
      navigator.mediaSession.setActionHandler("nexttrack", () => {
        if (index < tracks.length - 1) playTrack(index + 1);
      });
    }
  };

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
      updateMediaSession(index);
    }
  };

  return (
    <Box pt={6}>
      <Text mb={4} bold color={"pink.400"} alignSelf={"center"}>
        ミニストーリー {level}
      </Text>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const isActive = currentTrackIndex === index && isPlaying;
          return (
            <Pressable onPress={() => playTrack(index)}>
              <HStack
                justifyContent="space-between"
                alignItems="center"
                borderBottomWidth={1}
                borderColor="gray.800"
                backgroundColor={isActive ? "gray.700" : "transparent"}
                p={2}
              >
                <Text color={isActive ? "pink.400" : "primary.700"}>
                  {item.replace(".mp3", "")}
                </Text>
                <Text color={isActive ? "pink.400" : "primary.700"}>
                  {isActive ? '⏸' : '▶︎'}
                </Text>
              </HStack>
            </Pressable>
          );
        }}
      />
    </Box>
  );
}
