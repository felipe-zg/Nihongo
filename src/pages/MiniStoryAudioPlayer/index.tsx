import React from "react";
import MiniStoryAudioPlayer from "./MiniStoryAudioPlayer";
import { useSearchParams } from "react-router-dom";

const MiniStoryAudioPlayerPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const levelParam : 'N2' | 'N3'  = searchParams.get("level")! as 'N2' | 'N3';

  return (
    <MiniStoryAudioPlayer level={levelParam} />
  )
};

export default MiniStoryAudioPlayerPage;