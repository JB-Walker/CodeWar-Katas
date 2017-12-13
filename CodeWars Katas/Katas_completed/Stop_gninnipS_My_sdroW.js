function spinWords(originalString){
    let spunWords = originalString.split(' ').map(word => {
       if (word.length < 5) {
        return word;
      } else {
        return word.split('').reverse().join('');
      }
    });
    return spunWords.join(' ');
  }
  