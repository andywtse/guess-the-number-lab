const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses:[],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      console.log(this.secretNum);
    let guess = -1;
    do{
      guess = this.getGuess();
      this.render(guess);
    }while(guess !== this.secretNum );
  },
  getGuess: function() {
    let numGuess = -1;
    do{
      numGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`));
      console.log(typeof numGuess + " " + numGuess);
    }while(!numGuess && numGuess !== 0);
    return numGuess;
  },
  render: function(curGuess) {
    if(curGuess === this.secretNum) {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses`);
    } else if(curGuess < this.secretNum) {
      this.prevGuesses.push(curGuess);
      alert(`Your guess is too low. Previous Guess: ${this.prevGuesses.join()}`);
    } else {
      this.prevGuesses.push(curGuess);
      alert(`Your guess is too high. Previous Guess: ${this.prevGuesses.join()}`);
    }
  }
}
game.play();