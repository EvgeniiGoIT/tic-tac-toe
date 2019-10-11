class TicTacToe {
  constructor() {
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.currentPlayer = "x";
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.gameField[rowIndex][columnIndex]) {
      this.gameField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this.currentPlayer = this.getCurrentPlayerSymbol() === "x" ? "o" : "x";
    }
  }

  isFinished() {
    return !!this.getWinner() || this.isDraw();
  }

  getWinner() {
    const magicSquare = [2, 7, 6, 9, 5, 1, 4, 3, 8];
    const field = this.gameField.join().split(",");
    let result = null;
    for (let e of ["x", "o"]) {
      for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field.length; j++) {
          for (let k = 0; k < field.length; k++) {
            if (i !== j && j !== k && k !== i) {
              if (field[i] === e && field[j] === e && field[k] === e) {
                if (magicSquare[i] + magicSquare[j] + magicSquare[k] === 15) {
                  result = e;
                }
              }
            }
          }
        }
      }
    }
    return result;
  }

  noMoreTurns() {
    return !this.gameField.reduce((acc, e) => acc.concat(e)).includes(null);
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gameField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
