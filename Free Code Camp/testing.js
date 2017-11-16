function rot13(str) {
    let codedStr = '';
    let code;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)) {
        code = str.charCodeAt(i) + 13;
        if (code > 90) {
          code -= 26;
        }
        codedStr += String.fromCharCode(code);
      }
  
    }
    return codedStr;
  }
  rot13("SERR PBQR PNZC");