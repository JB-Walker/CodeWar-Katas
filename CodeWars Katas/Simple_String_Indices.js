// In this Kata, you will be given a string with brackets and an index of an opening bracket 
// and your task will be to return the index of the matching closing bracket. Return -1 if 
// there is no answer. An opening brace will always have a closing brace. For example:
//
// solve("((1)23(45))(aB)", 0) = 10 -- the opening brace at index 0 matches the closing brace at index 10
// solve("((1)23(45))(aB)", 1) = 3 
// solve("((1)23(45))(aB)", 2) = -1 -- there is no opening bracket at index 2, so return -1
// solve("((1)23(45))(aB)", 6) = 9
// solve("((1)23(45))(aB)", 11) = 14
// solve("((>)|?(*'))(yZ)", 11) = 14
//
// Input will consist of letters, numbers and special characters, but no spaces. 
// The only brackets will be ( and ).

function solve (str, idx) {
    if (str[idx] !== '(' && str[idx] !== ')') {
        return -1;
    }
    let overallCount = 0;
    let idxCount = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            overallCount++;
            console.log(i + ' = ' + overallCount);            
            if (i === idx) {
                idxCount = overallCount;
            }
        } else if (str[i] === ')') {
            overallCount--;
            console.log(i + ' = ' + overallCount);            
            if (overallCount === idxCount) {
                return i;
            }      
        }
    }
    return "error";
}