import { Enumify } from 'enumify';

export default class MorseCodeWord extends Enumify {
    static SHELL    = new MorseCodeWord();
    static HALLS    = new MorseCodeWord();
    static SLICK    = new MorseCodeWord();
    static TRICK    = new MorseCodeWord();
    static BOXES    = new MorseCodeWord();
    static LEAKS    = new MorseCodeWord();
    static STROBE   = new MorseCodeWord();
    static BISTRO   = new MorseCodeWord();
    static FLICK    = new MorseCodeWord();
    static BOMBS    = new MorseCodeWord();
    static BREAK    = new MorseCodeWord();
    static BRICK    = new MorseCodeWord();
    static STEAK    = new MorseCodeWord();
    static STING    = new MorseCodeWord();
    static VECTOR   = new MorseCodeWord();
    static BEATS    = new MorseCodeWord();
    
    static _ = this.closeEnum();
    
    static fromString(val) {
        return MorseCodeWord[val];
    }
};