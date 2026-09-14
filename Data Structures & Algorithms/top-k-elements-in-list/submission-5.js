class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // priority queue -> each node = [num, freq] -> prioritise based on freq
        // to get children fron an i -> left = 2 * i + 1, right = 2 * i + 2; to get parent -> (i - 1) >> 1

        const set = new Set(nums);
        if (set.size === k) return Array.from(set);
        
        const freqMap = new Map();

        for (const num of nums) {
            if (!freqMap.has(num)) freqMap.set(num, 0);

            freqMap.set(num, freqMap.get(num) + 1);
        }

        class Heap {
            constructor(compare = (a, b) => a - b) {
                this.heap = [];
                this.compare = compare;
            }

            peek() {
                return this.heap[0];
            }

            size() {
                return this.heap.length;
            }

            push(ele) {
                this.heap.push(ele);
                this.#bubbleUp(this.size() - 1)
            }

            #bubbleUp(idx) {
                while (idx > 0) {
                    const parent = (idx - 1) >> 1;

                    if (this.compare(this.heap[idx], this.heap[parent]) < 0) {
                        [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
                        idx = parent;
                    } else break;
                }
            }

            pop() {
                const top = this.peek();
                const last = this.heap.pop();

                if (this.size()) {
                    this.heap[0] = last;
                    this.#bubbleDown(0);
                }

                return top;
            }

            #bubbleDown(idx) {
                const n = this.size();

                while (true) {
                    const left = 2 * idx + 1, right = 2 * idx + 2;
                    let smallest = idx;

                    if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
                    if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0) smallest = right;
                    if (idx === smallest) break;

                    [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
                    idx = smallest;
                }
            }
        }

        const heap = new Heap((a, b) => b[1] - a[1]);

        for (const ele of Array.from(freqMap)) {
            heap.push(ele);
        }

        const res = [];

        for (let i = k; i > 0; i--) {
            res.push(heap.pop()[0]);
        }

        return res;
    }
}










