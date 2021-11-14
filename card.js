module.exports = class Card {
  constructor(broj,boja){
    this.broj = broj;
    this.boja = boja;
  }

  ispisKarte() {
    return `${this.broj} of ${this.boja}`
  }
}