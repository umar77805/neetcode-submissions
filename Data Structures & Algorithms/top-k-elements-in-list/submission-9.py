class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        nums.sort()
        i, j = 0, 0
        modified = []

        while j < len(nums):
            if nums[i] == nums[j]:
                j += 1
            else:
                modified.append([nums[i], j - i])
                i = j
        
        if i != j:
            modified.append([nums[i], j - i])
        modified.sort(key=lambda x: x[1], reverse=True)
        res = []

        # print(modified)

        for i in range(k):
            res.append(modified[i][0])
        
        return res
        