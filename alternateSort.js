class Sort {
  alternateSort(array) {
    let i = 0;
    let n = array.length - 1;
    array = array.sort(function (a, b) {
      return a - b;
    });
    let result = new Array();
    while (i < n) {
      result.push(array[n], array[i]);
      i++;
      n--;
    }
    return result;
  }


  waveSort(array){
    let i = 0;
    let n = array.length - 1;
    array = array.sort(function (a, b) {
      return a - b;
    });
    let result = new Array();
    while (i < n) {
      result.push(array[i+1], array[i]);
      i++;
    }
    return result;
  }
}

const array = [1, 12, 4, 6, 7, 10];
const obj = new Sort();

//console.log(obj.alternateSort([...array]));

console.log(obj.waveSort([...array]))
