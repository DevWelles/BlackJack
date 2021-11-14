const Card = require('./card');

module.exports = class Deck {
  constructor(){
    this.deck = [];
    this.boje = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    this.brojevi = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
  }

  punjenjeDeckaKarata () {
    for(let i=0; i<this.boje.length; i++){
      for(let j=0; j<this.brojevi.length; j++){
        this.deck.push(new Card(this.brojevi[j], this.boje[i]))
      }
    }
  }

  // ispisDecka() {
  //   let deckComposition ='';
  //   for (const card of this.deck){
  //     deckComposition += '\n' + card.ispisKarte();
  //   }
  //   return 'The deck has: ' + deckComposition
  // }

  ispisDecka() {
    let deckComposition ='';
    this.deck.map(card => {
     deckComposition += '\n' + card.ispisKarte()
   })
   return 'The deck has: ' + deckComposition
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    } 
  }

  deal() {
    return this.deck.pop()
  }
}
