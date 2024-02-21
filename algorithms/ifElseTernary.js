// 

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >=5 && n < 10 ? n * 95 : n >=10 ? n * 90 : null
}

module.exports = saleHotdogs

//This is a normal if else
// function oddEven(n) {
//     if(n % 2 == 1) return "odd number";
//     else return "even number";
// }

// //This is the tenary operator
// function oddEven(n) {
//     return n % 2 == 1 ? "odd number" : "even number"
// }

// //This is a compiund if else statement
// function oldAge(y) {
//     if( y < 16 ) return "children"
//     else if( y < 50 ) return "young man"
//     else return "old man" 
// }

// //This is the ternary operator for a compound if else statement
// function oldAge(y) {
//     return y < 16 ? "children" : y < 50 ? "young man" : "old man"
// }