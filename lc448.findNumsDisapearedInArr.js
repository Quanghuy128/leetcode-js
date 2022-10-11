var findDisappearedNumbers = function(nums) {
    // let set = new Set(nums.sort())
    // let c = []
    // let k = nums.length - 1
    // for (let i = 1; i <= nums.length; i++) {
    //     if(!set.has(i)){
    //         c.push(i)
    //     }
    // }
    // return c;
    
};

var findDisappearedNumbers = function(nums) {
    if(nums.length<=1) return []
    let c = []; 
    for (let i = 1; i <= nums.length; i++) {
       if (!(nums.includes(i))) {
           c.push(i);
       }
   }
    return c;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));
console.log(findDisappearedNumbers([2,2]));
