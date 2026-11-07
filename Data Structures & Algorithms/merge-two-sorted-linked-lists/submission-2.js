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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode();
        let point = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                point.next = new ListNode(list1.val);
                list1 = list1.next;
            } else {
                point.next = new ListNode(list2.val);
                list2 = list2.next;
            }

            point = point.next;
        }

        while (list1) {
            point.next = new ListNode(list1.val);
            list1 = list1.next;
            point = point.next;
        }

        while (list2) {
            point.next = new ListNode(list2.val);
            list2 = list2.next;
            point = point.next;
        }

        return dummy.next;
    }
}
