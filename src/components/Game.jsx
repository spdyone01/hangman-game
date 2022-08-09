import { useEffect, useState } from 'react';
import Loading from './Loading';
import GameOver from './GameOver';
import Puzzle from './Puzzle'

import './Game.css';

import { getPuzzle } from '../utilities/requests';

function Game(props) {
  const [missedGuesses, setMissedGuesses] = useState(0);
  const [loading, setLoading] = useState(true);
  const [puzzle, setPuzzle] = useState('');

  let { words, difficulty } = props;
  let { mode, selector, guesses } = difficulty;

//   useEffect(() => {
//     setLoading(true);
//     let newPuzzle = getPuzzle(words);

//     if(newPuzzle) {
//         setLoading(false);
//         setPuzzle(newPuzzle);
//     }
//     return () => {
      
//     }
//   }, [])
  
  

  return (
    <div className='game'>
      <div className='game-info'>
        <p className='difficulty'>Difficulty: {mode[selector]}</p>
        <p className='guesses'>
          Guesses Left: {guesses[selector] - missedGuesses}
        </p>

      </div>
        {loading ? <Loading /> : <div>False</div>}
    </div>
  );
}

export default Game;
