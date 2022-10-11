var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    while (nums[i] === nums[i - 1]) i++; 
    let j = i + 1, r = nums.length - 1;
    while (j < r) {
      let sum = nums[i] + nums[j] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[r]]);
        while (nums[j] === nums[j + 1]) j++;
        j++;
      }
      if (sum > 0) r--;
      if (sum < 0) j++;
    }
  }
  return res;
};
console.log(threeSum([-1,1,-1,2,-3]));