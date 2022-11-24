/*
    Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    //create a variable and set it to zero 
    let countingLetter = 0;
    //create a array of the vowels
    const vowelAlphabet = ['a','e','i','o','u'];
    //create a loop to loop through the arguement passed in getCount parameter
    for(let checkEachSrting of str) {
        //use the includes method to check if the values of vowelAlphabet is equal to any looped value from checkString  
        if(vowelAlphabet.includes(checkEachSrting)) {
            //if true, it should increase the count by 1
            countingLetter += 1
        }
    }
    return countingLetter;
}


module.exports = getCount