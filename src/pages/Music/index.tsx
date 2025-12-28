import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Lyrics from "./Lyrics";
import { LEINA_NOSTALGIA, OTHERS_ブルーライト, OTHERS_東京, OTHERS_死ぬのがいいわ } from "../../consts/music";

type ArtistNamme = "Leina" | "Ohers";


const LyricsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const artistParam: ArtistNamme = (searchParams.get("artist") as ArtistNamme);
  const songParam: string = (searchParams.get("song")) as string;

  const getLeinaLyrics = (song: string): string[] => {
    switch (song) {
      case "nostalgia":
        return LEINA_NOSTALGIA;
      default:
        return [];
    }
  };
  
  const getOhersLyrics = (song: string): string[] => {
    switch (song) {
      case "ブルーライト":
        return OTHERS_ブルーライト;
      case "死ぬのがいいわ":
        return OTHERS_死ぬのがいいわ;
      case "東京":
        return OTHERS_東京;
      default:
        return [];
    }
  };


  const lyric: string[] = useMemo(() => {
    switch (artistParam) {
      case "Leina":
        return getLeinaLyrics(songParam);
      case "Ohers":
      default:
        return getOhersLyrics(songParam);
    }
  }, [artistParam, songParam]);

  return (
    <Lyrics lyric={lyric} />
  )
};

export default LyricsPage;