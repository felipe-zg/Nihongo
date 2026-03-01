import { Button, HStack, Text } from "native-base";
import React, { useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type Props = {
  title: string;
  videoId: string;
};

const YoutubePlayer = ({ title, videoId }: Props) => {
  const playerRef = useRef<YT.Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
  };

  const onStateChange: YouTubeProps["onStateChange"] = (event) => {
    setIsPlaying(event.data === YT.PlayerState.PLAYING);
  };

  const playAudio = () => {
    playerRef.current?.playVideo();
  };

  const pauseAudio = () => {
    playerRef.current?.pauseVideo();
  };

  return (
    <>
      <HStack
        space={4}
        alignItems="center"
        justifyContent="space-between"
        borderColor={isPlaying ? "green.500" : "pink.500"}
        borderWidth={1}
        borderRadius={10}
        p={2}
        minWidth={"50%"}
      >
        <Text fontSize="lg" color={"white"}>
          {title}
        </Text>

        <Button
          onPress={isPlaying ? pauseAudio : playAudio}
          colorScheme={isPlaying ? "green" : "pink"}
          variant="ghost"
        >
          {isPlaying ? "▐▐" : "▶"}
        </Button>
      </HStack>

      <YouTube
        videoId={videoId}
        onReady={onReady}
        onStateChange={onStateChange}
        opts={{ height: "0", width: "0" }}
      />
    </>
  );
};

export default YoutubePlayer;