var findMedianSortedArrays = function (n1 = [], n2 = []) {
  var i = n1.length - 1;
  var j = n2.length - 1;
  var k = n2.length + n1.length - 1;
  if (n1.length == 1 && n2.length==0) return n1[0];
  else if (n2.length == 1 && n1.length==0) return n2[0];
  while (k >= 0) {
    if (j < 0) {
      n1[k] = n1[i];
      i--;
    } else if (i < 0) {
      n1[k] = n2[j];
      j--;
    } else if (n2[j] > n1[i]) {
      n1[k] = n2[j];
      j--;
    } else {
      n1[k] = n1[i];
      i--;
    }
    k--;
  }
  k = n1.length;
  if (k % 2 == 1) return n1[Math.floor(k / 2)];
  else return (n1[k / 2] + n1[k / 2 - 1]) / 2;
};
let arr1 = [3],
  arr2 = [1,2];
console.log(findMedianSortedArrays(arr1, arr2));
