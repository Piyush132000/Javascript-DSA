class RearrangeElements {
  fix(arr, n) {
    for (let i = 0; i < n;) {
      if (arr[i] >= 0 && arr[i] != 1) {
        arr[arr[i]] = (arr[arr[i]] + arr[i])
        - (arr[i] = arr[arr[i]]);
      } {
        i++
      }
    }
    return arr;
  }
}

const rearrangeElements = new RearrangeElements();

const array = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];

console.log(rearrangeElements.fix(array, array.length));
