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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const ordered = [];

        function dfs(root) {
            if (!root) return;
            if (!root.left && !root.right) {
                ordered.push(root.val);
                return;
            }

            dfs(root.left);
            ordered.push(root.val)
            dfs(root.right);
        }


        dfs(root);
        let offset = 0;
        while (k > 1) {
            k--;
            offset++;
        }

        return ordered[offset];
    }
}
