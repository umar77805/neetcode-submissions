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
    goodNodes(root) {
        let res = 0;

        function dfs(root, max = -101) {
            // console.log('root.val', root?.val || null)
            // console.log('max', max)
            if (!root) return;
            if (root.val >= max) {
                res++;
                max = root.val;
            }

            dfs(root.left, max);
            dfs(root.right, max);
        }

        dfs(root);
        return res;
    }
}
