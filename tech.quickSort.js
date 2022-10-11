let quickSort = (a = [], L, R) => {
    if(L>=R) return;
  let key = a[Math.floor((L + R) / 2)];
  let k = partition(a, L, R, key);
  console.log(L,R,k,key);
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

let a = [3, 2, 1, 5, 4, 8, 7, 6];
quickSort(a, 0, a.length - 1);
console.log(a);
