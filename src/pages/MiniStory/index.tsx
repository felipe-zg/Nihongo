import React, { useEffect, useMemo } from "react";
import MiniStory from "./MiniStory";
import { MINI_STORY_N2, MINI_STORY_N3, MiniStoryTopics } from "../../consts/MiniStory";

const MiniStoryPage: React.FC = () => {
  const [selectedStory, setSelectedStory] = React.useState<string>("1");
  const [selectedLevel, setSelectedLevel] = React.useState<'N2' | 'N3'>("N3");
  const [selectedTopic, setSelectedTopic] = React.useState<keyof typeof MiniStoryTopics | "">("");
  const [selectedStartPage, setSelectedStartPage] = React.useState<number>(0);
  const [selectedEndPage, setSelectedEndPage] = React.useState<number>(0);
  const availablePages = React.useMemo<number[]>(() => {
    const pages = Object.values(MINI_STORY_N3).map(story => story.page);
    return Array.from(new Set(pages)).sort((a, b) => a - b);
  }, []);

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

  function handleStartPageChange(page: number) {
    setSelectedStartPage(page);
  }
  
  function handleEndPageChange(page: number) {
    setSelectedEndPage(page);
  }

  function nextStory() {
    if (availableStories.length === 0) return;
    const currentIndex = availableStories.indexOf(selectedStory);
    const nextIndex = (currentIndex + 1) % availableStories.length;
    const nextStory = availableStories[nextIndex];
    setSelectedStory(nextStory);
  }

 useEffect(() => {
  const stories = selectedLevel === "N2" ? MINI_STORY_N2 : MINI_STORY_N3;

  // define start and end safely using existing availablePages
  const startPage = selectedStartPage || availablePages[0];
  const endPage = selectedEndPage || availablePages[availablePages.length - 1];

  // if nothing selected, return all stories
  if (!selectedTopic && !selectedStartPage && !selectedEndPage) {
    setAvailableStories(Object.keys(stories));
    return;
  }

  const storyKeys = Object.entries(stories)
    .filter(([_, value]) => {
      const matchesTopic = selectedTopic ? value.topic === selectedTopic : true;
      const matchesPageRange = value.page >= startPage && value.page <= endPage;
      return matchesTopic && matchesPageRange;
    })
    .map(([key]) => key);

  setAvailableStories(storyKeys);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [selectedTopic, selectedStartPage, selectedEndPage]);

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
      selectedStartPage={selectedStartPage}
      onStartPageChange={handleStartPageChange}
      selectedEndPage={selectedEndPage}
      onEndPageChange={handleEndPageChange}
      availablePages={availablePages}
      onNextStory={nextStory}
    />
  )
};

export default MiniStoryPage;