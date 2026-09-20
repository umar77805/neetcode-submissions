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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let isSame = true;

        function dfs(root1, root2) {
            if (!isSame) return false;
            if (!root1 && !root2) return true;
            if ((root1 && !root2) || (!root1 && root2) || (root1.val !== root2.val)) {
                isSame = false;
                return false;
            }

            return dfs(root1.left, root2.left) && dfs(root1.right, root2.right)
        }

        dfs(p, q);
        return isSame;
    }
}
