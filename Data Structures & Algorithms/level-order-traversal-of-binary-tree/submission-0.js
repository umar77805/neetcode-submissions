/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if  (!root) return [];
        
        class Queue {
            constructor() {
                this.queue = [];
                this.left = 0;
                this.right = 0;
            }

            size() {
                return this.right - this.left;
            }

            enqueue(val) {
                this.queue.push(val);
                this.right++;
                return this.queue[this.right];
            }

            dequeue() {
                const start = this.queue[this.left];
                this.left++;

                return start;
            }
        }

        const queue = new Queue();
        queue.enqueue([root]);

        const res = [];

        while (queue.size()) {
            const currLevel = queue.dequeue();

            const nextLevel = [];
            for (const node of currLevel) {
                if (node.left) nextLevel.push(node.left);
                if (node.right) nextLevel.push(node.right);
            }

            if (nextLevel.length) queue.enqueue(nextLevel);
            res.push(currLevel.map((node) => node.val))
        }

        return res;
    }
}
