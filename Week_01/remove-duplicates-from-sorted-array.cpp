class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int len = nums.size();
        if (len == 0) return 0;
        int j = 0;
        for (int i = 1; i < len; i++) {
            if (nums[i] != nums[j] && i != j) {
                nums[++j] = nums[i];
            }
        }
        return j + 1;
    }
};