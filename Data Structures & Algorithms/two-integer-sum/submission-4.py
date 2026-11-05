class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        track_map = {}

        for i in range(len(nums)):
            if target - nums[i] in track_map:
                return [track_map[target - nums[i]], i]
            
            track_map[nums[i]] = i
        
        return [-1 , -1]