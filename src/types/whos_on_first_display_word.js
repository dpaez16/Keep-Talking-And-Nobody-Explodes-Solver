import { Enumify } from 'enumify';

export default class WhosOnFirstDisplayWord extends Enumify {
    static YES              = new WhosOnFirstDisplayWord();
    static FIRST            = new WhosOnFirstDisplayWord();
    static DISPLAY          = new WhosOnFirstDisplayWord();
    static OKAY             = new WhosOnFirstDisplayWord();
    static SAYS             = new WhosOnFirstDisplayWord();
    static NOTHING          = new WhosOnFirstDisplayWord();
    static EMPTY_DISPLAY    = new WhosOnFirstDisplayWord();
    static BLANK            = new WhosOnFirstDisplayWord();
    static NO               = new WhosOnFirstDisplayWord();
    static LED              = new WhosOnFirstDisplayWord();
    static LEAD             = new WhosOnFirstDisplayWord();
    static READ             = new WhosOnFirstDisplayWord();
    static RED              = new WhosOnFirstDisplayWord();
    static REED             = new WhosOnFirstDisplayWord();
    static LEED             = new WhosOnFirstDisplayWord();
    static HOLD_ON          = new WhosOnFirstDisplayWord();
    static YOU              = new WhosOnFirstDisplayWord();
    static YOU_ARE          = new WhosOnFirstDisplayWord();
    static YOUR             = new WhosOnFirstDisplayWord();
    static YOU__RE          = new WhosOnFirstDisplayWord();
    static UR               = new WhosOnFirstDisplayWord();
    static THERE            = new WhosOnFirstDisplayWord();
    static THEY__RE         = new WhosOnFirstDisplayWord();
    static THEIR            = new WhosOnFirstDisplayWord();
    static THEY_ARE         = new WhosOnFirstDisplayWord();
    static SEE              = new WhosOnFirstDisplayWord();
    static C                = new WhosOnFirstDisplayWord();
    static CEE              = new WhosOnFirstDisplayWord();
    
    static _ = this.closeEnum();
    
    static fromString(val) {
        return WhosOnFirstDisplayWord[val];
    }
};
