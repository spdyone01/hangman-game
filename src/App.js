import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles
import './styles/styles.css';

// Routes
import GameOver from './components/GameOver';
import Menu from './components/Menu';
import Game from './components/Game';

function App() {
  // App State
  const [words, setWords] = useState(1);
  const [difficulty, setDifficulty] = useState({
    mode: ['Easy', 'Normal', 'Hard'],
    selector: 1,
    guesses: [8, 5, 3],
  });

  const incrementWords = () => {
  if (words === 1) {
    setWords(2);
  }
  if (words === 2) {
    setWords(3);
  }
};
const decrementWords = () => {
  if (words === 3) {
    setWords(2);
  }
  if (words === 2) {
    setWords(1);
  }
};

const incrementDif = () => {
  if (difficulty.selector === 0) {
    setDifficulty((prevState) => {
      return {
        ...prevState,
        selector: 1,
      };
    });
  }
  if (difficulty.selector === 1) {
    setDifficulty((prevState) => {
      return {
        ...prevState,
        selector: 2,
      };
    });
  }
};
const decrementDif = () => {
  if (difficulty.selector === 1) {
    setDifficulty((prevState) => {
      return {
        ...prevState,
        selector: 0,
      };
    });
  }
  if (difficulty.selector === 2) {
    setDifficulty((prevState) => {
      return {
        ...prevState,
        selector: 1,
      };
    });
  }
};

  return (
    <div className='app'>
      <header className='app-header'>
        <h1 className='title'>Hangman</h1>
      </header>
      <div className='app-body'>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <Menu
                  words={words}
                  incrementWords={incrementWords}
                  decrementWords={decrementWords}
                  difficulty={difficulty}
                  incrementDif={incrementDif}
                  decrementDif={decrementDif}
                />
              }
            />
            <Route
              path='game'
              element={<Game words={words} difficulty={difficulty} />}
            />
            <Route path='gameover' element={<GameOver />} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
