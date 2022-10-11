var findRestaurant = function (l1, l2) {
  if(l2.length<l1.length) return findRestaurant(l2,l1)
  let map = new Map()
  for (let i = 0; i < l1.length; i++) {
      map.set(l1[i],i)
  }
  let c = []
  let min = Infinity;
  for (let i = 0; i < l2.length; i++) {
      if(map.has(l2[i])){
          if(min > map.get(l2[i]) + i){
            min = map.get(l2[i]) + i;
          }
      }
  }
  for (let i = 0; i < l2.length; i++) {
      console.log(map.get(l2[i]),i);
      if(map.get(l2[i]) + i == min){
          c.push(l2[i])
      }
  }
  return c
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
);
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Burger King", "Tapioca Express", "Shogun"]
  )
);
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KNN", "KFC", "Burger King", "Tapioca Express", "Shogun"]
  )
);
console.log(findRestaurant(["KFC"], ["KFC"]));
