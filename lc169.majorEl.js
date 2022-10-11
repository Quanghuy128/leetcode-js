var majorityElement = function(nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }else{
            map.set(nums[i],map.get(nums[i])+1)
        }
    }
    map = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]))
    return Array.from(map)[0][0]
    
};
console.log(majorityElement([3,2,3,2,2]));