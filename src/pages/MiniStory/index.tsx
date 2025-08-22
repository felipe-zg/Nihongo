import React from "react";
import MiniStory from "./MiniStory";
import { MINI_STORY_N3 } from "../../consts/MiniStory";

const MiniStoryPage: React.FC = () => {
  const [selectedStory, setSelectedStory] = React.useState<string>("1.1");
  const story = MINI_STORY_N3[selectedStory];

  function handleStoryChange(id: string) {
    setSelectedStory(id);
  }

  return (
    <MiniStory story={story} selectedStory={selectedStory} onStoryChange={handleStoryChange} />
  )
};

export default MiniStoryPage;