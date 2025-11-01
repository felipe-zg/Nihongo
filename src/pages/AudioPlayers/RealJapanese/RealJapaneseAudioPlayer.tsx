import React, { useRef, useState, useEffect } from "react";
import { Box, FlatList, Text, HStack, Pressable } from "native-base";

const FILE_NAMES = [
  "01-01",
  "01-02",
  "01-03",
  "01-04",
  "01-05",
  "01-06",
  "01-07",
  "01-08",
  "01-09",
  "01-10",
  "01-11",
  "01-12",
  "01-13",
  "01-14",
  "01-15",
  "02-01",
  "02-02",
  "02-03",
  "02-04",
  "02-05",
  "02-06",
  "02-07",
  "02-08",
  "02-09",
  "02-10",
  "02-11",
  "02-12",
  "02-13",
  "02-14",
  "02-15",
  "02-16",
  "02-17",
  "02-18",
  "03-01",
  "03-02",
  "03-03",
  "03-04",
  "03-05",
  "03-06",
  "03-07",
  "03-08",
  "03-09",
  "03-10",
  "03-11",
  "03-12",
  "03-13",
  "03-14",
  "03-15",
  "03-16",
  "03-17",
  "04-01",
  "04-02",
  "04-03",
  "04-04",
  "04-05",
  "04-06",
  "04-07",
  "04-08",
  "04-09",
  "04-10",
  "04-11",
  "04-12",
  "04-13",
  "04-14",
  "04-15",
  "05-01",
  "05-02",
  "05-03",
  "05-04",
  "05-05",
  "05-06",
  "05-07",
  "05-08",
  "05-09",
  "05-10",
  "05-11",
  "05-12",
  "05-13",
  "05-14",
  "05-15",
  "05-16",
  "06-01",
  "06-02",
  "06-03",
  "06-04",
  "06-05",
  "06-06",
  "06-07",
  "06-08",
  "06-09",
  "06-10",
  "06-11",
  "06-12",
  "06-13",
]

export default function RealJapaneseAudioPlayer() {
  const tracks = Array.from(FILE_NAMES, (_, i) => `${FILE_NAMES[i]}.mp3`);
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
        audio.src = `/audio/real_japanese/${tracks[nextIndex]}`;
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
        artist: `Real Japanese`,
        album: `Real Japanese`,
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
      audio.src = `/audio/real_japanese/${tracks[index]}`; // path where mp3 files are hosted
      audio.play();
      setCurrentTrackIndex(index);
      setIsPlaying(true);
      updateMediaSession(index);
    }
  };

  return (
    <Box pt={6}>
      <Text mb={4} bold color={"pink.400"} alignSelf={"center"}>
        Real Japanese
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
