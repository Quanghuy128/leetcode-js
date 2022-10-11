var moveZeroes = function(nums) {
    let curIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=0){
            nums[curIndex++] = nums[i]
        }
    }
    for (; curIndex < nums.length; curIndex++) {
        nums[curIndex]=0   
    }
};

moveZeroes(nums=[0,1,0,3,12])
console.log(nums);