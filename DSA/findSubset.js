let arr = [1, 2, 3];

function findSubSet(arr) {
  let ds = new Array();
  let list = new Array();
  function subsets(arr, index, ds, list) {
    if (index == arr.length) {
      list.push([...ds]);
      return;
    }

    ds.push(arr[index]);
    subsets(arr, index + 1, ds, list);
    ds.pop();
    subsets(arr, index + 1, ds, list);
  }

  subsets(arr, 0, ds, list);
  console.log(list);
}

findSubSet(arr);
