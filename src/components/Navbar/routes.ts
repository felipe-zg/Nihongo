type SimpleRoute = {
  name: string;
  path: string;
};

type NestedRoute = {
  name: string;
  children: SimpleRoute[];
};

type RouteItem = SimpleRoute | NestedRoute;

export const routes: RouteItem[] = [
  {
    name: '文法',
    children: [
      { name: '日本語の森・文法・N3', path: '/grammar/nihongo-no-mori?level=N3' },
      { name: '日本語の森・文法・N2', path: '/grammar/nihongo-no-mori?level=N2' },
      { name: 'JLPT Grammar N2', path: '/JLPT/grammar/N2' },
    ],
  },
  {
    name: '横浜デザイン学院',
    children: [
      { name: 'ミニストーリー', path: '/ministory' },
      { name: '漢字 M2', path: '/kanji-m2' },
      { name: 'Kanji (YDC)', path: '/kanji-ydc' },
      { name: 'Kanji (Genki)', path: '/kanji-genki' },
      { name: 'Kanji practice', path: '/kanji-practice' },
      { name: 'Words (YDC)', path: '/words-ydc' },
      { name: 'Words (Genki)', path: '/words-genki' },
    ],
  },
  {
    name: 'JLPT',
    children: [
      { name: '日本語の森復習N3', path: '/JLPT/ExamVocabs?source=NIHONGO_NO_MORI&level=N3' },
      { name: '日本語の森復習N2', path: '/JLPT/ExamVocabs?source=NIHONGO_NO_MORI&level=N2' },
      { name: '過去のJLPT試験N3', path: '/JLPT/ExamVocabs?source=PAST_EXAMS' },
      { name: 'トモ先生 JLPT', path: '/JLPT/ExamVocabs?source=TOMO_SENSEI' },
      { name: 'JLPT N3 Vocab review', path: '/JLPT/ExamVocabs?source=REVIEW' },
      { name: '日本語500・N3', path: '/JLPT/Nihongo500Mondai?level=N3' },
      { name: 'JLPT', path: '/JLPT/N3' },
      { name: 'JLPT Vocabs N3', path: '/JLPT/vocabs?level=N3' },
      { name: 'JLPT Vocabs N2', path: '/JLPT/vocabs?level=N2' },
    ],
  },
  { name: 'Real Japanese', path: '/real-japanese' },
  { name: '文字・語彙', path: '/moji-goi-deck' },
  { name: 'Levels', path: '/' },
  { name: 'Periods', path: '/periods' },
  { name: 'Days of the month', path: '/days-of-the-month' },
  { name: 'Potential form', path: '/potential-form' },
  { name: 'Words quizz', path: '/words-quizz' },
  { name: 'Verbs', path: '/verbs' },
  { name: 'Lessons', path: '/lessons' },
  { name: 'Music', path: '/music/leina/nostalgia' },
  { name: 'Real Japanese Audio', path: '/audio/real-japanese' },
  { name: 'Kanji Create', path: '/kanji-create' },
];