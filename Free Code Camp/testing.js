function uniteUnique(arr) {
  let argsArray = Array.prototype.slice.call(arguments);
  let concatedArrays = [];
  for (let i = 0; i < argsArray.length; i++) {
    concatedArrays = concatedArrays.concat(argsArray[i]);
  }
  for (let i = 0; i < concatedArrays.length - 1; i++) {
    for (let j = i + 1; j < concatedArrays.length; j++) {
      if (concatedArrays[i] === concatedArrays[j]) {
        concatedArrays.splice(j, 1);
        j--;
      }
    }
  }
  return concatedArrays;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


