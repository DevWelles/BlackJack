module.exports = class Chips {
  constructor() {
    this.total = 100;
    this.bet = 0;
  }

  winBet() {
    this.total += this.bet;
  }
  loseBet() {
    this.total -= this.bet;
  }
}