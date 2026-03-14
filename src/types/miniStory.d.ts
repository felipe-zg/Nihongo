declare type MiniStoryWord = {
  kanji: string;
  english: string;
  type?: MiniStoryWordType | MiniStoryWordType[];
  important?: boolean;
  secondary?: boolean;
}

declare type MiniStoryDialogue = {
  character: string;
  dialogue: string;
}

declare type MinistoryRubyKanji = {
  kanji: string;
  meaning: string;
  rubyWord: string;
  wordMeaning: string;
  wordSentence?: string;
}

declare type MiniStory = {
  id: string;
  rubyStory: MiniStoryDialogue[];
  rubyWords: MiniStoryWord[];
  kanjis?: string[];
  translation: string;
  audio: string;
  topic: string;
  page: number;
}