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
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true;

        function inOrder(root) {
            if (!root) return 0;
            if (!root.left && !root.right) return 1;
            if (!balanced) return;

            const left = inOrder(root.left), right = inOrder(root.right);
            if (Math.abs(left - right) > 1) {
                balanced = false;
                return;
            }

            return 1 + Math.max(left, right)
        }

        inOrder(root);
        return balanced;
    }
}
