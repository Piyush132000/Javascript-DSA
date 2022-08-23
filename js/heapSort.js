class Solution {
  //Heapify function to maintain heap property.
  heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest != i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.heapify(arr, n, largest);
    }
  }

  //Function to build a Heap from array.
  buildHeap(arr, n) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) this.heapify(arr, n, i);
  }

  //Function to sort an array using Heap Sort.
  heapSort(arr, n) {
    this.buildHeap(arr, n);

    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.heapify(arr, i, 0);
    }

    return arr;
  }
}

const obj = new Solution();

console.log(obj.heapSort([4, 3, 2, 6], 4));
