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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        const dummy = new ListNode(0);
        let curr = dummy;

        while (l1 || l2 || carry) {
            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;
            const sum = val1 + val2 + carry;

            curr.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);
            curr = curr.next;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next;
    }
}
