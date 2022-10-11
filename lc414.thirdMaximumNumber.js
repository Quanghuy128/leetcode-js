let quickSort = (a = [], L, R) => {
    if(L>=R) return;
  let key = a[Math.floor((L + R) / 2)];
  let k = partition(a, L, R, key);
  quickSort(a, L, k - 1);
  quickSort(a, k, R);
};
let partition = (a = [], L, R, key) => {
  let iL = L,
    iR = R;
  while (iL <= iR) {
    while (a[iL] < key) iL++;
    while (a[iR] > key) iR--;
    if (iL <= iR) {
      let tmp = a[iL];
      a[iL] = a[iR];
      a[iR] = tmp;
      iL++;
      iR--;
    }
  }
  return iL;
};
var thirdMax = function(nums=[]) {
    nums = Array.from(new Set(nums));
    if(nums.length==2) return Math.max(nums[0],nums[1])
    else if(nums.length==1) return nums[0]
    quickSort(nums,0,nums.length-1);
    return nums[nums.length-3]
};

console.log(thirdMax([2,1]));
console.log(thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]));