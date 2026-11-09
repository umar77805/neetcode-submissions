class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        if (gas.reduce((acc, curr) => acc + curr, 0) < cost.reduce((acc, curr) => acc + curr, 0)) return -1;

        let start = 0, tank = 0;
        for (let i = 0; i < gas.length; i++) {
            tank += gas[i] - cost[i];

            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }
        }

        return start;
    }
}
