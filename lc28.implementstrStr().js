// var strStr = function(h, n) {
//     return h.indexOf(n)
// };

var strStr = function(h, n) {
    if(h==""&&n==""){return 0;} 
    else if(n=="") return 0;
    let check = false;
    for (let i = 0; i < h.length; i++) {
        if(h[i]==n[0]){
            check = false;
            for (let j = 1; j < n.length; j++) {
                if(h[i+j]!==n[j]){
                    check = true;
                    break;
                }
            }
            if (check == false)
                return i;
        }
        
    }
    return -1;
};

console.log(strStr("hello","he"));
console.log(strStr("hello",""));
console.log(strStr("he","o"));
console.log(strStr("",""));