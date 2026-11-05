class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        track_set = set()

        for num in nums:
            if num in track_set:
                return True

            track_set.add(num)

        return False
        