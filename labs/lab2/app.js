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



let myInstruments = [];

myInstruments[0] = new Woodwind;

myInstruments[1] = new Percussion;

myInstruments[2] = new String;
console.log(myInstruments);
