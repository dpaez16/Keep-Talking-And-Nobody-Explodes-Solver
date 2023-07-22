import { Enumify } from 'enumify';

export class ButtonColor extends Enumify {
    static RED      = new ButtonColor();
    static BLUE     = new ButtonColor();
    static WHITE    = new ButtonColor();
    static YELLOW   = new ButtonColor();
    static BLACK    = new ButtonColor();
    
    static _ = this.closeEnum();
    
    static fromString(val) {
        return ButtonColor[val];
    }
};


export class ButtonLEDColor extends Enumify {
    static BLUE     = new ButtonLEDColor();
    static YELLOW   = new ButtonLEDColor();
    static WHITE    = new ButtonLEDColor();
    static RED      = new ButtonLEDColor();
    static BLACK    = new ButtonLEDColor();
    
    static _ = this.closeEnum();
    
    static fromString(val) {
        return ButtonLEDColor[val];
    }
};