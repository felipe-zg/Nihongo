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
    name: 'N2',
    children: [
      { name: '日本語の森・文法・N2', path: '/grammar/nihongo-no-mori?level=N2' },
      { name: '日本語の森・文法練習・N2', path: '/grammar/nihongo-no-mori?level=N2&mode=test' },
      { name: '日本語の森・文法問題・N2', path: '/grammar/mondai?level=N2' },
      { name: '日本語の森・復習・N2', path: '/JLPT/ExamVocabs?source=NIHONGO_NO_MORI&level=N2' },
      { name: '日本語の森・美味しい漢字・N2', path: '/kanji' },
      { name: '日本語の森・文字・語彙', path: '/JLPT/ExamVocabs?source=MOJI_GOI&level=N2' },
      { name: '日本語の森・FAST PASS', path: '/JLPT/fastpass' },
      { name: '日本語の森・FAST PASS Extra', path: '/JLPT/fastpass?source=EXTRA' },
      { name: '日本語の森・FAST PASS 文章', path: '/JLPT/fastpass-phrases' },
      { name: '日本語の森・FAST PASS 文章 Extra', path: '/JLPT/fastpass-phrases?source=EXTRA' },
      { name: 'JLPT Grammar N2', path: '/JLPT/grammar/N2' },
      { name: 'JLPT Vocabs N2', path: '/JLPT/vocabs?level=N2' },
      { name: 'ミニストーリー', path: '/ministory?level=N2' },
    ],
  },
  {
    name: 'N3',
    children: [
      { name: '日本語の森・文法・N3', path: '/grammar/nihongo-no-mori?level=N3' },
      { name: '日本語の森・文法練習・N3', path: '/grammar/nihongo-no-mori?level=N3&mode=test' },
      { name: '日本語の森・復習・N3', path: '/JLPT/ExamVocabs?source=NIHONGO_NO_MORI&level=N3' },
      { name: '過去のJLPT試験・N3', path: '/JLPT/ExamVocabs?source=PAST_EXAMS' },
      { name: 'トモ先生 JLPT', path: '/JLPT/ExamVocabs?source=TOMO_SENSEI' },
      { name: 'JLPT N3 Vocab review', path: '/JLPT/ExamVocabs?source=REVIEW' },
      { name: '日本語500・N3', path: '/JLPT/Nihongo500Mondai?level=N3' },
      { name: '文字・語彙', path: '/moji-goi-deck' },
      { name: 'JLPT', path: '/JLPT/N3' },
      { name: 'JLPT Vocabs N3', path: '/JLPT/vocabs?level=N3' },
      { name: 'ミニストーリー', path: '/ministory?level=N3' },
    ],
  },
  {
    name: 'IT',
    children: [
      { name: 'IT words', path: '/IT/words' },
    ],
  },
  {
    name: 'Notes',
    children: [
      { name: 'Notes words', path: '/JLPT/ExamVocabs?source=NOTES_WORDS' },
    ],
  },
  { name: '敬語', path: '/grammar/keigo' },
  {
    name: '横浜デザイン学院',
    children: [
      { name: '漢字 M2', path: '/kanji-m2' },
      { name: 'Kanji practice', path: '/kanji-practice' },
      { name: 'Words (YDC)', path: '/words-ydc' },
      { name: 'Words (Genki)', path: '/words-genki' },
    ],
  },
  { name: 'Real Japanese', path: '/real-japanese' },
  { name: 'Levels', path: '/' },
  { name: 'Periods', path: '/periods' },
  { name: 'Days of the month', path: '/days-of-the-month' },
  { name: 'Potential form', path: '/potential-form' },
  { name: 'Words quizz', path: '/words-quizz' },
  { name: 'Verbs', path: '/verbs' },
  { name: 'Lessons', path: '/lessons' },
  { 
    name: 'Music', 
    children: [
      { name: 'Home', path: '/' },
      { name: 'Nostalgia', path: '/music?artist=Leina&song=nostalgia' },
      { name: 'Moment', path: '/music?artist=Leina&song=moment' },
      { name: 'Blue Age', path: '/music?artist=Leina&song=blue-age' },
      { name: '君が死にたいって言うなら', path: '/music?artist=Leina&song=kimigashinitaitteiunara' },
      { name: 'Monsters', path: '/music?artist=Nemophila&song=monsters' },
      { name: 'Life', path: '/music?artist=Nemophila&song=life' },
      { name: 'Sorai', path: '/music?artist=Nemophila&song=sorai' },
      { name: 'Just Do It', path: '/music?artist=Nemophila&song=just-do-it' },
      { name: 'God', path: '/music?artist=Nemophila&song=god' },
      { name: 'Raitei', path: '/music?artist=Nemophila&song=raitei' },
      { name: 'ブルーライト', path: '/music?artist=Others&song=ブルーライト' },
      { name: '死ぬのがいいわ', path: '/music?artist=Others&song=死ぬのがいいわ' },
      { name: '東京', path: '/music?artist=Others&song=東京' },
      { name: '革命道中', path: '/music?artist=Others&song=革命道中' },
    ]
  },
  { name: 'Real Japanese Audio', path: '/audio/real-japanese' },
  { name: 'Kanji Create', path: '/kanji-create' },
  { name: 'Interview', path: '/interview' },
  { name: 'Interview 単語', path: '/JLPT/ExamVocabs?source=INTERVIEW' },
];