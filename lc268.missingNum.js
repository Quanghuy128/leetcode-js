//XOR
var missingNumber = function(nums) {
    let a = nums.length;
    for (let i = 0; i < nums.length; i++) {
        console.log(a,i,nums[i]);
        a ^= i ^ nums[i]
    }
    return a
};

//sum
// var missingNumber = function(nums) {
//     let a = nums.length*(nums.length+1)/2;
//     for (let i = 0; i < nums.length; i++) {
//         a -= nums[i]
//     }
//     return a
// };
console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));