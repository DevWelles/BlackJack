module.exports = class Hand {
  constructor() {
    this.cards = [];
    this.value = 0;
    this.aces = 0;
    this.values = {'Two':2, 'Three':3, 'Four':4, 'Five':5, 'Six':6, 'Seven':7, 'Eight':8, 'Nine':9, 'Ten':10, 'Jack':10,
         'Queen':10, 'King':10, 'Ace':11}
  }

  addCard(card) {
    this.cards.push(card);
    this.value += this.values[card.broj];

    if(card.broj == 'Ace') {
      this.aces += 1;
    }
  }

  adjustForAces() {
    while(this.value > 21 && this.aces){
      this.value -= 10;
      this.aces -= 1;
    }
  }
}