import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Lyrics from "./Lyrics";
import { LEINA_BLUE_AGE, LEINA_MOMENT, LEINA_NOSTALGIA, NEMOPHILA_LIFE, NEMOPHILA_MONSTERS, OTHERS_ブルーライト, OTHERS_東京, OTHERS_死ぬのがいいわ, OTHERS_革命道中 } from "../../consts/music";

type ArtistNamme = "Leina" | "Nemophila" | "Ohers";


const LyricsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const artistParam: ArtistNamme = (searchParams.get("artist") as ArtistNamme);
  const songParam: string = (searchParams.get("song")) as string;

  const getLeinaLyrics = (song: string): string[] => {
    switch (song) {
      case "nostalgia":
        return LEINA_NOSTALGIA;
      case "moment":
        return LEINA_MOMENT;
      case "blue-age":
        return LEINA_BLUE_AGE;
      default:
        return [];
    }
  };

  const getNemophilaLyrics = (song: string): string[] => {
    switch (song) {
      case "monsters":
        return NEMOPHILA_MONSTERS;
      case "life":
        return NEMOPHILA_LIFE;
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
      case "革命道中":
        return OTHERS_革命道中;
      default:
        return [];
    }
  };


  const lyric: string[] = useMemo(() => {
    switch (artistParam) {
      case "Leina":
        return getLeinaLyrics(songParam);
      case "Nemophila":
        return getNemophilaLyrics(songParam);
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