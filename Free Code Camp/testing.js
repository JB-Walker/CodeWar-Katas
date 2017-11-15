function chunkArrayInGroups(arr, size) {
    debugger;
    let newArr = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
      newArr[i] = [];
      for (let j = 0; j < size; j++) {
        newArr[i][j] = arr.shift();
      }
    }
    return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);