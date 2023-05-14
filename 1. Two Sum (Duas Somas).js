//Link da questão no LeetCode: https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(let i1 = 0; i1 < nums.length; i1++) {
      for(let i2 = 0; i2 < nums.length; i2++) {
        if(nums[i1] + nums[i2] == target && i1 !== i2) {
          return [i1, i2]
        }
      }
    }
}

console.log(twoSum([2,7,11,15], 9))