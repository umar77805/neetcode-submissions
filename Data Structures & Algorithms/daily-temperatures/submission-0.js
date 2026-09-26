class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const stack = [], res = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            const temp = temperatures[i];

            while (stack.length && (temp > temperatures[stack[stack.length - 1]])) {
                const lastIdx = stack.pop();
                res[lastIdx] = i - lastIdx;
            }

            stack.push(i);
        }

        return res;
    }
}
