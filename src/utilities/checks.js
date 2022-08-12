export const checkBadGuess = function (guess, guessedLetters, puzzle, remainingGuesses) {
  guess = guess.toLowerCase();
  const isUnique = !guessedLetters.includes(guess);
  const isBadGuess = false;

  if (isUnique) {
    
  }

  return {
    guessedLetters: guessedLetters.push(guess),
    remainingGuesses: remainingGuesses
  };
};
