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

/*
Other Solutins By Developers
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

function getCount(str) {
  var vowelsCount = 0;
  str.split("").forEach(function(x){
    if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
      vowelsCount += 1;
    }
  });  
  return vowelsCount;
}

function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length:0;
}

function getCount(str) {
  var vowelsCount = 0;
  for (index in str){
    switch (str[index]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    vowelsCount++;
    break;
    }   
  }
  return vowelsCount;
}

function getCount(str) {
  let vowels = ['a','e','i','o','u'];
  return str.split('').filter(letter => {
    return vowels.includes(letter)? true : false;
  }).length;
}

const getCount =(str)=> {
  let vowelsCount = 0;
  
  // enter your majic here
  for(letter of str){
  if(letter === 'a'){
    vowelsCount +=1;
  }else if(letter === 'e'){
    vowelsCount +=1;
  }else if(letter === 'i'){
    vowelsCount +=1;
  }else if(letter === 'o'){
    vowelsCount +=1;
  }else if(letter === 'u'){
    vowelsCount +=1;
  }
  }
  
  return vowelsCount;
}
*/