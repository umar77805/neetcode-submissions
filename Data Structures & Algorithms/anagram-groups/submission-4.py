class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        track_map = {} # sorted_str -> idx_of_res
        res = []

        for strr in strs:
            sorted_str = ''.join(sorted(strr))
            if sorted_str in track_map.keys():
                res[track_map[sorted_str]].append(strr)
            else:
                track_map[sorted_str] = len(track_map)
                res.append([strr])

        return res

        