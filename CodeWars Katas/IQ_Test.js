function iqTest (numbers) {
    const numberStrings = numbers.split(" ");
    let zeroOrOne;
    let evenOddCount = [0,0];
    let evenOddFirst = [0,0];
    for (i = 0; i < numberStrings.length; i++) {
      zeroOrOne = numberStrings[i] % 2;
      if (evenOddCount[zeroOrOne] === 0) {
        evenOddFirst[zeroOrOne] = i;
      }
      evenOddCount[zeroOrOne]++;
      if (evenOddCount[0] > 1 && evenOddCount[1] === 1) {
        return evenOddFirst[1] + 1;
      } else if (evenOddCount[1] > 1 && evenOddCount[0] === 1) {
        return evenOddFirst[0] + 1;
      }
    }
  }
  