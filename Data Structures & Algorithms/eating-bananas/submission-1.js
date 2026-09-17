class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function canEat(time) {
            let t = 0;

            for (const pile of piles) {
                t += Math.ceil(pile / time);
            }

            return t <= h;
        }

        let left = 1, right = Math.max(...piles);
        let min = Infinity;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (canEat(mid)) {
                min = mid;
                right = mid - 1;
            } else left = mid + 1;
        }

        return min;
    }
}
