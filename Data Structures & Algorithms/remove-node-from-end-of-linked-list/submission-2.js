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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head || n === 0) return head;
        if (!head.next) return head.next;
        let offset = head;

        for (let i = 0; i < n - 1; i++) {
            offset = offset.next;
        }

        if (!offset.next) return head.next;

        let prev = null, curr = head;
        while (offset.next) {
            prev = curr;
            curr = curr.next;
            offset = offset.next
        }

        prev.next = curr?.next || null;
        if (curr?.next) curr.next = null;

        return head;
    }
}
