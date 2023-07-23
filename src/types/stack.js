export default class Stack {
    constructor() {
        this.stk = [];
    }

    push(item) {
        this.stk.push(item);
    }

    pop() {
        return this.stk.pop();
    }

    get top() {
        return this.stk[this.stk.length - 1];
    }

    get length() {
        return this.stk.length;
    }
};