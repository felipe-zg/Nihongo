import React from 'react';
import './App.css';
import { DaysOfTheMonth, Deck, GrammarJLPTN2, JLPTVocabsPrint, Kanji, KanjiPractice, KanjiPrint, Levels, Nihongo500N3, Periods, Verbs, VocabsJLPT, Words, WordsYDCQuizz } from './pages';
import { Box, HStack, NativeBaseProvider } from "native-base";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MusicNavbar, Navbar } from './components';
import Materials from './pages/Materials/Materials';
import Nostalgia from './pages/Music/Leina/Nostalgia/Nostalgia';

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
  const AppNavbar = location.pathname.startsWith("/music") ? MusicNavbar : Navbar;

  return (
    <HStack width="100%">
      {!isKanjiPrintPage && <AppNavbar />}
      <Box flex="1" height="100%">
        <Routes>
          <Route path="/" element={<Levels />} />
          <Route path="/kanji-ydc" element={<Kanji source='YDC' />} />
          <Route path="/kanji-genki" element={<Kanji source='GENKI' />} />
          <Route path="/kanji-practice" element={<KanjiPractice />} />
          <Route path="/printable/kanji-print" element={<KanjiPrint />} />
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
          <Route path="/printable/JLPT/vocabs/N3" element={<JLPTVocabsPrint />} />
          <Route path="/music/leina/nostalgia" element={<Nostalgia />} />
        </Routes>
      </Box>
    </HStack>
  );
}

export default App;
