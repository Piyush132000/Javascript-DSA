class LeftRotate {
  reverseArray(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  leftRotate(arr, d, n) {
    if (d === 0) return;

    d = d % n;

    this.reverseArray(arr, 0, d - 1);
    this.reverseArray(arr, d, n - 1);
    this.reverseArray(arr, 0, n - 1);

    return arr;
  }
}

const obj3 = new LeftRotate();
console.log(obj3.leftRotate([1, 2, 3, 4, 5, 6, 7, 8], 3, 8));
