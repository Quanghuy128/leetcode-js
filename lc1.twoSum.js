//description
//https://leetcode.com/problems/two-sum/
/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
*/
//Example 2:
//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//solution
let nums = [1, 3, 4, 6, 7, 8];
let target = 9;
let twoSum = (nums, target) => {
  const map = new Map();
  for (var i = 0; i < nums.length; i++) {
    let remain = target - nums[i];
    if (map.has(remain)) {
      return [map.get(remain), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
console.log(twoSum(nums, target));

