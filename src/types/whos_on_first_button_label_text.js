import { Enumify } from 'enumify';

export default class WhosOnFirstButtonLabelText extends Enumify {
    static READY                = new WhosOnFirstButtonLabelText();
    static FIRST                = new WhosOnFirstButtonLabelText();
    static NO                   = new WhosOnFirstButtonLabelText();
    static BLANK                = new WhosOnFirstButtonLabelText();
    static NOTHING              = new WhosOnFirstButtonLabelText();
    static YES                  = new WhosOnFirstButtonLabelText();
    static WHAT                 = new WhosOnFirstButtonLabelText();
    static UHHH                 = new WhosOnFirstButtonLabelText();
    static LEFT                 = new WhosOnFirstButtonLabelText();
    static RIGHT                = new WhosOnFirstButtonLabelText();
    static MIDDLE               = new WhosOnFirstButtonLabelText();
    static OKAY                 = new WhosOnFirstButtonLabelText();
    static WAIT                 = new WhosOnFirstButtonLabelText();
    static PRESS                = new WhosOnFirstButtonLabelText();
    static YOU                  = new WhosOnFirstButtonLabelText();
    static YOU_ARE              = new WhosOnFirstButtonLabelText();
    static YOUR                 = new WhosOnFirstButtonLabelText();
    static YOU__RE              = new WhosOnFirstButtonLabelText();
    static UR                   = new WhosOnFirstButtonLabelText();
    static U                    = new WhosOnFirstButtonLabelText();
    static UH_HUH               = new WhosOnFirstButtonLabelText();
    static UH_UH                = new WhosOnFirstButtonLabelText();
    static WHAT_QUESTION_MARK   = new WhosOnFirstButtonLabelText();
    static DONE                 = new WhosOnFirstButtonLabelText();
    static NEXT                 = new WhosOnFirstButtonLabelText();
    static HOLD                 = new WhosOnFirstButtonLabelText();
    static SURE                 = new WhosOnFirstButtonLabelText();
    static LIKE                 = new WhosOnFirstButtonLabelText();
    
    static _ = this.closeEnum();
    
    static fromString(val) {
        switch (val) {
            case "YOU ARE":
                return WhosOnFirstButtonLabelText.YOU_ARE;
            case "YOU'RE":
                return WhosOnFirstButtonLabelText.YOU__RE;
            case "UH HUH":
                return WhosOnFirstButtonLabelText.UH_HUH;
            case "UH UH":
                return WhosOnFirstButtonLabelText.UH_UH;
            case "What?":
                return WhosOnFirstButtonLabelText.WHAT_QUESTION_MARK;
            default:
                return WhosOnFirstButtonLabelText[val];
        }
    }
};
