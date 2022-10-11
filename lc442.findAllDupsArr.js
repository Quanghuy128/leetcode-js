var findDuplicates = function(nums) {
    if(nums.length <= 1) return []
    let map = new Map()
    let c = []
    for (let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }else{
            c.push(nums[i])
        }
    }
    return c
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));