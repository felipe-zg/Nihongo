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
  const vocabList = Object.values(VOCABS_PER_LEVEL[levelParam]).flatMap(item => item.rubyWords);

  return (
    <MiniStoryCards vocabList={vocabList} level={levelParam} />
  )
};

export default MiniStoryCardsPage;