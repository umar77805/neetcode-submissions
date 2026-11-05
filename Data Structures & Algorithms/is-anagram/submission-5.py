class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        track_map = {}

        for curr_s in s:
            if curr_s not in track_map:
                track_map[curr_s] = 0
            
            track_map[curr_s] += 1

        for curr_t in t:
            if curr_t not in track_map or track_map[curr_t] == 0:
                return False
            
            track_map[curr_t] -= 1

        return True
        