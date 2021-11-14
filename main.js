const prompt = require('prompt-sync')();
const Deck = require('./deck');
const Hand = require('./hand');
const Gameplay = require('./gamePlay');
const Chips = require('./chips');


while (true){
  console.log('Welcome to BlackJack! Get as close to 21 as you can without going over!\n\
  Dealer hits until she reaches 17. Aces count as 1 or 11.');
  const gamePlay = new Gameplay();
  const deck = new Deck();
  deck.punjenjeDeckaKarata();
  deck.shuffleDeck();

  playerHand = new Hand();
  playerHand.addCard(deck.deal());
  playerHand.addCard(deck.deal());

  dealerHand = new Hand();
  dealerHand.addCard(deck.deal());
  dealerHand.addCard(deck.deal());

  playerChips = new Chips();

  gamePlay.takeBet(playerChips);
  gamePlay.showSome(playerHand,dealerHand);

 while (gamePlay.playing) {
   gamePlay.hitOrStand(deck, playerHand);
   gamePlay.showSome(playerHand,dealerHand);
   if(playerHand.value > 21) {
    gamePlay.showAll(playerHand,dealerHand);
     gamePlay.playerBusts(playerHand,dealerHand,playerChips);
     break
   }
 };
 if(playerHand.value <= 21) {
   while(dealerHand.value < 17){
     gamePlay.hit(deck, dealerHand)
     if(dealerHand.value > 21) {
      gamePlay.showAll(playerHand,dealerHand);
       gamePlay.dealerBusts(playerHand,dealerHand,playerChips);
     }else if(dealerHand.value > playerHand.value){
      gamePlay.showAll(playerHand,dealerHand);
       gamePlay.dealerWins(playerHand,dealerHand,playerChips)
     }else if(dealerHand.value < playerHand.value) {
      gamePlay.showAll(playerHand,dealerHand);
       gamePlay.playerWins(playerHand,dealerHand,playerChips)
     }else {
      gamePlay.showAll(playerHand,dealerHand);
       gamePlay.push(playerHand,dealerHand)
     }
   }
 };

 console.log("\nPlayer's winnings stand at",playerChips.total);

 const newGame = prompt("Would you like to play another hand? Enter 'y' or 'n' ");

 if (newGame[0] == 'y'){
   gamePlay.playing = true;
   continue;
 } else {
   console.log("Thanks for playing!")
   break
 }
};
