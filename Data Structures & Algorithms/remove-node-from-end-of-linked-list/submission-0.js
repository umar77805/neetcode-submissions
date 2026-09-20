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
        // if (!head.next) {
        //     if (n === 1) return head.next;
        //     return head;
        // }

        let offset = head;
        while (n > 0) {
            offset = offset.next;
            n--;
        }

        if (!offset) {
            return head.next;
        }

        let prev = new ListNode(), curr = head;
        while (offset) {
            prev = curr;
            curr = curr.next;
            offset = offset.next;
        }

        const next = curr.next;
        curr.next = null;
        prev.next = next;

        return head;
    }
}
