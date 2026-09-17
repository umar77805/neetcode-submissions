class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    #minStackLen() {
        return this.minStack.length;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        
        if (!this.minStack.length) this.minStack.push(val)
        else this.minStack.push(Math.min(this.getMin(), val))
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.#minStackLen() - 1];
    }
}
