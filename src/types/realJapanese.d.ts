declare type RealJapaneseSentence = {
  english: string;
  japanese: string;
}

declare type RealJapanese = {
  topic: RealJapaneseTopic;
  sentences: RealJapaneseSentence[];
  unit: RealJapaneseUnit;
  audio: string;
}