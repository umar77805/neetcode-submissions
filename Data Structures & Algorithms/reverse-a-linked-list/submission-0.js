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
     * @return {ListNode}
     */
    reverseList(head) {
        //     0 -> 1 -> 2 -> 3
        //     p    c    n
        // curr.next = prev
        // prev = curr, curr = next
        let prev = null, curr = head;

        while(curr) {
            const next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next
        }

        return prev;
    }
}
