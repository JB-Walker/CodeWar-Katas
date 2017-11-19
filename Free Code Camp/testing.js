function steamrollArray(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr = arr.concat(arr[i]);
      arr[i] = null;
    }
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
steamrollArray([1, [2], [3, [[4]]]]);