// Instrument class or Parent
class Instrument {
    constructor(loudness, family, playverb) {
        this.loudness = loudness;
        this.family = family;
        this.playverb = playverb;
    }
}
console.log(Instrument);

//Child classes for different instruments
class Woodwind extends Instrument {
    constructor(playverb, family)
    super(playverb, family, veryloud);
}

class Percussion extends Instrument {
    constructor(playverb, family)
    super(playverb, family, extremelyloud)
}

class String extends Instrument {
    constructor(playverb, family)
    super(playverb, family, soft)
}

let myWoodwind = new Woodwind("Toots", "Piccolo", )
console.log(Woodwind);

