var sumOfUnique = function(nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }else{
            map.set(nums[i],map.get(nums[i])+1)
        }
    }
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if(map.get(nums[i])==1){
            sum+=nums[i]
        }
    }
    return sum
};
console.log(sumOfUnique([1,2,3,2]));
// console.log(sumOfUnique([1,1,1,1,1]));
// console.log(sumOfUnique([1,2,3,4,5]));