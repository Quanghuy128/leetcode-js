
let nums = [10,4,2,7,7,9]
nums.sort((a,b)=>a-b);
let arr = new Set(nums)
nums = Array.from(new Set(arr));
let secondLargestNum = nums[nums.length-2]

console.log(secondLargestNum);