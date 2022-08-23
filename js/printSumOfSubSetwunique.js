const list = new Set([]);
function printUniqueSubSet(array, ds, answer, start) {
   
    if(!answer.includes(ds)){
     answer.push([...ds]);
    }

  for (let i = start; i < array.length; i++) {
    if (i > start && array[i] == array[i - 1]) continue;
    ds.push(array[start]);
    printUniqueSubSet(array, ds, answer, start + 1);
    ds.pop();
  }
  return answer;
}

let array = [3, 1, 1, 2, 2];
array = array.sort(function (a, b) {
  return a - b;
});

console.log(new Set(printUniqueSubSet(array, [],[], 0)));
