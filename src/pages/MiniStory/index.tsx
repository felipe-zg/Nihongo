import React, { useMemo } from "react";
import MiniStory from "./MiniStory";
import { MINI_STORY_N2, MINI_STORY_N3 } from "../../consts/MiniStory";

const MiniStoryPage: React.FC = () => {
  const [selectedStory, setSelectedStory] = React.useState<string>("1");
  const [selectedLevel, setSelectedLevel] = React.useState<'N2' | 'N3'>("N3");

  const story = useMemo(() => {
    if(selectedLevel === "N2")
      return MINI_STORY_N2[selectedStory];
    if(selectedLevel === "N3")
      return MINI_STORY_N3[selectedStory];
    return MINI_STORY_N3[selectedStory];
  }, [selectedStory, selectedLevel]);

  function handleStoryChange(id: string) {
    setSelectedStory(id);
  }

  function handleLevelChange(level: 'N2' | 'N3') {
    setSelectedLevel(level);
  }

  return (
    <MiniStory
      story={story}
      selectedStory={selectedStory}
      onStoryChange={handleStoryChange}
      selectedLevel={selectedLevel}
      onLevelChange={handleLevelChange}
    />
  )
};

export default MiniStoryPage;