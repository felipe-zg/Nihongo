declare type MiniStoryWord = {
  kanji: string;
  english: string;
  type?: MiniStoryWordType | MiniStoryWordType[];
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
  audio: string;
  topic: string;
  page: number;
}