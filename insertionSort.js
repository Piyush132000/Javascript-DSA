var array = [];

for (let i = 10000; i > 0; i--) {
  array.push(i);
}

function sort(array, n) {
  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }

  return array;
}

console.log(sort(array, 10000));
