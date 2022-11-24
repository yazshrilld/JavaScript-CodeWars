/*
    Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    //create a variable and set it to zero 
    let countingLetter = 0;
    //create a array of the vowels
    const vowelAlphabet = ['a','e','i','o','u'];
    //create a loop to loop through the array of the arguement passed inside the function
    for(let checkEachSrting of str) {
        //check if the vaues in the array is part of the 
        if(vowelAlphabet.includes(checkEachSrting)) {
            countingLetter += 1
        }
    }
    return countingLetter;
}


module.exports = getCount