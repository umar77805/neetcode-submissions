// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const res = new Node(null);
        let original = head, copy = res;

        const nodeMap = new Map();

        while (original) {
            const newNode = new Node(original.val);
            copy.next = newNode;

            nodeMap.set(original, newNode);

            original = original.next;
            copy = copy.next;
        }

        let oCurr = head, cCurr = res.next;

        while (oCurr) {
            cCurr.random = nodeMap.get(oCurr.random) || null;
            oCurr = oCurr.next;
            cCurr = cCurr.next;
        }

        return res.next;
    }
}
