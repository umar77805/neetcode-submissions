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
        if ((!list1 && !list2) || !list2) return list1;
        if (!list1) return list2;

        const res = new ListNode();
        let resPointer = res;
        let list1Pointer = list1, list2Pointer = list2;
        let counter = 0;

        while (list1Pointer && list2Pointer) {
            if (list1Pointer.val < list2Pointer.val) {
                resPointer.val = list1Pointer.val;
                resPointer.next = new ListNode();
                list1Pointer = list1Pointer.next;
            } else {
                resPointer.val = list2Pointer.val;
                resPointer.next = new ListNode();
                list2Pointer = list2Pointer.next;
            }
            resPointer = resPointer.next;
            counter++;
        }

        while (list1Pointer) {
            resPointer.val = list1Pointer.val;
            resPointer.next = new ListNode();
            list1Pointer = list1Pointer.next;
            resPointer = resPointer.next;
            counter++;
        }

        while (list2Pointer) {
            resPointer.val = list2Pointer.val;
            resPointer.next = new ListNode();
            list2Pointer = list2Pointer.next;
            resPointer = resPointer.next;
            counter++;
        }

        let currHead = res;
        for (let i = 0; i < counter - 1; i++) currHead = currHead.next;
        currHead.next = null;

        return res;
    }
}
