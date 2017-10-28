// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. 
// "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other 
// and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

function dirReduc(arr){
  const northCount = arr.filter(direction => direction === 'NORTH').length;
  const southCount = arr.filter(direction => direction === 'SOUTH').length;
  const eastCount = arr.filter(direction => direction === 'EAST').length;
  const westCount = arr.filter(direction => direction === 'WEST').length;

  const latitude = Math.abs(eastCount - westCount);
  const longitude = Math.abs(northCount - southCount);
  const reducedArr = [];
  
  if (latitude) {
    for (let i = 0; i < latitude; i++) {
      if (eastCount > westCount) {
        reducedArr.push('EAST');
      } else {
        reducedArr.push('WEST');
      }
    }
  }
    if (longitude) {
    for (let i = 0; i < longitude; i++) {
      if (northCount > southCount) {
        reducedArr.push('NORTH');
      } else {
        reducedArr.push('SOUTH');
      }
    }
  }
  return reducedArr;
}

