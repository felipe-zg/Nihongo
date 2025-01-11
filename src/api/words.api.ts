import { GENKI_WORDS_OBJECT, WORDS_OBJECT } from "../consts";
// import { request } from "./instance";

export const getVocabulary = async (source: TSource): Promise<{[key: number]: Array<Word>}> => {
  try {
    // const response = request.get(`/words/${source}`);
    // const words = await response.json();
    const words = source === ESource.GENKI ? GENKI_WORDS_OBJECT : WORDS_OBJECT;
    return words;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
}