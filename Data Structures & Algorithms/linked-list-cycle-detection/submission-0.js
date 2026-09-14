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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head.next || !head.next.next) return false;

        let slow = head, fast = head.next.next;

        while (slow) {
            if (slow.val === fast.val) return true;
            if (!fast.next || !fast.next.next) return false
            slow = slow.next;
            fast = fast.next.next;
        }

        return false;
    }
}
