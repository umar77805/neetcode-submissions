/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists.length) return null;

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
                    let smallest = idx

                    if ((left < n) && this.compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
                    if ((right < n) && this.compare(this.heap[right], this.heap[smallest]) < 0) smallest = right;
                    if (smallest === idx) break;

                    [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
                    idx = smallest;
                }
            }
        }

        const res = new ListNode();
        const heap = new Heap((a, b) => a.val - b.val);

        for (const list of lists) if (list) heap.push(list);

        let curr = res;
        while (heap.size()) {
            const popped = heap.pop();
            curr.next = new ListNode(popped.val);
            curr = curr.next

            if (popped.next) heap.push(popped.next);
        }

        return res.next;
    }
}
