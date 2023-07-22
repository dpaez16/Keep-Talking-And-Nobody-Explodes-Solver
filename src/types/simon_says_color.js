import { Enumify } from 'enumify';

export default class SimonSaysColor extends Enumify {
    static RED      = new SimonSaysColor();
    static BLUE     = new SimonSaysColor();
    static GREEN    = new SimonSaysColor();
    static YELLOW   = new SimonSaysColor();
    
    static _ = this.closeEnum();
    
    static fromString(val) {
        return SimonSaysColor[val];
    }
};