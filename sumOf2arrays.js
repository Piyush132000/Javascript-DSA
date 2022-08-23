var findMedianSortedArrays = function (nums1, nums2) {
  let array = nums1.concat(nums2);
  array = array.sort(function (a, b) {
    return a - b;
  });

  let length = array.length;
  if (length % 2 == 0) {
    console.log(array[array.length / 2 - 1] , array[array.length / 2 + 1])
    return (array[array.length / 2 - 1] + array[array.length / 2 ]) / 2;
  } else {
    console.log((array.length + 1) / 2)
    return array[(array.length + 1) / 2  - 1];
  }
};

let array = [1, 2, ];
let array2 = [3, 4];

console.log(findMedianSortedArrays(array, array2));
