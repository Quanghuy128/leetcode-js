let quickSort = (a = [], L, R) => {
    if(L>=R) return;
  let key = a[Math.floor((L + R) / 2)];
  let k = partition(a, L, R, key);
  quickSort(a, L, k - 1);
  quickSort(a, k, R);
};
let partition = (a = [], L, R, key) => {
  let iL = L,
    iR = R;
  while (iL <= iR) {
    while (a[iL] < key) iL++;
    while (a[iR] > key) iR--;
    if (iL <= iR) {
      let tmp = a[iL];
      a[iL] = a[iR];
      a[iR] = tmp;
      iL++;
      iR--;
    }
  }
  return iL;
};
var relativeSortArray = function(a1, a2) {
    quickSort(a1,0,a1.length-1)
    let map = new Map()
    for (let i = 0; i < a1.length; i++) {
        if(!map.has(a1[i])){
            map.set(a1[i],1)
        }else{
            map.set(a1[i],map.get(a1[i])+1)
        }
    }
    let c = []
    for (let i = 0; i < a2.length; i++) {
        if(map.has(a2[i])){
            while(map.get(a2[i])>0){
                c.push(a2[i])
                map.set(a2[i],map.get(a2[i])-1)
            }
        }  
    }
    for (let i = 0; i < a1.length; i++) {
        if(map.get(a1[i])!=0){
            c.push(a1[i])
            map.set(a1[i],map.get(a1[i])-1)
        }  
    }
    return c
};
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]));