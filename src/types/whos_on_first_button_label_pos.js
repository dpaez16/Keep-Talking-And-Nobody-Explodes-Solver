import { Enumify } from 'enumify';

export default class WhosOnFirstButtonLabelPosition extends Enumify {
    static TOP_LEFT         = new WhosOnFirstButtonLabelPosition();
    static TOP_RIGHT        = new WhosOnFirstButtonLabelPosition();
    static MIDDLE_LEFT      = new WhosOnFirstButtonLabelPosition();
    static MIDDLE_RIGHT     = new WhosOnFirstButtonLabelPosition();
    static BOTTOM_LEFT      = new WhosOnFirstButtonLabelPosition();
    static BOTTOM_RIGHT     = new WhosOnFirstButtonLabelPosition();
    
    static _ = this.closeEnum();
    
    static fromString(val) {
        return WhosOnFirstButtonLabelPosition[val];
    }
};
