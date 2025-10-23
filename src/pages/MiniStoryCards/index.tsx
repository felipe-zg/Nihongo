import React from "react";
import MiniStoryCards from "./MiniStoryCards";
import { useSearchParams } from "react-router-dom";
import { MINI_STORY_N2, MINI_STORY_N3, N3_IMPORTANT_WORDS } from "../../consts/MiniStory";

const VOCABS_PER_LEVEL = {
  N3: MINI_STORY_N3,
  N2: MINI_STORY_N2,
}

const MiniStoryCardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const levelParam : 'N2' | 'N3'  = searchParams.get("level")! as 'N2' | 'N3';
  const vocabsByLevel = VOCABS_PER_LEVEL[levelParam];
  const availablePagesParam : number[] = (searchParams.get("availablePages") || "").split(",").map(Number).filter(Boolean);
  const startPageParam : number = parseInt(searchParams.get("startPage")!) || availablePagesParam[0];
  const endPageParam : number = parseInt(searchParams.get("endPage")!) || availablePagesParam[availablePagesParam.length - 1];
  const topicParam : keyof typeof MINI_STORY_N3["1"]["topic"] | "" = (searchParams.get("topic") || "") as keyof typeof MINI_STORY_N2["1"]["topic"] | "";
  const onlyMainWordsParam : boolean = searchParams.get("onlyMainWords") === "true";
  const vocabList = onlyMainWordsParam
    ? N3_IMPORTANT_WORDS
    : Object.values(vocabsByLevel).filter(story => {
      if (story.page < startPageParam || story.page > endPageParam) {
        return false;
      }
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