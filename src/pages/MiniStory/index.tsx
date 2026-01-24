import React, { useEffect, useMemo } from "react";
import MiniStory from "./MiniStory";
import { MINI_STORY_N2, MINI_STORY_N3, MiniStoryTopics } from "../../consts/MiniStory";
import { useSearchParams } from "react-router-dom";

type Level = "N3" | "N2";

const MiniStoryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const levelParam: Level = (searchParams.get("level") as Level) || "N3";

  const storyList: Record<string, MiniStory> = useMemo(() => {
    switch (levelParam) {
      case "N2":
        return MINI_STORY_N2
      case "N3":
      default:
        return MINI_STORY_N3;
    }
  }, [levelParam]);

  const [selectedStory, setSelectedStory] = React.useState<string>("1");
  const [selectedTopic, setSelectedTopic] = React.useState<keyof typeof MiniStoryTopics | "">("");
  const availablePages = React.useMemo<number[]>(() => {
    const pages = Object.values(storyList).map(story => story.page);
    return Array.from(new Set(pages)).sort((a, b) => a - b);
  }, [storyList]);
  const [selectedStartPage, setSelectedStartPage] = React.useState<number>(availablePages[0]);
  const [selectedEndPage, setSelectedEndPage] = React.useState<number>(availablePages[availablePages.length - 1]);

  const [availableStories, setAvailableStories] = React.useState<string[]>(() => {
    return Object.keys(MINI_STORY_N3);
  });

  const story = useMemo(() => {
    return storyList[selectedStory];
  }, [selectedStory,  storyList]);

  function handleStoryChange(id: string) {
    setSelectedStory(id);
  }

  function handleTopicChange(topic: keyof typeof MiniStoryTopics | "") {
    setSelectedTopic(topic);
  }

  function handleStartPageChange(page: number) {
    if (page > selectedEndPage){
      setSelectedEndPage(page);
    }
    setSelectedStartPage(page);
  }
  
  function handleEndPageChange(page: number) {
    if (page < selectedStartPage){
      setSelectedStartPage(page);
    }
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

    // define start and end safely using existing availablePages
    const startPage = selectedStartPage || availablePages[0];
    const endPage = selectedEndPage || availablePages[availablePages.length - 1];

    // if nothing selected, return all stories
    if (!selectedTopic && !selectedStartPage && !selectedEndPage) {
      setAvailableStories(Object.keys(storyList));
      return;
    }

    const storyKeys = Object.entries(storyList)
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