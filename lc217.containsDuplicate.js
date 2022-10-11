var containsDuplicate = function (nums) {
  return Array.from(new Set(nums)).length - nums.length;
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2]));
