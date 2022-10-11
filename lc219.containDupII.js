var containsNearbyDuplicate = function(nums, k) {
    if(nums<=1) return false
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
      if(map.has(nums[i])){
        console.log(map.get(nums[i]),i,Math.abs(map.get(nums[i])-i),k,map);
        if(Math.abs(map.get(nums[i])-i) > k){
            map.set(nums[i],i)
        }else return true
      }else{
        map.set(nums[i],i)
      }
    }
    return false
};
console.log(containsNearbyDuplicate([1,2,5,4,3,0,1],3));
console.log(containsNearbyDuplicate([1,0,1,1],1));
