class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = new Map();

        for (const [course, pre] of prerequisites) {
            if (!adj.has(course)) adj.set(course, []);
            adj.get(course).push(pre)
        }

        const visited = new Set();

        function finish(course, visiting = new Set()) {
            if (visiting.has(course)) return false;
            if (visited.has(course)) return true;

            visiting.add(course);

            for (const pre of (adj.get(course) || [])) {
                if (!finish(pre, visiting)) return false;
            }

            visiting.delete(course);
            visited.add(course);

            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!finish(i)) return false;
        }

        return true;
    }
}
