declare type MiniStoryWord = {
  kanji: string;
  english: string;
}

declare type MiniStoryDialogue = {
  character: string;
  dialogue: string;
}

declare type MiniStory = {
  id: string;
  rubyStory: MiniStoryDialogue[];
  rubyWords: MiniStoryWord[];
  translation: string;
}