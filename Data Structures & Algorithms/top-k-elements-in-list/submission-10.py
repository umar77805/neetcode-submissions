class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_arr = [[] for _ in range(len(nums) + 1)]
        freq_map = {}

        for num in nums:
            if num not in freq_map:
                freq_map[num] = 0
            
            freq_map[num] += 1
        
        for num, freq in freq_map.items():
            freq_arr[freq].append(num)

        
        res = []

        for i in range(len(nums), 0, -1):
            if len(freq_arr[i]) != 0:
                res.extend(freq_arr[i])
        
        return res[0:k]