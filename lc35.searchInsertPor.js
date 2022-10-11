//O(n)
var searchInsert1 = function (nums = [], key) {
  const arrLength = nums.length;
  let a = 0;

  for (let i = 0; i < arrLength; i++) {
    if (i === arrLength - 1 && nums[i] !== target) a = i + 1;
    if (nums[i] == target || nums[i] > target) {
      return (a = i);
    }
  }
  return a;
};
//O(nlogn)
var searchInsert = function (nums = [], key) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (key == nums[mid]) return mid;
    else if (key > nums[mid]) l = mid + 1;
    else r = mid - 1;
  }
  return l;
};
console.log(searchInsert([1, 2, 5, 6], 7));
