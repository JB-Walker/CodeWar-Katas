function expandedForm(num) {
  const digitArray = num.toString().split('');
  let expandedString = '';
  if (digitArray[digitArray.length - 1] !== '0') {
    expandedString = digitArray[digitArray.length - 1];
  }
  if (digitArray.length > 1) {
    for (let i = digitArray.length - 2; i > -1; i--) {
      if (digitArray[i] !== '0') {
        if (expandedString) {
          expandedString = digitArray[i] * Math.pow(10, (digitArray.length - i - 1)) + ' + ' + expandedString;
        } else {
          expandedString = digitArray[i] * Math.pow(10, (digitArray.length - i - 1));
        }
      }
    }
  }
  if (expandedString === num) {
    return num.toString();
  }
  return expandedString;
}
