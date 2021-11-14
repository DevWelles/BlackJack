const prompt = require('prompt-sync')();
module.exports = class Gameplay {
  constructor(deck,hand,chips) {
    this.deck = deck;
    this.hand = hand;
    this.chips = chips;
    this.playing = true;
  }

  takeBet(chips) {
    chips.bet = Number(prompt('How many chips would you like to bet? '))
  }

  hit(deck,hand){
    hand.addCard(deck.deal());
    hand.adjustForAces();
  }

  hitOrStand(deck,hand) {
    while(this.playing) {
      let x = prompt("Would you like to Hit or Stand? Enter 'h' or 's' ")
      if (x[0] == 'h'){
        this.hit(deck,hand)
      } else if(x[0] == 's') {
        console.log("Player stands. Dealer is playing.");
        this.playing = false;
      }else {
        console.log("Sorry, please try again.")
        continue
      }
      break 
    }
  }
  showSome(player,dealer) {
    console.log("\nDealer's Hand:")
    console.log(" <card hidden>")
    console.log('', dealer.cards[1].ispisKarte())
    console.log("\nPlayer's Hand:");
    player.cards.forEach(card => console.log(card.ispisKarte()))
  }

  showAll(player,dealer) {
    console.log("\nDealer's Hand:")
    dealer.cards.forEach(card => console.log(card.ispisKarte()))
    console.log("Dealer's Hand =",dealer.value)
    console.log("\nPlayer's Hand:")
    player.cards.forEach(card => console.log(card.ispisKarte()))
    console.log("Player's Hand =",player.value)
   
  }

  playerBusts(player,dealer,chips) {
    console.log("Player busts!")
    chips.loseBet()
  }
  playerWins(player,dealer,chips) {
    console.log("Player wins!")
    chips.winBet()
  }
  dealerBusts(player,dealer,chips) {
    console.log("dealer busts!")
    chips.winBet()
  }
  dealerWins(player,dealer,chips) {
    console.log("dealer wins!")
    chips.loseBet()
  }
  push(player,dealer) {
    console.log("Dealer and Player tie! It's a push.")
  }

}