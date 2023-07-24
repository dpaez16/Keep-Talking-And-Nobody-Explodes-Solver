import { Enumify } from 'enumify';

export default class LitIndicatorText extends Enumify {
    static SND = new LitIndicatorText();
    static CLR = new LitIndicatorText();
    static CAR = new LitIndicatorText();
    static IND = new LitIndicatorText();
    static FRQ = new LitIndicatorText();
    static SIG = new LitIndicatorText();
    static NSA = new LitIndicatorText();
    static MSA = new LitIndicatorText();
    static TRN = new LitIndicatorText();
    static BOB = new LitIndicatorText();
    static FRK = new LitIndicatorText();
	
	static _ = this.closeEnum();
	
	static fromString(val) {
		return LitIndicatorText[val];
	}
};
