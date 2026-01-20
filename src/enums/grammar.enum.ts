export const GrammarEntryCategory = {
  REASON_CAUSE: '理由・原因',
  SITUATION_CHANGE: '状況・変化',
  POSITIONS_STANDARDS: '立場・基準',
  ADVERSATIVE_NEGATIVE: '逆接・否定',
  IMAGINATION_PREDICTION: '想像・予想',
  DEGREE_ENPHASIS_COMPARISON: '程度・強調・比較',
  POINT_IN_TIME: '時・間',
  ASSUMPTIONS_CONDITIONS: '仮定・条件',
  PURPOSE_METHOD_OPERATION: '目的・方法・動作',
  RULES_ADVICE: 'ルール・アドバイス',
  PARALLEL: '並列',
  OTHER: 'その他',
  KEIGO: '敬語',
  MONO: 'もの',
  KOTO: 'こと',
  KAGIRI: '限り',
  SETSUZOKU_RELATIONS: '順接・逆接',
  BAD_MEANING: '悪い意味',
  EMPHASIS: '強調',
  TIME: "時間",
  STANDARDS_AND_RELATIONS: '基準・関連',
  CIRCUMSTANCES_HEARSAY: '状況・伝聞',
  CHANGE_RESULT: '変化・結果',
  MANDATORY_IRRELEVANCE_INFERENCE: '強制・関係ない・推測',
  ENUMERATION: '列挙',
  LEXICAL_GRAMMAR: '語彙的な文法',
  POLITE_EXPRESSIONS_OTHERS: '丁寧な表現・その他',

} as const;

export type GrammarCategory = typeof GrammarEntryCategory[keyof typeof GrammarEntryCategory];


// export const GrammarEntryCategory = {
//   REASON_CAUSE: '理由・原因',
//   SITUATION_CHANGE: '状況・変化',
//   POSITIONS_STANDARDS: '立場・基準',
//   ADVERSATIVE_NEGATIVE: '逆接・否定',
//   IMAGINATION_PREDICTION: '想像・予想',
//   DEGREE_ENPHASIS_COMPARISON: '程度・強調・比較',
//   POINT_IN_TIME: '時・間',
//   ASSUMPTIONS_CONDITIONS: '仮定・条件',
//   PURPOSE_METHOD_OPERATION: '目的・方法・動作',
//   RULES_ADVICE: 'ルール・アドバイス',
//   PARALLEL: '並列',
//   OTHER: 'その他',
//   KEIGO: '敬語',
// } as const;