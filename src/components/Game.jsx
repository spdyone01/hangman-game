import { useEffect, useState } from 'react';
import Loading from './Loading';
import GameOver from './GameOver';
import Puzzle from './Puzzle';

import './Game.css';

import { getPuzzle } from '../utilities/requests';

function Game(props) {
  const [missedGuesses, setMissedGuesses] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [playing, setPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [puzzle, setPuzzle] = useState('');

  let { words, difficulty } = props;
  let { mode, selector, guesses } = difficulty;

  useEffect(() => {
    if (playing) {
      window.addEventListener('keypress', (e) => {
        const guess = String.fromCharCode(e.charCode);
        if (!guessedLetters.includes(guess)) {
          setGuessedLetters((current) => [guess, ...current]);
          if (
            !puzzle.toLowerCase().split('').includes(guess) &&
            !guessedLetters.includes(guess)
          ) {
            setMissedGuesses((prevState) => prevState + 1);
          }
        }
      });
    }

    return () => {
      window.removeEventListener('keypress', (e) => {});
    };
  }, []);

  useEffect(() => {
    getPuzzle(words).then((res) => {
      setPuzzle(res);
    });
    setLoading(false);
  }, [words]);

  return (
    <div className='game'>
      <div className='game-info'>
        <p className='difficulty'>Difficulty: {mode[selector]}</p>
        <p className='guesses'>
          Guesses Left: {guesses[selector] - missedGuesses}
        </p>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <Puzzle puzzle={puzzle} guessedLetters={guessedLetters} guess />
      )}
    </div>
  );
}

export default Game;
