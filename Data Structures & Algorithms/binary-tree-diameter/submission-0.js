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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = 0;

        function inOrder(node) {
            if (!node) return 0;
            if (!node.left && !node.right) return 1;

            const left = inOrder(node.left), right = inOrder(node.right);
            res = Math.max(res, left + right)

            return 1 + Math.max(left, right);
        }

        inOrder(root);

        return res;
    }
}
