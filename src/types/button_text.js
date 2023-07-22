import { Enumify } from 'enumify';

export default class ButtonText extends Enumify {
	static ABORT    = new ButtonText();
	static DETONATE = new ButtonText();
	static HOLD     = new ButtonText();
	static PRESS    = new ButtonText();
	
	static _ = this.closeEnum();
	
	static fromString(val) {
		return ButtonText[val];
	}
};
