import { Enumify } from 'enumify';

export default class Password extends Enumify {
    static ABOUT = new Password();
    static AFTER = new Password();
    static AGAIN = new Password();
    static BELOW = new Password();
    static COULD = new Password();
    static EVERY = new Password();
    static FIRST = new Password();
    static FOUND = new Password();
    static GREAT = new Password();
    static HOUSE = new Password();
    static LARGE = new Password();
    static LEARN = new Password();
    static NEVER = new Password();
    static OTHER = new Password();
    static PLACE = new Password();
    static PLANT = new Password();
    static POINT = new Password();
    static RIGHT = new Password();
    static SMALL = new Password();
    static SOUND = new Password();
    static SPELL = new Password();
    static STILL = new Password();
    static STUDY = new Password();
    static THEIR = new Password();
    static THERE = new Password();
    static THESE = new Password();
    static THING = new Password();
    static THINK = new Password();
    static THREE = new Password();
    static WATER = new Password();
    static WHERE = new Password();
    static WHICH = new Password();
    static WORLD = new Password();
    static WOULD = new Password();
    static WRITE = new Password();
    
    static _ = this.closeEnum();
    
    static fromString(val) {
        return Password[val];
    }
};