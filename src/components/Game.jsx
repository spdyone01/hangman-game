import { useState } from 'react';
import './Game.css';
import Loading from './Loading';

function Game(props) {
  const [missedGuesses, setMissedGuesses] = useState(0);
  const [loading, setLoading] = useState(true);

  let { words, difficulty } = props;
  let { mode, selector, guesses } = difficulty;

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
