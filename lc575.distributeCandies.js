var distributeCandies = function(c) {
    let m = [...new Set(c)].length;
    let n = c.length/2
    return m>n ? n : m
};
console.log(distributeCandies([1,1,2,2,3,3]));
console.log(distributeCandies([1,1,2,3]));
console.log(distributeCandies([6,6,6,6]));