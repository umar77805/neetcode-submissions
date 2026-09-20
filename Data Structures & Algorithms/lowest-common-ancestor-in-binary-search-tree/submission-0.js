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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let lca = root;
        let a = Math.min(p.val, q.val), b = Math.max(p.val, q.val);

        // console.log(a, b)

        while (true) {
            // console.log(lca)
            if ((a <= lca.val) && (lca.val <= b)) break;
            if (a < lca.val) lca = lca.left
            else lca = lca.right;
        }

        return lca;
    }
}
