function solved(str){
    let newStr = str;
    if (str.length > 1) {
      if (str.length % 2 === 1) {
        newStr = str.substring(0, (str.length - 1) / 2) + 
          str.substring((str.length - 1) / 2 + 1);
        }
      return newStr.split('').sort().join('');
    }
   return '';
  }
  