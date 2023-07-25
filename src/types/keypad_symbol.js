import { Enumify } from 'enumify';

export default class KeypadSymbol extends Enumify {
    static BALLOON                      = new KeypadSymbol();
    static AT                           = new KeypadSymbol();
    static LAMBDA                       = new KeypadSymbol();
    static WEIRD_MIRRORED_N             = new KeypadSymbol();
    static KITTY                        = new KeypadSymbol();
    static LETTER_H                     = new KeypadSymbol();
    static BACKWARD_C_WITH_DOT          = new KeypadSymbol();
    static BACKWARD_E_WITH_UMLAUT       = new KeypadSymbol();
    static FANCY_Q                      = new KeypadSymbol();
    static HOLLOW_STAR                  = new KeypadSymbol();
    static UPSIDE_DOWN_QUESTION_MARK    = new KeypadSymbol();
    static COPYRIGHT                    = new KeypadSymbol();
    static BALLSACK                     = new KeypadSymbol();
    static DOUBLE_KS                    = new KeypadSymbol();
    static MELTED_3                     = new KeypadSymbol();
    static WEIRD_6                      = new KeypadSymbol();
    static BACKWARDS_PARAGRAPH          = new KeypadSymbol();
    static LETTER_B_WITH_CROSS          = new KeypadSymbol();
    static SMILEY_FACE                  = new KeypadSymbol();
    static PSI                          = new KeypadSymbol();
    static C_WITH_DOT                   = new KeypadSymbol();
    static THREE_WITH_TAIL              = new KeypadSymbol();
    static FULL_STAR                    = new KeypadSymbol();
    static PUZZLE_PIECE                 = new KeypadSymbol();
    static AE                           = new KeypadSymbol();
    static FORMAL_MIRRORED_N            = new KeypadSymbol();
    static OMEGA                        = new KeypadSymbol();
	
	static _ = this.closeEnum();
	
	static fromString(val) {
		return KeypadSymbol[val];
	}
};
