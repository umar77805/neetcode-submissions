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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        let slow = head, fast = head;

        while (fast && fast.next) { // reach the middle
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null, curr = slow.next;
        slow.next = null;
        while (curr) { // reverse the second half
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        let p1 = head, p2 = prev;
        while (p2) {
            const p1Next = p1.next;
            const p2Next = p2.next;

            p1.next = p2;
            p2.next = p1Next;
            p1 = p1Next;
            p2 = p2Next;
        }

    }
}