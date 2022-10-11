// var removeDuplicates = function(nums=[]) {
//     return Array.from(new Set(nums));
// };

var removeDuplicates = function(nums=[]) {
    let i = 0;
    if(nums.length<=1) return nums.length
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};
console.log(removeDuplicates([1,1,3,3,4,5]));