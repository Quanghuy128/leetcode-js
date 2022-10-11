var nextGreaterElement = function(n1, n2) {
    let c=[]
    for (let i = 0; i < n1.length; i++) {
        pos = n2.indexOf(n1[i])
        // console.log("hoo",i,n1[i],pos,n2[pos],n2[pos+1]);
        if(pos!=-1){
            if(n2[pos] < n2[pos+1]){
                // console.log("hi",i,n1[i],pos,n2[pos],n2[pos+1]);
                c.push(n2[pos+1])
            }else{
                // console.log("ha",i,n1[i],pos,n2[pos],n2[pos+1]);
                c.push(-1)
            }
        }
    }
    return c
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2]));
console.log(nextGreaterElement([2,4],[1,2,3,4]));
console.log(nextGreaterElement([1,3,5,2,4],[6,5,4,3,2,1,7]));