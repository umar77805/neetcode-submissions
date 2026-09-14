class TimeMap {
    constructor() {
        this.timeStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.timeStore.has(key)) this.timeStore.set(key, []);
    
        const newData = {
            value,
            timestamp,
        };

        this.timeStore.get(key).push(newData);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const currData = this.timeStore.get(key) || [];
        const n = currData.length;

        if (n === 0) return '';
        
        let left = 0, right = n - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (currData[mid].timestamp === timestamp) return currData[mid].value;

            if (timestamp < currData[mid].timestamp) right = mid - 1
            else left = mid + 1;
        }

        return right >= 0 ? currData[right].value : '';
    }
}
