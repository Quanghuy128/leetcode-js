var merge = function (n1, m, n2, n) {
  let j = n - 1;
  let i = m - 1;
  let k = m+n -1;
  console.log(k,i,j);
  while (k >= 0) {
    if (i < 0) {
      n1[k] = n2[j];
      j--;
    } else if (j < 0) {
      n1[k] = n1[i];
      i--;
    } else if (n1[i] > n2[j]) {
      n1[k] = n1[i];
      i--;
    } else {
      n1[k] = n2[j];
      j--;
    }
    k--;
  }
  return n1
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
