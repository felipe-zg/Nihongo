export const MojiGoiEntryCategory = {
  KANJI_READING: '漢字読み',
  NOTATION: '表記',
  WORD_FORMATION: '語形成',
  CONTEXT_DEFINITION: '文脈規定',
  SYNONYMS: '言い換え類義',
  USAGE: '用法',

} as const;

export type MojiGoiCategory = typeof MojiGoiEntryCategory[keyof typeof MojiGoiEntryCategory];
