function duplicateCount (text) {
    let characters = {};
    let count = 0;
    let charMod;
    for (let char of text) {
      charMod = "MOD" + char.toLowerCase();
      if (!characters.hasOwnProperty(charMod)) {
        characters[charMod] = 1;
      } else if (characters[charMod] === 1) {
        characters[charMod] = 2;
        count++;
      }
    }
    return count;
  }