// Instrument class or Parent
class Instrument {
    constructor(playverb, family, loudness) {
        this.loudness = loudness;
        this.family = family;
        this.playverb = playverb;
    }
}
// console.log(Instrument);

//Child classes for different instruments
//Woodwind
//Percussion
//String
class Woodwind extends Instrument {
     constructor(playverb, family) {
        super(playverb, family, "veryloud");
    }
   
}

class Percussion extends Instrument {
     constructor(playverb, family) {
        super(playverb, family, "extremelyloud")
    }
    
}

class String extends Instrument {
      constructor(playverb, family){
        super(playverb, family, "soft")
    }
    
}

let myWoodwind = new Woodwind("Toots", "Piccolo", )
console.log(myWoodwind);
let myPercussion = new Percussion("Hit", "Snare Drum", )
console.log(myPercussion);
let myString = new String("Strum", "Acoustic Guitar", )
console.log(myString);

