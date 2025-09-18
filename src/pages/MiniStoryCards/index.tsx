import React from "react";
import MiniStoryCards from "./MiniStoryCards";
import { useSearchParams } from "react-router-dom";
import { MINI_STORY_N2, MINI_STORY_N3 } from "../../consts/MiniStory";

const VOCABS_PER_LEVEL = {
  N3: MINI_STORY_N3,
  N2: MINI_STORY_N2,
}

const MiniStoryCardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const levelParam : 'N2' | 'N3'  = searchParams.get("level")! as 'N2' | 'N3';
  const topicParam : keyof typeof MINI_STORY_N3["1"]["topic"] | "" = (searchParams.get("topic") || "") as keyof typeof MINI_STORY_N2["1"]["topic"] | "";
  const vocabList = Object.values(VOCABS_PER_LEVEL[levelParam]).filter(story => {
    if(topicParam) {
      return story.topic === topicParam;
    }
    return true;
  }).flatMap(item => item.rubyWords);

  return (
    <MiniStoryCards vocabList={vocabList} level={levelParam} />
  )
};

export default MiniStoryCardsPage;