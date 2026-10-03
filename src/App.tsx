import React from 'react';
import { DaysOfTheMonth, Deck, FastPass, FastPassPhrases, FastPassPrint, GrammarJLPTN2, GrammarMondai, ITWords, JLPTExamVocabs, JLPTExercisesPrint, JLPTVocabsPrint, Kanji, KeigoPage, Levels, MiniStory, MiniStoryAudioPlayer, MiniStoryCards, Nihongo500Mondai, Nihongo500N3, NihongoNoMoriGrammar, Periods, RealJapanese, RealJapaneseAudioPlayer, Verbs, VocabsJLPT, Words, WordsYDCQuizz } from './pages';
import { Box, HStack, NativeBaseProvider } from "native-base";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components';
import Materials from './pages/Materials/Materials';

function App() {
  return (
    <NativeBaseProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </NativeBaseProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isKanjiPrintPage = location.pathname.startsWith("/printable");

  return (
    <HStack width="100%">
      {!isKanjiPrintPage && <Navbar />}
      <Box flex="1" height="100%">
        <Routes>
          <Route path="/" element={<Levels />} />
          <Route path="/kanji" element={<Kanji />} />
          <Route path="/words-ydc" element={<Words source='YDC' />} />
          <Route path="/words-genki" element={<Words source='GENKI' />} />
          <Route path="/periods" element={<Periods />} />
          <Route path="/days-of-the-month" element={<DaysOfTheMonth />} />
          <Route path="/words-quizz" element={<WordsYDCQuizz />} />
          <Route path="/potential-form" element={<Deck />} />
          <Route path="/verbs" element={<Verbs />} />
          <Route path="/lessons" element={<Materials />} />
          <Route path="/JLPT/N3" element={<Nihongo500N3 />} />
          <Route path="/JLPT/vocabs" element={<VocabsJLPT />} />
          <Route path="/JLPT/grammar/N2" element={<GrammarJLPTN2 />} />
          <Route path="/grammar/keigo" element={<KeigoPage />} />
          <Route path="/printable/JLPT/vocabs/N3" element={<JLPTVocabsPrint />} />
          <Route path="/printable/JLPT/exercises" element={<JLPTExercisesPrint />} />
          <Route path="/JLPT/fastpass" element={<FastPass />} />
          <Route path="/JLPT/fastpass-phrases" element={<FastPassPhrases />} />
          <Route path="/printable/fastpass" element={<FastPassPrint />} />
          <Route path="/ministory" element={<MiniStory />} />
          <Route path="/ministory-cards" element={<MiniStoryCards />} />
          <Route path="/ministory-audioplayer" element={<MiniStoryAudioPlayer />} />
          <Route path="/grammar/nihongo-no-mori" element={<NihongoNoMoriGrammar />} />
          <Route path="/grammar/mondai" element={<GrammarMondai />} />
          <Route path="/audio/real-japanese" element={<RealJapaneseAudioPlayer />} />
          <Route path="/JLPT/Nihongo500Mondai" element={<Nihongo500Mondai />} />
          <Route path="/JLPT/ExamVocabs" element={<JLPTExamVocabs />} />
          <Route path="/real-japanese" element={<RealJapanese />} />
          <Route path="/IT/words" element={<ITWords />} />
        </Routes> 
      </Box>
    </HStack>
  );
}

export default App;
