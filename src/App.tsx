import React from 'react';
import './App.css';
import { DaysOfTheMonth, Deck, Kanji, KanjiYDC, Periods, WordsYDC, WordsYDCQuizz, YDCWords4th, YDCWords5th } from './pages';
import { NativeBaseProvider } from "native-base";
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <NativeBaseProvider>
      <div className="App">
        <Accordion title='Kanji YDC'>
          <KanjiYDC />
        </Accordion>
        <Accordion title='Words YDC'>
          <WordsYDC />
        </Accordion>
        <Accordion title='Words YDC Quizz'>
          <WordsYDCQuizz />
        </Accordion>
        <Accordion title='Potential form'>
          <Deck />
        </Accordion>
        <Accordion title='Kanji'>
          <Kanji />
        </Accordion>
        <Accordion title='Days Of The Month'>
          <DaysOfTheMonth />
        </Accordion>
        <Accordion title='Periods'>
          <Periods />
        </Accordion>
        <Accordion title='Words 4th'>
          <YDCWords4th />
        </Accordion>
        <Accordion title='Words 5th'>
          <YDCWords5th />
        </Accordion>
      </div>
    </NativeBaseProvider>
  );
}

export default App;
