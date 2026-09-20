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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSameTree(p, q) {
            if (!p && !q) return true;
            if (!p || !q || p.val !== q.val) return false;
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        }
        
        if (!subRoot) return true;   // empty tree is always a subtree
        if (!root) return false;

        // Check whether the trees starting at root and subRoot are identical
        if (isSameTree(root, subRoot)) return true;

        // Otherwise keep looking in the left and right subtrees
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

}
