// sort 1 to n by swapping

class SortBySwaping {
  sort(arr, arr2) {
    let i = 0;
    let n = arr.length - 1;

    for (i = 0; i < n; i++) {
      if (arr2[i] != 0) {
        if (arr[i] != i + 1) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
    }

    for (i = 0; i < n; i++) {
      if (arr[i] != i + 1) {
        return 0;
      }
    }
    return 1;
  }
}


const obj1 = new SortBySwaping();
const array = [ 2,1,3,4,6,5];
const array2 = [0,1,1,1,0];

console.log(obj1.sort(array, array2) == 0 ? "Sorted": "no possible")
