class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        class Heap {
            constructor(compare = (a, b) => a - b) {
                this.heap = [];
                this.compare = compare;
            }

            size() {return this.heap.length}
            peek() {return this.heap[0]}

            push(val) {
                this.heap.push(val);
                this.#bubbleUp(this.size() - 1);
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
                const popped = this.heap.pop();

                if (this.size()) {
                    this.heap[0] = popped;
                    this.#bubbleDown(0);
                }

                return top;
            }

            #bubbleDown(idx) {
                const n = this.size();

                while (true) {
                    const left = 2 * idx + 1, right = 2 * idx + 2;
                    let smallest = idx;

                    if ((left < n) && this.compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
                    if ((right < n) && this.compare(this.heap[right], this.heap[smallest]) < 0) smallest = right;

                    if (smallest === idx) break;

                    [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
                    idx = smallest;
                }
            }
        }

        const heap = new Heap((a, b) => b - a);
        for (const num of nums) heap.push(num);

        let res = null;
        for (let i = 0; i < k; i++) {
            res = heap.pop();
        }

        return res;
    }
}
