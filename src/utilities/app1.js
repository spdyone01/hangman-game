const puzzleEl = document.querySelector('#puzzle');
const statusMessageEl = document.querySelector('#status-message')

let game1;

// puzzleEl.textContent = game1.puzzle;
// statusMessageEl.textContent = game1.statusMessage; 

window.addEventListener('keypress', (e) => {
    if(game1.status === 'playing'){
        const guess = String.fromCharCode(e.charCode);
        game1.checkGuess(guess);
        render();
    }
})

const render = () => {
    puzzleEl.innerHTML = '';
    statusMessageEl.textContent = game1.statusMessage;

    // game1.puzzle -> "*** co**"
    // 1. For each character in the string, add a span into #puzzle
    // 2. The spans text should just be the letter itself

    game1.puzzle.split('').forEach((letter) => {
        puzzleEl.innerHTML += `<span>${letter}</span>`
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);
startGame();

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })







// getCurrentCountry().then((country) => {
//     console.log(`Your current location is: ${country.name}`);
// }).catch((error) => {
//     console.log(error);
// })

// getLocation().then((parsedData) => {
//     return getCountryDetails(parsedData.country)
// }).then((countryObj) => {
//     console.log(`You are in the country: ${countryObj.name}`);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })






















// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle');
//     }
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((error) => {
//     console.log(error)
// })
