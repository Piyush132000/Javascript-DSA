
let array = [];

for(let i =100000 ; i> 0; i--){
    array.push(i);
}

function selectionSort(array) {
  let min_ind;
  for (let i = 0; i < array.length; i++) {
    min_ind = i;
    for (let k = i + 1; k < array.length; k++) {
      if (array[k] < array[min_ind]) {
        min_ind = k;

        [array[i], array[min_ind]] = [array[min_ind], array[i]];
        // swap(array , min_ind , i)
      }
    }
  }

  return array;
}
console.log()

console.log(selectionSort(array));
