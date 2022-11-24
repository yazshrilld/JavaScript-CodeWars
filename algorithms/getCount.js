/*
    Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    let countingLetter = 0;
    const vowelAlphabet = ['a','e','i','o','u'];
    for(let checkEachSrting of str) {
        if(vowelAlphabet.includes(checkEachSrting)) {
            countingLetter += 1
        }
    }
    return countingLetter;
}


module.exports = getCount