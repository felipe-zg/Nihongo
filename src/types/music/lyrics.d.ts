declare type Music = {
  lyrics: LyricPiece[];
}

declare type LyricPiece = {
  rubyText: string;
  main: boolean;
}

declare type RubyPart = { kanji: string; furigana?: string };