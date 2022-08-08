import { useNavigate } from 'react-router-dom';
import './Menu.css';

import { FaMinusCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';

function Menu(props) {
    let {
        words,
        incrementWords,
        decrementWords,
        difficulty,
        incrementDif,
        decrementDif,
    } = props;
    let { mode, selector } = difficulty;

  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game', words, difficulty);
  };

  return (
    <div className='menu'>
      <label>
        Words
        <div id='wordSelect'>
          <FaMinusCircle
            className='icon'
            onClick={decrementWords}
          />
          <p>{props.words}</p>
          <FaPlusCircle
            className='icon'
            onClick={incrementWords}
          />
        </div>
      </label>
      <label>
        Difficulty
        <div id='difficultySelect'>
          <FaMinusCircle className='icon' onClick={decrementDif} />
          <p>{mode[selector]}</p>
          <FaPlusCircle className='icon' onClick={incrementDif} />
        </div>
      </label>
      <button id='startButton' onClick={startGame}>
        Start Game
      </button>
    </div>
  );
}

export default Menu;
