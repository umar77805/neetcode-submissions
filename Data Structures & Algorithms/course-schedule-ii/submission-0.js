class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = new Map();

        for (const [course, pre] of prerequisites) {
            if (!adj.has(course)) adj.set(course, []);
            adj.get(course).push(pre)
        }

        const visited = new Set();
        const res = []

        function finish(course, visiting = new Set()) {
            if (visiting.has(course)) return false;
            if (visited.has(course)) return true;

            visiting.add(course);

            for (const pre of (adj.get(course) || [])) {
                if (!finish(pre, visiting)) return false;
            }

            visiting.delete(course);
            visited.add(course);
            res.push(course)

            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!finish(i)) return [];
        }

        return res;
    }
}
