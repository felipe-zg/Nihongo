import React from 'react';
import './App.css';
import { DaysOfTheMonth, Deck, Kanji, KanjiPractice, Levels, Nihongo500N3, Periods, Verbs, Words, WordsYDCQuizz} from './pages';
import { Box, HStack, NativeBaseProvider } from "native-base";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import Materials from './pages/Materials/Materials';

function App() {
  return (
    <NativeBaseProvider>
      <BrowserRouter>
      <HStack  width="100%">
        <Navbar />
        <Box flex="1" height="100%">
          <Routes>
            <Route path="/" element={<Levels />} />
            <Route path="/kanji-ydc" element={<Kanji source='YDC' />} />
            <Route path="/kanji-genki" element={<Kanji source='GENKI' />} />
            <Route path="/kanji-practice" element={<KanjiPractice />} />
            <Route path="/words-ydc" element={<Words source='YDC' />} />
            <Route path="/words-genki" element={<Words source='GENKI' />} />
            <Route path="/periods" element={<Periods />} />
            <Route path="/days-of-the-month" element={<DaysOfTheMonth />} />
            <Route path="/words-quizz" element={<WordsYDCQuizz />} />
            <Route path="/potential-form" element={<Deck />} />
            <Route path="/verbs" element={<Verbs />} />
            <Route path="/lessons" element={<Materials />} />
            <Route path="/JLPT/N3" element={<Nihongo500N3 />} />
          </Routes>
        </Box>
      </HStack>
      </BrowserRouter>
    </NativeBaseProvider>
  );
}

export default App;