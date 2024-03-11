/**
 * @param {number[]} nums
 * @return {int}
 */
function maxValue(nums) {
    if (!nums[0]) return 0;
    const compare = maxValue(nums.slice(1));
    return nums[0] > compare ? nums[0] : compare; 
}
