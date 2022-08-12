import { useState, useEffect } from 'react';
import './Puzzle.css';

function Puzzle(props) {
//   const [visibleLetters, setVisibleLetters] = useState('');
  const [puzzleEl, setPuzzleEl] = useState(<></>)
  const { puzzle, guessedLetters } = props;

  const updateVisiblePuzzle = function () {
    let visible = '';
    puzzle.toLowerCase().split('').forEach((letter) => {
      if (guessedLetters.includes(letter.toLowerCase()) || letter === ' ') {
        visible += letter;
      } else {
        visible += '*';
      }
    });

    visible = visible.split('').map((letter, index) => {
        return <span key={index}>{letter}</span>
    })
    return(visible);
  };

//   const getPuzzleElements = function () {
//     let el = <></>;



//     return(el);
//   }

  useEffect(() => {
    let updatedVisiblePuzzle = updateVisiblePuzzle();
    setPuzzleEl(updatedVisiblePuzzle);
    // let updatedPuzzleEl = updatePuzzleElements
  }, [guessedLetters, puzzle])



  return <div className='puzzle-container'>{puzzleEl}</div>;
}

export default Puzzle;
