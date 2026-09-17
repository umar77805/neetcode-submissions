class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const t of tokens) {
            if (['+', '-', '*', '/'].includes(t)) {
                if (stack.length < 2) continue;
                const second = stack.pop();
                const first = stack.pop();

                if (t === '+') {
                    stack.push(first + second)
                } else if (t === '-') {
                    stack.push(first - second)
                } else if (t === '*') {
                    stack.push(first * second)
                } else {
                    stack.push(Math.trunc(first / second))
                }
            } else stack.push(Number(t));
        }

        return stack[0]
    }
}
