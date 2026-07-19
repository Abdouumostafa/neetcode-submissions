class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const removeDublication = new Set(nums)
        return removeDublication.size !== nums.length
    }
}
