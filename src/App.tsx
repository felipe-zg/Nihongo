import React from 'react';
import './App.css';
import { DaysOfTheMonth, Deck, Kanji, Periods, Words, WordsYDCQuizz} from './pages';
import { Box, HStack, NativeBaseProvider } from "native-base";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <NativeBaseProvider>
      <BrowserRouter>
      <HStack  width="100%">
        <Navbar />
        <Box flex="1" height="100%">
          <Routes>
            <Route path="/" element={<DaysOfTheMonth />} />
            <Route path="/kanji-ydc" element={<Kanji source='YDC' />} />
            <Route path="/kanji-genki" element={<Kanji source='GENKI' />} />
            <Route path="/words-ydc" element={<Words source='YDC' />} />
            <Route path="/words-genki" element={<Words source='GENKI' />} />
            <Route path="/periods" element={<Periods />} />
            <Route path="/days-of-the-month" element={<DaysOfTheMonth />} />
            <Route path="/words-quizz" element={<WordsYDCQuizz />} />
            <Route path="/potential-form" element={<Deck />} />
          </Routes>
        </Box>
      </HStack>
      </BrowserRouter>
    </NativeBaseProvider>
  );
}

export default App;