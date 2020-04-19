/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], i)
    }
    for (var i = 0; i < nums.length; i++) {
        var val = target - nums[i];
        var idx = hashMap.get(val);
        if (idx !== undefined && idx !== i) {
            return [i, idx];
        }
    }
    return [];
};