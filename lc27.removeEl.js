var removeElement = function (a, x) {
  let k = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != x) {
      a[k] = a[i];
      k++;
    }
  }
  return k;
};
console.log(removeElement([1, 2, 3, 2, 2, 5], 2));
