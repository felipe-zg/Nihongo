import React, { useEffect, useMemo } from "react";
import MiniStory from "./MiniStory";
import { MINI_STORY_N2, MINI_STORY_N3, MiniStoryTopics } from "../../consts/MiniStory";

const MiniStoryPage: React.FC = () => {
  const [selectedStory, setSelectedStory] = React.useState<string>("1");
  const [selectedLevel, setSelectedLevel] = React.useState<'N2' | 'N3'>("N3");
  const [selectedTopic, setSelectedTopic] = React.useState<keyof typeof MiniStoryTopics | "">("");
  const [availableStories, setAvailableStories] = React.useState<string[]>(() => {
    return Object.keys(MINI_STORY_N3);
  });

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

  function handleTopicChange(topic: keyof typeof MiniStoryTopics | "") {
    setSelectedTopic(topic);
  }

  useEffect(() => {
    let stories = selectedLevel === "N2" ? MINI_STORY_N2 : MINI_STORY_N3;
    if (selectedTopic) {
      const storyKeys = Object.entries(stories)
        .filter(([_, value]) => value.topic === selectedTopic)
        .map(([key]) => key);
      setAvailableStories(storyKeys);
    } else {
      setAvailableStories(Object.keys(stories));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTopic]);

  useEffect(() => {
    if (!availableStories.includes(selectedStory)) {
      setSelectedStory(availableStories[0] || "");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableStories]);
  

  return (
    <MiniStory
      story={story}
      selectedStory={selectedStory}
      onStoryChange={handleStoryChange}
      selectedLevel={selectedLevel}
      onLevelChange={handleLevelChange}
      selectedTopic={selectedTopic}
      onTopicChange={handleTopicChange}
      availableStories={availableStories}
    />
  )
};

export default MiniStoryPage;