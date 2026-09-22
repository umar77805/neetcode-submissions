class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // key here is to actually simulate each unit of time
        // at each iteration unit time will go up and we will check if there are any tasks available to fill
        // at the end we return the total time it took
        // this is a mix of heap and greedy approach

        const freqMap = tasks.reduce((acc, curr) => {
            acc.set(curr, (acc.get(curr) || 0) + 1);
            return acc;
        }, new Map());

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
                    this.#bubbleDown(0)
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
        class Queue {
            constructor() {
                this.queue = [];
                this.left = 0;
                this.right = 0;
            }

            size() {return this.right - this.left}
            peek() {return this.queue[this.left]}

            enqueue(val) {
                this.queue.push(val);
                this.right++;

                return this.queue[this.right];
            }

            dequeue() {
                const start = this.peek();
                this.left++;

                return start;
            }
        }

        const heap = new Heap((a, b) => b - a);
        const queue = new Queue();

        for (const freq of freqMap.values()) heap.push(freq);

        let time = 0;
        while (heap.size() || queue.size()) {
            // console.log(heap)
            time++;
            
            // 1. Tasks whose cooldown has finished become available
            while (queue.size() && queue.peek()[1] <= time) {
                heap.push(queue.dequeue()[0]);
            }

            // 2. Execute the most frequent available task
            if (heap.size()) {
                const freq = heap.pop();

                // 3. Put it into cooldown
                if (freq > 1) {
                    queue.enqueue([
                        freq - 1,
                        time + n + 1
                    ]);
                }
            }

            // if none of the above statements come out to be true, current iteration is considered idle
        }

        return time;
    }
}
