function smallestCommons(arr) {
  let min = arr[0];
  let max = arr[1]; 
  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0]; 
  }
  let found = false;
  let iterationFailed = false;
  let smallestCommonMultiple = max;
  while (!found) {
    for (let i = min; i <= max; i++) {
      if (smallestCommonMultiple % i !== 0) {
        iterationFailed = true;
        break;
      }
      if (iterationFailed) {
        iterationFailed = false;
        smallestCommonMultiple += max;

      } else {
        found = true;
        return smallestCommonMultiple;
      }
    }
  }
}
smallestCommons([1, 5]);