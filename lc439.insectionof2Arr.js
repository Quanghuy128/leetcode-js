var intersection = function(nums1, nums2) {
    if(nums1.length==0 || nums2.length==0) return []
    let set = new Set(nums1)
    let c = []
    for(let i = 0; i < nums2.length; i++){
      if(set.has(nums2[i])){
        c.push(nums2[i])
      }
    }
    return Array.from(new Set(c))
  };
  console.log(intersection([1,2,2,1],[2,2]));