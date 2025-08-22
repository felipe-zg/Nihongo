declare type MiniStoryWord = {
  kanji: string;
  english: string;
}

declare type MiniStoryDialogue = {
  character: string;
  dialogue: string;
}

declare enum MiniStoryTopic {
  FOOD = '食事',
  HOUSE_WORK = '家事',
}

declare type MiniStory = {
  id: string;
  rubyStory: MiniStoryDialogue[];
  rubyWords: MiniStoryWord[];
  translation: string;
  audio: string;
  topic: MiniStoryTopic;
  page: number;
}