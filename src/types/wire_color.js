import { Enumify } from 'enumify';

export default class WireColor extends Enumify {
	static RED 		= new WireColor();
	static BLUE 	= new WireColor();
	static YELLOW 	= new WireColor();
	static BLACK 	= new WireColor();
	static WHITE 	= new WireColor();
	
	static _ = this.closeEnum();
	
	static fromString(val) {
		return WireColor[val];
	}
};
